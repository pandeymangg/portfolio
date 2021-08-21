import React from "react";
import { getAllPosts, getSinglePost } from "../../../data";
import matter from "gray-matter";
import Head from "next/head";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

export default function Post({ data, source }) {
  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <div className="prose mx-12 my-12">
        <MDXRemote {...source} />
      </div>
    </>
  );
}

export const getStaticProps = async ({ params: { slug } }) => {
  const content = getSinglePost(slug);
  const matterContent = matter(content);
  const mdxSource = await serialize(matterContent.content);

  return {
    props: { data: matterContent.data, source: mdxSource },
  };
};

export const getStaticPaths = async () => {
  const files = getAllPosts();
  const paths = files.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(".md", ""),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};
