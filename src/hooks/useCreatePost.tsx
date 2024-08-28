"use client";

import { useState } from "react";
import { AxiosError } from "axios";
import axiosInstance from "@/utils/axiosInstance";
import { useRouter } from "next/navigation";

const useCreatePost = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | AxiosError>(null);
  const router = useRouter();

  const createPost = async (
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
      const response = await axiosInstance.post("/posts", {
        title,
        content,
        image,
        shortDescription
      });

      if (response.status === 201) {
        alert("Post created successfully");
        router.push("/");
      }
    } catch (error) {
      setError(error as AxiosError);
      alert(`Something went wrong. ${(error as AxiosError).message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return { createPost, isLoading, error };
};

export default useCreatePost;
