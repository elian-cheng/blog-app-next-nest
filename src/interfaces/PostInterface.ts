export interface IPost {
  id: string;
  title: string;
  shortDescription: string;
  content: string;
  image: string;
}

export interface IPostsResponse {
  posts: IPost[];
  totalPosts: number;
}
