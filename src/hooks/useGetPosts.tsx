import { useState, useCallback } from "react";
import { AxiosError } from "axios";
import { IPostsResponse } from "@/interfaces/PostInterface";
import axiosInstance from "@/utils/axiosInstance";

const useGetPosts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<null | IPostsResponse>(null);
  const [error, setError] = useState<null | AxiosError>(null);

  const getPostsData = useCallback(async (page: number, limit: number) => {
    setIsLoading(true);
    setError(null);

    try {
      const { data } = await axiosInstance.get(`/posts?page=${page}&limit=${limit}`);
      setData(data);
    } catch (error) {
      setError(error as AxiosError);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { isLoading, data, error, getPostsData };
};

export default useGetPosts;
