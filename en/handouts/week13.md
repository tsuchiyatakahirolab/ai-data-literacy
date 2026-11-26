# Check an AI-assisted plan against its requirements

Read this sheet alongside the [English slides](../slides/Week13_Plan_and_Check_EN.pptx). Work in your own private repository. The instructor supplies course-specific accounts, submission links, and deadlines.

[Lesson and requirements](../core/week13.md)

## Practice files

- [multi_step_planning_case.md](../assets/week13/multi_step_planning_case.md)
- [offline_itinerary_data.md](../assets/week13/offline_itinerary_data.md)

## Follow the slides

### 2. Draft an itinerary for the exercise

Ask AI to suggest steps and draft an itinerary. Decide which requirements you will check as you go. Stop when the itinerary is ready. Leave bookings, purchases and trip messages out of the exercise.

### 3. Plan in stages and check as you go

Plan

List the needed information  
and order the steps.

Supply material

Give AI the conditions  
and permitted sources.

Check along the way

Check each requirement and adjust the plan as needed.

### 4. Plan a half-day outing for five students

Leave Kyoto Station at 13:00; finish by 17:30.  
Travel on foot and by public transport.  
Transport budget: JPY 1,500 per person.  
Include a quiet place and a break.  
  
Use the supplied fictional facility information.

Travel times, fares and facilities are fictional teaching data. They are not a real travel guide.

### 5. 1. Ask AI to suggest an approach

Copy this prompt, then add the specified source material:

```text
I want a half-day itinerary under these conditions.
First, list the information needed
and the order in which to check it.
Before completing the itinerary, ask about unclear conditions.
```

Supply both the conditions and offline_itinerary_data.md.

### 6. Requirements from the practice materials

| Place | Available times | Stay requirement |
| --- | --- | --- |
| Museum A | 13:00〜17:00 | Quiet place / at least 45 min |
| Park B | 13:00〜18:00 | At least 30 min |
| Rest area C | 14:00〜17:00 | Break / at least 30 min |

Use the source table for each journey's travel time and fare.

### 7. 2. Plan an itinerary from the sources

Copy this prompt, then add the specified source material:

```text
Use only the supplied fictional facilities and travel table.
Show departures, arrivals, stays, travel times and fares.
Include waiting time and check
that we return by 17:30.
```

Keep invented shortcuts, fares and opening hours out of the plan.

### 8. Check the time and cost in the example

13:00

Leave Kyoto Station

13:30–14:15

Museum A: 45 min

14:35–15:05

Rest area C: 30 min

15:20–15:50

Park B: 30 min

16:20

Return to Kyoto Station

Example based on the fictional travel table. Transport costs JPY 920 per person.

### 9. Check one requirement at a time

Condition

Check of the example

Finish by 17:30

Return at 16:20

Transport <= JPY 1,500/person

JPY 920

Include a quiet place

Museum A for 45 min

Include a break

Rest area C for 30 min

Read and verify the table yourself, even if AI says all conditions are met.

### 10. 3. Check how a change affects the plan

Copy this prompt, then add the specified source material:

```text
Change the Museum A stay to 60 minutes.
Keep the other conditions.
Update only the affected times.
Check the transport cost and finish time again.
```

Check how the new requirement affects the schedule and cost.

### 11. From a practice itinerary to a real outing

The basic class task

Check times and costs  
within the fictional source.  
This is a planning exercise.

Extension: a real plan

Choose the travel date.  
Check transport and opening times.  
A person decides bookings and payments.

### 12. Review the work you delegated to AI

I checked the sequence before proceeding.

I recalculated times, fares and stay durations.

I used only information in the supplied sources.

I made no bookings or purchases and sent nothing.

### 13. Save your work and your checks

week13/

README.md:  
Itinerary, condition checks and revised plan

Your README record

What I delegated to AI  
What I checked myself  
What I could not verify

### 14. Save your README edit

1. Open your own private repository and select `week13/README.md`. Check the owner in the address bar.
2. Select the pencil icon. Add your work and a short record of what you checked.
3. Select **Commit changes** and confirm in the dialog. Check that your edited text appears when the file opens again.

![Pencil icon in GitHub Docs](../../assets/setup/screens/edit-file-edit-button.png)

### 15. Open the commit history

Open the **Code** tab in your repository. Above the file list, choose the clock icon and **Commits**. Look for a page headed **Commits**.

![The Commits link on the public English course template](../../assets/github-handson/en-week-history-entry.png)

### 16. Choose the commit to submit

Find the change you saved and select its message. Check the date and the changes. The detail page shows **Commit** followed by a short identifier.

![Commit messages in the public English course template](../../assets/github-handson/en-week-commit-list.png)

### 17. Check the files and copy the commit URL

1. Select **Browse files** and check the expected work under `week13/`.
2. Return to the commit detail page.
3. Select the full address with **Ctrl+L** on Windows or **Command+L** on Mac. Copy it with **Ctrl+C** or **Command+C**.
4. Check that the address includes `/commit/` and your own GitHub username.
5. In class, submit the full address through the course form under **Week 13** and check the confirmation page. For self-study, keep the address in your practice log.

![Browse files on a commit detail page in the public English course template](../../assets/github-handson/en-week-commit-detail.png)

Use the repository URL for initial registration and the full commit URL for an assignment. Work in your own repository while following the screen examples.

### 18. Before you submit

I kept the original itinerary and the revised one.

I verified transport cost per person.

I clearly identified the plan as fictional.

I submitted the commit URL containing my work.

## Save and submit

Save the artifact and a short AI-use record in `week13/README.md`, then commit all required files. Submit the **final commit URL** through the course form. Initial registration uses the repository URL; weekly and final submissions use a commit URL.

Do not include student IDs, university emails, passwords, or confidential source material. Full AI chat histories are not required. Self-study readers can complete the exercise without university forms.

Character limits in prompts follow the source exercise. Follow any language-specific length specified by your instructor.
