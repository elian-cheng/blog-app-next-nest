"use client";

import { useState } from "react";
import { AxiosError } from "axios";
import axiosInstance from "@/utils/axiosInstance";
import { useRouter } from "next/navigation";

const useEditPost = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | AxiosError>(null);
  const router = useRouter();

  const editPost = async (
    id: string,
    title: string,
    content: string,
    image: string,
    shortDescription: string
  ) => {
    if (!title || !content || !image || !shortDescription) {
      alert("Please fill all the fields");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await axiosInstance.patch(`/posts/${id}`, {
        title,
        content,
        image,
        shortDescription
      });

      if (response.status === 200) {
        alert("Post edited successfully");
        router.push("/");
      }
    } catch (error) {
      setError(error as AxiosError);
      alert(`Something went wrong. ${(error as AxiosError).message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return { editPost, isLoading, error };
};

export default useEditPost;
