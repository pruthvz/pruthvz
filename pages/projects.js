import React from "react";
// Components
import Project from "../components/Projects";

function projects() {
  return (
    <div>
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
    </div>
  );
}

export default projects;
