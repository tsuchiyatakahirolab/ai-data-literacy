<a href="https://tsuchiyatakahiro.com"><img src="assets/branding/personal-author-logo.png" width="180" alt="TSUCHIYA TAKAHIRO"></a>

# AI and Data Literacy for University Students

Independent readers can start with the [self-study guide](en/docs/self_study.md). No university account or course-form submission is required.

[日本語 README](README.md)

This open course provides **14 hands-on classes plus a final project** for university students with little or no prior experience using generative AI, GitHub, or data analysis. It moves beyond the idea of AI as a chat box for answering questions. Students use AI to read documents, research the web, interpret images, check numbers and charts, analyze a small CSV dataset, create artifacts, and manage multi-step tasks.

The course also teaches a second habit: **AI output is not the final authority**. Students check sources and data, revise what AI produces, and keep a short record of what they delegated to AI and what they verified themselves.

The stable curriculum is separated from product-specific instructions. Core lessons should remain useful as models and interfaces change, while current service information lives in `tool-guides/` and `current/`.

## Learning outcomes

By the end of the course, students should be able to:

- define a task and give AI the information it needs;
- work with text, images, PDFs, tables, and simple CSV data;
- use AI-assisted web research while opening and checking original sources;
- verify basic numerical, chart, and data-analysis results;
- explain what they delegated to AI and what they checked or revised themselves; and
- use GitHub to keep artifacts and change history and to identify the exact version submitted.

There is **no memorization-based exam**. Assessment is based on weekly exercises, work records, and the final project.

## Who this course is for

The course is designed for students who have never used generative AI, as well as students whose experience is limited to asking ChatGPT or Gemini simple questions or copying AI-generated answers into assignments. No Python or Git knowledge is required. GitHub is used, but command-line Git is not required.

Instructors may recommend an institution-provided AI service while allowing students to use other services that can complete the same task. Paid subscriptions are not a course requirement.

## Course outline

| Week | Topic | Main outcome |
|---|---|---|
| 01 | [Mapping the AI landscape](en/core/week01.md) | Recognize AI capabilities beyond chat and identify where human checking is needed. |
| 02 | [Giving AI a clear task](en/core/week02.md) | Turn an ambiguous request into a task AI can act on. |
| 03 | [Keeping a learning record with GitHub](en/core/week03.md) | Use GitHub to record work and submit a specific version. |
| 04 | [Reading images, PDFs, and tables with AI](en/core/week04.md) | Check what an AI explanation is and is not supported by a source document. |
| 05 | [Summarizing, translating, and rewriting](en/core/week05.md) | Transform text while preserving meaning and important conditions. |
| 06 | [Creating a useful artifact with AI](en/core/week06.md) | Revise AI-generated material into a usable artifact. |
| 07 | [Researching with AI and checking sources](en/core/week07.md) | Open cited sources and verify claims rather than trusting the AI summary. |
| 08 | [Finding errors and bias in AI output](en/core/week08.md) | Identify errors, weak evidence, overgeneralization, and excessive certainty. |
| 09 | [Working with numbers](en/core/week09.md) | Check denominators, units, and the meaning of basic calculations. |
| 10 | [Reading charts critically](en/core/week10.md) | Inspect axes, scale, units, and aggregation before interpreting a chart. |
| 11 | [First steps in AI-assisted data analysis](en/core/week11.md) | Inspect, summarize, visualize, and interpret a small CSV dataset with AI assistance. |
| 12 | [Using AI as a study partner](en/core/week12.md) | Use AI for explanation, quizzes, and error analysis rather than answer copying. |
| 13 | [Delegating a multi-step task to AI](en/core/week13.md) | Manage a multi-step AI-assisted task with explicit human checkpoints. |
| 14 | [Preparing the final project](en/core/week14.md) | Plan a final project with a question, materials, verification steps, and GitHub submission. |

Final project: [Complete an evidence-based artifact with AI assistance](en/core/final_project.md)

## Student workflow

1. Set up GitHub using `docs/github_onboarding_student.md` or the English guide in `en/docs/`.
2. Create a private repository from the instructor's template repository.
3. Complete each weekly exercise in `core/weekXX.md` or `en/core/weekXX.md`.
4. Save artifacts and a short AI-use record in the student repository.
5. Commit the work and submit the commit URL through the instructor's submission form.

The course does not normally require students to submit full chat histories or AI conversation share links. Sharing options differ across services, plans, and institutional accounts. Students instead record what they delegated to AI, what they checked or revised, and what problems remained.

## For instructors

- `docs/instructor_runbook.md`: course operation notes.
- `docs/assessment_rubric.md`: assessment criteria.
- `docs/ai_use_policy.md`: AI-use policy.
- `docs/privacy_and_publication.md`: privacy and publication notes.
- `docs/submission_workflow.md`: commit-URL-based submission model.
- `student-template/`: template repository for student submissions.
- `slides/`: Japanese PowerPoint decks for the course.

Google Forms and the Master Dashboard should be managed as a separate institutional operations package. The public repository should not include student records, internal form URLs, or dashboard links.

## Repository structure

```text
core/             Japanese lessons and final project
en/core/          English lessons and final project
assets/           Synthetic sample materials, CSV files, images, and templates
docs/             Policies, rubrics, onboarding, and instructor guidance
tool-guides/      Tool-specific notes that can be updated each year
current/          Current-year notes on AI services and student benefits
student-template/ Template repository for student submissions
slides/           Japanese PowerPoint decks
```

## License and citation

Course text, slides, and sample materials are released under the Creative Commons Attribution 4.0 International License. Sample code and configuration files are released under the MIT License. See `LICENSE.md`, `LICENSE-CODE.md`, and `CITATION.cff`.

## Maintainer

Takahiro Tsuchiya  
Version: 1.3  
Last updated: 2026-10-06

## Slides and hands-on sheets in version 1.1

The package contains 14 Japanese weekly PowerPoint decks, a setup deck, and a final-project deck. Text is set to Meiryo, with editable diagrams and tables. The slides include copyable prompts, concrete actions, checks, and submission steps. Japanese handouts mirror the slide order. English course notes and onboarding guides remain available; this release does not include English PowerPoint decks.

See [the slide index](slides/README.md). Instructors should run basic GitHub setup in the opening session, before the first weekly submission. Week 3 then develops editing, change review, and commit-based submission. The default workflow uses the browser; GitHub Desktop is optional. No paid AI plan or public student repository is required.

The learning goals do not depend on a particular model. Product-specific operation names were checked on 17 September 2026 and should be reviewed before each term. The editable interface diagrams are schematic, not screenshots. Lucide icons retain their original ISC/MIT license notices.

## Initial setup and late joining

Use the [student template](https://github.com/tsuchiyatakahirolab/ai-data-literacy-student-template) to create your own Private ai-learning repository. Follow the [browser setup guide](en/docs/github_onboarding_student.md), upload one image and a short record to setup, invite the instructor, then send the repository URL through the existing university registration form. Late joiners use the same guide and form. Weekly submissions use the final commit URL for that assignment. Do not put your student ID or university email in your username or public profile. Self-study readers do not need university forms.

The current Japanese setup deck is [v1.4 (37 pages)](slides/00_Course_Setup_v1.4.pdf), with a [step-by-step companion in Japanese](docs/setup_handson_step_by_step.md).
