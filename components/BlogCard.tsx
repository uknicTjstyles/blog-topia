// import Image from 'next/image'
import React from "react";

// interface BlogCardProps {
//     source:string,
//    alternative:string,
//    cardCategory:string,
//    cardTitle:string,
//    cardContent:string,
//    authorSource:string,
//    alternativeSource:string,
//    authorName:string,
//    createdAt:string
// }
// React.FC<BlogCardProps>

const BlogCard = ({
  source,
  alternative,
  cardCategory,
  cardTitle,
  cardContent,
  authorSource,
  alternativeSource,
  authorName,
  createdAt,
}: {
  source: string;
  alternative: string;
  cardCategory: string;
  cardTitle: string;
  cardContent: string;
  authorSource: string;
  alternativeSource: string;
  authorName: string;
  createdAt: string;
}) => {
  return (
    <>
      <div className="bg-white p-[1.8rem] shadow-fine flex flex-col space-y-[3rem]">
        <div className="w-full h-48 overflow-hidden rounded-md ">
          <img
            src={source}
            alt={alternative}
            className="w-full h-full object-cover"
          />
        </div>
        <h5 className="text-purple-600 font-bold">{cardCategory}</h5>
        <h1 className="text-lg font-bold">{cardTitle}</h1>
        <p className="text-sm text-gray-600">{cardContent}</p>
        <div className="flex items-center space-x-4">
          <img
            src={authorSource}
            alt={alternativeSource}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="text-sm font-bold">{authorName}</h3>
            <p className="text-xs text-gray-500">{createdAt}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
