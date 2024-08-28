"use client";

import { FormEvent, useEffect, useState } from "react";
import Form from "@/components/Form";
import useEditPost from "@/hooks/useEditPost";
import { useSearchParams } from "next/navigation";
import useGetPost from "@/hooks/useGetPost";
import { Loader } from "@/components/icons/Loader";

const EditPost = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const { isLoading: isLoadingGetPost, data, getPostData } = useGetPost();
  const { editPost, isLoading } = useEditPost();

  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [shortDescription, setShortDescription] = useState("");

  useEffect(() => {
    if (!id) {
      alert("Invalid post id");
      return;
    }
    getPostData(id);
  }, [id]);

  useEffect(() => {
    if (data) {
      setTitle(data.title);
      setContent(data.content);
      setImage(data.image);
      setShortDescription(data.shortDescription);
    }
  }, [data]);

  const handleEditPost = (e: FormEvent) => {
    e.preventDefault();
    if (!id) {
      alert("Invalid post id");
      return;
    }
    editPost(id, title, content, image, shortDescription);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 lg:p-16 space-y-6">
      {isLoadingGetPost ? (
        <Loader />
      ) : (
        <Form
          title={title}
          setTitle={setTitle}
          shortDescription={shortDescription}
          setShortDescription={setShortDescription}
          image={image}
          setImage={setImage}
          content={content}
          setContent={setContent}
          handleSubmit={handleEditPost}
          isSubmitting={isLoading}
        />
      )}
    </main>
  );
};

export default EditPost;
