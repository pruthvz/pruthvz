import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";

// Components
import Project from "../components/Projects";
import Aboutme from "../components/Aboutme.js";

// Images

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pruthvi Mohanlal | Portfolio</title>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </Head>
      <div className={styles.main}>
        <header className="bg-gray-800" x-data="{ isOpen: false }">
          <section
            className="flex items-center justify-center"
            style={{ height: "500px" }}
          >
            <div className="text-center">
              <p className="text-xl font-medium tracking-wider text-gray-300">
                Pruthvi Mohanlal
              </p>
              <h2 className="mt-6 text-3xl font-bold text-white md:text-5xl">
                Web Developer, Game Developer,
                <br />
                programmer at night.
              </h2>

              <div className="flex justify-center mt-8">
                <a
                  className="px-8 py-2 text-lg font-medium text-white transition-colors duration-300 transform bg-purple-600 rounded hover:bg-purple-800"
                  href="#"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </section>
        </header>

        {/* ABOUT ME BELOW */}
        <Aboutme></Aboutme>
        {/* ABOUT ME ABOVE */}

        {/* THESE CARDS CAN BE SIMPELY LOOPED  */}
        <section className="bg-gray-800 pt-5 pb-5" id={styles.skills}>
          <div className="container mx-auto" data-aos="fade-up">
            <div className="text-4xl font-bold pt-12 text-white text-center">
              <h1>Skills</h1>
            </div>
          </div>
          <div
            className="p-5 md:p-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5"
            data-aos="fade-up"
          >
            <div className="group max-w-2xl rounded-lg mx-auto p-10 md:p-16 transform transition duration-200 hover:scale-105 hover:shadow-md ring-2 ring-purple-200 hover:bg-white">
              <h1 className="text-2xl font-medium mb-2 text-white group-hover:text-black">
                Web Developer
              </h1>
              <h2 className="font-medium text-sm text-purple-600 mb-4 uppercase tracking-wide">
                Front-end and Back-end
              </h2>
              <p className="text-gray-400 group-hover:text-black">
                I started my coding journey with web development, working my way
                up from the basics to where I am now. I have four years of
                experience in web development. I learned web development by
                using all of the resources available on the internet.
              </p>
            </div>
            <div className="group max-w-2xl rounded-lg mx-auto p-10 md:p-16  transform transition duration-200 hover:scale-105 hover:shadow-md ring-2 ring-purple-200 hover:bg-white">
              <h1 className="text-2xl font-medium mb-2 text-white group-hover:text-black">
                Game Developer
              </h1>
              <h2 className="font-medium text-sm text-purple-600 mb-4 uppercase tracking-wide">
                Unity 2D & 3D
              </h2>
              <p className="text-gray-400 group-hover:text-black">
                I began game development for fun; I wanted to make a few games
                of my own and experiment with them. Using the Unity game engine,
                I created a few desktop games. I then built three Android games,
                which are available on{" "}
                <a
                  href="https://play.google.com/store/apps/developer?id=pruthvi"
                  target="_blank"
                  className="text-gray-300 group-hover:text-purple-600"
                >
                  Google Play.
                </a>
              </p>
            </div>
            <div className="group max-w-2xl rounded-lg mx-auto p-10 md:p-16 transform transition duration-200 hover:scale-105 hover:shadow-md ring-2 ring-purple-200 hover:bg-white">
              <h1 className="text-2xl font-medium mb-2 text-white group-hover:text-black">
                Python Automation
              </h1>
              <h2 className="font-medium text-sm text-purple-600 mb-4 uppercase tracking-wide">
                Selenium
              </h2>
              <p className="text-gray-400 group-hover:text-black">
                Python is a powerful programming language with numerous
                libraries, including Selenium. I created Python scripts to
                perform basic tasks such as opening Chrome and visiting
                webpages. I also built a script that would connect me to my
                online class automatically.
              </p>
            </div>
          </div>
        </section>

        <section
          className="pt-32 pb-32"
          id={styles.skills}
          style={{ background: "#1f2937f3" }}
        >
          <div className="container px-5 py-24 mx-auto" data-aos="fade-up">
            <div className="flex flex-wrap w-full mb-20">
              <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 className="sm:text-4xl text-2xl font-medium title-font mb-2 text-gray-200 font-bold">
                  My Personal Projects
                </h1>
                <div className="h-1 w-20 bg-purple-500 rounded"></div>
              </div>
              <p className="lg:w-1/2 w-full leading-relaxed text-gray-400 pr-10">
                I have worked on multiple projects, some which includes client
                projects. I have done many personal projects as well, I am also
                working on few projects at the moment as well. I have included
                my project's website url, as well as the code for it. Some
                client projects, I may not be able to provide the code base,
                because its more private. Click on "View all Projects" for more
                amazing and interesting projects.
              </p>
            </div>
            {/* start of cards */}
            <div className="flex flex-wrap -m-4">
              <div className="xl:w-1/4  md:w-1/2 p-4">
                <div className="bg-gray-900 bg-opacity-100 p-6 rounded-lg transform hover:scale-105 transition duration-300 cursor-auto">
                  <Image
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src="/static/projectImg/spatepate.png"
                    alt="content"
                    height={600}
                    width={1000}
                  />
                  <h3 className="tracking-widest text-purple-500 text-xs font-medium title-font mt-3">
                    Programming Tutorials
                  </h3>
                  <h2 className="text-lg text-gray-200 font-medium title-font mb-4">
                    spatepate
                  </h2>
                  <p className="leading-relaxed text-base text-gray-400">
                    I created spatepate for developers who are looking for
                    videos on how to code. I included the most of programming
                    languages and gathered beginner friendly and advanced
                    tutorials.
                  </p>
                  {/* hashtags if they look bad delete it */}
                  <div class="mt-3">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #React.js
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #Bootstrap
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #Tutorials
                    </span>
                  </div>
                  {/* hashtags */}
                  {/* CODE ICONS */}
                  <div className="row pt-2 text-purple-500 text-lg ">
                    <a
                      href="https://pruthvz.github.io/spatepate/"
                      target="_blank"
                    >
                      <i className="fas fa-globe transform transition duration-300 hover:text-purple-200 hover:scale-110"></i>
                    </a>
                    <a
                      href="https://github.com/pruthvz/spatepate"
                      target="_blank"
                    >
                      <i className="fas fa-code pl-2 transform transition duration-300 hover:text-purple-200 hover:scale-110"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-900 bg-opacity-100 p-6 rounded-lg transform hover:scale-105 transition duration-300 cursor-auto">
                  <Image
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src="/static/projectImg/oopsdev.png"
                    alt="content"
                    height={600}
                    width={1000}
                  />
                  <h3 className="tracking-widest text-purple-500 text-xs font-medium title-font mt-3">
                    Useful Developer Resources
                  </h3>
                  <h2 className="text-lg text-gray-200 font-medium title-font mb-4">
                    ooopsDev.com
                  </h2>
                  <p className="leading-relaxed text-base text-gray-400">
                    ooopsDev.com began as a joke, but I realized that this kind
                    of website would be helpful to more than just me. The
                    website's contains front-end and back-end resources.
                  </p>
                  {/* hashtags if they look bad delete it */}
                  <div className="mt-3">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #Bootstrap
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #React.js
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #JavaScript
                    </span>
                  </div>
                  {/* hashtags */}
                  {/* CODE ICONS */}
                  <div className="row pt-2 text-purple-500 text-lg">
                    <a href="https://ooopsdev.com/#/" target="_blank">
                      <i className="fas fa-globe transform transition duration-300 hover:text-purple-200 hover:scale-110"></i>
                    </a>
                    <a
                      href="https://github.com/pruthvz/project-atlas"
                      target="_blank"
                    >
                      <i className="fas fa-code pl-2 transform transition duration-300 hover:text-purple-200 hover:scale-110"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-900 bg-opacity-100 p-6 rounded-lg transform hover:scale-105 transition duration-300 cursor-auto">
                  <Image
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src="/static/projectImg/diutravels.png"
                    alt="content"
                    height={600}
                    width={1000}
                  />
                  <h3 className="tracking-widest text-purple-500 text-xs font-medium title-font mt-3">
                    Travel Website
                  </h3>
                  <h2 className="text-lg text-gray-200 font-medium title-font mb-4">
                    Diu Travels
                  </h2>
                  <p className="leading-relaxed text-base text-gray-400">
                    My first project for a client was Diu Travels. It's a static
                    travel website that displays all of the destinations that my
                    customer requested. For the website, I utilized Material
                    Design Bootstrap.
                  </p>
                  {/* hashtags if they look bad delete it */}
                  <div className="mt-3">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #HTML/CSS
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #MDB
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #JavaScript
                    </span>
                  </div>
                  {/* hashtags */}
                  {/* CODE ICONS */}
                  <div className="row pt-2 text-purple-500 text-lg ">
                    <a href="https://diutravels.com/" target="_blank">
                      <i className="fas fa-globe transform transition duration-300 hover:text-purple-200 hover:scale-110"></i>
                    </a>
                    <a
                      href="https://github.com/pruthvz/updatedTravelsite"
                      target="_blank"
                    >
                      <i className="fas fa-code pl-2 transform transition duration-300 hover:text-purple-200 hover:scale-110"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-900 bg-opacity-100 p-6 rounded-lg transform hover:scale-105 transition duration-300 cursor-auto">
                  <Image
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src="/static/projectImg/weee.png"
                    alt="content"
                    height={600}
                    width={1000}
                  />
                  <h3 className="tracking-widest text-purple-500 text-xs font-medium title-font mt-3">
                    Next.js Project
                  </h3>
                  <h2 className="text-lg text-gray-200 font-medium title-font mb-4">
                    Project Weee
                  </h2>
                  <p className="leading-relaxed text-base text-gray-400">
                    This was a fun experiment that I developed to learn the
                    fundamentals of Next.js before starting a new project with
                    Next.js.
                  </p>
                  {/* hashtags if they look bad delete it */}
                  <div className="mt-3">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #Next.js
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #Tailwind CSS
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #React.js
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #Server-side-rendering
                    </span>
                  </div>
                  {/* hashtags */}

                  {/* CODE ICONS */}
                  <div className="row pt-2 text-purple-500 text-lg ">
                    <a href="https://project-weee.vercel.app/" target="_blank">
                      <i className="fas fa-globe transform transition duration-300 hover:text-purple-200 hover:scale-110"></i>
                    </a>
                    <a
                      href="https://github.com/pruthvz/project-weee"
                      target="_blank"
                    >
                      <i className="fas fa-code pl-2 transform transition duration-300 hover:text-purple-200 hover:scale-110"></i>
                    </a>
                  </div>
                </div>
              </div>
              {/* end of cards */}
            </div>
          </div>
          <div className="flex justify-center mt-1" data-aos="fade-right">
            <a
              className="px-8 py-2 text-lg font-medium text-white transition-colors duration-300 transform border border-white rounded hover:bg-purple-500 hover:border-transparent "
              href="/projects"
            >
              View all Projects <i class="fas fa-angle-right"></i>
            </a>
          </div>
        </section>

        {/* github  and codepen links */}
        <section className="bg-gray-800 pt-10 pb-10" id={styles.users}>
          <div className="flex items-center justify-center">
            <div className="p-4 rounded w-full">
              <div
                className="md:grid md:grid-cols-3 md:gap-4 space-y-4 md:space-y-0 mt-4 "
                data-aos="fade-up"
              >
                <div className="group shadow border rounded-lg bg-gray-800 hover:bg-gray-100 transition duration-200">
                  <div className="flex items-center space-x-4 p-4">
                    <div className="flex items-center p-4 bg-purple-600 text-white rounded-lg">
                      <i className="fab fa-github "></i>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-300 font-semibold group-hover:text-gray-500">
                        GitHub Username
                      </p>
                      <div className="flex items-baseline space-x-4">
                        <h2 className="text-2xl font-semibold text-gray-300 group-hover:text-gray-700">
                          pruthvz
                        </h2>
                      </div>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="block p-3 text-lg font-semibold bg-purple-50  text-purple-800 hover:bg-purple-100  cursor-pointer"
                  >
                    View repositories
                  </a>
                </div>
                <div className="group shadow border rounded-lg bg-gray-800 hover:bg-gray-100 transition duration-200">
                  <div className="flex items-center space-x-4 p-4">
                    <div className="flex items-center p-4 bg-purple-600 text-white rounded-lg">
                      <i className="fab fa-codepen"></i>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-300 font-semibold group-hover:text-gray-500">
                        Codepen Username
                      </p>
                      <div className="flex items-baseline space-x-4">
                        <h2 className="text-2xl font-semibold text-gray-300 group-hover:text-gray-700">
                          pruthvi10
                        </h2>
                      </div>
                    </div>
                  </div>
                  <a
                    href="https://codepen.io/pruthvi10"
                    target="_blank"
                    className="block p-3 text-lg font-semibold bg-purple-50  text-purple-800 hover:bg-purple-100  cursor-pointer"
                  >
                    View Pens
                  </a>
                </div>
                <div className="group shadow border rounded-lg bg-gray-800 hover:bg-gray-100 transition duration-200">
                  <div className="flex items-center space-x-4 p-4">
                    <div className="flex items-center p-4 bg-purple-600 text-white rounded-lg">
                      <i className="fab fa-twitter"></i>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-300 font-semibold group-hover:text-gray-500">
                        Twitter
                      </p>
                      <div className="flex items-baseline space-x-4">
                        <h2 className="text-2xl font-semibold text-gray-300 group-hover:text-gray-700">
                          justpruthvi
                        </h2>
                      </div>
                    </div>
                  </div>
                  <a
                    href="https://twitter.com/justpruthvi"
                    target="_blank"
                    className="block p-3 text-lg font-semibold bg-purple-50  text-purple-800 hover:bg-purple-100  cursor-pointer"
                  >
                    Follow
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* read blog section */}
        <section
          className="flex items-center justify-center"
          style={{ background: "#1f2937f3", height: "500px" }}
        >
          <div className="text-center" data-aos="fade-up">
            <p className="text-xl font-medium tracking-wider text-gray-300">
              Blogs
            </p>
            <h2 className="mt-6 text-3xl font-bold text-white md:text-5xl">
              Check out my blogs on <br /> Tech, coding and books.
            </h2>

            <div className="flex justify-center mt-8">
              <Link href="/blogs">
                <a className="px-8 py-2 text-lg font-medium text-white transition-colors duration-300 transform bg-purple-600 rounded hover:bg-purple-800">
                  Read Blogs
                </a>
              </Link>
            </div>
          </div>
        </section>

        <section id={styles.services} className="bg-gray-800">
          <div className="container mx-auto">
            <div className="text-4xl font-bold pt-16 pb-5 text-white text-center">
              <h1>Languages, Frameworks I know.</h1>
            </div>
          </div>
          <div className="container pt-10 mx-auto">
            <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
              {/* for loop */}
              {Project.languages.map(function (lang, index) {
                return (
                  // lang cards
                  <div className="p-2" key={index} data-aos="fade-up">
                    <div className="group bg-gray-900  p-6 rounded-lg shadow-lg transition duration-200 hover:bg-gray-200 transform hover:scale-105">
                      <h2 className="text-2xl font-bold mb-2 text-gray-100 group-hover:text-gray-800">
                        {lang.language}
                      </h2>
                      <p className="text-gray-400 group-hover:text-gray-700">
                        {lang.desc}
                      </p>
                    </div>
                  </div>
                  // end cards
                );
              })}
              {/* end for loop */}
            </div>
          </div>
        </section>

        <script type="text/javascript">AOS.init();</script>
      </div>
    </div>
  );
}
