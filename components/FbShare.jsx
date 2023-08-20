"use client";
import { FacebookShareButton, FacebookIcon } from "next-share";

export default function FbShare(props) {
  const post  = props.post;
  return (
    <FacebookShareButton
      url={"https://www.disneydreamersguide.com/post/" + post.slug}
      quote={"next-share is a social share buttons for your next React apps."}
      hashtag={"#disneydreamersguide"}
      title={post.title}
      description={post.description}
      image={"https://cdn.disneydreamersguide.com/uploads/" + post.fileName}
    >
      <FacebookIcon size={32} round />
    </FacebookShareButton>
  );
}
