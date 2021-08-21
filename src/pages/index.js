import { getPostsData } from "../../data";

export default function Home({ postsData }) {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-900">My Blog</h1>
      <div>
        {postsData.map((post, index) => {
          return (
            <div key={index}>
              {post.data.title}
              {post.data.description}
            </div>
          );
        })}
      </div>
    </div>
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
