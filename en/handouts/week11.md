# What do you check when you receive data?

Read this sheet alongside the [English slides](../slides/Week11_AI_Data_Analysis_EN.pptx). Work in your own private repository. The instructor supplies course-specific accounts, submission links, and deadlines.

[Lesson and requirements](../core/week11.md)

## Practice files

- [ai_study_data.csv](../assets/week11/ai_study_data.csv)
- [ai_study_data_copy.txt](../assets/week11/ai_study_data_copy.txt)
- [data_dictionary.md](../assets/week11/data_dictionary.md)

## Follow the slides

### 2. No coding required today

Give AI the supplied CSV and ask it  
to calculate summaries.  
  
Check the calculations against the source  
or with a spreadsheet as well.  
AI's output alone is insufficient evidence.

### 3. Your analysis sequence

Inspect

Check rows, columns  
and missing values.

Summarize

Show group means  
in a table and chart.

Verify

Check a calculation.  
State the limits of the result.

### 4. Fictional data, not student records

This data was created for teaching.  
  
60 rows and 6 columns: group, AI-use time,  
self-ratings before and after, source checking  
and submission on time.

Use en/assets/week11/ai_study_data.csv and data_dictionary.md.

### 5. 1. Giving AI the CSV

01

Save the CSV linked in the handout.

Open the file and check that it has column headings.

02

Attach it using the AI's file control.

Check that you selected the correct file.

03

If attachments are unavailable, use the alternative method.

Summarize it in a spreadsheet, then ask AI to explain your results.

### 6. 2. Checking rows and columns

Copy this prompt, then add the specified source material:

```text
Check this CSV's data row count and column names.
Explain what each column represents.
Check for missing values.
Exclude the header row from the data row count.
```

Open the data dictionary and compare it with AI's explanation.

### 7. Column names and their definitions

Column

Meaning

student_group

Groups A, B and C

confidence_before /  
after

Self-ratings before and after

source_checked

Source checked: yes / no

submitted_on_time

Submitted on time: yes / no

A self-rating is not a measure of academic ability. Read the definitions in the data dictionary.

### 8. 3. A summary for each group

Copy this prompt, then add the specified source material:

```text
For each student_group, calculate the count
and mean of confidence_after.
State the columns used and how you handled missing values.
```

Check the group counts as well as the means.

### 9. Comparing with the reference values

| Group | Count | Mean after |
| --- | --- | --- |
| A | 27 | 4.00 |
| B | 12 | 3.25 |
| C | 21 | 3.86 |

Calculated from the supplied 60 fictional rows. Means are rounded to two decimal places.

### 10. One check using another method

Rows with source_checked = yes: 42

42 ÷ 60 × 100 = 70％

Count yes rows with a spreadsheet filter, for example.  
Record your method and whether the result matches AI's.

### 11. 4. A bar chart

Copy this prompt, then add the specified source material:

```text
Make a bar chart of mean confidence_after by group.
Use a vertical axis from 0 to 5.
Include the means and group counts.
Label the data as fictional teaching data.
```

If chart creation is unavailable, submit the summary table instead.

### 12. Read counts as well as means

0

1

2

3

4

5

4.00

A: 27 people

3.25

B: 12 people

3.86

C: 21 people

Fictional teaching data. Mean self-ratings after use, by group.

### 13. Observed differences and their causes

What the table shows

In the supplied data,  
A's mean of 4.00 is higher  
than B's mean of 3.25.

What this table cannot establish

AI improved A's  
academic ability.  
It works for every student.

### 14. 5. A short explanation of the result

01

Describe the kind of data.

State clearly that this is fictional teaching data.

02

Describe the results you checked.

Give the means, counts and calculation you verified.

03

Describe what remains unknown.

This fictional data cannot test an effect on real students.

### 15. Your work and your checks

week11/

README.md:  
Results and verification method

Summary table and chart, if available

Your README record

What I delegated to AI  
What I checked myself  
What I could not verify

### 16. Submitting the saved version

01

Commit your changes on GitHub.

Check the updated files and commit them.

02

Open that commit's page.

Check that the URL contains /commit/.

03

Submit the course form.

Use the specified course account and choose Week 11.

A browser commit saves to GitHub. A separate push is unnecessary.

### 17. Before you submit

I checked the row count, columns and missing values.

I verified at least one result using another method.

I identified the data as fictional.

I submitted the commit URL containing my work.

## Save and submit

Save the artifact and a short AI-use record in `week11/README.md`, then commit all required files. Submit the **final commit URL** through the course form. Initial registration uses the repository URL; weekly and final submissions use a commit URL.

Do not include student IDs, university emails, passwords, or confidential source material. Full AI chat histories are not required. Self-study readers can complete the exercise without university forms.

Character limits in prompts follow the source exercise. Follow any language-specific length specified by your instructor.
