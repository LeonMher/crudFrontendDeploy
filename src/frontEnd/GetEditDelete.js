import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";

export default function Add() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState("");
  const [value1, setValue1] = useState("");
  const inputReset = useRef(null);
  const inputReset1 = useRef(null);
  const [isShown, setIsShown] = useState(false);
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");

  const submitValue = () => {
    axios.post("https://backenddeploytesting.herokuapp.com/crud", {
      firstName: value,
      lastName: value1,
    });
  };

  const onDelete = (_id) => {
    axios.delete(`https://backenddeploytesting.herokuapp.com/crud/${_id}`);
  };

  const onUpdate = (_id) => {
    if (posts._id !== posts._id) {
      axios.put(`https://backenddeploytesting.herokuapp.com/crud/${_id}`, {
        firstName: value,
        lastName: value1,
      });
    }
    setIsShown((current) => !current);
  };

  const onUpdate1 = (_id) => {
    if ((value, value1 !== value3, value4)) {
      axios.put(`https://backenddeploytesting.herokuapp.com/crud/${_id}`, {
        firstName: value3,
        lastName: value4,
      });
    }
    setIsShown((current) => !current);
  };

  useEffect(() => {
    axios.get("https://backenddeploytesting.herokuapp.com/crud").then((res) => {
      console.log(res);
      setPosts(res.data);
    });
  }, [onDelete, onUpdate1]);

  return (
    <div className="container">
      <div className="navbar" />
      <form action="">
        <div className="postDiv">
          <label>FirstName</label>
          <TextField
            sx={{ m: 0.8 }}
            id="standard-basic"
            variant="standard"
            ref={inputReset}
            onChange={(e) => setValue(e.target.value)}
          />
          <label>LastName</label>
          <TextField
            sx={{ m: 0.8 }}
            id="standard-basic"
            variant="standard"
            ref={inputReset1}
            onChange={(e) => setValue1(e.target.value)}
          />
          <button className="create" onClick={submitValue}>
            Create
          </button>
        </div>
      </form>
      {posts?.map((post) => {
        return (
          <div key={post._id} className="dataDiv">
            <div className="childdataDiv">
              <h2 className="person">{post.firstName + " " + post.lastName}</h2>
              <button className="delete" onClick={() => onDelete(post._id)}>
                Delete
              </button>
            </div>
            {isShown && (
              <div className="editDiv">
                <div className="childeditDiv">
                  <form action="">
                    <label>FirstName</label>
                    <TextField
                      sx={{ m: 0.8 }}
                      type="text"
                      id="standard-basic"
                      variant="standard"
                      onChange={(e) => setValue3(e.target.value)}
                    />
                    <label>LastName</label>
                    <TextField
                      sx={{ m: 0.8 }}
                      type="text"
                      id="standard-basic"
                      variant="standard"
                      onChange={(e) => setValue4(e.target.value)}
                    />
                    <button
                      className="create"
                      onClick={() => onUpdate1(post._id)}
                    >
                      Update
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        );
      })}
      <div className="EditDiv1">
        {!!posts.length && (
          <button className="edit" onClick={() => onUpdate(posts._id)}>
            Edit
          </button>
        )}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
      </div>
    </div>
  );
}
