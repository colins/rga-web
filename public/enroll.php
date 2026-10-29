<?php
/**
 * Resilience Gymnastics Academy - Class Enrollment & Inquiry Handler
 * Submits enrollment requests directly to frontdesk+enroll@rgagymnast.com
 */

// Allow cross-origin requests from development environments (e.g. localhost)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Accept");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method not allowed. POST required."]);
    exit;
}

// Parse JSON input or fallback to $_POST
$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);
if (!is_array($data)) {
    $data = $_POST;
}

// Honeypot spam check (if filled, silently succeed without sending)
if (!empty($data['_gotcha']) || !empty($data['honeypot'])) {
    echo json_encode(["success" => true, "message" => "Request processed."]);
    exit;
}

// Extract fields
$formType        = htmlspecialchars($data['formType'] ?? 'Class Enrollment Request');
$className       = htmlspecialchars($data['className'] ?? 'N/A');
$classTuition    = htmlspecialchars($data['classMonthlyTuition'] ?? '');
$parentName      = htmlspecialchars(trim($data['parentName'] ?? ''));
$parentEmail     = filter_var(trim($data['parentEmail'] ?? ''), FILTER_SANITIZE_EMAIL);
$parentPhone     = htmlspecialchars(trim($data['parentPhone'] ?? ''));
$childName       = htmlspecialchars(trim($data['childName'] ?? $data['athleteName'] ?? ''));
$childAge        = htmlspecialchars(trim($data['childAge'] ?? $data['athleteAge'] ?? ''));
$preferredTime   = htmlspecialchars(trim($data['preferredDayTime'] ?? 'Flexible / First Available'));
$experience      = htmlspecialchars(trim($data['currentExperience'] ?? ''));
$programInterest = htmlspecialchars(trim($data['programInterest'] ?? ''));
$notes           = htmlspecialchars(trim($data['notes'] ?? ''));
$submittedAt     = date('F j, Y, g:i a T');

// Validate mandatory fields
if (empty($parentName) || empty($parentEmail) || empty($parentPhone) || empty($childName)) {
    http_response_code(400);
    echo json_encode([
        "success" => false, 
        "message" => "Please fill in all required fields (Parent Name, Email, Phone, and Child Name)."
    ]);
    exit;
}

if (!filter_var($parentEmail, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode([
        "success" => false, 
        "message" => "Please provide a valid email address."
    ]);
    exit;
}

// Destination email
$to = "frontdesk+enroll@rgagymnast.com";

// Email Subject
$subject = "[{$formType}] {$childName} - " . ($className !== 'N/A' ? $className : 'Gymnastics Inquiry');

// Construct HTML Email Body
$htmlBody = <<<HTML
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 20px; color: #1e293b; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); border: 1px solid #e2e8f0; }
    .header { background: linear-gradient(135deg, #e11d48, #db2777); padding: 24px; color: #ffffff; }
    .header h1 { margin: 0 0 6px; font-size: 22px; font-weight: 800; }
    .header p { margin: 0; font-size: 13px; opacity: 0.9; }
    .content { padding: 24px; }
    table { width: 100%; border-collapse: collapse; margin-top: 12px; }
    th, td { padding: 12px 14px; text-align: left; font-size: 14px; border-bottom: 1px solid #f1f5f9; }
    th { width: 38%; color: #64748b; font-weight: 600; text-transform: uppercase; font-size: 11px; letter-spacing: 0.5px; background: #f8fafc; }
    td { color: #0f172a; font-weight: 500; }
    .notes-box { background: #fdf2f8; border-left: 4px solid #db2777; padding: 14px; margin-top: 18px; border-radius: 6px; font-size: 13px; color: #831843; }
    .footer { background: #f8fafc; padding: 16px 24px; font-size: 12px; color: #64748b; text-align: center; border-top: 1px solid #e2e8f0; }
    .badge { display: inline-block; padding: 4px 10px; border-radius: 9999px; background: #fce7f3; color: #be185d; font-weight: 700; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>{$formType}</h1>
      <p>Submitted via Resilience Gymnastics Academy Website</p>
    </div>
    <div class="content">
      <div style="margin-bottom: 16px;">
        <span class="badge">{$childName}</span>
      </div>
      <table>
        <tr><th>Program / Class</th><td><strong>{$className}</strong></td></tr>
HTML;

if (!empty($classTuition)) {
    $htmlBody .= "<tr><th>Monthly Tuition</th><td>{$classTuition}</td></tr>";
}

$htmlBody .= <<<HTML
        <tr><th>Child / Athlete</th><td>{$childName} (Age: {$childAge})</td></tr>
        <tr><th>Parent / Guardian</th><td>{$parentName}</td></tr>
        <tr><th>Parent Email</th><td><a href="mailto:{$parentEmail}" style="color: #db2777; text-decoration: none; font-weight: 600;">{$parentEmail}</a></td></tr>
        <tr><th>Parent Phone</th><td><a href="tel:{$parentPhone}" style="color: #db2777; text-decoration: none; font-weight: 600;">{$parentPhone}</a></td></tr>
HTML;

if (!empty($preferredTime)) {
    $htmlBody .= "<tr><th>Preferred Time Slot</th><td>{$preferredTime}</td></tr>";
}

if (!empty($experience)) {
    $htmlBody .= "<tr><th>Current Experience</th><td>{$experience}</td></tr>";
}

if (!empty($programInterest)) {
    $htmlBody .= "<tr><th>Program Interest</th><td>{$programInterest}</td></tr>";
}

$htmlBody .= <<<HTML
        <tr><th>Submitted At</th><td>{$submittedAt}</td></tr>
      </table>
HTML;

if (!empty($notes)) {
    $htmlBody .= <<<HTML
      <div class="notes-box">
        <strong>Parent Notes / Questions:</strong><br>
        {$notes}
      </div>
HTML;
}

$htmlBody .= <<<HTML
    </div>
    <div class="footer">
      Resilience Gymnastics Academy &bull; 6180 E Warren Ave, Denver, CO 80222 &bull; 303-512-0799
    </div>
  </div>
</body>
</html>
HTML;

// Headers
$headers = [];
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-Type: text/html; charset=UTF-8';
$headers[] = 'From: Resilience Gymnastics Website <frontdesk@rgagymnast.com>';
$headers[] = 'Reply-To: ' . sprintf('"%s" <%s>', addcslashes($parentName, '"'), $parentEmail);
$headers[] = 'X-Mailer: PHP/' . phpversion();

$mailSent = @mail($to, $subject, $htmlBody, implode("\r\n", $headers));

if ($mailSent) {
    echo json_encode([
        "success" => true,
        "message" => "Enrollment request submitted successfully to {$to}."
    ]);
} else {
    // If mail fails, report error so frontend shows mailto fallback
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "message" => "Email server could not dispatch request. Please contact the front desk directly."
    ]);
}
