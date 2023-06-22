import Head from "next/head";

import { Inter } from "next/font/google";
import Hero from "../components/home-page/hero";
import FeaturedPost from "@/components/home-page/featured-posts";
import { getFeaturedPosts } from "@/lib/posts-util";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  // Hero section => Present ourselves
  // Featured Posts
  return (
    <>
      <main>
        <Hero />
        <FeaturedPost posts={props.posts} />
      </main>
    </>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}
