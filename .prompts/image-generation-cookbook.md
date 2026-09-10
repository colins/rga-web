# Resilience Gymnastics Academy — AI Image Generation Cookbook

This cookbook provides the exact prompt engineering formula, camera configurations, and copy-paste prompts to generate hyper-realistic, brand-consistent original imagery for Resilience Gymnastics Academy using **Midjourney v6.1** or **Flux.1 [Dev / Pro]**.

---

## 1. Gymnastics Prompt Engineering Architecture

Gymnastics photography presents unique AI rendering challenges: high-velocity motion, strict anatomic body lines (pointed toes, straight knees, locked elbows), apparatus geometry (suede beam, round wooden bar rails), and chalk dust particles.

To ensure realistic, non-plastic, non-distorted results, every prompt follows this 4-layer structure:

| Layer | Purpose | Key Keywords & Style Directives |
| :--- | :--- | :--- |
| **1. Athlete & Demographic** | Age, expression, body control, team colors | `[age]-year-old gymnast`, `focused determination`, `joyful celebration`, `wearing modern magenta (#E6007E) and navy athletic leotard`, `authentic skin texture` |
| **2. Technical Action & Form** | Precise gymnastics movement | `pointed toes`, `straight knee extension`, `chalk-dusted hands`, `clean split jump`, `hollow-body shape`, `firm bar grip` |
| **3. Training Environment** | Gym apparatus & safety mats | `modern USA Gymnastics training center`, `suede balance beam`, `royal blue and magenta landing mats`, `chalk powder floating in soft gym light`, `spring floor border` |
| **4. Photographic Rig** | Camera, lens, exposure, lighting | `shot on Sony A7 IV, 50mm f/1.8 (or 85mm f/1.8)`, `1/1000s shutter speed`, `shallow depth of field`, `action sports photography`, `natural indoor arena lighting`, `crisp sharp focus`, `raw photo` |

---

## 2. Platform Generation Settings

### Midjourney v6.1 Settings
Always append these flags to every Midjourney prompt:
```text
--ar [16:9 | 4:3 | 1:1] --style raw --v 6.1 --c 5
```
- `--style raw`: Prevents over-stylization, airbrushed skin, and fantasy lighting; forces authentic camera-sensor realism.
- `--v 6.1`: Offers the highest anatomical accuracy for fingers, toes, and apparatus lines.
- `--c 5`: Low chaos ensures strict prompt adherence.

### Flux.1 [Dev / Pro] Settings
When running on Fal.ai, Replicate, Fooocus, or Poe:
- **Steps**: 28–35 steps
- **Guidance Scale (CFG)**: 3.5 – 4.5
- **Sampler**: Euler
- Include negative prompt if using SDXL/Pony/Fooocus: `extra fingers, distorted hands, fused limbs, plastic skin, 3d render, cartoon, oversaturated, deformed apparatus, bent balance beam, watermark, text`.

---

## 3. Ready-to-Run Prompt Catalog by Site Placement

### Category 1: Hero & Banners

#### 1. Homepage Hero Banner (`public/images/hero-gymnast.webp`)
- **Placement**: Main homepage hero card ([src/components/Hero.jsx](src/components/Hero.jsx), [src/pages/HomePage.jsx](src/pages/HomePage.jsx))
- **Aspect Ratio**: `--ar 16:9`
- **Midjourney Prompt**:
  ```text
  Action sports photography of a 10-year-old girl gymnast executing a graceful leap on a regulation suede balance beam, pointed toes, perfect form, wearing a modern magenta and navy athletic leotard, chalk dust in the air, modern well-lit gymnastics training academy, spring floor mats below, shallow depth of field, shot on Sony A7 IV 85mm f/1.8, high shutter speed, warm natural gym lighting, crisp detail, realistic skin texture, candid athletic moment --ar 16:9 --style raw --v 6.1
  ```
- **Flux.1 Prompt**:
  ```text
  High-action sports photograph of a 10-year-old female gymnast performing an athletic leap on a suede balance beam in a modern gymnastics academy. She wears a magenta and navy leotard. Fine chalk dust particles in the air, soft gym lighting, 85mm f/1.8 lens, shallow depth of field, sharp athletic focus, realistic skin textures.
  ```

---

### Category 2: Core Values (Homepage & About Page)

#### 2. Confidence, Character & Community (`public/images/value-confidence.webp`)
- **Placement**: Core Values card 1 in [src/data/scheduleData.js](src/data/scheduleData.js) and [src/pages/AboutPage.jsx](src/pages/AboutPage.jsx)
- **Aspect Ratio**: `--ar 4:3`
- **Midjourney Prompt**:
  ```text
  Candid documentary photograph of a supportive female gymnastics coach kneeling to give an encouraging high-five to a smiling 7-year-old girl gymnast in a magenta leotard, colorful padded gym mats in background, authentic uplifting sports coaching moment, warm natural gym lighting, 50mm f/1.8 lens, shallow depth of field, sharp focus, realistic skin and emotion --ar 4:3 --style raw --v 6.1
  ```

#### 3. Effort Over Perfection (`public/images/value-effort.webp`)
- **Placement**: Core Values card 2 in [src/data/scheduleData.js](src/data/scheduleData.js)
- **Aspect Ratio**: `--ar 4:3`
- **Midjourney Prompt**:
  ```text
  Close-up candid sports photograph of a young gymnast's chalk-dusted hands gripping an uneven bar rail, white magnesium chalk powder visible in the air, focused determination, gym equipment background in soft bokeh, natural lighting, 85mm f/2.0 macro lens, sharp texture, authentic youth athletics --ar 4:3 --style raw --v 6.1
  ```

#### 4. Courage Over Fear (`public/images/value-courage.webp`)
- **Placement**: Core Values card 3 in [src/data/scheduleData.js](src/data/scheduleData.js)
- **Aspect Ratio**: `--ar 4:3`
- **Midjourney Prompt**:
  ```text
  Inspiring action photograph of a 6-year-old gymnast balancing bravely on a low padded balance beam with arms outstretched, concentrated smile, soft blue safety mats beneath, modern bright training gym interior, 35mm f/2.0 lens, bright clean lighting, sharp focus, genuine emotion --ar 4:3 --style raw --v 6.1
  ```

#### 5. Growth Over Comparison (`public/images/value-growth.webp`)
- **Placement**: Core Values card 4 in [src/data/scheduleData.js](src/data/scheduleData.js)
- **Aspect Ratio**: `--ar 4:3`
- **Midjourney Prompt**:
  ```text
  Candid group photograph of three diverse young gymnasts (ages 7 to 9) sitting together in a straddle stretch on a royal blue gym mat, laughing and encouraging each other, wearing athletic training clothes with magenta accents, warm community atmosphere, natural gym illumination, 35mm lens, sharp focus, authentic friendship --ar 4:3 --style raw --v 6.1
  ```

---

### Category 3: Class Programs (Classes Page & Homepage)

#### 6. Parent & Tot Gymnastics (18 Mo – 3 Years) (`public/images/class-parent-tot.webp`)
- **Placement**: `parent-tot` class card in [src/data/scheduleData.js](src/data/scheduleData.js)
- **Aspect Ratio**: `--ar 4:3`
- **Midjourney Prompt**:
  ```text
  Heartwarming candid photograph of a smiling mother guiding her 2-year-old toddler walking carefully across soft rainbow foam stepping blocks at an indoor gymnastics gym, soft foam pit nearby, bright cheerful gym environment, safe padded floor, 50mm f/1.8 lens, clean natural lighting, authentic parenting moment --ar 4:3 --style raw --v 6.1
  ```

#### 7. Preschool Gymnastics (Ages 3 – 5) (`public/images/class-preschool.webp`)
- **Placement**: `preschool` class card in [src/data/scheduleData.js](src/data/scheduleData.js)
- **Aspect Ratio**: `--ar 4:3`
- **Midjourney Prompt**:
  ```text
  Joyful action photograph of a 4-year-old preschool boy and girl navigating a mini gymnastics obstacle course, climbing over a soft blue foam wedge and smiling, bright colorful modern gym facility, energetic candid motion, 35mm f/2.8 lens, sharp focus, natural daylight --ar 4:3 --style raw --v 6.1
  ```

#### 8. GymNinjas Agility & Parkour (Ages 5 & Up) (`public/images/class-gymninjas.webp`)
- **Placement**: `gymninjas` class card in [src/data/scheduleData.js](src/data/scheduleData.js)
- **Aspect Ratio**: `--ar 4:3`
- **Midjourney Prompt**:
  ```text
  Dynamic sports action photograph of an 8-year-old boy in black athletic shirt and shorts vaulting over a red padded block onto a safety crash mat in an indoor ninja obstacle gym, athletic agility, suspended in motion, ninja pegboard and cargo net in soft background, 50mm f/1.8 lens, 1/1000s shutter speed, dramatic gym lighting --ar 4:3 --style raw --v 6.1
  ```

#### 9. Beginner Girls Gymnastics (`public/images/class-girls-rec.webp`)
- **Placement**: `girls-beginner` class card in [src/data/scheduleData.js](src/data/scheduleData.js)
- **Aspect Ratio**: `--ar 4:3`
- **Midjourney Prompt**:
  ```text
  Action sports photograph of a 7-year-old girl gymnast executing a clean cartwheel on a blue and magenta spring floor line, pointed toes, focused and happy, modern gymnastics gym with beam and bars visible in background, 50mm f/2.0 lens, sharp focus on athlete, natural gym lighting --ar 4:3 --style raw --v 6.1
  ```

#### 10. Intermediate Girls Gymnastics (`public/images/class-girls-intermediate.webp`)
- **Placement**: `girls-intermediate` class card in [src/data/scheduleData.js](src/data/scheduleData.js)
- **Aspect Ratio**: `--ar 4:3`
- **Midjourney Prompt**:
  ```text
  Sports action photograph of an 8-year-old girl gymnast practicing a handstand on a low balance beam, straight body alignment, toes pointed, chalked hands, coach watching closely in background, modern gym, 50mm f/1.8 lens, sharp focus, bright natural light --ar 4:3 --style raw --v 6.1
  ```

#### 11. Advanced Girls Gymnastics (`public/images/class-girls-advanced.webp`)
- **Placement**: `girls-advanced` class card in [src/data/scheduleData.js](src/data/scheduleData.js)
- **Aspect Ratio**: `--ar 4:3`
- **Midjourney Prompt**:
  ```text
  Athletic sports photograph of a 10-year-old female gymnast performing a back handspring progression on a tumble track into a soft foam pit, dynamic body form, wearing a sleek navy and magenta leotard, chalk dust particles, action freeze 1/1250s, 85mm f/1.8 lens, sharp athletic detail --ar 4:3 --style raw --v 6.1
  ```

#### 12. Beginner Boys Gymnastics (`public/images/class-boys-beginner.webp`)
- **Placement**: `boys-beginner` class card in [src/data/scheduleData.js](src/data/scheduleData.js)
- **Aspect Ratio**: `--ar 4:3`
- **Midjourney Prompt**:
  ```text
  Action sports photograph of a 6-year-old boy hanging from low wooden gymnastics still rings, smiling proudly, wearing athletic shorts and t-shirt, coach supporting nearby, blue foam mats below, bright cheerful gym, 50mm f/1.8 lens, natural lighting --ar 4:3 --style raw --v 6.1
  ```

#### 13. Intermediate Boys Gymnastics (`public/images/class-boys-intermediate.webp`)
- **Placement**: `boys-intermediate` class card in [src/data/scheduleData.js](src/data/scheduleData.js)
- **Aspect Ratio**: `--ar 4:3`
- **Midjourney Prompt**:
  ```text
  Sports action photograph of an 8-year-old boy gymnast holding a strong L-sit support on low parallel bars, good upper body posture, wearing athletic grey gymnastics singlet and shorts, chalk on hands, modern gym background, 50mm f/1.8 lens, sharp focus, bright natural lighting --ar 4:3 --style raw --v 6.1
  ```

#### 14. Advanced Boys Gymnastics (`public/images/class-boys-advanced.webp`)
- **Placement**: `boys-advanced` class card in [src/data/scheduleData.js](src/data/scheduleData.js)
- **Aspect Ratio**: `--ar 4:3`
- **Midjourney Prompt**:
  ```text
  High-energy sports photograph of an 11-year-old boy gymnast mid-air performing a springboard vault onto a blue landing mat, arms extended, dynamic powerful form, chalk dust, gymnastics training center, 85mm f/1.8 lens, 1/1200s shutter speed, crisp focus --ar 4:3 --style raw --v 6.1
  ```

---

### Category 4: Events & Special Offerings

#### 15. Parents' Night Out (`public/images/event-pno.webp`)
- **Placement**: PNO card and highlights on [src/pages/EventsPage.jsx](src/pages/EventsPage.jsx)
- **Aspect Ratio**: `--ar 4:3`
- **Midjourney Prompt**:
  ```text
  Candid documentary photograph of a happy group of kids (ages 5-10) sitting together in a circle on gym mats sharing pizza slices during a gymnastics gym evening party, cheerful smiles, open gym obstacles and party lights in background, warm festive atmosphere, 35mm lens, natural indoor lighting --ar 4:3 --style raw --v 6.1
  ```

#### 16. Gymnastics Birthday Parties (`public/images/event-birthday.webp`)
- **Placement**: Birthday Parties header & packages on [src/pages/BirthdayPartiesPage.jsx](src/pages/BirthdayPartiesPage.jsx)
- **Aspect Ratio**: `--ar 4:3`
- **Midjourney Prompt**:
  ```text
  High-energy candid photograph of a 7-year-old birthday girl leaping mid-air into a giant soft foam cube pit with friends cheering from the edge, pure joy and laughter, colorful gymnastics gym facility, balloons in background, action freeze 1/1000s, 35mm f/2.0 lens, bright vivid colors, sharp focus --ar 4:3 --style raw --v 6.1
  ```

---

### Category 5: USAG Competitive & Pre-Team Programs

#### 17. Mighty Minis Pre-Team (`public/images/team-mighty-minis.webp`)
- **Placement**: Mighty Minis section in [src/pages/TeamPage.jsx](src/pages/TeamPage.jsx)
- **Aspect Ratio**: `--ar 4:3`
- **Midjourney Prompt**:
  ```text
  Candid photograph of two 5-year-old pre-team gymnasts practicing a hollow-body hold and chin-up pull on a low bar with a caring female coach spotting, dedication and focus, wearing matching magenta training leotards, crisp gym lighting, 50mm f/1.8 lens, sharp focus --ar 4:3 --style raw --v 6.1
  ```

#### 18. USA Gymnastics Xcel Team (`public/images/team-xcel.webp`)
- **Placement**: Xcel program section in [src/pages/TeamPage.jsx](src/pages/TeamPage.jsx)
- **Aspect Ratio**: `--ar 4:3`
- **Midjourney Prompt**:
  ```text
  Empowering team sports portrait of four young gymnasts (ages 8 to 12) standing together arm-in-arm on a gymnastics spring floor, wearing custom magenta and navy competition leotards with subtle rhinestone details, confident proud smiles, spring floor and banners in background, 50mm f/2.8 lens, professional team sports photography --ar 4:3 --style raw --v 6.1
  ```

#### 19. USA Gymnastics Developmental Program (DP) (`public/images/team-dp.webp`)
- **Placement**: DP Compulsory & Optional section in [src/pages/TeamPage.jsx](src/pages/TeamPage.jsx)
- **Aspect Ratio**: `--ar 4:3`
- **Midjourney Prompt**:
  ```text
  High-performance sports photography of an elite 12-year-old female gymnast performing a high split jump on a balance beam, complete mid-air extension, pointed toes, chalk powder on feet, intense focus, dramatic arena gym lighting with soft backlight, 85mm f/1.8 lens, 1/1600s shutter speed, tack sharp detail, USAG competition standard --ar 4:3 --style raw --v 6.1
  ```

---

## 4. Inspection & Quality Checklist
Before saving generated images into the project, check for these 4 common AI gymnastics pitfalls:
1. **Anatomical Correctness**: Confirm exactly 5 fingers per hand and 5 toes per foot.
2. **Apparatus Geometry**: Ensure balance beams are straight and horizontal, not bowed or curved.
3. **Foot and Knee Extension**: Confirm feet are arched/pointed and knees are straight during leaps/tumbling.
4. **Apparel Consistency**: Confirm gymnastics leotard or athletic attire matches RGA palette (magenta `#E6007E`, navy, or charcoal).
