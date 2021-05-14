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

      <section className="timeli">
        <div class="relative w-1/2 m-8">
          <div
            class="border-r-2 border-gray-500 absolute h-full top-0"
            style={{ left: "15px;" }}
          ></div>
          <ul class="list-none m-0 p-0">
            <li class="mb-2">
              <div class="flex items-center mb-1">
                <div class="bg-gray-500 rounded-full h-8 w-8"></div>
                <div class="flex-1 ml-4 font-medium">
                  Oct 2017 - First Release
                </div>
              </div>
              <div class="ml-12">First release of Tailwind CSS</div>
            </li>
            <li class="mb-2">
              <div class="flex items-center mb-1">
                <div class="bg-gray-500 rounded-full h-8 w-8"></div>
                <div class="flex-1 ml-4 font-medium">
                  Nov 2017 - Multiple Releases
                </div>
              </div>
              <div class="ml-12">v0.1.0 - v0.2.2</div>
            </li>
            <li class="mb-2">
              <div class="flex items-center mb-1">
                <div class="bg-gray-500 rounded-full h-8 w-8"></div>
                <div class="flex-1 ml-4 font-medium">
                  Feb 2018 - Other stuff happened
                </div>
              </div>
              <div class="ml-12">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
                perspiciatis facilis deserunt excepturi sunt pariatur
                consequuntur eveniet molestias ea quia? Magni veniam illo optio
                tempora modi exercitationem qui adipisci ex.
              </div>
            </li>
            <li class="mb-2">
              <div class="flex items-center mb-1">
                <div class="bg-gray-500 rounded-full h-8 w-8"></div>
                <div class="flex-1 ml-4 font-medium">
                  July 2018 - More stuff happened
                </div>
              </div>
              <div class="ml-12">
                Consequuntur odit explicabo officiis veniam incidunt non velit
                ex consectetur magnam minima vero hic impedit cumque, blanditiis
                autem distinctio facere dolor atque facilis, eos, labore sunt
                iusto. Beatae, quas, dolorem?
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default About;
