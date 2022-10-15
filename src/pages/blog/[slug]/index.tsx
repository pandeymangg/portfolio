import React from 'react';
import { getAllPosts, getSinglePost } from '../../../../data';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import Layout from '../../../components/Layout';
import Header from '../../../components/Header';
import BlogPost from '../../../components/Blog/BlogPost';
import { GetStaticProps, GetStaticPaths } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';

interface IParams extends ParsedUrlQuery {
  slug: string;
}

interface IPostProps {
  data: {
    [key: string]: any;
  };
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
}

export default function Post({ data, source }: IPostProps) {
  return (
    <Layout docTitle={data.title} metaDescription={data.description}>
      <>
        <Header />
        <BlogPost data={data} source={source} />
      </>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { params } = ctx;
  const { slug } = params as IParams;
  const content = getSinglePost(slug);
  const matterContent = matter(content);
  const mdxSource = await serialize(matterContent.content);

  return {
    props: { data: matterContent.data, source: mdxSource },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const files = getAllPosts();
  const paths = files.map((fileName) => {
    return {
      params: {
        slug: fileName.replace('.md', ''),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};
