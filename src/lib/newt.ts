// ref: https://www.newt.so/docs/tutorials/get-contents-in-nextjs
import type { Post } from "@/types/Post";
import { createClient } from "newt-client-js";

const client = createClient({
  spaceUid: process.env.NEWT_SPACE_UID + "",
  token: process.env.NEWT_CDN_API_TOKEN + "",
  apiType: "cdn",
});

export const getPosts = async () => {
  const { items } = await client.getContents<Post>({
    appUid: "blog2",
    modelUid: "post",
    query: {
      select: ["_id", "title", "slug", "body"],
    },
  });
  return items;
};

export const getPostBySlug = async (slug: string) => {
  const article = await client.getFirstContent<Post>({
    appUid: "blog2",
    modelUid: "post",
    query: {
      slug,
      select: ["_id", "title", "slug", "body"],
    },
  });
  return article;
};
