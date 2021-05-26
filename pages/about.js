import Head from "next/head";
import styles from "../styles/About.module.css";

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
        <div class="container bg-gray-700 mx-auto w-full h-full">
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
    </div>
  );
};

export default About;
