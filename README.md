# Front End Practice

This is a compliation of all my (somewhat polished) practice I've done while learning HTML, CSS and JS. Some of the pages are recreations of actual websites while others (mostly the ones involving JS) are designed by myself. If you want some insight on each of the pages like what skills were used/learned be sure to check the list below or the README's in each seperate project within the lib folder.

[Visit the Site](/index.html)

---

# Pages and Insights

(Preface: I am writing some of these comments years after I actually created the page so the insights aren't exactly from the moment I finished each project. I have some old README docs from when I last committed to some but they are not very thorough. This mostly applies tothe first 5 in the list.)

1. **[Google Search Page](/lib/google-homepage) - Based off [TOP Google Homepage Project](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/html-css)**   
  This was the first "large scale" project I attempted. Before this I was mostly learning sytax and doing isolated front end practice. From this project I learned
  how to compile all my previous small scale practice and how to layout html to create a design. Probably the biggest lesson I learned was about centering
  something (in this case the logo and search bar). The way I implemented this at the time auto margins and absolute positions. If it were to change it now
  I would probably use flexbox to center items and reduce my css file space. This was also my first real use of git and github as a version control. It learned the basics
  of git and how to use version control to my advantage.
  
2. **[Sketchboard](/lib/sketchboard) - Based off [TOP Etch-A-Sketch Project](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/etch-a-sketch-project)**  
From what I recall, this was a difficult jump from my previous projects. Before this I was mostly using only HTML and CSS and had just learned the basics of JS. This project required DOM (Document Object Model) maniplulation in order to change each block's colour as the mouse passed over it. Basically whenever the mouse      passed over an individual block it would update the class with a coloured in background colour. The HTML and CSS was fairly straightfoward but again required centering.
  
3. **[Calculator](/lib/calculator) - Based off [TOP Calculator Project](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/calculator)**  
Again the HTML and CSS is fairly straightforward with most of the work being the centering and designing of the calculator. The real meat of the project was making implementing the operations you'd expect from a calculator with JS and then connecting each of the "buttons" to the script and making the calculator function. The most difficult part was making sure that the equations would follow the order of operations so stringing an equation together would result in the correct answer. There is also a lot of errors that can arise due to imperfect user interaction which had to be kept in mind and fixes needed to be implemented. For example, a user should not be able to have two operators right next to each other (ex 5++3). There still remains some errors to be cleaned up and I planned to implement keyboard support but I had already spent a lot of time on this project and thought it would be more worth my time to move onto newer things. 
  
4. **[Rock Paper Scissors](/lib/revamped_rps) - Partially based off [TOP RPS Project](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/rock-paper-scissors)**  
This was another project requiring JS knowledge and DOM manipulation. I also threw in a small amount of animation using JS and CSS to give some feedback when a choice is selected. There was not a large "new thing" that was learned and was mostly finding new, better ways to do things and practicing previous skills

5. **[Moden UN Guide](/lib/epsmun_guide)**  
This was the first large scale project that I entirely planned and desgined myself. I was a member of my school's Model UN club and thought it would be a fun idea to actually use my front end knowledge and create a online personal guide to MUN research and committee process (instead of using something like a wix page with annoying banners). Unlike other projects I had a lot of text to write and include in each page. I then had to style the pages and create a readable and interesting guide. Other than that the actually "front end code" was simple and didn't need much thought. Near the end I decided to add a toggle for dark mode and threw together a simple JS/CSS button which would change the colours of items. I considered using cookies or something to have the display mode persist between pages but decided to just leave it as it was since dark mode was mostly an afterthought anyways.

6. **[Youtube Mockup](/lib/youtube_mockup) - Based off [TOP Embedding Images and Video Project](https://www.theodinproject.com/paths/full-stack-ruby-on-rails/courses/html-and-css/lessons/embedding-images-and-video)**  
If you've been paying attention to the "last committed date" you'll realize it's basically been a year since the last project. I was really working during my Grade 11/12 year on my academic standing and extracurriculars like volunteering for my university applications. This lead me to neglect my front end studies. I had also been slowly working through Ruby and the Ruby on Rails backend framework which was another reason there had been no front end projects. However a few weeks before this project, I had finished all my Advanced Placement exams and had committed to Waterloo CS Coop for my secondary education which greatly decreased my school load and permitted more time for my own projects. Besides all the backstory, the project itself is fairly simple and I was easing myself back into designing sites after being away for so long. The largest takeaway from this project was understanding CSS's flexbox and grid system which made it considerably easier to center and line up parts together. Most of the icons and thumbnails are placeholder images with the correct sizes that could be changed to accurately resemble the actual page but I decided it would be more worth my time to move on.

7. **[Mint Mockup](/lib/mock_signup) - Based off [TOP HTML Forms Project](https://www.theodinproject.com/paths/full-stack-ruby-on-rails/courses/html-and-css/lessons/html-forms)**  
This project was further practice with HTML and CSS; with special focus on HTML forms and styling. Its design comes from the [Intuit Signup Page](https://accounts.intuit.com/signup.html?offering_id=Intuit.ifs.mint&namespace_id=50000026&redirect_url=https%3A%2F%2Fmint.intuit.com%2Foverview.event%3Ftask%3DS). Again the actually sytax itself is fairly simple and was more practice for CSS flexbox and grid. I also had to read up about HTML's many different form inputs before working on this project.

8. **[TNW Mockup](/lib/tnw_mockup) - Based off [TOP Responsive Design Project](https://www.theodinproject.com/paths/full-stack-ruby-on-rails/courses/html-and-css/lessons/building-with-responsive-design)**  
The design for this project came from [The Next Web](https://thenextweb.com/). The main goal of this project was to understand responsive design and how to change elements to account for different screen sizes. The design uses a lot of HTML and CSS that I have become familiar with so the main takeaway for this was using CSS media querys to find the width of the display and change elements accordingly. You can see this by changing the page size and observing elements change position or direction.

9. More to be seen in the future

### - Vincent Yee
