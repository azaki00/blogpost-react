import "./App.css";
import { useState } from "react";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Header from "./components/Header";
import MainPage from "./components/MainPage/MainPage";

function App() {
  const [users, setUsers] = useState([
    { mail: "user@user", pass: "123" },
    { mail: "user2@user", pass: "1234" },
    { mail: "user3@user", pass: "12345" },
    { mail: "user4@user", pass: "123456" },
  ]);

  const [posts, setPosts] = useState([
    {
      author: "x@x",
      topic: "qwerty",
      body: "qwertyawegaweguiop",
      postID: "7242",
      likes: "24",
    },
    {
      author: "x@2",
      topic: "qrt",
      body: "awegwagargaethea",
      postID: "1363",
      likes: "100",
    },
    {
      author: "x@3",
      topic: "zxb",
      body: "awrhawthagrww",
      postID: "1361",
      likes: "541",
    },
    {
      author: "x@4",
      topic: "rha",
      body: "awraehebtsjndf",
      postID: "3467",
      likes: "1361",
    },
    {
      author: "x@5",
      topic: "ar",
      body: "etheahadrwah",
      postID: "7353",
      likes: "145",
    },
    {
      author: "x@6",
      topic: "awrwhar",
      body: "aerhawrhawrgth",
      postID: "8235",
      likes: "10",
    },
  ]);

  const [isNotLogged, setIsNotLogged] = useState(true);
  const [isNotSigned, setIsNotSigned] = useState(false);

  const [userIn, setUserIn] = useState({ mail: "", pass: "" });

  const [showCard, setShowCard] = useState(false);

  const [isNotAddPost, setIsNotAddPost] = useState(false);

  const unPost = () => {
    setIsNotAddPost((prevState) => !prevState);
  };

  const unCard = () => {
    setShowCard((prevState) => !prevState);
  };

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

  const addP = (x,y) => {
    // console.log(x);
    // console.log(y);
    const id = Math.floor(Math.random() * 10000) + 1;
    const newpost = {
      author: userIn.mail,
      topic: x,
      body: y,
      postID: id,
      likes: 0,
    };

    // console.log(newpost.author);
    // console.log(newpost.topic);
    // console.log(newpost.body);
    // console.log(newpost.postID);
    // console.log(newpost.likes);

    setPosts([newpost, ...posts]);
    unPost();
  };

  const filterID=() =>{
    const newfil = [...posts].sort((a,b) => b.postID-a.postID)
    setPosts(newfil);
  }

  const fl=() =>{
    const contt = [...posts].sort((a,b) => b.likes-a.likes)
    setPosts(contt);
  }


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

      <MainPage
        showCard={showCard}
        userIn={userIn}
        posts={posts}
        addP={addP}
        unPost={unPost}
        isNotAddPost={isNotAddPost}
        filterID={filterID}
        fl={fl}
      />
    </>
  );
}

export default App;
