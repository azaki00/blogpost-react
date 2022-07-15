import React from "react";
import "./usercard.css";

const UserCard = ({ userIn }) => {
  //   const inputMail = () => {
  //     if (!isNotLogged && !isNotSigned) {
  //         return userIn.mail;
  //     }
  //   };

  return (
    <div className="usercard">
      <img
        className="userImage"
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
      ></img>
      <div className="details">
        <p>Email: {userIn.mail}</p>
        <p></p>
        <button>Edit Profile</button>
      </div>
    </div>
  );
};

export default UserCard;
