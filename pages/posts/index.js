import AllPosts from "@/components/posts/all-posts";
import { getAllPosts } from "@/lib/posts-util";
import React from "react";
import Head from "next/head";

const AllPostsPage = (props) => {
  return (
    <>
    <Head>
      <title>All posts</title>
      <meta name='description' content="All posts" />
    </Head>
      <AllPosts posts={props.posts} />
    </>
  );
};

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
