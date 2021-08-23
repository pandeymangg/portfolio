import { getPostsData } from "../../../data";
import Layout from "../../components/Layout";
import Home from "../../components/Home";
import Header from "../../components/Header";

export default function HomePage({ postsData }) {
  return (
    <Layout docTitle="Blog" metaDescription="Blogs by Anshuman Pandey">
      <Header />
      <Home postsData={postsData} />
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
