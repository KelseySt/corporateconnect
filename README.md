# HacksX : CorporateConnect
By Kelsey Sterner and Alexis Dogins
# 💡 Inspiration
Our project was inspired by the Truist Challenge, as we believe learning more about finance from an employee perspective and understanding the nuances of business is vital to future financial success. Creating an interactive and fun application to teach important financial knowledge is a great way to keep financial literacy accessible and free to the public. With the wide range of complex information surrounding finance, it becomes that much more important to understand how the businesses that build and dictate our economy function.

# 💎 What it does
Our project offers beginner track courses to tackle financial topics (Balance Sheets, Key Metrics and definitions, EBITDA calculations, etc.), a profile to personalize your experience with progress tracking, and tracking companies you're interested in analyzing. There is secure user authentication coupled with an easy-to-navigate design to guide users to their interests quickly.

# 🛠 How we built it
### Planning
As a team of two, we first planned what pages would be needed for an application like this, deciding on a profile page with an avatar that upgrades based on points accumulated as well as progress trackers for lessons completed. Additionally, we decided on a quick-start learner's track with one lesson and two quizzes per module. Lastly, we wanted to give users a way to explore companies and follow ones they were interested in to get people more involved in examining live data and trends over time.

### Tech Stack
After planning, we decided on a Next.js frontend with Tailwind CSS and various React libraries (mainly HeroUI) to streamline our process since the user experience would be a main focus for our platform. In terms of session establishment, we used Auth0 integrated with our MongoDB cluster to authenticate and store user data such as points, email, encrypted password, and username.

# 😰 Challenges we ran into
- We envisioned one of the lessons we created to be a clickable annotated Balance Sheet to point out key values and why they're important. The technical difficulty of that stemmed from unfamiliarity with how relative and absolute work in React. Overall, we learned something new about components in relation to eachother and using the z-plane to layer overlapping components correctly.
- Auth0 gave some trouble in terms of TypeScript documentation, specifically with which middleware.ts or lib to add. There was a lot of testing and nonspecific error handling, but the main error stemmed from a dependency missing despite multiple installs, so learning to manage package-lock.json and dependencies is a **must** with projects like these. Additionally, working with out-of-date documentation for integrating MongoDB gave us more experience in internet deep-diving into niche software problems.
- Creating a nested 3-level dynamic Next.js route (/learn/[chapter]/[lesson]/[quiz]) proved to be difficult in terms of tracking key variables properly within objects, but using clear variable names with documentation greatly improves clarity for developers collaborating together as well as writing out on a whiteboard or talking to your fellow developer.
- Generally figuring out the best way to implement creative and fun UIs effectively in terms of code. 

# ⭐️ Accomplishments that we're proud of
- Completing a sizable project with two members of our team was a highlight as we each took on significant responsibility to cover every aspect of the Truist Challenge. We were on the same page the whole time and were not afraid to share opinions on how we could most optimally tackle a project of this size. We believe that is a core part of building up both yourself and your peers to be better developers and leaders.

# 🧠 What we learned
- Prepare time for bugs and documentation, exploring and planning thoroughly. Having a strong plan going in was a huge help to our process and helped guarantee completing our project with our sanity in tact!
- Building full-stack quickly and efficiently to give brainstorming and development time to key features that will attract your user base.

# 🔮 What's next for CorporateConnect
- Including a sentiment analysis on companies based on recent news headlines, social media posts, etc. to gain a greater contextual understanding of why certain numbers land that way.
- Fleshing out more specified tracks for the public to learn (Ex. 401Ks/Investing through a company lens)
- Adding a leaderboard-style league (similar to Duolingo) for completing lessons and quizzes (introduces a more direct social element).
