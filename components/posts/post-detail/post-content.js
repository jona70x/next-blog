import React from "react";
import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const PostContent = ({ post }) => {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown
        components={{
          img: ({ node, ...props }) => (
            <Image
              src={`/images/posts/${post.slug}/${props.src}`}
              alt={props.alt}
              width={600}
              height={400}
            />
          ),
          code: ({ node, ...props }) => {
            return (
              <SyntaxHighlighter
                language="javascript"
                style={atomDark}
                {...props}
              />
            );
          },
        }}
      >
        {post.content}
      </ReactMarkdown>
    </article>
  );
};

export default PostContent;
