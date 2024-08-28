"use client";

import { useState } from "react";
import { AxiosError } from "axios";
import { IPost } from "@/interfaces/PostInterface";
import axiosInstance from "@/utils/axiosInstance";

const useGetPost = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<null | IPost>(null);
  const [error, setError] = useState<null | AxiosError>(null);

  const getPostData = async (id: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const { data } = await axiosInstance.get(`/posts/${id}`);
      setData(data);
    } catch (error) {
      setError(error as AxiosError);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, data, error, getPostData };
};

export default useGetPost;
