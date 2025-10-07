import React from "react";
import {
  useGetRandomImageQuery,
  useGetUsersQuery,
} from "../Features/Services/pho_usersapi";
import Common_Loader from "../common_components/loader";

const CompZeroTwo: React.FC = () => {
  const { data: users, isLoading, isError } = useGetUsersQuery();
  const { data: imageURL } = useGetRandomImageQuery();
  console.log("User Data : ", users, imageURL);

  if (isLoading)
    return (
      <>
        <Common_Loader />
        <p>Loading users...</p>
      </>
    );
  if (isError) return <p>Error fetching users.</p>;

  return (
    <div>
      <h2 className="display-6">Users List with image</h2>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {users?.map((userData) => (
          <div className="col">
          <div className="card" key={userData.id}>
            <img src={imageURL} className="card-img-top" height={150} alt="..." />
             <div className="card-body">
              <h6 className="text-center text-secondary">{userData.name}</h6>
              <small className="text-wrap">{userData.company.catchPhrase}</small>
              <span className="badge text-bg-warning d-block">{userData.phone}</span>
              <span className="badge text-bg-info ml-2">{userData.website}</span>
             </div>            
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompZeroTwo;
