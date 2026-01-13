import React, { useState } from "react";
import { useGetRandomUserDetailsQuery } from "../Features/Services/freerandom_usersapi";
import Common_Loader from "../common_components/loader";
import ModalPopUp from "../common_components/modal";

const CompZeroThree: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const { data, isLoading, isError } = useGetRandomUserDetailsQuery();
  const randomUserData = data?.data?.data || [];
  console.log(randomUserData);
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
  // const userNameOptions =
  //   randomUserData?.map((user: any) => ({
  //     label: `${user.name.title} ${user.name.first} ${user.name.last}`,
  //     value: `${user.name.title} ${user.name.first} ${user.name.last}`,
  //   })) || [];

  const handleCardClick = (user: any) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedUser(null);
  };
  console.log("Select User ..............", selectedUser);
  return (
    <>
      <div>
        <h1 className="display-6">Third Component</h1>

        {/* <div className="data-filter d-flex align-items-center row row-cols-1 mb-3">
      <div className="col-6">
        <TextInput
          name="nameFilterSearch"
          label="Serch By ID"
          value=""
          onChange={() => {}}
          placeholder="Serch By ID"
          type="text"
          className="form-control"
        />
      </div>
      <div className="col-6">
        <SelectBox
          label="Serch By name"
          name="searchByName"
          value=""
          onChange={() => {}}
          options={userNameOptions}
          placeholder="Serch By Name"
          className="form-select"
        />
      </div>
    </div> */}

        <div className="row row-cols-1 row-cols-md-4 g-4">
          {randomUserData.map((user: any, index: number) => (
            <div className="col" key={user.id}>
              <div className={`card ${getBgColorClass(user.gender)}`}>
                <img
                  src={user.picture.large || "https://via.placeholder.com/150"}
                  className="card-img-top"
                  height={220}
                  alt={user.fullName || "User"}
                />
                <div className="card-body">
                  <h6 className="card-title display-8">
                    {user.name.title} {user.name.first} {user.name.last}
                  </h6>
                  <p>
                    <span
                      className="badge text-bg-secondary d-block mb-2 pointer pe-auto"
                      onClick={() => handleCardClick(user)}
                    >
                      {user.email}
                    </span>

                    <span className="badge text-bg-success d-block">
                      {user.gender}
                    </span>
                  </p>
                  <address>
                    <small>
                      {user.location.street.number} -{" "}
                      {user.location.street.name}
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
      <ModalPopUp
        title={
          selectedUser
            ? `User Details - ${selectedUser.name.title} ${selectedUser.name.first} ${selectedUser.name.last}`
            : "User Details"
        }
        show={showModal}
        onClose={handleCloseModal}
      >
        {selectedUser && (
          <div className="row">
            <div className="col-sm-4">
              <img
                src={
                  selectedUser.picture.large ||
                  "https://via.placeholder.com/150"
                }
                className="card-img-top rounded"
                height={220}
                alt={selectedUser.name.first}
              />
            </div>
            <div className="col-sm-8">
              <p>
                <strong>User ID:</strong> {selectedUser.id}
              </p>
              <p>
                <strong>Name:</strong> {selectedUser.name.title}{" "}
                {selectedUser.name.first} {selectedUser.name.last}
              </p>
              <p>
                <strong>Email:</strong> {selectedUser.email}
              </p>
              <p>
                <strong>Gender:</strong> {selectedUser.gender}
              </p>
              <p>
                <strong>DOB:</strong> {selectedUser.dob.date} (Age:{" "}
                {selectedUser.dob.age})
              </p>
              <p>
                <strong>Location:</strong> {selectedUser.location.street.number}{" "}
                - {selectedUser.location.street.name},{" "}
                {selectedUser.location.city}, {selectedUser.location.state},{" "}
                {selectedUser.location.country},{" "}
                {selectedUser.location.postcode}
                <br />
                <strong>Latitude:</strong>{" "}
                {selectedUser?.location?.coordinates?.latitude}
                <br />
                <strong>Longitude:</strong>{" "}
                {selectedUser?.location?.coordinates?.longitude}
              </p>
              <p>
                <strong>TimeZone:</strong>{" "}
                {selectedUser?.location?.timezone.offset}
                <br />
                <strong>Description:</strong>{" "}
                {selectedUser?.location?.timezone?.description}
              </p>
            </div>
          </div>
        )}
      </ModalPopUp>
    </>
  );
};

export default CompZeroThree;
