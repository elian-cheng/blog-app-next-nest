"use client";

import { Loader } from "@/components/icons/Loader";
import Pagination from "@/components/Pagination";
import PostsGrid from "@/components/PostsGrid";
import useGetPosts from "@/hooks/useGetPosts";
import { ITEMS_PER_PAGE } from "@/utils/constants";
import { useEffect, useState } from "react";

const Home = () => {
  const { loading, data, error, getPostsData } = useGetPosts();
  const [page, setPage] = useState(1);

  const handlePage = (page: number) => {
    setPage(page);
  };

  useEffect(() => {
    getPostsData(page, ITEMS_PER_PAGE);
  }, [page]);

  return (
    <main className="flex min-h-screen flex-col items-center p-4 lg:p-24">
      {loading ? (
        <Loader />
      ) : data ? (
        <>
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

export default Home;
