"use client";

import "react-quill/dist/quill.bubble.css";
import { FC, useMemo } from "react";
import dynamic from "next/dynamic";

interface IFormProps {
  title: string;
  setTitle: (title: string) => void;
  shortDescription: string;
  setShortDescription: (shortDescription: string) => void;
  image: string;
  setImage: (image: string) => void;
  content: string;
  setContent: (content: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isSubmitting: boolean;
}

const Form: FC<IFormProps> = ({
  title,
  setTitle,
  shortDescription,
  setShortDescription,
  image,
  setImage,
  content,
  setContent,
  handleSubmit,
  isSubmitting
}) => {
  const ReactQuill = useMemo(
    () =>
      dynamic(() => import("react-quill"), {
        ssr: false,
        loading: () => <p>Please wait for loading…</p>
      }),
    []
  );

  const modules = useMemo(
    () => ({
      toolbar: [
        [{ header: "1" }, { header: "2" }, { font: [] }],
        [{ list: "ordered" }, { list: "bullet" }],
        ["bold", "italic", "underline", "strike"],
        [{ color: [] }, { background: [] }],
        [{ script: "sub" }, { script: "super" }],
        [{ align: [] }],
        ["link"],
        ["blockquote", "code-block"],
        ["clean"]
      ]
    }),
    []
  );

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "color",
    "background",
    "align",
    "script"
  ];

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism">
      <label>
        <span className="font-semibold text-base text-gray-700">Title</span>
        <input
          value={title}
          type="text"
          className="w-full max-w-2xl py-4 px-6 text-lg border border-gray-300 bg-transparent text-gray-800 focus:outline-none focus:border-gray-600"
          onChange={e => setTitle(e.target.value)}
        />
      </label>
      <label>
        <span className="font-semibold text-base text-gray-700">Short Description</span>
        <input
          value={shortDescription}
          type="text"
          className="w-full max-w-2xl py-4 px-6 text-lg border border-gray-300 bg-transparent text-gray-800 focus:outline-none focus:border-gray-600"
          onChange={e => setShortDescription(e.target.value)}
        />
      </label>
      <label>
        <span className="font-semibold text-base text-gray-700">Image URL</span>
        <input
          value={image}
          type="text"
          className="w-full max-w-2xl py-4 px-6 text-lg border border-gray-300 bg-transparent text-gray-800 focus:outline-none focus:border-gray-600"
          onChange={e => setImage(e.target.value)}
        />
      </label>
      <ReactQuill
        className="w-full max-w-2xl min-h-[500px] border border-gray-300 rounded-md"
        theme="bubble"
        value={content}
        onChange={setContent}
        modules={modules}
        formats={formats}
        placeholder="Write your post content here..."
      />
      <button
        type="submit"
        className="rounded-full border border-blue-600 bg-blue-600 py-2 px-7 text-white transition-all hover:bg-white hover:text-black text-center text-sm font-inter flex items-center justify-center">
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default Form;
