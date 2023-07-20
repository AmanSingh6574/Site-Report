import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetFormData } from "../reducer/slices/formSlice";
import "../App.css";
function Template() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { formData } = useSelector((state) => state.form);
  const { ImageData } = useSelector((state) => state.form);

  const data = formData[0];
  const imgUrl = ImageData;
  console.log(data);
  console.log(ImageData);

  const HandleonClick = () => {
    window.print();
  };

  const HandleBack = () => {
    dispatch(resetFormData());
    navigate("/");
  };

  return (
    <div>
      <div className="para">
        <p>Name Of the Applicent is {data?.name} </p>
      </div>
      <div>
        <img width={100} height={100} src={imgUrl?.[0]} alt="" />
      </div>
      <div>
        <p>Email is {data?.email} </p>
      </div>
      <div>
        <p>address is {data?.address} </p>
      </div>
      <div>
        <img width={100} height={100} src={imgUrl?.[1]} alt="" />
      </div>
      <button onClick={HandleonClick}> Print </button>
      <button onClick={HandleBack}>Back</button>
    </div>
  );
}

export default Template;
