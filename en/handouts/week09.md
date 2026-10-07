# What percentage of which people?

Read this sheet alongside the [English slides](../slides/Week09_Read_Numbers_EN.pptx). Work in your own private repository. The instructor supplies course-specific accounts, submission links, and deadlines.

[Lesson and requirements](../core/week09.md)

## Practice files

- [data_dictionary.md](../assets/week09/data_dictionary.md)
- [numbers_exercise.csv](../assets/week09/numbers_exercise.csv)

## Follow the slides

### 2. Fictional data for four groups

| Group | Students | Submitted | AI users | Source checkers |
| --- | --- | --- | --- | --- |
| A | 32 | 28 | 25 | 18 |
| B | 30 | 24 | 20 | 13 |
| C | 35 | 31 | 29 | 17 |
| D | 29 | 20 | 18 | 9 |

Fictional teaching data from numbers_exercise.csv. These are not real student records.

### 3. 1. Asking AI to calculate submission rates

Copy this prompt, then add the specified source material:

```text
Using this table, calculate each group's
submission rate and the overall submission rate.
Use submitted / students x 100.
Show the numerator, denominator and formula.
```

If you cannot attach the CSV, paste the four-row table.

### 4. Group A: a calculator check

28 submitted / 32 students

28 ÷ 32 × 100 = 87.5％

Compare AI's formula and answer with your calculator.  
A matching result is also a check worth recording.

### 5. The same 18 people, different denominators

All students as denominator

18 source checkers / 32 students  
  
56.25%

AI users as denominator?

The table does not show whether  
all 18 also used AI.  
It does not justify using 18 / 25.

This aggregate table does not tell us which categories overlap for each person.

### 6. Overall rate: add the counts first

Submitted: 28 + 24 + 31 + 20 = 103 people

103 ÷ 126 × 100 ≈ 81.7％

Students: 32 + 30 + 35 + 29 = 126 people  
Calculate from totals rather than averaging the group percentages.

### 7. Results by group

| Group | Numerator / denominator | Submission rate |
| --- | --- | --- |
| A | 28／32 | 87.5％ |
| B | 24／30 | 80.0％ |
| C | 31／35 | 88.6％ |
| D | 20／29 | 69.0％ |

Round to one decimal place. Recalculating from rounded values can introduce rounding error.

### 8. Percentage points and relative increase

Difference in percentages

From 60% to 75%.  
  
75 - 60 = 15 percentage points.

Relative increase

The same change: 60% to 75%.  
  
(75 - 60) / 60 = 25% increase.

State what changed and which starting value you used.

### 9. 2. Checking calculations and explanations

01

Use a calculator for one group.

Check the numerator and denominator against the table.

02

Calculate the overall rate from the totals.

Add the counts before dividing.

03

Read AI's explanation.

Make clear which people and which proportion the result describes.

### 10. 3. Explaining what a number means

Copy this prompt, then add the specified source material:

```text
The overall submission rate was about 81.7%.
Explain it in one sentence that identifies
the numerator and denominator.
Avoid speculation about causes.
```

The table alone cannot explain the submission rate or establish AI's effect.

### 11. The scope of your explanation

I distinguished counts from percentages.

I stated the denominator.

I used consistent rounding.

I avoided inferring a cause from these numbers alone.

### 12. Your work and your checks

week09/

README.md:  
Calculations, formulas and one-sentence explanation

Your README record

What I delegated to AI  
What I checked myself  
What I could not verify

### 13. Submitting the saved version

01

Commit your changes on GitHub.

Check the updated files and commit them.

02

Open that commit's page.

Check that the URL contains /commit/.

03

Submit the course form.

Use the specified course account and choose Week 09.

A browser commit saves to GitHub. A separate push is unnecessary.

### 14. Before you submit

I calculated one group and the overall rate myself.

I stated the denominator explicitly.

I identified the data as fictional teaching data.

I submitted the commit URL containing my work.

## Save and submit

Save the artifact and a short AI-use record in `week09/README.md`, then commit all required files. Submit the **final commit URL** through the course form. Initial registration uses the repository URL; weekly and final submissions use a commit URL.

Do not include student IDs, university emails, passwords, or confidential source material. Full AI chat histories are not required. Self-study readers can complete the exercise without university forms.

Character limits in prompts follow the source exercise. Follow any language-specific length specified by your instructor.
