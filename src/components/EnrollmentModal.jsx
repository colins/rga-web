import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Send, Sparkles, User, Mail, Phone, Calendar, Heart, AlertCircle, Loader2 } from 'lucide-react';
import { classes, gymInfo } from '../data/scheduleData';

export default function EnrollmentModal({ isOpen, onClose, selectedClass, isTrialMode }) {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    childName: '',
    childAge: '',
    classId: selectedClass ? selectedClass.id : classes[0].id,
    preferredDayTime: '',
    notes: '',
    requestTrial: isTrialMode || false
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    if (selectedClass) {
      setFormData((prev) => ({
        ...prev,
        classId: selectedClass.id
      }));
    }
  }, [selectedClass]);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      requestTrial: isTrialMode || false
    }));
  }, [isTrialMode]);

  if (!isOpen) return null;

  const currentClassObj = classes.find((c) => c.id === formData.classId) || classes[0];

  const generateMailtoLink = () => {
    const targetEmail = gymInfo.enrollmentEmail || 'frontdesk+enroll@rgagymnast.com';
    const requestType = formData.requestTrial ? 'Free Trial Request' : 'Class Enrollment Request';
    const subject = encodeURIComponent(`[${requestType}] ${formData.childName} - ${currentClassObj.name}`);
    const body = encodeURIComponent(
`Class: ${currentClassObj.name} (${currentClassObj.ageRange}) - $${currentClassObj.priceMonthly}/mo
Parent / Guardian: ${formData.parentName}
Phone: ${formData.phone}
Email: ${formData.email}
Child's Name: ${formData.childName}
Child's Age: ${formData.childAge}
Preferred Day & Time: ${formData.preferredDayTime || 'Flexible'}
Notes / Questions: ${formData.notes || 'None'}

Please contact me to finalize enrollment!`
    );
    return `mailto:${targetEmail}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    const targetEmail = gymInfo.enrollmentEmail || 'frontdesk+enroll@rgagymnast.com';
    const requestType = formData.requestTrial ? 'Free Trial Request' : 'Class Enrollment Request';
    const subject = `[${requestType}] ${formData.childName} - ${currentClassObj.name}`;

    const payload = {
      _subject: subject,
      _template: 'table',
      _captcha: 'false',
      formType: requestType,
      className: `${currentClassObj.name} (${currentClassObj.ageRange})`,
      classMonthlyTuition: `$${currentClassObj.priceMonthly}/mo`,
      parentName: formData.parentName,
      parentEmail: formData.email,
      parentPhone: formData.phone,
      childName: formData.childName,
      childAge: formData.childAge,
      preferredDayTime: formData.preferredDayTime || 'Flexible / First Available',
      notes: formData.notes || 'None provided',
      submittedAt: new Date().toISOString()
    };

    try {
      // Primary: Post to native SiteGround backend (/enroll.php)
      const primaryEndpoint = '/enroll.php';
      let response;
      try {
        response = await fetch(primaryEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(payload)
        });
      } catch (networkErr) {
        // Fallback for local development if /enroll.php is unreachable on localhost
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
          response = await fetch(`https://rgagymnast.com/enroll.php`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify(payload)
          });
        } else {
          throw networkErr;
        }
      }

      const data = await response.json().catch(() => null);

      if (!response.ok || (data && data.success === false)) {
        throw new Error((data && data.message) || `Submission failed with status: ${response.status}`);
      }

      setSubmitted(true);
    } catch (err) {
      console.error('Error submitting enrollment form:', err);
      setErrorMessage(err.message || 'Unable to submit automatically. Please use the direct email option below.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-gray-100 relative my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          /* Confirmation Message */
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-extrabold text-gray-900">
              {formData.requestTrial ? 'Trial Request Received!' : 'Enrollment Request Received!'}
            </h3>
            <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-gray-900">{formData.parentName}</strong>! Your request has been sent to our front desk team (<strong className="text-pink-600">{gymInfo.enrollmentEmail}</strong>). We will contact you at <strong className="text-gray-900">{formData.phone}</strong> or <strong className="text-gray-900">{formData.email}</strong> within 24 business hours to finalize enrollment for <strong className="text-gray-900">{formData.childName}</strong>.
            </p>
            <div className="pt-4">
              <button
                onClick={onClose}
                className="font-bold text-sm px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-xl shadow-lg transition-all"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          /* Enrollment Form */
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100 text-pink-800 font-bold text-xs uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                {formData.requestTrial ? 'Free Trial Request' : 'Class Enrollment'}
              </div>
              <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">
                {formData.requestTrial ? 'Schedule a Free Trial Class' : 'Enroll Your Child at RGA'}
              </h2>
              <p className="text-xs text-gray-500 mt-1">
                Fill out this quick form and our team will lock in your spot or trial time.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Program Selector */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Select Program / Class
                </label>
                <select
                  value={formData.classId}
                  onChange={(e) => setFormData({ ...formData, classId: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-sm font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500"
                >
                  {classes.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name} ({c.ageRange}) — ${c.priceMonthly}/mo
                    </option>
                  ))}
                </select>
              </div>

              {/* Class Summary Badge */}
              <div className="bg-pink-50 p-3 rounded-xl border border-pink-200 text-xs text-pink-900 flex justify-between items-center">
                <div>
                  <span className="font-bold text-pink-950 block">{currentClassObj.name}</span>
                  <span className="text-[11px] text-pink-700">{currentClassObj.durationMinutes} minutes • {currentClassObj.genderGroup}</span>
                </div>
                <div className="font-extrabold text-sm text-pink-900">
                  ${currentClassObj.priceMonthly}/month
                </div>
              </div>

              {/* Parent Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Parent / Guardian Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 bg-gray-50 border border-gray-300 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="(303) 555-0199"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 bg-gray-50 border border-gray-300 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    placeholder="parent@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 bg-gray-50 border border-gray-300 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>
              </div>

              {/* Child Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Child's Name *
                  </label>
                  <div className="relative">
                    <Heart className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="Emma Doe"
                      value={formData.childName}
                      onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 bg-gray-50 border border-gray-300 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Child's Age / DOB *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 7 years old"
                    value={formData.childAge}
                    onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>
              </div>

              {/* Preferred Day & Time */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Preferred Day & Time Slot
                </label>
                <input
                  type="text"
                  placeholder="e.g. Tuesday 4:30 - 5:30 pm"
                  value={formData.preferredDayTime}
                  onChange={(e) => setFormData({ ...formData, preferredDayTime: e.target.value })}
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              {/* Additional Notes */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Special Notes / Questions (Optional)
                </label>
                <textarea
                  rows="2"
                  placeholder="Any previous experience, questions, or schedule constraints..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              {/* Error Message with Mailto fallback */}
              {errorMessage && (
                <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 space-y-2">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <p className="font-medium leading-relaxed">{errorMessage}</p>
                  </div>
                  <div className="pt-1">
                    <a
                      href={generateMailtoLink()}
                      className="inline-flex items-center gap-1.5 font-bold text-pink-600 hover:text-pink-700 underline"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      Click here to send request via Email directly to {gymInfo.enrollmentEmail}
                    </a>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full font-extrabold text-sm py-3.5 rounded-xl bg-pink-600 hover:bg-pink-700 disabled:bg-pink-400 text-white shadow-lg shadow-pink-500/25 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Submitting Request...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      {formData.requestTrial ? 'Submit Free Trial Request' : 'Submit Enrollment Request'}
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
}
