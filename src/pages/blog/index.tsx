import { getPostsData } from '../../../data';
import Layout from '../../components/Layout';
import Blog from '../../components/Blog';
import Header from '../../components/Header';

interface IBlogPostProps {
  postsData: {
    data: {
      [key: string]: any;
    };
    content: string;
    slug: string;
  }[];
}

export default function BlogPage({ postsData }: IBlogPostProps) {
  return (
    <Layout docTitle='Blog' metaDescription='Blogs by Anshuman Pandey'>
      <>
        <Header />
        <Blog postsData={postsData} />
      </>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const postsData = getPostsData();
  return {
    props: {
      postsData,
    },
  };
};
