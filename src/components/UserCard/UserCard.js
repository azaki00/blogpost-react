import React from "react";
import "./usercard.css";
import { useState } from "react";


const UserCard = ({showCard, userIn, isNotLogged, isNotSigned }) => {


//   const inputMail = () => {
//     if (!isNotLogged && !isNotSigned) {
//         return userIn.mail;
//     }
//   };

  return (
    <div className={`usercard ${showCard ? "usercard--show" : ""}`}>
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
