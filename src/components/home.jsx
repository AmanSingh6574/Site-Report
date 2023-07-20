import { useState } from "react";
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
    file: "",
  });

  const { name, email,file, password, address } = formData;

  const ImageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        // console.log("reader.result", reader.result);
        dispatch(setImageData(reader.result));
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
    // console.log(formData);
    dispatch(setformData(formData));
    navigate("/template");
  };

  const state = useSelector((state) => state.form);
  console.log(state);

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
          <input type="file" name="file" onChange={ImageHandler}  />
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
          <input type="file" name="file" onChange={ImageHandler}  />
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
