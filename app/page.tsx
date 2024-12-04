"use client"
import { BsSearch } from "react-icons/bs";
import BlogCard from "../components/BlogCard";
import Navbar from "@/components/Navbar";
// import { Pagination } from "@/components/ui/pagination";
import { useState } from "react";
import Pagination from "@/components/Client-Pagination/Pagination";


// username: jamgbaditehillah
// password: HSw2oeH5VZeDrXuq
export default function Home() {
  const posts = [
    {
      blogPicture:
        "https://res.cloudinary.com/dei2yklhq/image/upload/v1731511693/ux-review-representation_cevrjk.svg",
      blogTitle: "UX review representations",
      blogCategory: "Design",
      blogContent:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      authorName: "Olivia Rhye",
      authorPicture:
        "https://res.cloudinary.com/dei2yklhq/image/upload/v1731512576/olivia-rhye_dwu0mx.svg",
      timestamps: Date.now(),
    },
    {
      blogPicture:
        "https://res.cloudinary.com/dei2yklhq/image/upload/v1731511693/migrating-to-linear-101_ryafb1.svg",
      blogTitle: "Migrating to Linear 101",
      blogCategory: "Product",
      blogContent:
        "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
      authorName: "Phoenix Baker",
      authorPicture:
        "https://res.cloudinary.com/dei2yklhq/image/upload/v1731512576/Phoenix-Baker_kernq0.svg",
      timestamps: Date.now(),
    },
    {
      blogPicture:
        "https://res.cloudinary.com/dei2yklhq/image/upload/v1731511693/builidng-api-stack_dtixih.svg",
      blogTitle: "Building your API Stack",
      blogCategory: "Software Engineering",
      blogContent:
        "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
      authorName: "Lana Steiner",
      authorPicture:
        "https://res.cloudinary.com/dei2yklhq/image/upload/v1731512576/Lana-Steiner_evs04e.svg",
      timestamps: Date.now(),
    },
    {
      blogPicture:
        "https://res.cloudinary.com/dei2yklhq/image/upload/v1731511693/bill-walsh-representation_iphi5a.svg",
      blogTitle: "Bill Walsh leadership lessons",
      blogCategory: "Management",
      blogContent:
        "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      authorName: "Alec Whitten",
      authorPicture:
        "https://res.cloudinary.com/dei2yklhq/image/upload/v1731512575/Alec-whiten_mooiax.svg",
      timestamps: Date.now(),
    },
    {
      blogPicture:
        "https://res.cloudinary.com/dei2yklhq/image/upload/v1731511693/pm-metal-models_fcvdrz.svg",
      blogTitle: "PM mental models",
      blogCategory: "Product",
      blogContent:
        "Mental models are simple expressions of complex processes or relationships.",
      authorName: "Demi WIlkinson",
      authorPicture:
        "https://res.cloudinary.com/dei2yklhq/image/upload/v1731512576/Demi-wilkinson_oib6dg.svg",
      timestamps: Date.now(),
    },
    {
      blogPicture:
        "https://res.cloudinary.com/dei2yklhq/image/upload/v1731511693/wireframing_nwrbva.svg",
      blogTitle: "What is Wireframing?",
      blogCategory: "Design",
      blogContent:
        "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
      authorName: "Candice Wu",
      authorPicture:
        "https://res.cloudinary.com/dei2yklhq/image/upload/v1731512575/Candice-wu_pzjq4f.svg",
      timestamps: Date.now(),
    },
    {
      blogPicture:
        "https://res.cloudinary.com/dei2yklhq/image/upload/v1731511693/bill-walsh-representation_iphi5a.svg",
      blogTitle: "Bill Walsh leadership lessons",
      blogCategory: "Management",
      blogContent:
        "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      authorName: "Alec Whitten",
      authorPicture:
        "https://res.cloudinary.com/dei2yklhq/image/upload/v1731512575/Alec-whiten_mooiax.svg",
      timestamps: Date.now(),
    },
    {
      blogPicture:
        "https://res.cloudinary.com/dei2yklhq/image/upload/v1731511693/pm-metal-models_fcvdrz.svg",
      blogTitle: "PM mental models",
      blogCategory: "Product",
      blogContent:
        "Mental models are simple expressions of complex processes or relationships.",
      authorName: "Demi WIlkinson",
      authorPicture:
        "https://res.cloudinary.com/dei2yklhq/image/upload/v1731512576/Demi-wilkinson_oib6dg.svg",
      timestamps: Date.now(),
    },
    {
      blogPicture:
        "https://res.cloudinary.com/dei2yklhq/image/upload/v1731511693/wireframing_nwrbva.svg",
      blogTitle: "What is Wireframing?",
      blogCategory: "Design",
      blogContent:
        "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
      authorName: "Candice Wu",
      authorPicture:
        "https://res.cloudinary.com/dei2yklhq/image/upload/v1731512575/Candice-wu_pzjq4f.svg",
      timestamps: Date.now(),
    },
    {
      blogPicture:
        "https://res.cloudinary.com/dei2yklhq/image/upload/v1731511693/bill-walsh-representation_iphi5a.svg",
      blogTitle: "Bill Walsh leadership lessons",
      blogCategory: "Management",
      blogContent:
        "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      authorName: "Alec Whitten",
      authorPicture:
        "https://res.cloudinary.com/dei2yklhq/image/upload/v1731512575/Alec-whiten_mooiax.svg",
      timestamps: Date.now(),
    },
    {
      blogPicture:
        "https://res.cloudinary.com/dei2yklhq/image/upload/v1731511693/pm-metal-models_fcvdrz.svg",
      blogTitle: "PM mental models",
      blogCategory: "Product",
      blogContent:
        "Mental models are simple expressions of complex processes or relationships.",
      authorName: "Demi WIlkinson",
      authorPicture:
        "https://res.cloudinary.com/dei2yklhq/image/upload/v1731512576/Demi-wilkinson_oib6dg.svg",
      timestamps: Date.now(),
    },
    {
      blogPicture:
        "https://res.cloudinary.com/dei2yklhq/image/upload/v1731511693/wireframing_nwrbva.svg",
      blogTitle: "What is Wireframing?",
      blogCategory: "Design",
      blogContent:
        "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
      authorName: "Candice Wu",
      authorPicture:
        "https://res.cloudinary.com/dei2yklhq/image/upload/v1731512575/Candice-wu_pzjq4f.svg",
      timestamps: Date.now(),
    },
    {
      blogPicture:
        "https://res.cloudinary.com/dei2yklhq/image/upload/v1731511693/bill-walsh-representation_iphi5a.svg",
      blogTitle: "Bill Walsh leadership lessons",
      blogCategory: "Management",
      blogContent:
        "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      authorName: "Alec Whitten",
      authorPicture:
        "https://res.cloudinary.com/dei2yklhq/image/upload/v1731512575/Alec-whiten_mooiax.svg",
      timestamps: Date.now(),
    },
    {
      blogPicture:
        "https://res.cloudinary.com/dei2yklhq/image/upload/v1731511693/pm-metal-models_fcvdrz.svg",
      blogTitle: "PM mental models",
      blogCategory: "Product",
      blogContent:
        "Mental models are simple expressions of complex processes or relationships.",
      authorName: "Demi WIlkinson",
      authorPicture:
        "https://res.cloudinary.com/dei2yklhq/image/upload/v1731512576/Demi-wilkinson_oib6dg.svg",
      timestamps: Date.now(),
    },
    {
      blogPicture:
        "https://res.cloudinary.com/dei2yklhq/image/upload/v1731511693/wireframing_nwrbva.svg",
      blogTitle: "What is Wireframing?",
      blogCategory: "Design",
      blogContent:
        "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
      authorName: "Candice Wu",
      authorPicture:
        "https://res.cloudinary.com/dei2yklhq/image/upload/v1731512575/Candice-wu_pzjq4f.svg",
      timestamps: Date.now(),
    },
    {
      blogPicture:
        "https://res.cloudinary.com/dei2yklhq/image/upload/v1731511693/bill-walsh-representation_iphi5a.svg",
      blogTitle: "Bill Walsh leadership lessons",
      blogCategory: "Management",
      blogContent:
        "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      authorName: "Alec Whitten",
      authorPicture:
        "https://res.cloudinary.com/dei2yklhq/image/upload/v1731512575/Alec-whiten_mooiax.svg",
      timestamps: Date.now(),
    },
    {
      blogPicture:
        "https://res.cloudinary.com/dei2yklhq/image/upload/v1731511693/pm-metal-models_fcvdrz.svg",
      blogTitle: "PM mental models",
      blogCategory: "Product",
      blogContent:
        "Mental models are simple expressions of complex processes or relationships.",
      authorName: "Demi WIlkinson",
      authorPicture:
        "https://res.cloudinary.com/dei2yklhq/image/upload/v1731512576/Demi-wilkinson_oib6dg.svg",
      timestamps: Date.now(),
    },
    {
      blogPicture:
        "https://res.cloudinary.com/dei2yklhq/image/upload/v1731511693/wireframing_nwrbva.svg",
      blogTitle: "What is Wireframing?",
      blogCategory: "Design",
      blogContent:
        "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
      authorName: "Candice Wu",
      authorPicture:
        "https://res.cloudinary.com/dei2yklhq/image/upload/v1731512575/Candice-wu_pzjq4f.svg",
      timestamps: Date.now(),
    },
    {
      blogPicture:
        "https://res.cloudinary.com/dei2yklhq/image/upload/v1731511693/bill-walsh-representation_iphi5a.svg",
      blogTitle: "Bill Walsh leadership lessons",
      blogCategory: "Management",
      blogContent:
        "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      authorName: "Alec Whitten",
      authorPicture:
        "https://res.cloudinary.com/dei2yklhq/image/upload/v1731512575/Alec-whiten_mooiax.svg",
      timestamps: Date.now(),
    },
    {
      blogPicture:
        "https://res.cloudinary.com/dei2yklhq/image/upload/v1731511693/pm-metal-models_fcvdrz.svg",
      blogTitle: "PM mental models",
      blogCategory: "Product",
      blogContent:
        "Mental models are simple expressions of complex processes or relationships.",
      authorName: "Demi WIlkinson",
      authorPicture:
        "https://res.cloudinary.com/dei2yklhq/image/upload/v1731512576/Demi-wilkinson_oib6dg.svg",
      timestamps: Date.now(),
    },
    {
      blogPicture:
        "https://res.cloudinary.com/dei2yklhq/image/upload/v1731511693/wireframing_nwrbva.svg",
      blogTitle: "What is Wireframing?",
      blogCategory: "Design",
      blogContent:
        "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
      authorName: "Candice Wu",
      authorPicture:
        "https://res.cloudinary.com/dei2yklhq/image/upload/v1731512575/Candice-wu_pzjq4f.svg",
      timestamps: Date.now(),
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(posts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage
  const currentPosts = posts.slice(startIndex, endIndex);
  // const interest = ()


  return (



    <>
       <Navbar />
      <div className="w-full relative  flex flex-wrap flex-col">
        <div className="w-full flex flex-col bg-[url(https://res.cloudinary.com/dei2yklhq/image/upload/v1731494173/Section_dj1cxr.svg)] bg-cover space-y-[2.3rem] text-center px-[2rem]  items-center h-[50rem]  md:space-y-[1rem]">
          <div className="">
            <h4 className="bg-[rgb(243,235,255)] py-[.3rem] px-[.9rem] rounded-full text-[rgb(138,105,212)] text-[1rem] md:text-[.8rem]">
              Our blog
            </h4>
          </div>
          <h1 className="text-[rgb(66,48,125)] text-[2.3rem] font-bold">
            Resources and insights
          </h1>
          <p className="text-[1.4rem] md:text-[1rem] text-[rgb(138,105,212)]">
            The latest industry news, interviews, technologies, and resources
          </p>
          <div className="flex h-[2.7rem] bg-[white] w-[20rem]  items-center rounded-[.2rem] overflow-hidden px-[.8rem] space-x-[1rem] ">
            <BsSearch className="text-[1.2rem]" />
            <input
              type="text"
              placeholder="Search"
              className="w-[90%] h-full focus:outline-none"
            />
          </div>


                    {/*  flex-wrap   px-[2rem] lg:px-0 justify-evenly md:gap-10 md:p-[3rem] translate-y-[-20rem] absolute md:top-[-15rem] lg:right-0 lg:left-0  mx-auto */}

                    {/* <div className="relative left-1/2 transform -translate-x-1/2 w-full sm:w-11/12 lg:w-[90%] px-4 items-start space-y-[3rem] py-[2.5rem] min-h-screen">
                    
                    
                    
                    
                    </div> */}


                    <div className="absolute top-[58%] md:top-[30%] left-1/2 transform -translate-x-1/2 w-full sm:w-11/12 lg:w-[90%] px-4 items-start space-y-[3rem] py-[2.5rem] min-h-screen ">

                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start  text-left">
                          {currentPosts.map((post, index) => (
                <BlogCard
                  key={index}
                  source={post.blogPicture}
                  authorSource={post.authorPicture}
                  authorName={post.authorName}
                  alternative={post.blogTitle}
                  alternativeSource={post.authorName}
                  cardTitle={post.blogTitle}
                  cardCategory={post.blogCategory}
                  cardContent={post.blogContent}
                  createdAt={post.timestamps.toString()}
                />
              ))}

                          </div>
                                {/* Pagination */}


            <div className="mt-6 flex justify-center w-full">
              <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
                prevClassBtn={`flex items-center space-x-1 px-3 py-2 rounded ${
                  currentPage === 1
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-[rgb(66,48,125)] text-white hover:bg-[rgb(147,106,239)]"
                }`}
                nextClassBtn={`flex items-center space-x-1 px-3 py-2 rounded ${
                  currentPage === totalPages
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-[rgb(66,48,125)] text-white hover:bg-[rgb(147,106,239)]"
                }`}
              />
            </div>
                        </div>
      </div>
     
      </div>
    </>
  );
}
