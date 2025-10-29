import React from "react";
import { useGetPostsQuery } from "../../Features/Services/graphql_query";

const GraphQLAPI = () => {
  const { data, isLoading, isError } = useGetPostsQuery({
    page: 1,
    limit: 500,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching posts</p>;
  console.log("data...................", data);
  return (
    <div className="graphcard-box">
      <h1 className="display">Graph QL API Example</h1>
      <p>Total Posts: {data?.meta.totalCount}</p>
      <hr />
      <div className="d-flex flex-wrap gap-4">
        {data?.data?.map((post) => (
          <div className="graph-card">
            <span>{post.id}</span>
            <p>{post.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GraphQLAPI;
