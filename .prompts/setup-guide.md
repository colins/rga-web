Conversation with Gemini
I want to use AI to build a website. What is the best way to organize the prompts that I provide as I iterate on the layout? Is it necessary to have a history of the prompts so that important information isn't lost? How would I do that?
Organizing prompts systematically prevents "context drift" and ensures the AI doesn't break previously established layout components while making updates. Maintaining a prompt history is strongly recommended—without it, reverting a broken layout or remembering specific styling rules becomes difficult.   

How to Organize Prompts for Layout Iteration
Instead of sending long, unstructured instructions, break your web layout workflow into a System Prompt and Modular Iteration Steps.

1. Establish a Master Context (System Prompt)
Before asking for layout changes, set global boundaries in your initial prompt or system instructions:

Tech Stack: (e.g., HTML/Tailwind CSS, React + CSS Modules, Next.js).

Design System Rules: Colors, typography scale, spacing rules, and responsive breakpoints (Mobile < 640px, Tablet < 1024px, Desktop >= 1024px).

Component Constraints: Direct the AI to edit code modularly without removing existing boilerplate unless instructed.

2. Follow the "One Component, One Intent" Rule
Iterate on distinct structural blocks rather than asking for full-page redesigns at once:

Step 1 (Structure): "Build a desktop hero section with a two-column grid: left side headline + CTA, right side image container."

Step 2 (Styling): "Apply Tailwind flex properties to center the CTA vertically and add 24px padding."

Step 3 (Responsiveness): "Stack the grid into a single column on screen sizes below 768px."

3. Use Delta-Based Prompting
When giving feedback, format prompts explicitly using Current vs. Desired State:

Context: Navigation Bar layout

Current Issue: Logo overlaps mobile menu toggle.

Desired Change: Flex spacing to justify-between and add items-center alignment on mobile screens.

Why Prompt History is Necessary
Regression Prevention: LLMs tend to forget earlier constraints (e.g., removing a mobile drawer menu when adjusting header padding).

Rollback Capability: If an iteration produces bad layout CSS or broken grid math, you can restore the precise prompt that worked.   

Audit Trail: Helps identify which explicit instruction caused a styling bug.

Practical Ways to Track & Version Your Prompts
Option A: Git Repository (Best for Code + Prompts)
Store prompts directly inside your project folder alongside your source code:   

Create a .prompts/ directory in your web project.

Use a markdown file per page (e.g., homepage-layout-prompts.md).

Commit changes using standard Git workflows (git commit -m "Prompt v1.2: Added hero section responsiveness").

Option B: Centralized Document System (Best for Rapid Visual Testing)
Maintain a simple Markdown or Notion table to track prompt iterations:

Version	Target Section	Prompt Content	Output Result	Status
v1.0	Header	"Create fixed navbar with logo left, links right"	Good structural flex layout	Passed
v1.1	Hero	"Add two-column grid with full-height background video"	Video overflowing container	Reverted
v1.2	Hero	"Fix hero video overflow using relative position and object-cover"	Correct layout fit	Passed
Option C: Dedicated Prompt Management Platforms
If using API-based tools or IDE agent extensions, platform tools manage versioning automatically:

Agenta or PromptLayer: Track prompt histories, run evaluations, and compare outputs side-by-side.   

Cursor CLI / IDE Agents: Automatically log prompt history per session file in .cursorrules or session logs.

I want to use option A. I create multiple markdown files. How do I prompt AI to read the files and not repeat actions?
To have an AI assistant read your markdown prompt history and avoid duplicating work, establish a clear directory structure and use a Context Bootstrapping Prompt at the start of each session.

Structure Your Prompt Directory
Organize your .prompts/ folder logically so the AI can easily parse past actions and present state:

.prompts/

00_SYSTEM_CONTEXT.md (Global layout rules, tech stack, breakpoints)

01_COMPLETED_STEPS.md (Log of past iterations and final decisions)

02_CURRENT_STATE.md (Current site layout architecture and component tree)

Use a Session Bootstrapping Prompt
When opening a new AI session or agent task, paste a directive that forces the AI to check historical files before generating any code:

System Instruction:

"Before generating or modifying any layout code, read .prompts/00_SYSTEM_CONTEXT.md and .prompts/01_COMPLETED_STEPS.md.

Rules:

Do NOT re-implement or modify layout structures listed as finished in 01_COMPLETED_STEPS.md unless explicitly instructed.

Refer to 02_CURRENT_STATE.md to understand existing component placement.

State which past step you are building upon before outputting code."

Key Techniques to Prevent Action Repetition
Maintain a "Do Not Change" Log: Inside 01_COMPLETED_STEPS.md, keep a explicit list of locked features:

Markdown
## Locked Components (Do Not Edit)
- [x] Fixed Header with Mobile Drawer (`/components/Header.tsx`)
- [x] Responsive Hero Section Grid (`/components/Hero.tsx`)
Use Delta Requests: Ask for targeted diffs or updates rather than full file rewrites:

"Based on .prompts/02_CURRENT_STATE.md, only generate the CSS/code needed to add a testimonial section directly below the Hero block. Do not rewrite or alter existing Header or Hero code."

Automate Logging with IDE Agents: If using agents like Cursor, ask the AI to update the log file at the end of a successful prompt:

"Now update .prompts/01_COMPLETED_STEPS.md with a summary of the changes we just made so future sessions won't repeat them."


