import Head from "next/head";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <div>
      <Head>
        <title>About me</title>
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
      <section id={styles.about}>
        <span>Hi my name is</span>
        <h1>Pruthvi Mohanlal.</h1>

        <h2>I build webistes for jokes.</h2>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
          nostrum magni quos, placeat, impedit odit corrupti obcaecati sequi,
          odio adipisci distinctio accusantium quas quibusdam maxime omnis animi
          molestiae cum itaque.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
          nostrum magni quos, placeat, impedit odit corrupti obcaeca ti sequi,
          odio adipisci distinctio accusantium quas quibusdam maxime omnis animi
          molestiae cum itaque.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
          nostrum magni quos, placeat, impedit odit corrupti obcaecati sequi,
          odio adipisci distinctio accusantium quas quibusdam maxime omnis animi
          molestiae cum itaque.
        </p>
      </section>

      <section className="skills bg-gray-700">
        <div className="container mx-auto">
          <div className="row">
            <div class="grid grid-cols-2 gap-4 p-2  pt-10 pb-10 md:p-10">
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-600 bg-purple-200">
                      React.js
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-purple-600">
                      80%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-200">
                  <div
                    style={{ width: "80%" }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"
                  ></div>
                </div>
              </div>
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-600 bg-purple-200">
                      Next.js
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-purple-600">
                      75%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-200">
                  <div
                    style={{ width: "75%" }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
