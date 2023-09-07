import React from "react";
import CategoryContent from "../../../components/CategoryContent";

export const getStaticParams = async () => {
  const domain = process.env.API_DOMAIN;
  const res = await fetch(domain + "/api/category/").then((res) => res.json());
  const posts = await res.json();
  return posts.map((post) => ({
    slug: post.categorySlug,
  }));
}

const getData = async (slug) => {
  const domain = process.env.API_DOMAIN;
  const res = await fetch(domain + "/api/category/" + slug, { cache: "no-cache" });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export const generateMetadata = async ({ params: { slug } }, parent) => {
  const postData = await getData(slug);
  const post = postData[0];

  return {
    title: "Disney Dreamer's Guide : " + post.category,
    description: post.category + " Category",
    openGraph: {
      url: "https://disneydreamersguide.com/category/" + post.categorySlug,
      title: "Disney Dreamer's Guide : " + post.category,
      description: post.category + " Category",
      type: "website",
    },
    twitter: {
      cardType: "summary_large_image",
    },
  };
}

export const Category = async ({ params: { slug } }) => {
  const posts = await getData(slug);

  return <CategoryContent posts={posts} />;
}

export default Category;
