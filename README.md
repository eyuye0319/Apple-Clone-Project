# Apple Clone

## Group 2B

A collaborative Apple website clone project developed as part of a Git and GitHub
group activity.

The project focuses on practicing Git collaboration, branching, Pull Requests,
code review, merging, conflict resolution, and project documentation.

---

## Project Overview

This project recreates the layout and design of an Apple-style website using
HTML, CSS, and Bootstrap.

The website is divided into multiple sections so that team members can work
independently using Git branches and later integrate their work into the
`main` branch.

---

## Technologies Used

- HTML5
- CSS3
- Bootstrap
- Git
- GitHub
- Visual Studio Code

---

## Project Structure

```text
Apple-Clone-Project/
│
├── css/
│   ├── bootstrap.css
│   ├── footer.css
│   ├── header.css
│   ├── section-1-banner.css
│   ├── section-2-banner.css
│   ├── section-3-banner.css
│   ├── section-4-left.css
│   ├── section-4-right.css
│   ├── section-5-left.css
│   ├── section-5-right.css
│   ├── section-6.css
│   └── style.css
│
├── images/
│   └── project images
│
├── index.html
│
└── README.md
Website Sections

The website contains the following sections:

Header
First Section — 16-inch MacBook Pro
Second Section — iPhone 11 Pro
Third Section — iPhone 11
Fourth Section
Watch Series 5
Card
Fifth Section
TV+
AirPods Pro
Sixth Section
MacBook Pro
The New iPad
Footer
Getting Started
1. Clone the Repository

Clone the repository using Git:

git clone https://github.com/<leader-username>/appleClone.git

Move into the project directory:

cd appleClone
2. Check the Repository

Check the current Git status:

git status

Check the available branches:

git branch -a
3. Create a Feature Branch

Each contributor should work on a separate branch.

Example:

git switch -c header

Other examples:

footer
section-1-banner
section-2-banner
section-3-banner
section-4-left
section-4-right
section-5-left
section-5-right
section-6

The main branch should remain stable.

4. Work on Your Assigned Section

Each contributor should work primarily on the files related to their section.

For example:

Header
→ index.html
→ css/header.css
Section 1
→ index.html
→ css/section-1-banner.css
Section 6
→ index.html
→ css/section-6.css

Avoid making unnecessary changes to other contributors' sections.

5. Stage Changes

Check your changes:

git status

Stage all changes:

git add .

Or stage a specific file:

git add index.html
6. Commit Changes

Create small and meaningful commits.

Example:

git commit -m "Build header navigation"

Another example:

git commit -m "Add responsive header styling"

Good commit messages should clearly describe the changes.

7. Update Your Branch

Before pushing your completed work, update your branch with the latest
changes from main.

git fetch origin

Update the local main branch:

git switch main
git pull origin main

Return to your feature branch:

git switch <your-branch>

Merge the latest main:

git merge main

Resolve any conflicts if they occur.

8. Test Your Work

Before pushing, test the project locally.

Check:

HTML structure
CSS styling
Images
Links
Spacing
Alignment
Desktop layout
Tablet layout
Mobile layout
Compatibility with other sections
9. Push Your Branch

For the first push:

git push -u origin <your-branch>

For future pushes:

git push origin <your-branch>

Example:

git push -u origin header
Pull Request Workflow

After completing a task:

Push your feature branch to GitHub.
Open the repository on GitHub.
Open the Pull Requests tab.
Select New Pull Request.
Select main as the base branch.
Select your feature branch as the compare branch.
Add a descriptive title.
Explain the changes.
Request a code review.
Wait for approval.
Resolve any requested changes.
Merge the Pull Request after approval.

Example:

base: main
compare: section-1-banner
Code Review

Before a Pull Request is merged, the changes should be reviewed.

The review should check:

Correct HTML structure
Correct CSS
Responsive design
Images
Links
Code organization
Unnecessary changes
Possible conflicts
Overall visual result
Merge Conflicts

A merge conflict may occur when multiple branches modify the same part of
a file.

Check the conflict:

git status

Git may show conflict markers such as:

<<<<<<< HEAD
Your changes
=======
Changes from main
>>>>>>> main

Open the file and decide which code should remain.

After resolving the conflict:

git add <file>

Commit the resolution:

git commit -m "Resolve merge conflict"

Then push:

git push origin <your-branch>
Reverting a Problematic Change

If a change breaks the project after being merged into main, the problematic
commit can be reverted.

First update main:

git switch main
git pull origin main

View the commit history:

git log --oneline

Revert the problematic commit:

git revert <commit-hash>

Push the revert:

git push origin main

The original problem can then be fixed in a separate branch.

Git Best Practices
Use Descriptive Branch Names

Good:

header
footer
section-1-banner
section-2-banner
section-3-banner
section-4-left
section-4-right
section-5-left
section-5-right
section-6

Avoid:

test
new
work
mybranch
final
Make Small and Frequent Commits

Small commits are easier to:

Review
Understand
Debug
Revert
Track

Example:

git commit -m "Add navigation links"
git commit -m "Style navigation menu"
git commit -m "Make navigation responsive"
Images

All project images should be stored inside the images directory.

Example:

images/
├── macbook.jpg
├── iphone.jpg
├── watch.jpg
└── airpods.jpg

Images should be referenced using relative paths.

Example:

<img src="./images/macbook.jpg" alt="MacBook Pro">
Responsive Design

The website should be tested on different screen sizes.

The project should provide a good user experience on:

Desktop
Tablet
Mobile

Responsive CSS should be added to the appropriate section stylesheet.

Collaboration Rules
Do not work directly on main.
Create a feature branch before working.
Work on your assigned section.
Make small and descriptive commits.
Pull the latest main before pushing.
Test your changes before creating a Pull Request.
Use Pull Requests for integration.
Review changes before merging.
Resolve conflicts carefully.
Keep the main branch stable.
Communicate with the team when modifying shared code.
Do not overwrite another contributor's work without discussion.
Git Workflow
Clone Repository
       ↓
Create Feature Branch
       ↓
Work on Assigned Section
       ↓
Git Add
       ↓
Git Commit
       ↓
Update from main
       ↓
Test
       ↓
Push Feature Branch
       ↓
Create Pull Request
       ↓
Code Review
       ↓
Resolve Issues
       ↓
Merge into main
       ↓
Final Testing
Final Checklist
 Repository created
 Basic project structure created
 index.html created
 CSS files created
 images folder created
 Required images added
 Contributors invited
 Repository cloned
 Feature branches created
 Header completed
 Footer completed
 First section completed
 Second section completed
 Third section completed
 Fourth section completed
 Fifth section completed
 Sixth section completed
 Pull Requests created
 Code reviewed
 Conflicts resolved
 Approved branches merged
 Final project tested
 README completed
Purpose of the Project

The purpose of this activity is to gain practical experience with Git and
GitHub collaboration in a team environment.

The project demonstrates the use of:

Version control
Branching
Collaboration
Pull Requests
Code review
Merging
Conflict resolution
Reverting changes
Documentation
Team-based software development
Project Status



R
