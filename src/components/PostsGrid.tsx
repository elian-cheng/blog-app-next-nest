"use client";

import Link from "next/link";
import { IPost } from "@/interfaces/PostInterface";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import useDeletePost from "@/hooks/useDeletePost";

export interface IPostsGridProps {
  posts: IPost[];
}
const PostsGrid: FC<IPostsGridProps> = ({ posts }) => {
  const router = useRouter();
  const { deletePost, error } = useDeletePost();
  const [allPosts, setAllPosts] = useState(posts);

  const handleEdit = (id: string) => {
    router.push(`/edit?id=${id}`);
  };

  const handleDelete = async (id: string) => {
    const hasConfirmed = confirm("Are you sure you want to delete this post?");

    if (hasConfirmed) {
      await deletePost(id);
      if (error) return;
      const filteredPosts = allPosts.filter(item => item.id !== id);
      setAllPosts(filteredPosts);
    }
  };

  return (
    <div className="bg-white pb-5">
      <div className="mx-auto max-w-2xl px-4 py-0 sm:px-6 sm:py-0 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {allPosts.map(post => (
            <article
              key={post.id}
              className="flex flex-col h-full">
              <div className="group relative border-solid border-2 p-2 border-gray-200 flex flex-col flex-grow">
                <Link href={`/posts/${post.id}`}>
                  <div className="min-h-[15rem] h-[15rem] aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-[15rem] flex-shrink-0">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                </Link>
                <div className="mt-4 flex justify-between flex-grow">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link href={`/posts/${post.id}`}>{post.title}</Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{post.shortDescription}</p>
                  </div>
                </div>
                <div className="mt-5 flex flex-center justify-center gap-4 border-t border-gray-100 pt-3">
                  <button
                    className="green_button cursor-pointer"
                    onClick={() => handleEdit(post.id)}>
                    Edit
                  </button>
                  <button
                    className="orange_button cursor-pointer"
                    onClick={() => handleDelete(post.id)}>
                    Delete
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostsGrid;
