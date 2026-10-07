# Does the plan meet the conditions?

Read this sheet alongside the [English slides](../slides/Week13_Plan_and_Check_EN.pptx). Work in your own private repository. The instructor supplies course-specific accounts, submission links, and deadlines.

[Lesson and requirements](../core/week13.md)

## Practice files

- [multi_step_planning_case.md](../assets/week13/multi_step_planning_case.md)
- [offline_itinerary_data.md](../assets/week13/offline_itinerary_data.md)

## Follow the slides

### 2. A planning exercise

Ask AI for a research process and a draft plan.  
This exercise includes no bookings, purchases or sending.  
  
Decide what you will check at each stage  
before proceeding.

### 3. A task with several stages

Plan

List the needed information  
and order the steps.

Supply material

Give AI the conditions  
and permitted sources.

Check along the way

Revise any part  
that fails a condition.

### 4. A half-day itinerary for five students

Leave Kyoto Station at 13:00; finish by 17:30.  
Travel on foot and by public transport.  
Transport budget: JPY 1,500 per person.  
Include a quiet place and a break.  
  
Use the supplied fictional facility information.

Travel times, fares and facilities are fictional teaching data. They are not a real travel guide.

### 5. 1. Asking for the process first

Copy this prompt, then add the specified source material:

```text
I want a half-day itinerary under these conditions.
First, list the information needed
and the order in which to check it.
Before completing the itinerary, ask about unclear conditions.
```

Supply both the conditions and offline_itinerary_data.md.

### 6. Conditions in the fictional source

| Place | Available times | Stay requirement |
| --- | --- | --- |
| Museum A | 13:00〜17:00 | Quiet place / at least 45 min |
| Park B | 13:00〜18:00 | At least 30 min |
| Rest area C | 14:00〜17:00 | Break / at least 30 min |

Use the source table for each journey's travel time and fare.

### 7. 2. An itinerary based on the source

Copy this prompt, then add the specified source material:

```text
Use only the supplied fictional facilities and travel table.
Show departures, arrivals, stays, travel times and fares.
Include waiting time and check
that we return by 17:30.
```

Keep invented shortcuts, fares and opening hours out of the plan.

### 8. Checking an example yourself

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

### 9. One condition at a time

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

### 10. 3. Revising a changed condition

Copy this prompt, then add the specified source material:

```text
Change the Museum A stay to 60 minutes.
Keep the other conditions.
Update only the affected times.
Check the transport cost and finish time again.
```

Check for yourself what changed and what stayed the same.

### 11. Additional checks for a real outing

The basic class task

Check times and costs  
within the fictional source.  
This is a planning exercise.

Extension: a real plan

Choose the travel date.  
Check transport and opening times.  
A person decides bookings and payments.

### 12. Explaining what you delegated

I checked the sequence before proceeding.

I recalculated times, fares and stay durations.

I used only information in the supplied sources.

I made no bookings or purchases and sent nothing.

### 13. Your work and your checks

week13/

README.md:  
Itinerary, condition checks and revised plan

Your README record

What I delegated to AI  
What I checked myself  
What I could not verify

### 14. Submitting the saved version

01

Commit your changes on GitHub.

Check the updated files and commit them.

02

Open that commit's page.

Check that the URL contains /commit/.

03

Submit the course form.

Use the specified course account and choose Week 13.

A browser commit saves to GitHub. A separate push is unnecessary.

### 15. Before you submit

I kept the original itinerary and the revised one.

I verified transport cost per person.

I clearly identified the plan as fictional.

I submitted the commit URL containing my work.

## Save and submit

Save the artifact and a short AI-use record in `week13/README.md`, then commit all required files. Submit the **final commit URL** through the course form. Initial registration uses the repository URL; weekly and final submissions use a commit URL.

Do not include student IDs, university emails, passwords, or confidential source material. Full AI chat histories are not required. Self-study readers can complete the exercise without university forms.

Character limits in prompts follow the source exercise. Follow any language-specific length specified by your instructor.
