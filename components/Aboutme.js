import React from "react";
import styles from "../styles/Home.module.css";

function Aboutme() {
  return (
    <div>
      <section id={styles.about} className="p-5 md:p-32">
        {/* <span className="m-1 text-2xl md:text-l">Hi my name is</span> */}
        <span className="m-1 text-2xl md:text-l">Hello 👋, I'm</span>
        <h1 className="mt-6 text-5xl font-bold text-white md:text-8xl">
          Pruthvi Mohanlal.
        </h1>

        <h2 className="mt-6 text-4xl font-bold md:text-6xl">
          I build things on the web for jokes. <i class="fas fa-smile-wink"></i>
        </h2>
        <p className="mt-1">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
          nostrum magni quos, placeat, impedit odit corrupti obcaecati sequi,
          odio adipisci distinctio accusantium quas quibusdam maxime omnis animi
          molestiae cum itaque. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Atque nostrum magni quos, placeat, impedit odit
          corrupti obcaeca ti sequi, odio adipisci distinctio accusantium quas
          quibusdam maxime omnis animi molestiae cum itaque.
        </p>
        <p className="mt-1">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
          nostrum magni quos, placeat, impedit odit corrupti obcaecati sequi,
          odio adipisci distinctio accusantium quas quibusdam maxime omnis animi
          molestiae cum itaque. Lorem ipsum dolor, sit amet consectetur
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
    </div>
  );
}

export default Aboutme;
