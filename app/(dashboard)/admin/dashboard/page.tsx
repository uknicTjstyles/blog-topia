"use client";
import React, { useState } from "react";
import DashboardCard from "./components/Card";
import { NewspaperIcon, List, User } from "lucide-react";
import ReusableAreaChart from "./components/Chart";

const dashboardData = [
  {
    title: "Posts",
    count: 120,
    icon: NewspaperIcon, // Icon component for Posts
  },
  {
    title: "Categories",
    count: 15,
    icon: List, // Icon component for Categories
  },
  {
    title: "Users",
    count: 50,
    icon: User, // Icon component for Users
  },
];

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const posts = [
  {
    id: 1,
    title: "Post 1",
    content: "This is the content of post 1",
    createdAt: "2024-01-01T12:00:00.000Z",
  },
  {
    id: 2,
    title: "Post 2",
    content: "This is the content of post 2",
    createdAt: "2025-01-05T14:30:00.000Z",
  },
  {
    id: 3,
    title: "Post 3",
    content: "This is the content of post 3",
    createdAt: "2024-01-10T10:45:00.000Z",
  },
  {
    id: 4,
    title: "Post 4",
    content: "This is the content of post 4",
    createdAt: "2025-01-12T16:15:00.000Z",
  },
  {
    id: 5,
    title: "Post 5",
    content: "This is the content of post 5",
    createdAt: "2022-01-15T11:30:00.000Z",
  },
  {
    id: 6,
    title: "Post 6",
    content: "This is the content of post 6",
    createdAt: "2022-01-18T13:00:00.000Z",
  },
  {
    id: 7,
    title: "Post 7",
    content: "This is the content of post 7",
    createdAt: "2022-01-20T09:45:00.000Z",
  },
  {
    id: 8,
    title: "Post 8",
    content: "This is the content of post 8",
    createdAt: "2022-01-22T15:30:00.000Z",
  },
  {
    id: 9,
    title: "Post 9",
    content: "This is the content of post 9",
    createdAt: "2022-01-25T12:15:00.000Z",
  },
  {
    id: 10,
    title: "Post 10",
    content: "This is the content of post 10",
    createdAt: "2022-01-28T10:00:00.000Z",
  },
];

const latestPosts = posts
  .sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  )
  .slice(0, 5);

console.log(latestPosts);

const adminDashboardOverview = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [tab, setTab] = useState(0);

  return (
    <>
      <h1 className="text-2xl">Dashboard</h1>

      <div className="w-full">
        <div className="w-[85%] xl:w-[98%] m-auto xl:m-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {dashboardData.map((data, index) => (
            <DashboardCard
              key={index}
              card_title={data.title}
              card_count={data.count}
              Icons={data.icon}
            />
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col xl:flex-row flex-wrap pt-[2rem]">
        <div className="xl:w-[65%] space-y-[3rem] py-[3rem] xl:py-0">
          <div className="w-full flex flex-col text-center items-center md:items-start space-y-[2rem] md:space-y-0 md:text-left md:flex-row md:justify-between">
            <div className="space-y-3">
              <h2 className="text-xl">Visitor Growth</h2>
              <p className="text-sm text-[rgb(221,221,221)] font-medium">
                Overall information
              </p>
            </div>

            <div className="tab_trigger bg-[rgb(221,221,221)] flex w-[19rem] py-[.5rem] px-[1rem] items-center justify-center rounded-full space-x-[1.5rem]">
              <div
                onClick={() => setTab(0)}
                className={
                  `tab_trigger_item active  text-white rounded-full px-[2rem] py-[.5rem] cursor-pointer transition-all ${
                    tab === 0
                    ? 'bg-[rgb(190,133,242)]' : 'bg-transparent'
                  }`
                   
                }
              >
                Monthly
              </div>
              <div
                onClick={() => setTab(1)}
                className={
                  `tab_trigger_item active  text-white rounded-full px-[2rem] py-[.5rem] cursor-pointer transition-all ${
                    tab === 1
                    ? 'bg-[rgb(190,133,242)]' : 'bg-transparent'
                  }`
                   
                }
              >
                Yearly
              </div>
            </div>

            {/* [rgb(221,221,221)] */}
          </div>

          <div className="w-full">
            {tab === 0 || tab === 1 ? (
              <ReusableAreaChart
                data={data}
                xKey="name"
                yKey="uv"
                strokeColor="rgb(147,51,234)"
                fillColor="rgb(147,51,234)"
              />
            ) : (
              <i>No data Available</i>
            )}
          </div>
        </div>

        <div className="flex-grow  flex flex-col px-[3rem] ">
          <h1 className="bg-[rgb(243,235,255)] text-center p-[1.4rem] rounded-2xl font-medium">
            Latest Posts
          </h1>
          <div className="w-full flex flex-col">
            <ul className="space-y-[1rem] pt-[1rem] pl-[2rem]">
              {latestPosts.map((latestPost, index) => (
                <li key={index}>
                  <h1 className="fon-medium text-md ">{latestPost.title}</h1>
                  <p className="text-sm text-gray-500">
                          {new Intl.DateTimeFormat("en-GB", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    }).format(new Date(latestPost.createdAt))}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          {/* rgb(190,133,242) */}
          {/* rgb(147,51,234) */}

          {/* rgb(179, 112, 255) */}
          {/* rgb(209, 177, 247)
           */}
          {/* rgb(230, 210, 255)
           */}
        </div>
      </div>
    </>
  );
};

export default adminDashboardOverview;
