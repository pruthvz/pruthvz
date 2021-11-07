import React from "react";
import styles from "../styles/Home.module.css";

function Aboutme() {
  return (
    <div>
      <section id={styles.about} className="p-5 md:p-32">
        {/* <span className="m-1 text-2xl md:text-l">Hi my name is</span> */}
        <span className="m-1 text-2xl md:text">Hello 👋, I'm</span>
        <h1 className="mt-6 text-5xl font-bold text-white md:text-8xl">
          Pruthvi Mohanlal.
        </h1>

        <h2 className="mt-6 text-4xl font-bold md:text-6xl">
          I build things on the web for fun. <i class="fas fa-smile-wink"></i>
        </h2>
        <p className="mt-1">
          I am a 18-year-old self taught developer. I began developing websites
          at the age of 15, and I was astounded by the types of websites I could
          create using only HTML/CSS. When the lockdown was forced, I decided to
          make use of my time by creating video games for fun. I was able to
          develop three very rudimentary working Android games. I'm very
          passionate about game development, web development, machine learning,
          and artificial intelligence. I've worked on few random automation
          tasks, to help me carry out simple and basic tasks, such as web
          scrapping, making tweets.
        </p>
        <p className="mt-1">
          I intend to pursue a degree in computer science at the university
          level. I'd also like to attend a machine learning and artificial
          intelligence boot camp. Personally, I enjoy developing websites. I
          think it's a lot of fun, and I'll keep making fun projects. I want to
          build new and innovative websites from start to finish. My ambition is
          to develop software or a web application that will assist users in
          their daily life. For my side hobbies, I like to play rugby,
          basketball <i class="fas fa-comment-alt-smile"></i>
        </p>

        {/* INCLUDE RESUME LINK HERE */}
        <div className={styles.btn}>
          <a
            href="#"
            className="btn bg-purple-700 p-2  rounded mt-5 text-1xl md:text-2xl pl-10 pr-10 transition-colors duration-300 hover:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-300 "
          >
            Resume <i class="fas fa-arrow-alt-to-bottom"></i>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Aboutme;
