import React from "react";
import { MdFilterAlt } from "react-icons/md";
import { MdEditNote } from "react-icons/md";
import { MdFilterList } from "react-icons/md";
import "./navbar.css";

const Navbar = ({ unPost, filterID, fl}) => {
  return (
    <div className="navbar">
      <h5>Navigation Bar</h5>
      <div className="b1">
        <button onClick={unPost} className="btn11">
          <MdEditNote></MdEditNote>
        </button>{" "}
        <span className="btn11span">Add a post</span>
      </div>

      <div className="b1">
        <button className="btn22" onClick={filterID}>
          <MdFilterAlt></MdFilterAlt>
        </button>{" "}
        <span className="btn11span">Filter By ID</span>
      </div>
      <div className="b1">
        <button className="btn33"  onClick={fl}>
          <MdFilterList></MdFilterList>
        </button>{" "}
        <span className="btn11span">Filter Likes</span>
      </div>
    </div>
  );
};

export default Navbar;
