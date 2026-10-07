# Where is the answer in the source?

Read this sheet alongside the [English slides](../slides/Week04_Read_Documents_EN.pptx). Work in your own private repository. The instructor supplies course-specific accounts, submission links, and deadlines.

[Lesson and requirements](../core/week04.md)

## Practice files

- [sample_event_notice.md](../assets/week04/sample_event_notice.md)
- [sample_event_notice.pdf](../assets/week04/sample_event_notice.pdf)
- [sample_event_poster.png](../assets/week04/sample_event_poster.png)

## Follow the slides

### 2. Answers from one source document

01

Give AI the supplied document.

Use the PDF, image or source text.

02

Organize what participants need to know.

Ask for the date, venue and items to bring.

03

Check the original document.

Mark information absent from the source as unknown.

### 3. A fictional workshop notice

AI and Data Literacy Workshop  
  
October 15, 2026    13:30-15:00  
Room 402, Building 4 / 40 places / Free  
Registration deadline: October 10, 2026  
Bring: Laptop and university account

The dates are for this exercise. This is a fictional event.

### 4. Giving AI a file

01

Save the supplied file to your computer.

Use sample_event_notice.pdf.

02

Choose it with the AI's attachment control.

Wait for the upload to finish.

03

Check that the document name appears.

If attachments are unavailable, paste the corresponding .md text.

This is a short source. Pasting its text lets you do the same exercise.

### 5. 1. Information for participants

Copy this prompt, then add the specified source material:

```text
Using only this document, make a table
of the date, venue and items to bring.
For missing information, write Not stated.
```

Check the date, time and room number against the original, one item at a time.

### 6. Checking against the original

| Item | Source content | Your own check |
| --- | --- | --- |
| Time | 13:30〜15:00 | Match / mismatch |
| Venue | Room 402, Building 4 | Match / mismatch |
| Bring | Laptop, university account | Match / mismatch |

Use this table for checking. Compare AI's actual output before marking a match.

### 7. 2. Asking about missing information

Copy this prompt, then add the specified source material:

```text
Are there power sockets at this venue?
Answer only what the document supports.
```

No information about sockets does not mean there are no sockets.

### 8. Keeping unknowns clear

Supported by the source

The notice does not state  
whether power sockets  
are available.

Unsupported by the source

There are no sockets.  
  
Or:  
Every seat has a socket.

### 9. Checking answers about an image

Was any text misread?  
Do table headings match their values?  
  
If AI cannot read a part, enlarge  
the original image and check it yourself.

### 10. A correction grounded in the source

Copy this prompt, then add the specified source material:

```text
The venue is Room 402.
Check the venue field in the source and correct the table.
Check whether the other entries match the source too.
```

Use this request if there is an error. A correct result needs no correction.

### 11. Finishing this week's task

I made a table of the date, venue and items to bring.

I checked every item against the original.

I identified one detail absent from the source.

I separated AI's assumptions from source facts.

### 12. Your work and your checks

week04/

README.md:  
Check table and missing information

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

Use the specified course account and choose Week 04.

A browser commit saves to GitHub. A separate push is unnecessary.

### 14. Before you submit

I recorded where I checked in the source.

I verified the date, time and room number.

I avoided unsupported claims about missing information.

I submitted the commit URL containing my work.

## Save and submit

Save the artifact and a short AI-use record in `week04/README.md`, then commit all required files. Submit the **final commit URL** through the course form. Initial registration uses the repository URL; weekly and final submissions use a commit URL.

Do not include student IDs, university emails, passwords, or confidential source material. Full AI chat histories are not required. Self-study readers can complete the exercise without university forms.

Character limits in prompts follow the source exercise. Follow any language-specific length specified by your instructor.
