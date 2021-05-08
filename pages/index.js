import Head from "next/head";
import styles from "../styles/Home.module.css";

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
                  className="px-8 py-2 text-lg font-medium text-white transition-colors duration-300 transform bg-purple-600 rounded hover:bg-purple-500"
                  href="#"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </section>
        </header>
      </div>
    </div>
  );
}
