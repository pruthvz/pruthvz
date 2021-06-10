const myProjects = [
  {
    title: "Spatepate",
    subTitle: "Programming Tutorials",
    desc: "I created spatepate for developers who are looking for videos on how to code. I included the most of programming languages and gathered beginner friendly and advanced tutorials.",
    img: "/static/projectImg/spatepate.png",
    imgAlt: "Spatepate Image",
    github: "https://github.com/pruthvz/spatepate",
    website: "https://pruthvz.github.io/spatepate/",
    hash1: "#React.js",
    hash2: "#Bootstrap",
    hash3: "#Tutorials",
  },
  {
    title: "ooopsDev",
    subTitle: "Useful Developer Resources",
    desc: "ooopsDev.com began as a joke, but I realized that this kind of website would be helpful to more than just me. The website's contains front-end and back-end resources.",
    img: "/static/projectImg/oopsdev.png",
    imgAlt: "ooopsDev Image",
    github: "https://github.com/pruthvz/project-atlas",
    website: "https://ooopsdev.com/#/",
    hash1: "#React.js",
    hash2: "#Bootstrap",
    hash3: "#JavaScript",
    margin: "mb-8",
  },
  {
    title: "Diu Travels",
    subTitle: "Travel Website",
    desc: "My first project for a client was Diu Travels. It's a static travel website that displays all of the destinations that my customer requested. For the website, I utilized Material Design Bootstrap.",
    img: "/static/projectImg/diutravels.png",
    imgAlt: "DiuTravels image",
    github: "https://github.com/pruthvz/updatedTravelsite",
    website: "https://diutravels.com/",
    hash1: "#HTML/CSS",
    hash2: "#Material Design Bootstrap",
    hash3: "#JavaScript",
  },
  {
    title: "Project Weeee",
    subTitle: "Next.js Project",
    desc: "This was a fun experiment that I developed to learn the fundamentals of Next.js before starting a new project with Next.js. I built this entire portfolio website using Next.js as one of my projects too.",
    img: "/static/projectImg/weee.png",
    imgAlt: "Project Weee image",
    github: "https://github.com/pruthvz/project-weee",
    website: "https://project-weee.vercel.app/",
    hash1: "#Next.js",
    hash2: "#TailwindCSS",
    hash3: "#Server-side-rendering",
  },
  {
    title: "Wetave",
    subTitle: "React.js & Tailwindcss",
    desc: "This was one of my project, that had most of the react components and syntax covered. wetave, is a project where you can store you contact details, this was a fun project where I experimented with Tailwind CSS darkmode feature.",
    img: "/static/projectImg/wetave.png",
    imgAlt: "wetave image",
    github: "https://github.com/pruthvz/wetave",
    website: "https://pruthvz.github.io/wetave/",
    hash1: "#React.js",
    hash2: "#TailwindCSS",
    hash3: "#CRUD Operations",
    margin: "mb-2",
  },
  {
    title: "vcall",
    subTitle: "Sockets.io & Tailwindcss",
    desc: "A fun React.js project with Socket.io learning the basics of sockets. I created a video chatting application. For this application, I used Node.js as backend and React.js along with some Tailwind css for front-end.",
    img: "/static/projectImg/vcall.png",
    imgAlt: "vcall image",
    github: "#!code-base privated",
    website: "https://weeechat.netlify.app/",
    hash1: "#React.js",
    hash2: "#TailwindCSS",
    hash3: "#Node.js #Socket.io",
    margin: "mb-2",
  },
  {
    title: "YouTube Video Downloader",
    subTitle: "Tkinter Project",
    desc: "This was a beginner python project, I created to experiment with different types of libraries. I used pytube for this project to convert YouTube video urls into mp4 files. The project is avaiable on my GitHub.",
    img: "/static/projectImg/yt-download.png",
    imgAlt: "yt-downloader image",
    github: "https://github.com/pruthvz/youtube-video-downloader",
    website: "#!404",
    hash1: "#Tkinter",
    hash2: "#Python",
    hash3: "#Pytube library",
    margin: "mb-2",
  },
  {
    title: "Firebase Authentication",
    subTitle: "React & Firebase",
    desc: "I was experimenting with the Firebase authentication, and created a login system using a tutorial on YouTube. I learnt the basics of firebase, and how to configurate firebase auth. The front-end for this project was done using React.js",
    img: "/static/projectImg/auth.png",
    imgAlt: "firebase project image",
    github: "https://github.com/pruthvz/react-firebase-auth",
    website: "https://pruthvz.github.io/react-firebase-auth/",
    hash1: "#React.js",
    hash2: "#Fierbase",
    hash3: "#Login System",
    margin: "mb-2",
  },
  {
    title: "cmovies ",
    subTitle: "React.js & Movie API",
    desc: "This project included, me experimenting around with API within React.js, the API I used in this project is in the code base, however since the API is Http and not Https, it wouldn't run properly on GitHub Pages.  ",
    img: "/static/projectImg/cmovies.png",
    imgAlt: "cmovies image",
    github: "https://github.com/pruthvz/cmovies",
    website: "https://pruthvz.github.io/cmovies/",
    hash1: "#React.js",
    hash2: "#API",
    hash3: "#Movie App",
    margin: "mb-2",
  },
  {
    title: "Code Text-Editor",
    subTitle: "Highlighting syntax editor",
    desc: "Maxi, a contributor, and I decided to try and create an online coding text editor with syntax highlighting for certain languages such as Python, JavaScript, HTML/CSS, C#, and others. This was a side project, and the working editor is now utilized in Verselet. ",
    img: "/static/projectImg/code.png",
    imgAlt: "code editor image",
    github: "https://github.com/Maxix25/text-editor",
    website: "#not-hosted",
    hash1: "#HTML/CSS",
    hash2: "#codemirror",
    hash3: "#text-editor",
    margin: "mb-2",
  },
  {
    title: "System Listing Application",
    subTitle: "Electron.js",
    desc: "This is a small project that helped me understand the basics of Electron.js; this includes how to start and create a window, and how to render a index.html file within the application. I want to continue to learn Electron.js and create better and bigger projects.",
    img: "/static/projectImg/spate.png",
    imgAlt: "spate image",
    github: "https://github.com/pruthvz/systemcheck",
    website: "#not-hosted",
    hash1: "#HTML/CSS",
    hash2: "#Electron.js",
    hash3: "#System",
    margin: "mb-2",
  },
];

const languages = [
  {
    language: "Python",
    desc: "I have 4 years of expereince with Python.",
  },
  {
    language: "JavaScript",
    desc: "JavaScript is the programming language of the Web.",
  },
  {
    language: "Node.js",
    desc: "Node.js is an open source server environment",
  },
  {
    language: "C#",
    desc: "I learnt C# to make 3 mobile Unity games.",
  },
  {
    language: "React.js",
    desc: "A JavaScript library for building user interfaces.",
  },
  {
    language: "Next.js",
    desc: "This portfolio is made using Next.js",
  },
  {
    language: "Django",
    desc: "6 Months of Django experience, Python web framework.",
  },
  {
    language: "Unity 2D/3D",
    desc: "I've developed a number of games, including 3 on Android.",
  },
  {
    language: "HTML/CSS",
    desc: "I made a number of simple websites using HTML/CSS.",
  },
  {
    language: "TailwindCSS",
    desc: "A utility-first CSS framework packed with classes",
  },
  {
    language: "Bootstrap",
    desc: "Material Design Bootstrap and Bootstrap",
  },
];

const internalData = {
  myProjects,
  languages,
};

export default internalData;
