import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const directory = path.join(process.cwd(), '/data/posts');

export const getPostsData = () => {
  const allPosts = fs.readdirSync(directory);
  const fileContents = allPosts.map((fileName) => {
    const contents = fs
      .readFileSync(path.join(directory, `${fileName}`))
      .toString();

    const { data, content } = matter(contents);
    const fileSlug = fileName.replace('.md', '');
    return {
      data,
      content,
      slug: fileSlug,
    };
  });

  return fileContents;
};

export const getAllPosts = () => {
  const allPosts = fs.readdirSync(directory);
  return allPosts;
};

export const getSinglePost = (slug: string) => {
  const fileContent = fs
    .readFileSync(path.join(directory, `${slug}.md`))
    .toString();
  return fileContent;
};
