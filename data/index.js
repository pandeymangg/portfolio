import fs from "fs";
import path from "path";

const directory = path.join(process.cwd(), "/data/posts");

export const getAllPosts = () => {
  const allPosts = fs.readdirSync(directory);
  return allPosts;
};

export const getSinglePost = (slug) => {
  const fileContent = fs.readFileSync(path.join(directory, `${slug}.md`)).toString()
  return fileContent
};
