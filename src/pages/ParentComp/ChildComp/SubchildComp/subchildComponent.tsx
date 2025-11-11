import React from "react";
import { useGetYouTubeVideosDetailsQuery } from "../../../../Features/Services/freerandom_usersapi";

const SubchildComponent: React.FC = () => {
  const {
    data: videos,
    isLoading,
    isError,
  } = useGetYouTubeVideosDetailsQuery();
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading videos</p>;

  console.log("........................... !!! ", videos);
  return (
    <div>
      <h1 className="display-6">Sub Child Component</h1>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {videos?.map((videodata, i) => (
          <div className="col border rounded" key={i}>
            <img
              src={videodata.items.snippet.thumbnails.high.url}
              alt={videodata.items.snippet.title}
              width={250}
            />
            <h6>{videodata.items.snippet.title}</h6>
            <small>{videodata.items.snippet.description}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubchildComponent;
