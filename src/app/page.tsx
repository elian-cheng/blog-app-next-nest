"use client";

import { Loader } from "@/components/icons/Loader";
import Pagination from "@/components/Pagination";
import PostsGrid from "@/components/PostsGrid";
import useGetPosts from "@/hooks/useGetPosts";
import { ITEMS_PER_PAGE } from "@/utils/constants";
import Link from "next/link";
import { useEffect, useState } from "react";

const HomePage = () => {
  const { isLoading, data, error, getPostsData } = useGetPosts();
  const [page, setPage] = useState(1);

  const handlePage = (page: number) => {
    setPage(page);
  };

  useEffect(() => {
    getPostsData(page, ITEMS_PER_PAGE);
  }, [getPostsData, page]);

  return (
    <main className="flex min-h-screen flex-col items-center p-4 lg:p-16">
      {isLoading ? (
        <Loader />
      ) : data ? (
        <>
          <div className="flex justify-end mb-8">
            <Link
              href="/create"
              className="rounded-full border border-blue-600 bg-blue-600 py-2 px-7 text-white transition-all hover:bg-white hover:text-black text-center text-sm font-inter flex items-center justify-center">
              Create Post
            </Link>
          </div>
          <PostsGrid posts={data?.posts} />
          <Pagination
            page={page}
            handlePage={handlePage}
            totalItems={data?.totalPosts}
          />
        </>
      ) : (
        <h5>No records to display</h5>
      )}
      {error && <h6>{error.message}</h6>}
    </main>
  );
};

export default HomePage;
