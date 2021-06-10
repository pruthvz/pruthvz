import Head from "next/head";
import styles from "../styles/Home.module.css";

// Components
import Aboutme from "../components/Aboutme.js";

const About = () => {
  return (
    <div>
      <Head>
        <title>About me | Portfolio</title>
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
                  Lorem Ipsum
                </h3>
                <p class="text-sm leading-snug tracking-wide text-gray-400 text-opacity-100">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
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
                <h3 class="mb-3 font-bold text-white text-xl">Lorem Ipsum</h3>
                <p class="text-sm font-medium leading-snug tracking-wide text-gray-400 text-opacity-100">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
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
                  Lorem Ipsum
                </h3>
                <p class="text-sm leading-snug tracking-wide text-gray-400 text-opacity-100">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
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
                <h3 class="mb-3 font-bold text-white text-xl">Lorem Ipsum</h3>
                <p class="text-sm font-medium leading-snug tracking-wide text-gray-400 text-opacity-100">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
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
