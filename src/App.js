
import "./App.css";
import { useState } from "react";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import UserCard from "./components/UserCard/UserCard";
import Header from "./components/Header";

function App() {
  const [users, setUsers] = useState([
    { mail: "user@user", pass: "123" },
    { mail: "user2@user", pass: "1234" },
    { mail: "user3@user", pass: "12345" },
    { mail: "user4@user", pass: "123456" },
  ]);

  const [isNotLogged, setIsNotLogged] = useState(true);
  const [isNotSigned, setIsNotSigned] = useState(false);

  const [userIn, setUserIn] = useState({ mail: "", pass: "" });
  const [showCard, setShowCard] = useState(false);

  const unCard=()=>{
    setShowCard((prevState) => !prevState);
  }

  const unlog = () => {
    setIsNotLogged((prevState) => !prevState);
  };

  const unSign = () => {
    setIsNotSigned((prevState) => !prevState);
  };

  const signS = (mm, pp) => {
    var controlUser = { mail: mm, pass: pp };
    if (mm == "" || pp == "") {
      alert("Please type in a valid email and password!");
      return;
    }
    for (var i = 0; i < users.length; i++) {
      if (users[i].mail == mm) {
        alert("User already exists! Please Log in!");
        return;
      }
    }

    
    setUserIn({ mail: controlUser.mail, pass: controlUser.pass });
    setUsers([...users, controlUser]);
    alert("Succesfully signed up!");
    unSign();
    unCard();
    console.log(isNotSigned);
  };

  const logg = (m, p) => {
    for (var i = 0; i < users.length; i++) {
      if (users[i].mail == m && users[i].pass == p) {
        setUserIn({ mail: users[i].mail, pass: users[i].pass });
        alert("Succesfully logged in!");
        if (isNotSigned) {
          unSign();
        }
        unlog();
        console.log(isNotLogged);
        unCard();
        return;
      }
    }
    alert("This user is not found! Please sign up!");
  };



  return (
    <>
      <Header />
      <Login
        isNotLogged={isNotLogged}
        unlog={unlog}
        logg={logg}
        unSign={unSign}
      />
      <Signup
        signS={signS}
        unSign={unSign}
        unlog={unlog}
        isNotSigned={isNotSigned}
      />
      <UserCard
        showCard={showCard}
        userIn={userIn}
        isNotLogged={isNotLogged}
        isNotSigned={isNotLogged}
      />
    </>
  );
}

export default App;
