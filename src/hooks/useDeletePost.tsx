"use client";

import { useState } from "react";
import { AxiosError } from "axios";
import axiosInstance from "@/utils/axiosInstance";

const useDeletePost = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | AxiosError>(null);

  const deletePost = async (id: string) => {
    setIsLoading(true);
    setError(null);

    try {
      await axiosInstance.delete(`/posts/${id}`);
    } catch (error) {
      setError(error as AxiosError);
      alert(`Something went wrong. ${(error as AxiosError).message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, deletePost };
};

export default useDeletePost;
