export interface Post {
  id: number;
  title: string;
}

export interface PostsResponse {
  data: Post[];
  meta: {
    totalCount: number;
  };
}

export interface PostsQueryArgs {
  page?: number;
  limit?: number;
}
