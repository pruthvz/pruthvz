import React from "react";
import Head from "next/head";

// Components
import Project from "../components/Projects";

function projects() {
  return (
    <div>
      <Head>
        <title>Projects | Pruthvi Mohanlal</title>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </Head>
      <header className="bg-gray-800" x-data="{ isOpen: false }">
        <section
          className="flex items-center justify-center"
          style={{ height: "350px" }}
        >
          <div className="text-center">
            <p className="text-xl font-medium tracking-wider text-gray-300">
              My Projects
            </p>
            <h2 className="mt-6 text-3xl font-bold text-white md:text-5xl">
              Personal Projects, Client Projects
              <br /> GitHub Contributions
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

      {/* PROJECTS BELOW */}
      <section className="pt-32 pb-32" style={{ background: "#1f2937f3" }}>
        <div className="container px-5 py-24 mx-auto">
          {/* start of cards */}
          <div className="flex flex-wrap -m-4">
            {/* for loop */}
            {Project.myProjects.map(function (project, index) {
              return (
                <div
                  className="xl:w-1/3  md:w-1/2 p-4"
                  data-aos="fade-up"
                  data-aos-offset="100"
                >
                  <div className="bg-gray-900 bg-opacity-100 p-6 rounded-lg transform hover:scale-105 transition duration-300 cursor-auto">
                    <img
                      className="h-40 rounded w-full object-cover object-center mb-6"
                      src={project.img}
                      alt={project.imgAlt}
                    />

                    <h3 className="tracking-widest text-purple-500 text-xs font-medium title-font">
                      {project.subTitle}
                    </h3>
                    <h2 className="text-lg text-gray-200 font-medium title-font mb-4">
                      {project.title}
                    </h2>
                    <p className="leading-relaxed text-base text-gray-400">
                      {project.desc}
                    </p>
                    {/* hashtags if they look bad delete it */}
                    <div class="mt-3 mb-2">
                      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        {project.hash1}
                      </span>
                      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        {project.hash2}
                      </span>
                      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        {project.hash3}
                      </span>
                    </div>
                    {/* hashtags */}
                    <p className={project.margin}></p>
                    {/* CODE ICONS */}
                    <div className="row pt-2 text-purple-500 text-lg">
                      <a href={project.website} target="_blank">
                        <i className="fas fa-globe transform transition duration-300 hover:text-purple-200 hover:scale-110"></i>
                      </a>
                      <a href={project.github} target="_blank">
                        <i className="fas fa-code pl-2 transform transition duration-300 hover:text-purple-200 hover:scale-110"></i>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
            {/* end for loop */}
          </div>
        </div>
      </section>

      <section id="games" className="bg-gray-800 dark:bg-gray-900 pb-14 ">
        <div class=" py-6 flex flex-col justify-center sm:py-20 ">
          <div className="container mx-auto pb-14" data-aos="fade-up">
            <div className="text-4xl font-bold pt-12 text-white text-center">
              <h1>My Mobile Games</h1>
            </div>
          </div>
          <div class="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 px-4">
            <div class=" group bg-gray-900 border-purple-400 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-purple-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
              <img
                class="w-16 h-16 object-cover rounded-3xl"
                src="https://play-lh.googleusercontent.com/T8t5IS1U9OdmAz_abEG3EEFICAGK-ACPmffMyuGGTkbO_PYnhAi_MPdDNybMW0ax-1GI=s180-rw"
                alt=""
              />
              <div class="flex flex-col justify-center">
                <p class="text-gray-100 dark:text-gray-300 font-semibold">
                  Tevoo
                </p>
                <p class="text-gray-300 dark:text-gray-100 text-justify font-semibold group-hover:text-gray-100">
                  Installs : 10+
                </p>
              </div>
            </div>

            <div class="group bg-gray-900 border-purple-400 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-purple-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
              <img
                class="w-16 h-16 object-cover rounded-3xl"
                src="https://play-lh.googleusercontent.com/vNdn7evHek1LW9miGRZXou4VotIpyDoYk8PWB_fO4XZaNqTYvaUpeD0V5pqG9y3_aQ=s180-rw"
                alt=""
              />
              <div class="flex flex-col justify-center">
                <p class="text-gray-100 dark:text-gray-300 font-semibold">
                  Precise Bolter
                </p>
                <p class="text-gray-300 dark:text-gray-100 text-justify font-semibold group-hover:text-gray-100">
                  Installs : 10+
                </p>
              </div>
            </div>

            <div class="group bg-gray-900 border-purple-400 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-purple-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
              <img
                class="w-16 h-16 object-cover rounded-3xl"
                src="https://play-lh.googleusercontent.com/KyCtXP11MeFN8j0zDIv_7SbJ1JuMzD7YIzkPhtFTfJevt2Sf_9Lp0w-Q1dZiAJ_4ts73=s180-rw"
                alt=""
              />
              <div class="flex flex-col justify-center">
                <p class="text-gray-100 dark:text-gray-300 font-semibold">
                  Dazzled Dot
                </p>
                <p class="text-gray-300 dark:text-gray-100 text-justify font-semibold group-hover:text-gray-100">
                  Installs : 5+
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default projects;
