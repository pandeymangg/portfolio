import { getPostsData } from "../../../data";
import Layout from "../../components/Layout";
import Blog from "../../components/Blog";
import Header from "../../components/Header";

export default function BlogPage({ postsData }) {
  return (
    <Layout docTitle="Blog" metaDescription="Blogs by Anshuman Pandey">
      <Header />
      <Blog postsData={postsData} />
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
