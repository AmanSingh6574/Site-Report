import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setformData, setImageData } from "../reducer/slices/formSlice";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    files: {}, // Map to track uploaded files
  });


  const { name, email, files, password, address } = formData;
  // console.log(files)

  const ImageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        const newFiles = { ...files };
        console.log(newFiles);
        newFiles[e.target.name] = 1; // Mark the file as uploaded
        dispatch(setImageData(reader.result));
        setFormData((prevData) => ({
          ...prevData,
          files: newFiles,
        }));
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  const handleonChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(setformData(formData));
    navigate("/template");
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <div>
          <label htmlFor="">
            <h4>Name : </h4>
            <input
              type="text"
              required
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={handleonChange}
            />
          </label>
        </div>
        <div>
          <input
            type="file"
            name="file1"
            onChange={ImageHandler}
            disabled={files["file1"] === 1} // Disable if already uploaded
          />
        </div>
        <div>
          <label htmlFor="">
            <h4>Email : </h4>
            <input
              type="text"
              required
              placeholder="Enter Your Email"
              name="email"
              value={email}
              onChange={handleonChange}
            />
          </label>
        </div>
        <div>
          <input
            type="file"
            name="file2"
            onChange={ImageHandler}
            disabled={files["file2"] === 1} // Disable if already uploaded
          />
        </div>
        <div>
          <label htmlFor="">
            <h4>Address : </h4>
            <textarea
              type="text"
              required
              placeholder="Enter Your address"
              name="address"
              value={address}
              onChange={handleonChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="">
            <h4>Password : </h4>
            <input
              type="password"
              required
              placeholder="Enter Your password"
              name="password"
              value={password}
              onChange={handleonChange}
            />
          </label>
        </div>

        <button type="submit"> Submit </button>
      </form>
    </div>
  );
}

export default Home;
