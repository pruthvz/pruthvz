import { useState, useEffect } from "react";
import styles from "../../styles/Post.module.css";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import Head from "next/head";

const Post = ({ title, body, image }) => {
  const [imageUrl, setImageUrl] = useState("");
  useEffect(() => {
    const imgBuilder = imageUrlBuilder({
      projectId: "lmpi301g",
      dataset: "production",
    });

    setImageUrl(imgBuilder.image(image));
  }, [image]);

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={styles.main}>
        <h1>{title}</h1>
        {imageUrl && <img src={imageUrl} className={styles.mainImage} />}

        <div className={styles.body}>
          <BlockContent blocks={body} />
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;

  //   404 page
  if (!pageSlug) {
    return {
      notFound: true,
    };
  }

  const query = encodeURIComponent(
    `*[ _type == "post" && slug.current == "${pageSlug}" ]`
  );
  const url = `https://lmpi301g.api.sanity.io/v1/data/query/production?query=${query}`;

  const result = await fetch(url).then((res) => res.json());
  const post = result.result[0];

  if (!post) {
    return {
      notFound: true,
    };
  } else {
    return {
      props: {
        body: post.body,
        title: post.title,
        image: post.mainImage,
      },
    };
  }
};

export default Post;
