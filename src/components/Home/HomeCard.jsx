import React from "react";
import DatePill from "./DatePill";

const HomeCard = ({ post }) => {
  return (
    <div className="w-full h-auto flex flex-col items-start mb-8 cursor-pointer">
      <div className="flex justify-between items-center w-full mb-2">
        <h4 className="text-lg md:text-xl text-gray-900 font-medium">
          {post.data.title}
        </h4>
        <DatePill date={post.data.date} />
      </div>
      <div>
        <p className="text-gray-600 ">{post.data.description}</p>
      </div>
    </div>
  );
};

export default HomeCard;
