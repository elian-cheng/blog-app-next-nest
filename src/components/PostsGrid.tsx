import Link from "next/link";
import { IPost } from "@/interfaces/PostInterface";
import { FC } from "react";

export interface IPostsGridProps {
  posts: IPost[];
}
const PostsGrid: FC<IPostsGridProps> = ({ posts }) => {
  return (
    <div className="bg-white pb-5">
      <div className="mx-auto max-w-2xl px-4 py-0 sm:px-6 sm:py-0 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {posts.map(post => (
            <Link
              href={`/posts/${post.id}`}
              key={post.id}>
              <div className="group relative border-solid border-2 p-2 border-gray-200">
                <div className="min-h-60 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-60">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link href={`/posts/${post.id}`}>
                        <span
                          aria-hidden="true"
                          className="absolute inset-0"
                        />
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{post.shortDescription}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostsGrid;
