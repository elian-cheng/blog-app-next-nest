"use client";

import { Loader } from "@/components/icons/Loader";
import useGetPost from "@/hooks/useGetPost";
import { FC, useEffect } from "react";

interface ISinglePostProps {
  params: {
    id: string;
  };
}

const SinglePost: FC<ISinglePostProps> = ({ params }) => {
  const { id } = params;
  const { isLoading, data, error, getPostData } = useGetPost();

  useEffect(() => {
    getPostData(id);
  }, []);

  return (
    <main>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <h5>{error.message}</h5>
      ) : data ? (
        <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
          <div
            className="bg-cover bg-center text-center overflow-hidden"
            style={{
              minHeight: "500px",
              backgroundImage: `url(${data.image})`
            }}
            title="Woman holding a mug"></div>
          <div className="max-w-3xl mx-auto">
            <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
              <div className="bg-white relative top-0 -mt-32 p-5 sm:p-10">
                <h1 className="text-gray-900 font-bold text-3xl mb-2">{data.title}</h1>
                <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-blue-600">
                  {data.shortDescription}
                </blockquote>
                <div
                  className="text-base leading-8 my-5"
                  dangerouslySetInnerHTML={{ __html: data.content }}
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
};
export default SinglePost;
