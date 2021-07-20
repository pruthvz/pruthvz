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
      <div className="mx-auto pt-10 pb-20 bg-gray-700">
        <main class="mt-10 container mx-auto ">
          <div class="mb-4 md:mb-0 w-full mx-auto relative">
            <div class="px-4 lg:px-0">
              <h2 class="pb-2 text-4xl font-semibold text-gray-100  leading-tight">
                {title}
              </h2>
            </div>

            {imageUrl && (
              <img
                src={imageUrl}
                className="w-full object-cover lg:rounded"
                style={{ height: "28em" }}
              />
            )}
          </div>

          <div class="flex flex-col lg:flex-row lg:space-x-12">
            <div class="px-4 lg:px-0 mt-12 text-gray-100 text-lg leading-relaxed w-full lg:w-3/4">
              <p class="pb-6">
                <BlockContent blocks={body} />
              </p>
            </div>

            <div class="w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm">
              <div class="p-4 border-t border-b md:border md:rounded">
                <div class="flex py-2">
                  <img
                    src="https://pbs.twimg.com/profile_images/1370181365669453825/UVvg8XqH_400x400.jpg"
                    class="h-10 w-10 rounded-full mr-2 object-cover"
                  />
                  <div>
                    <p class="font-semibold text-gray-300 text-sm">
                      {" "}
                      Pruthvi Mohanlal{" "}
                    </p>
                    <p class="font-semibold text-gray-400  text-xs">
                      {" "}
                      Programmer{" "}
                    </p>
                  </div>
                </div>
                <p class="text-gray-200 py-3">
                  I am Pruthvi, I write short blogs about web technologies,
                  books and programming in general.
                </p>
                <a
                  href="https://twitter.com/justpruthvi"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="px-2 py-1 text-gray-100 bg-purple-700 hover:bg-purple-800 transition duration-200 flex w-full items-center justify-center rounded"
                >
                  Follow
                  <i class="bx bx-user-plus ml-2"></i>
                </a>
              </div>
            </div>
          </div>
        </main>
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
