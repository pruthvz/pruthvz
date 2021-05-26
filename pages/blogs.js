import styles from "../styles/Home.module.css";
import imageUrlBuilder from "@sanity/image-url";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import BlockContent from "@sanity/block-content-to-react";

const Blogs = ({ posts }) => {
  const router = useRouter();
  const [mappedPosts, setMappedPosts] = useState([]);

  useEffect(() => {
    if (posts.length) {
      const imgBuilder = imageUrlBuilder({
        projectId: "lmpi301g",
        dataset: "production",
      });

      setMappedPosts(
        posts.map((p) => {
          return {
            ...p,
            mainImage: imgBuilder.image(p.mainImage).width(500).height(250),
          };
        })
      );
    } else {
      setMappedPosts([]);
    }
  }, [posts]);

  let hashtags = [
    "Python",
    "JavaScript",
    "C#",
    "Django",
    "React.js",
    "Next.js",
    "Bootstrap",
    "TailwindCSS",
    "Material Design Bootstrap",
  ];

  return (
    <div>
      <Head>
        <title>My Latest Blogs</title>
      </Head>
      <header className="bg-gray-800" x-data="{ isOpen: false }">
        <section
          className="flex items-center justify-center"
          style={{ height: "400px" }}
        >
          <div className="text-center">
            <p className="text-xl font-medium tracking-wider text-gray-300 ">
              My Blogs
            </p>
            <h2 className="mt-6 text-3xl font-bold text-white md:text-5xl">
              Blogs on Tech, Books, <br /> and Programming
            </h2>

            <div className="flex justify-center mt-8">
              <a
                className="px-8 py-2 text-lg font-medium text-white  transition-colors duration-300 transform bg-purple-600 rounded hover:bg-purple-500"
                href="#"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </section>
      </header>

      <div className={styles.feed}>
        <h1
          className="font-semibold mx-auto rounded-pill p-2 text-center text-sm font-normal  mt-0 mb-2 bg-gray-800 text-white transition-colors duration-300 hover:bg-purple-600"
          id="subTitle"
        >
          LATEST BLOG POSTS
        </h1>
        {mappedPosts.length ? (
          mappedPosts.map((p, index) => (
            <div
              className={styles.post}
              className="p-3 md:p-2"
              key={index}
              onClick={() => router.push(`/post/${p.slug.current}`)}
            >
              <div
                className="max-w-4xl mx-auto  overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 hover:shadow-lg"
                id="blogCard"
              >
                <img
                  className="object-cover w-full h-64"
                  src={p.mainImage}
                  alt="Article"
                />

                <div className="p-6">
                  <div>
                    <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
                      Technology
                    </span>
                    <a
                      href="#"
                      className="block mt-2 text-2xl font-semibold text-gray-800 dark:text-white hover:text-gray-600 hover:underline"
                    >
                      {p.title}
                    </a>
                    <p
                      className="mt-2 text-sm text-gray-600 dark:text-gray-400 "
                      id="blogContent"
                    >
                      <BlockContent className="max-w-xs" blocks={p.body} />
                    </p>
                  </div>

                  <div className="mt-4">
                    <div className="flex items-center">
                      <div className="flex items-center">
                        <img
                          className="object-cover h-10 rounded-full"
                          src="https://pbs.twimg.com/profile_images/1370181365669453825/UVvg8XqH_400x400.jpg"
                          alt="Avatar"
                        />
                        <a
                          href="#"
                          className="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                        >
                          Pruthvi Mohanlal
                        </a>
                      </div>
                      <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">
                        {p._createdAt}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <br />
            </div>
          ))
        ) : (
          <> No Posts Yet </>
        )}
      </div>
      <div className="p-1">
        <div className="mb-5 max-w-md mx-auto bg-gray-800  rounded-xl shadow-md overflow-hidden md:max-w-6xl">
          <div className="md:flex">
            <div className="p-8">
              <div className="uppercase tracking-wide text-lg text-white font-bold">
                Tags
              </div>
              {hashtags.map(function (tag, index) {
                return (
                  <span
                    className="mt-2 inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-white bg-purple-600 rounded-full"
                    key={index}
                  >
                    {tag}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

export const getServerSideProps = async (pageContext) => {
  const query = encodeURIComponent('*[ _type == "post" ]');
  const url = `https://lmpi301g.api.sanity.io/v1/data/query/production?query=${query}`;
  const result = await fetch(url).then((res) => res.json());

  if (!result.result || !result.result.length) {
    return {
      props: {
        posts: [],
      },
    };
  } else {
    return {
      props: {
        posts: result.result,
      },
    };
  }
};
