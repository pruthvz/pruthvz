import Head from "next/head";
import styles from "../styles/Home.module.css";

// Components
import Aboutme from "../components/Aboutme.js";

const About = () => {
  return (
    <div>
      <Head>
        <title>About me | Pruthvi Mohanlal</title>
      </Head>
      <header className="bg-gray-800" x-data="{ isOpen: false }">
        <section
          className="flex items-center justify-center"
          style={{ height: "350px" }}
        >
          <div className="text-center">
            <p className="text-xl font-medium tracking-wider text-gray-300">
              About me
            </p>
            <h2 className="mt-6 text-3xl font-bold text-white md:text-5xl">
              Developed ooopsDev.com, <br /> Web Developer.
            </h2>

            <div className="flex justify-center mt-8">
              <a
                className="px-8 py-2 text-lg font-medium text-white transition-colors duration-300 transform bg-purple-600 rounded hover:bg-purple-500"
                href="#"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </section>
      </header>

      {/* content */}
      <Aboutme></Aboutme>

      <section id="progress">
        <div class="bg-gray-700 mx-auto w-full h-full">
          {/* <div className="text-3xl mb-5 font-bold pt-12 text-white text-center">
            <h1>My Progress</h1>
          </div> */}
          <div class="relative wrap overflow-hidden p-10 h-full">
            <div
              class="border-2-2 absolute border-opacity-60 border-white h-full border"
              style={{ left: "50%" }}
            ></div>

            <div class="mb-8 flex justify-between  items-center w-full right-timeline">
              <div class="order-1 w-5/12"></div>
              <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 class="mx-auto font-semibold text-lg text-white">1</h1>
              </div>
              <div
                class="order-1 bg-gray-900 rounded-lg shadow-xl w-5/12 px-6 py-4"
                data-aos="fade-left"
              >
                <h3 class="mb-3 font-bold text-gray-200 text-xl">
                  2018 - GCSE Computer Science
                </h3>
                <p class="text-sm leading-snug tracking-wide text-gray-400 text-opacity-100">
                  I chose Computer Science as one of my core GCSE subjects
                  because I was interested in computers in general and wanted to
                  learn more about them. I learned Python as my first
                  programming language. It took me a few months to understand
                  the basic syntax of Python because this was my first attempt
                  at coding in Python.
                </p>
              </div>
            </div>

            <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div class="order-1 w-5/12"></div>
              <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 class="mx-auto text-white font-semibold text-lg">2</h1>
              </div>
              <div
                class="order-1 bg-gray-800 rounded-lg shadow-xl w-5/12 px-6 py-4"
                data-aos="fade-right"
              >
                <h3 class="mb-3 font-bold text-white text-xl">
                  2019 - Basic HTML/CSS
                </h3>
                <p class="text-sm font-medium leading-snug tracking-wide text-gray-400 text-opacity-100">
                  I finished my GCSE, and had early holidays, and since I had
                  nothing else to do. I found some interesting videos on YouTube
                  on web development. This grabbed my attention, and so I
                  watched more videos understanding the basics of HTML and CSS.
                  I built few basic website with the basic HTML tags.
                </p>
              </div>
            </div>

            <div class="mb-8 flex justify-between items-center w-full right-timeline">
              <div class="order-1 w-5/12"></div>
              <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 class="mx-auto font-semibold text-lg text-white">3</h1>
              </div>
              <div
                class="order-1 bg-gray-900 rounded-lg shadow-xl w-5/12 px-6 py-4"
                data-aos="fade-left"
              >
                <h3 class="mb-3 font-bold text-gray-200 text-xl">
                  2019 - PyGames, Tkinter
                </h3>
                <p class="text-sm leading-snug tracking-wide text-gray-400 text-opacity-100">
                  I loved playing video games, and I always had some passion for
                  creating games. Thats when I came across TechWithTim on
                  YouTube, who did few videos on PyGame using Python. I learnt
                  the basics of the library, and tried to recreate Flappy Bird
                  with my own assets. I created simple GUI with text and buttons
                  with no such functionality.
                </p>
              </div>
            </div>

            <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div class="order-1 w-5/12"></div>
              <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 class="mx-auto text-white font-semibold text-lg">4</h1>
              </div>
              <div
                class="order-1 bg-gray-800 rounded-lg shadow-xl w-5/12 px-6 py-4"
                data-aos="fade-right"
              >
                <h3 class="mb-3 font-bold text-white text-xl">
                  2019 - Unity 2D/3D
                </h3>
                <p class="text-sm font-medium leading-snug tracking-wide text-gray-400 text-opacity-100">
                  I learnt that with PyGame I couldn't really build proper games
                  well. So I did some reason on Games Development, and I came
                  across Brackeys on YouTube who suggested using Unity. At first
                  I tried Godot, then I switched over to Unity. I created basic
                  2D games using YouTube tutorials.
                </p>
              </div>
            </div>

            <div class="mb-8 flex justify-between items-center w-full right-timeline">
              <div class="order-1 w-5/12"></div>
              <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 class="mx-auto font-semibold text-lg text-white">5</h1>
              </div>
              <div
                class="order-1 bg-gray-900 rounded-lg shadow-xl w-5/12 px-6 py-4"
                data-aos="fade-left"
              >
                <h3 class="mb-3 font-bold text-gray-200 text-xl">
                  2020 - 2D Mobile Game Development
                </h3>
                <p class="text-sm leading-snug tracking-wide text-gray-400 text-opacity-100">
                  I took few months learning how the Unity game engine worked,
                  and then had few attempts at creating a full finished game. I
                  set myself some goals to create a mobile game before my
                  birthday. I currently have 3 mobile games published on Google
                  Play Store, and 2-3 desktop games on itch.io.
                </p>
              </div>
            </div>

            <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div class="order-1 w-5/12"></div>
              <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 class="mx-auto text-white font-semibold text-lg">6</h1>
              </div>
              <div
                class="order-1 bg-gray-800 rounded-lg shadow-xl w-5/12 px-6 py-4"
                data-aos="fade-right"
              >
                <h3 class="mb-3 font-bold text-white text-xl">
                  2020 - Back on Web Development
                </h3>
                <p class="text-sm font-medium leading-snug tracking-wide text-gray-400 text-opacity-100">
                  I took a rest from Game Development, because I wanted to learn
                  new things. I enjoyed building websites, so I went back into
                  Web Development, I understood how HTML/CSS worked but I wanted
                  to learn more, and I came across React.js Bootstrap. Bootstrap
                  was really fun to play around with. I created basic websites
                  related to SpaceX rockets. React.js allowed me to create
                  reuseable UI components, with less repetition.
                </p>
              </div>
            </div>

            <div class="mb-8 flex justify-between items-center w-full right-timeline">
              <div class="order-1 w-5/12"></div>
              <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 class="mx-auto font-semibold text-lg text-white">7</h1>
              </div>
              <div
                class="order-1 bg-gray-900 rounded-lg shadow-xl w-5/12 px-6 py-4"
                data-aos="fade-left"
              >
                <h3 class="mb-3 font-bold text-gray-200 text-xl">
                  2020 - Front-end Development
                </h3>
                <p class="text-sm leading-snug tracking-wide text-gray-400 text-opacity-100">
                  I enjoyed designing the website, and then building it using
                  libraries like Bootstrap and Material Design Bootstrap. I got
                  two 2 clients who asked me to create their website. I worked
                  on the website to make it appealing. I was very proud of the
                  finished website.
                </p>
              </div>
            </div>

            <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div class="order-1 w-5/12"></div>
              <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 class="mx-auto text-white font-semibold text-lg">8</h1>
              </div>
              <div
                class="order-1 bg-gray-800 rounded-lg shadow-xl w-5/12 px-6 py-4"
                data-aos="fade-right"
              >
                <h3 class="mb-3 font-bold text-white text-xl">2020 - Django</h3>
                <p class="text-sm font-medium leading-snug tracking-wide text-gray-400 text-opacity-100">
                  Since I did alot of Front-end development work, I wanted to
                  get my head around some backend development too. Since I knew
                  Python, I came across Django a web framework for Python. I
                  watched some YouTube videos and read some documentation on
                  Django to understand the basics. I followed few tutorials and
                  created basic CRUD websites. I then also went onto creating a
                  college project which was about, State Agency. This was the
                  first time I also used PostgreSQL as my database.
                </p>
              </div>
            </div>

            <div class="mb-8 flex justify-between items-center w-full right-timeline">
              <div class="order-1 w-5/12"></div>
              <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 class="mx-auto font-semibold text-lg text-white">9</h1>
              </div>
              <div
                class="order-1 bg-gray-900 rounded-lg shadow-xl w-5/12 px-6 py-4"
                data-aos="fade-left"
              >
                <h3 class="mb-3 font-bold text-gray-200 text-xl">
                  2021 - React.js, Node.js
                </h3>
                <p class="text-sm leading-snug tracking-wide text-gray-400 text-opacity-100">
                  I created two finished projects using React.js and
                  Bootstrap/Material Design Bootstrap, these were; spatepate and
                  ooopsdev. I also started learning some node.js along with more
                  advanced JavaScript.
                </p>
              </div>
            </div>
            {/*  */}
            <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div class="order-1 w-5/12"></div>
              <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 class="mx-auto text-white font-semibold text-lg">10</h1>
              </div>
              <div
                class="order-1 bg-gray-800 rounded-lg shadow-xl w-5/12 px-6 py-4"
                data-aos="fade-right"
              >
                <h3 class="mb-3 font-bold text-white text-xl">
                  2021 - TailwindCSS, Next.js
                </h3>
                <p class="text-sm font-medium leading-snug tracking-wide text-gray-400 text-opacity-100">
                  I started building out my portfolio using Next.js a new
                  framework, that has more advanced features than React.js. I
                  also wanted to try doing the Front-end for the website using
                  TailwindCSS. Tailwind CSS is a A utility-first CSS framework,
                  allowing me for rapid development. I learnt how to create
                  darkmode button and dark mode UI components using Tailwind
                  CSS.
                </p>
              </div>
            </div>
            {/*  */}
            <div class="mb-8 flex justify-between items-center w-full right-timeline">
              <div class="order-1 w-5/12"></div>
              <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 class="mx-auto font-semibold text-lg text-white">11</h1>
              </div>
              <div
                class="order-1 bg-gray-900 rounded-lg shadow-xl w-5/12 px-6 py-4"
                data-aos="fade-left"
              >
                <h3 class="mb-3 font-bold text-gray-200 text-xl">
                  2021 - Electron.js
                </h3>
                <p class="text-sm leading-snug tracking-wide text-gray-400 text-opacity-100">
                  I wanted to learn more about software development. I really
                  wanted to create a simple desktop application, this is where I
                  came across Electron.js, a software framework. I linekd
                  React.js and Electron.js using some tutorial and found a
                  simple public Crypto currency API, using this API I created a
                  basic app that display all the crypto prices, volume, market
                  cap etc.
                </p>
              </div>
            </div>
            {/*  */}

            <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div class="order-1 w-5/12"></div>
              <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 class="mx-auto text-white font-semibold text-lg">12</h1>
              </div>
              <div
                class="order-1 bg-gray-800 rounded-lg shadow-xl w-5/12 px-6 py-4"
                data-aos="fade-right"
              >
                <h3 class="mb-3 font-bold text-white text-xl">2021 - Flask</h3>
                <p class="text-sm font-medium leading-snug tracking-wide text-gray-400 text-opacity-100">
                  Flask is a web framework written in Python. I started learning
                  Flask because I contributed with a bunch of developers on
                  Discord on a project called Verselet. I was told to do the
                  Front-end for the website, and I used Material Design
                  Bootstrap.
                  <a
                    href="http://verselet.net/"
                    target="_blank"
                    className="text-gray-200"
                  >
                    {" "}
                    http://verselet.net/
                  </a>
                </p>
              </div>
            </div>
            {/*  */}
            <div class="mb-8 flex justify-between items-center w-full right-timeline">
              <div class="order-1 w-5/12"></div>
              <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 class="mx-auto font-semibold text-lg text-white">11</h1>
              </div>
              <div
                class="order-1 bg-gray-900 rounded-lg shadow-xl w-5/12 px-6 py-4"
                data-aos="fade-left"
              >
                <h3 class="mb-3 font-bold text-gray-200 text-xl">
                  2021 - Unity 2D/3D
                </h3>
                <p class="text-sm leading-snug tracking-wide text-gray-400 text-opacity-100">
                  Creating games again during the summer break.
                </p>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </section>

      {/* github  and codepen links */}
      <section className="bg-gray-800 pt-10 pb-10" id={styles.users}>
        <div className="container mx-auto" data-aos="fade-up">
          <div className="text-4xl font-bold pt-12 pb-8 text-white text-center">
            <h1>Socials, Projects Links</h1>
          </div>
        </div>
        <div class="flex items-center justify-center">
          <div class="p-4 rounded w-full">
            <div
              class="md:grid md:grid-cols-3 md:gap-4 space-y-4 md:space-y-0 mt-4 "
              data-aos="fade-up"
            >
              <div class="group shadow border rounded-lg bg-gray-800 hover:bg-gray-100 transition duration-200">
                <div class="flex items-center space-x-4 p-4">
                  <div class="flex items-center p-4 bg-purple-600 text-white rounded-lg">
                    <i class="fab fa-github "></i>
                  </div>
                  <div class="flex-1">
                    <p class="text-gray-300 font-semibold group-hover:text-gray-500">
                      GitHub Username
                    </p>
                    <div class="flex items-baseline space-x-4">
                      <h2 class="text-2xl font-semibold text-gray-300 group-hover:text-gray-700">
                        pruthvz
                      </h2>
                    </div>
                  </div>
                </div>
                <a
                  href="#"
                  class="block p-3 text-lg font-semibold bg-purple-50  text-purple-800 hover:bg-purple-100  cursor-pointer"
                >
                  View repositories
                </a>
              </div>
              <div class="group shadow border rounded-lg bg-gray-800 hover:bg-gray-100 transition duration-200">
                <div class="flex items-center space-x-4 p-4">
                  <div class="flex items-center p-4 bg-purple-600 text-white rounded-lg">
                    <i class="fab fa-codepen"></i>
                  </div>
                  <div class="flex-1">
                    <p class="text-gray-300 font-semibold group-hover:text-gray-500">
                      Codepen Username
                    </p>
                    <div class="flex items-baseline space-x-4">
                      <h2 class="text-2xl font-semibold text-gray-300 group-hover:text-gray-700">
                        pruthvi10
                      </h2>
                    </div>
                  </div>
                </div>
                <a
                  href="https://codepen.io/pruthvi10"
                  target="_blank"
                  class="block p-3 text-lg font-semibold bg-purple-50  text-purple-800 hover:bg-purple-100  cursor-pointer"
                >
                  View Pens
                </a>
              </div>
              <div class="group shadow border rounded-lg bg-gray-800 hover:bg-gray-100 transition duration-200">
                <div class="flex items-center space-x-4 p-4">
                  <div class="flex items-center p-4 bg-purple-600 text-white rounded-lg">
                    <i class="fab fa-twitter"></i>
                  </div>
                  <div class="flex-1">
                    <p class="text-gray-300 font-semibold group-hover:text-gray-500">
                      Twitter
                    </p>
                    <div class="flex items-baseline space-x-4">
                      <h2 class="text-2xl font-semibold text-gray-300 group-hover:text-gray-700">
                        justpruthvi
                      </h2>
                    </div>
                  </div>
                </div>
                <a
                  href="https://twitter.com/justpruthvi"
                  target="_blank"
                  class="block p-3 text-lg font-semibold bg-purple-50  text-purple-800 hover:bg-purple-100  cursor-pointer"
                >
                  Follow
                </a>
              </div>
              {/* VIEW GAMES */}
              <div class="group shadow border rounded-lg bg-gray-800 hover:bg-gray-100 transition duration-200">
                <div class="flex items-center space-x-4 p-4">
                  <div class="flex items-center p-4 bg-purple-600 text-white rounded-lg">
                    <i class="fab fa-google-play"></i>
                  </div>
                  <div class="flex-1">
                    <p class="text-gray-300 font-semibold group-hover:text-gray-500">
                      Google Play
                    </p>
                    <div class="flex items-baseline space-x-4">
                      <h2 class="text-2xl font-semibold text-gray-300 group-hover:text-gray-700">
                        pruthvi
                      </h2>
                    </div>
                  </div>
                </div>
                <a
                  href="https://play.google.com/store/apps/developer?id=pruthvi"
                  target="_blank"
                  class="block p-3 text-lg font-semibold bg-purple-50  text-purple-800 hover:bg-purple-100  cursor-pointer"
                >
                  View Games
                </a>
              </div>
              {/* END VIEW GAMES */}
              {/* VIEW OOPSDEV */}
              <div class="group shadow border rounded-lg bg-gray-800 hover:bg-gray-100 transition duration-200">
                <div class="flex items-center space-x-4 p-4">
                  <div class="flex items-center p-4 bg-purple-600 text-white rounded-lg">
                    <i class="fas fa-bug "></i>
                  </div>
                  <div class="flex-1">
                    <p class="text-gray-300 font-semibold group-hover:text-gray-500">
                      Project Wesbite #1
                    </p>
                    <div class="flex items-baseline space-x-4">
                      <h2 class="text-2xl font-semibold text-gray-300 group-hover:text-gray-700">
                        ooopsDev
                      </h2>
                    </div>
                  </div>
                </div>
                <a
                  href="https://ooopsdev.com/#/"
                  target="_blank"
                  class="block p-3 text-lg font-semibold bg-purple-50  text-purple-800 hover:bg-purple-100  cursor-pointe"
                >
                  Visit Site
                </a>
              </div>
              {/* END VIEW OOPSDEV */}
              {/* VIEW SPATEPATE */}
              <div class="group shadow border rounded-lg bg-gray-800 hover:bg-gray-100 transition duration-200">
                <div class="flex items-center space-x-4 p-4">
                  <div class="flex items-center p-4 pl-5 pr-5 bg-purple-600 text-white rounded-lg">
                    <i class="fas fa-exclamation"></i>
                  </div>
                  <div class="flex-1">
                    <p class="text-gray-300 font-semibold group-hover:text-gray-500">
                      Project Wesbite #2
                    </p>
                    <div class="flex items-baseline space-x-4">
                      <h2 class="text-2xl font-semibold text-gray-300 group-hover:text-gray-700">
                        spatepate
                      </h2>
                    </div>
                  </div>
                </div>
                <a
                  href="https://pruthvz.github.io/spatepate/"
                  target="_blank"
                  class="block p-3 text-lg font-semibold bg-purple-50  text-purple-800 hover:bg-purple-100  cursor-pointe"
                >
                  Visit Site
                </a>
              </div>
              {/* END VIEW SPATEPATE */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
