# Check the denominator in a percentage

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

### 3. 1. Ask AI to calculate submission rates

Copy this prompt, then add the specified source material:

```text
Using this table, calculate each group's
submission rate and the overall submission rate.
Use submitted / students x 100.
Show the numerator, denominator and formula.
```

If you cannot attach the CSV, paste the four-row table.

### 4. Check Group A's submission rate

28 submitted / 32 students

28 ÷ 32 × 100 = 87.5％

Compare AI's formula and answer with your calculator. Record how you checked, even if the results match.

### 5. Different denominators give different rates

All students

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

Students: 32 + 30 + 35 + 29 = 126 Divide the total submitted by the total number of students.

### 7. Submission rates by group

| Group | Numerator / denominator | Submission rate |
| --- | --- | --- |
| A | 28／32 | 87.5％ |
| B | 24／30 | 80.0％ |
| C | 31／35 | 88.6％ |
| D | 20／29 | 69.0％ |

Round to one decimal place. Recalculating from rounded values can introduce rounding error.

### 8. 15 percentage points vs. a 25% increase

Difference in percentages

From 60% to 75%. 75 − 60 = 15 points.

Relative increase

Use the starting value of 60%. (75 − 60) ÷ 60 = 25% increase.

Report the difference in percentage points and the increase relative to the starting value.

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

### 10. 3. Write what the denominator means

Copy this prompt, then add the specified source material:

```text
The overall submission rate was about 81.7%.
Explain it in one sentence that identifies
the numerator and denominator.
Avoid speculation about causes.
```

This table shows rates. It does not establish causes.

### 11. Check what the data supports

I distinguished counts from percentages.

I stated the denominator.

I used consistent rounding.

I avoided inferring a cause from these numbers alone.

### 12. Save your work and your checks

week09/

README.md:  
Calculations, formulas and one-sentence explanation

Your README record

What I delegated to AI  
What I checked myself  
What I could not verify

### 13. Save your README edit

1. Open your own private repository and select `week09/README.md`. Check the owner in the address bar.
2. Select the pencil icon. Add your work and a short record of what you checked.
3. Select **Commit changes** and confirm in the dialog. Check that your edited text appears when the file opens again.

![Pencil icon in GitHub Docs](../../assets/setup/screens/edit-file-edit-button.png)

### 14. Open the commit history

Open the **Code** tab in your repository. Above the file list, choose the clock icon and **Commits**. Look for a page headed **Commits**.

![The Commits link on the public English course template](../../assets/github-handson/en-week-history-entry.png)

### 15. Choose the commit to submit

Find the change you saved and select its message. Check the date and the changes. The detail page shows **Commit** followed by a short identifier.

![Commit messages in the public English course template](../../assets/github-handson/en-week-commit-list.png)

### 16. Check the files and copy the commit URL

1. Select **Browse files** and check the expected work under `week09/`.
2. Return to the commit detail page.
3. Select the full address with **Ctrl+L** on Windows or **Command+L** on Mac. Copy it with **Ctrl+C** or **Command+C**.
4. Check that the address includes `/commit/` and your own GitHub username.
5. In class, submit the full address through the course form under **Week 09** and check the confirmation page. For self-study, keep the address in your practice log.

![Browse files on a commit detail page in the public English course template](../../assets/github-handson/en-week-commit-detail.png)

Use the repository URL for initial registration and the full commit URL for an assignment. Work in your own repository while following the screen examples.

### 17. Before you submit

I calculated one group and the overall rate myself.

I stated the denominator explicitly.

I clearly labeled the data as fictional.

I submitted the commit URL containing my work.

## Save and submit

Save the artifact and a short AI-use record in `week09/README.md`, then commit all required files. Submit the **final commit URL** through the course form. Initial registration uses the repository URL; weekly and final submissions use a commit URL.

Do not include student IDs, university emails, passwords, or confidential source material. Full AI chat histories are not required. Self-study readers can complete the exercise without university forms.

Character limits in prompts follow the source exercise. Follow any language-specific length specified by your instructor.
