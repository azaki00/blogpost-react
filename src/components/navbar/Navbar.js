import React from "react";
import { MdFilterAlt } from "react-icons/md";
import { MdEditNote } from "react-icons/md";
import { MdFilterList } from "react-icons/md";
import { FaSearchPlus, FaUserCircle } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { MdRefresh } from "react-icons/md";
import "./navbar.css";
import { useState } from "react";

const Navbar = ({ unPost, filterID, fl,logOut,searchID,refresh}) => {

  const [search, setSearch] = useState("");

  const searchId=(e)=>{
    e.preventDefault();
    // alert("test1");
    searchID(search);
  }

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
        <button className="btn11" onClick={filterID}>
          <MdFilterAlt></MdFilterAlt>
        </button>{" "}
        <span className="btn11span">Filter By ID</span>
      </div>
      <div className="b1">
        <button className="btn11"  onClick={fl}>
          <MdFilterList></MdFilterList>
        </button>{" "}
        <span className="btn11span">Filter Likes</span>
      </div>
      <div className="b1">
        <button className="btn11" onClick={logOut}>
          <FaUserCircle></FaUserCircle>
        </button>{" "}
        <span className="btn11span">  Log Out User </span>
      </div>
      <div className="b1">
        <button className="btn11 search" onClick={searchId}>
          <FaSearch></FaSearch>
        </button>{" "}<input className="inputSearch" type="search" value={search} onChange={(e) => setSearch(e.target.value)}></input>
        <span className="btn11span">  Search By ID </span>
      </div>
      <div className="b1">
        <button className="btn11" onClick={refresh}>
          <MdRefresh></MdRefresh>
        </button>{" "}
        <span className="btn11span">  Reset postviewer </span>
      </div>
    </div>
  );
};

export default Navbar;
