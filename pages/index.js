import Head from "next/head";
import styles from "../styles/Home.module.css";
import TypeIt from "typeit-react";

// Components
import Project from "../components/Projects";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pruthvi Mohanlal | Portfolio</title>
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
                Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit
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
        <section id={styles.about} className="p-5 md:p-32">
          {/* <span className="m-1 text-2xl md:text-l">Hi my name is</span> */}
          <TypeIt
            element={"span"}
            className="m-1 text-2xl md:text-l"
            options={{
              speed: 50,
            }}
            getBeforeInit={(instance) => {
              instance
                .type("Hello there,")
                .pause(750)
                .delete()
                .pause(500)
                .type("My name is");

              // Remember to return it!
              return instance;
            }}
          />
          <h1 className="mt-6 text-5xl font-bold text-white md:text-8xl">
            Pruthvi Mohanlal.
          </h1>

          <h2 className="mt-6 text-4xl font-bold md:text-6xl">
            I build things on the web for jokes.{" "}
            <i class="fas fa-smile-wink"></i>
          </h2>
          <p className="mt-1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
            nostrum magni quos, placeat, impedit odit corrupti obcaecati sequi,
            odio adipisci distinctio accusantium quas quibusdam maxime omnis
            animi molestiae cum itaque. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Atque nostrum magni quos, placeat, impedit odit
            corrupti obcaeca ti sequi, odio adipisci distinctio accusantium quas
            quibusdam maxime omnis animi molestiae cum itaque.
          </p>
          <p className="mt-1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
            nostrum magni quos, placeat, impedit odit corrupti obcaecati sequi,
            odio adipisci distinctio accusantium quas quibusdam maxime omnis
            animi molestiae cum itaque. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Atque nostrum magni quos, placeat, impedit odit
            corrupti obcaeca ti sequi, odio adipisci distinctio accusantium quas
            quibusdam maxime omnis animi molestiae cum itaque.
          </p>

          <div className={styles.btn}>
            <a
              href="#"
              className="btn bg-purple-700 p-2  rounded mt-5 text-1xl md:text-2xl pl-10 pr-10 transition-colors duration-300 hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-300 "
            >
              Resume <i class="fas fa-arrow-alt-to-bottom"></i>
            </a>

            {/* <a
              href="#"
              className="btn ml-2 bg-white text-black p-2 rounded mt-5 text-1xl md:text-2xl pl-10 pr-10 transition-colors duration-300 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-900"
            >
              <i class="fas fa-download"></i> Resume
            </a> */}
          </div>
        </section>

        {/* THESE CARDS CAN BE SIMPELY LOOPED  */}
        <section className="bg-gray-800 pt-5 pb-5" id={styles.skills}>
          <div className="container">
            <div className="text-4xl font-bold pt-12 text-white text-center">
              <h1>Skills</h1>
            </div>
          </div>
          <div className="p-5 md:p-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            <div className="group max-w-2xl rounded-lg mx-auto p-10 md:p-16 transform transition duration-200 hover:scale-105 hover:shadow-md ring-2 ring-purple-200 hover:bg-white">
              <h1 className="text-2xl font-medium mb-2 text-white group-hover:text-black">
                Let's build with Tailwind css
              </h1>
              <h2 className="font-medium text-sm text-purple-600 mb-4 uppercase tracking-wide">
                Responsive web
              </h2>
              <p className="text-gray-400 group-hover:text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                dicta praesentium, sunt ipsa non amet ab fugiat illum distinctio
                enim consequatur sapiente sequi iste ex rerum, quaerat accusamus
                at dolorum!
              </p>
            </div>
            <div className="group max-w-2xl rounded-lg mx-auto p-10 md:p-16  transform transition duration-200 hover:scale-105 hover:shadow-md ring-2 ring-purple-200 hover:bg-white">
              <h1 className="text-2xl font-medium mb-2 text-white group-hover:text-black">
                Let's build with Tailwind css
              </h1>
              <h2 className="font-medium text-sm text-purple-600 mb-4 uppercase tracking-wide">
                Responsive web
              </h2>
              <p className="text-gray-400 group-hover:text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                dicta praesentium, sunt ipsa non amet ab fugiat illum distinctio
                enim consequatur sapiente sequi iste ex rerum, quaerat accusamus
                at dolorum!
              </p>
            </div>
            <div className="group max-w-2xl rounded-lg mx-auto p-10 md:p-16 transform transition duration-200 hover:scale-105 hover:shadow-md ring-2 ring-purple-200 hover:bg-white">
              <h1 className="text-2xl font-medium mb-2 text-white group-hover:text-black">
                Let's build with Tailwind css
              </h1>
              <h2 className="font-medium text-sm text-purple-600 mb-4 uppercase tracking-wide">
                Responsive web
              </h2>
              <p className="text-gray-400 group-hover:text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                dicta praesentium, sunt ipsa non amet ab fugiat illum distinctio
                enim consequatur sapiente sequi iste ex rerum, quaerat accusamus
                at dolorum!
              </p>
            </div>
          </div>
        </section>

        <section
          className="pt-32 pb-32"
          id={styles.skills}
          style={{ background: "#1f2937f3" }}
        >
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap w-full mb-20">
              <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 className="sm:text-4xl text-2xl font-medium title-font mb-2 text-gray-200 font-bold">
                  My Personal Projects
                </h1>
                <div className="h-1 w-20 bg-purple-500 rounded"></div>
              </div>
              <p className="lg:w-1/2 w-full leading-relaxed text-gray-400 pr-10">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Accusantium magni fugit iste natus rerum repellat deleniti. Nam
                sint perferendis, sit magnam odit laborum reprehenderit quo
                tempore, eos saepe exercitationem autem!
              </p>
            </div>
            {/* start of cards */}
            <div className="flex flex-wrap -m-4">
              <div className="xl:w-1/4  md:w-1/2 p-4">
                <div className="bg-gray-900 bg-opacity-100 p-6 rounded-lg transform hover:scale-105 transition duration-300 cursor-auto">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src="https://ichef.bbci.co.uk/news/976/cpsprodpb/12541/production/_118437057_hi065824880.jpg"
                    alt="content"
                  />
                  <h3 className="tracking-widest text-purple-500 text-xs font-medium title-font">
                    SUBTITLE
                  </h3>
                  <h2 className="text-lg text-gray-200 font-medium title-font mb-4">
                    Chichen Itza
                  </h2>
                  <p className="leading-relaxed text-base text-gray-400">
                    Fingerstache flexitarian street art 8-bit waistcoat.
                    Distillery hexagon disrupt edison bulbche.
                  </p>
                  {/* CODE ICONS */}
                  <div className="row pt-2 text-purple-500 text-lg ">
                    <a href="#">
                      <i className="fas fa-globe transform transition duration-300 hover:text-purple-200 hover:scale-110"></i>
                    </a>
                    <a href="#">
                      <i className="fas fa-code pl-2 transform transition duration-300 hover:text-purple-200 hover:scale-110"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-900 bg-opacity-100 p-6 rounded-lg transform hover:scale-105 transition duration-300 cursor-auto">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src="https://ichef.bbci.co.uk/news/976/cpsprodpb/12541/production/_118437057_hi065824880.jpg"
                    alt="content"
                  />
                  <h3 className="tracking-widest text-purple-500 text-xs font-medium title-font">
                    SUBTITLE
                  </h3>
                  <h2 className="text-lg text-gray-200 font-medium title-font mb-4">
                    Chichen Itza
                  </h2>
                  <p className="leading-relaxed text-base text-gray-400">
                    Fingerstache flexitarian street art 8-bit waistcoat.
                    Distillery hexagon disrupt edison bulbche.
                  </p>
                  {/* CODE ICONS */}
                  <div className="row pt-2 text-purple-500 text-lg ">
                    <a href="#">
                      <i className="fas fa-globe transform transition duration-300 hover:text-purple-200 hover:scale-110"></i>
                    </a>
                    <a href="#">
                      <i className="fas fa-code pl-2 transform transition duration-300 hover:text-purple-200 hover:scale-110"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-900 bg-opacity-100 p-6 rounded-lg transform hover:scale-105 transition duration-300 cursor-auto">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src="https://ichef.bbci.co.uk/news/976/cpsprodpb/12541/production/_118437057_hi065824880.jpg"
                    alt="content"
                  />
                  <h3 className="tracking-widest text-purple-500 text-xs font-medium title-font">
                    SUBTITLE
                  </h3>
                  <h2 className="text-lg text-gray-200 font-medium title-font mb-4">
                    Chichen Itza
                  </h2>
                  <p className="leading-relaxed text-base text-gray-400">
                    Fingerstache flexitarian street art 8-bit waistcoat.
                    Distillery hexagon disrupt edison bulbche.
                  </p>
                  {/* CODE ICONS */}
                  <div className="row pt-2 text-purple-500 text-lg ">
                    <a href="#">
                      <i className="fas fa-globe transform transition duration-300 hover:text-purple-200 hover:scale-110"></i>
                    </a>
                    <a href="#">
                      <i className="fas fa-code pl-2 transform transition duration-300 hover:text-purple-200 hover:scale-110"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-900 bg-opacity-100 p-6 rounded-lg transform hover:scale-105 transition duration-300 cursor-auto">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src="https://ichef.bbci.co.uk/news/976/cpsprodpb/12541/production/_118437057_hi065824880.jpg"
                    alt="content"
                  />
                  <h3 className="tracking-widest text-purple-500 text-xs font-medium title-font">
                    SUBTITLE
                  </h3>
                  <h2 className="text-lg text-gray-200 font-medium title-font mb-4">
                    Chichen Itza
                  </h2>
                  <p className="leading-relaxed text-base text-gray-400">
                    Fingerstache flexitarian street art 8-bit waistcoat.
                    Distillery hexagon disrupt edison bulbche.
                  </p>
                  {/* hashtags if they look bad delete it */}
                  <div class="mt-3">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #photography
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #travel
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #fall
                    </span>
                  </div>
                  {/* hashtags */}

                  {/* CODE ICONS */}
                  <div className="row pt-2 text-purple-500 text-lg ">
                    <a href="#">
                      <i className="fas fa-globe transform transition duration-300 hover:text-purple-200 hover:scale-110"></i>
                    </a>
                    <a href="#">
                      <i className="fas fa-code pl-2 transform transition duration-300 hover:text-purple-200 hover:scale-110"></i>
                    </a>
                  </div>
                </div>
              </div>
              {/* end of cards */}
            </div>
          </div>
          <div className="flex justify-center mt-1">
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
          <div class="flex items-center justify-center">
            <div class="p-4 rounded w-full">
              <div class="md:grid md:grid-cols-3 md:gap-4 space-y-4 md:space-y-0 mt-4 ">
                <div class="group shadow border rounded-lg bg-gray-800 hover:bg-gray-100 transition duration-200  ">
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
              </div>
            </div>
          </div>
        </section>

        {/* read blog section */}
        <section
          className="flex items-center justify-center"
          style={{ background: "#1f2937f3", height: "500px" }}
        >
          <div className="text-center">
            <p className="text-xl font-medium tracking-wider text-gray-300">
              Blogs
            </p>
            <h2 className="mt-6 text-3xl font-bold text-white md:text-5xl">
              Check out my blogs. <br /> Tech, coding and books.
            </h2>

            <div className="flex justify-center mt-8">
              <a
                className="px-8 py-2 text-lg font-medium text-white transition-colors duration-300 transform bg-purple-600 rounded hover:bg-purple-800"
                href="#"
              >
                Read Blogs
              </a>
            </div>
          </div>
        </section>

        <section id={styles.services} className="bg-gray-800">
          <div className="container">
            <div className="text-4xl font-bold pt-16 pb-5 text-white text-center">
              <h1>Languages, Frameworks I know.</h1>
            </div>
          </div>
          <div className="container pt-10">
            <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
              {/* for loop */}
              {Project.languages.map(function (lang, index) {
                return (
                  // lang cards
                  <div class="p-2" key={index}>
                    <div class="group bg-gray-900  p-6 rounded-lg shadow-lg transition duration-300 hover:bg-gray-200 transform hover:scale-105">
                      <h2 class="text-2xl font-bold mb-2 text-gray-100 group-hover:text-gray-800">
                        {lang.language}
                      </h2>
                      <p class="text-gray-400 group-hover:text-gray-700">
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
      </div>
    </div>
  );
}
