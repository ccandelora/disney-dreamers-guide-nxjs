import React from "react";
import ReactMarkdown from "react-markdown";
import { InformationCircleIcon } from "@heroicons/react/20/solid";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Image from "next/image";
import FbShare from "../../../components/FbShare";
import RedditShare from "../../../components/RedditShare";
import TwitterShare from "../../../components/TwitterShare";


async function getData(slug) {
  const api = "http://localhost:3000/api/post/" + slug;
  const res = await fetch(api);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function generateMetadata({ params: { slug } }, parent) {
  const postData = await getData(slug);
  const post = postData[0];
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: post.title + " | Disney Dreamer's Guide",
    description: post.description,
    openGraph: {
      images: [
        {
          url: "https://cdn.disneydreamersguide.com/uploads/" + post.fileName,
          width: 800,
          height: 600,
          alt: post.title,
        },
        ...previousImages,
      ],
      url: "https://disneydreamersguide.com/post/" + post.slug,
      title: post.title,
      description: post.description,
      type: "article",
      article: {
        publishedTime: post.date,
        modifiedTime: post.date,
        section: post.category,
        authors: ["https://disneydreamersguide.com/author/" + post.author],
        tags: [post.category],
      },
    },
    twitter: {
      cardType: "summary_large_image",
    },
    additionalMetaTags: [
      {
        property: "article:published_time",
        content: post.date,
      },
      {
        property: "article:modified_time",
        content: post.date,
      },
      {
        property: "article:section",
        content: post.category,
      },
      {
        property: "article:tag",
        content: post.category,
      },
    ],
  };
}

const Post = async ({ params: { slug } }) => {
  const postData = await getData(slug);
  const post = postData[0];
  return (
    <>
      <div className="bg-page-pattern">
        <Navbar />
        <div className="bg-white px-6 py-8 lg:px-8">
          <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
            <p className="text-base font-semibold leading-7 text-indigo-600">
              {post.category}
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl">
              {post.title}
            </h1>
            <figure className="mt-16">
              <Image
                className="aspect-video rounded-xl bg-gray-50 object-cover"
                src={
                  "https://cdn.disneydreamersguide.com/uploads/" + post.fileName
                }
                alt={post.alt}
                width={700}
                height={467}
              />
              <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
                <InformationCircleIcon
                  className="mt-0.5 h-5 w-5 flex-none text-gray-300"
                  aria-hidden="true"
                />
                {console.log(post)}
                <a href={post.photographerUrl}>Photo by {post.photographer}</a>
              </figcaption>
            </figure>
            <FbShare post={post} />
            <RedditShare post={post} />
            <TwitterShare post={post} />
            <ReactMarkdown>{post.body}</ReactMarkdown>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Post;