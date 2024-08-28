"use client";

import { FormEvent, useState } from "react";
import Form from "@/components/Form";
import useCreatePost from "@/hooks/useCreatePost";

const CreatePostPage = () => {
  const { createPost, isLoading } = useCreatePost();
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [shortDescription, setShortDescription] = useState("");

  const handleCreatePost = (e: FormEvent) => {
    e.preventDefault();
    createPost(title, content, image, shortDescription);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 lg:p-16 space-y-6">
      <Form
        title={title}
        setTitle={setTitle}
        shortDescription={shortDescription}
        setShortDescription={setShortDescription}
        image={image}
        setImage={setImage}
        content={content}
        setContent={setContent}
        handleSubmit={handleCreatePost}
        isSubmitting={isLoading}
      />
    </main>
  );
};

export default CreatePostPage;
