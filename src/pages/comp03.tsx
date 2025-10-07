import React, { useState } from "react";
import { useGetRandomUserDetailsQuery } from "../Features/Services/freerandom_usersapi";
import Common_Loader from "../common_components/loader";

const CompZeroThree: React.FC = () => {
  const { data, isLoading, isError } = useGetRandomUserDetailsQuery();
  const randomUserData = data?.data?.data || [];
  if (isLoading)
    return (
      <>
        <Common_Loader />
        <p>Loading users...</p>
      </>
    );
  if (isError) return <p>Error fetching users.</p>;

  const getBgColorClass = (gender: string) => {
    return gender === "male" ? "border-warning" : "border-danger";
  };
  return (
    <div>
      <h1 className="display-6">Third Component</h1>

      <div className="data-filter row row-cols-1">
        <div className="col">

        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-4 g-4">
        {randomUserData.map((user: any, index: number) => (
          <div className="col" key={index}>
            <div className={`card ${getBgColorClass(user.gender)}`}>
              <img
                src={user.picture.large || "https://via.placeholder.com/150"}
                className="card-img-top"
                height={130}
                alt={user.fullName || "User"}
              />
              <div className="card-body">
                <h6 className="card-title display-8">
                  {user.name.title} {user.name.first} {user.name.last}
                </h6>
                <p>
                  <span className="badge text-bg-secondary">{user.email}</span>

                  <span className="badge text-bg-success">{user.gender}</span>
                </p>
                <address>
                  <small>
                    {user.location.street.number} - {user.location.street.name}
                    <br />
                    {user.location.city}
                    {user.location.state}
                    {user.location.country}
                    {user.location.postcode}
                  </small>
                </address>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">
                  ID : <b>{user.id}</b>
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompZeroThree;
