import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import imageUrlBuilder from "@sanity/image-url";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Home({ posts }) {
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
  return (
    <div>
      <Head>
        <title>Homepage</title>
      </Head>
      <div className={styles.main}>
        <h1>Welcome To My Blogs</h1>

        <h3>Recent Blogs:</h3>
        <div className={styles.feed}>
          {mappedPosts.length ? (
            mappedPosts.map((p, index) => (
              <div
                className={styles.post}
                key={index}
                onClick={() => router.push(`/post/${p.slug.current}`)}
              >
                <h3>{p.title}</h3>
                <img className={styles.mainImage} src={p.mainImage} />
              </div>
            ))
          ) : (
            <> No Posts Yet </>
          )}
        </div>
      </div>
    </div>
  );
}

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
