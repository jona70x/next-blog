import React from "react";
import PostContent from "@/components/posts/post-detail/post-content";
import Head from "next/head";
import { getPostData, getPostsFiles } from "@/lib/posts-util";

const PostPageDetail = (props) => {
  const { post } = props;
  return (
    <>
      <Head>
        <title>{post.title} </title>
        <meta name="description" content={props.excerpt} />
      </Head>
      <PostContent post={post} />
    </>
  );
};

export default PostPageDetail;

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFileNames = getPostsFiles();

  const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}
