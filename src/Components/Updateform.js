import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

const Updateform = () => {
  // UPDATE CUSTOMER

  const navigate = useNavigate();

  const [customer, setCustomer] = useState();
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async () => {
    const res = await axios
      .put(`https://gdkn.onrender.com/api/updateCustomer/${id}`, {
        username: inputs.username,
        firstname: inputs.firstname,
        lastname: inputs.lastname,
        email: inputs.email,
        password: inputs.password,
        phone: inputs.phone,
        dob: inputs.dob,
        gender: inputs.gender,
        image: inputs.image,
        address: inputs.address,
        city: inputs.city,
        state: inputs.state,
        country: inputs.country,
        zipcode: inputs.zipcode,
      })
      .catch((err) => console.log(err));

    const data = await res.data;
    return data;
  };
  // console.log(customer);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest()
      .then((data) => console.log(data))
      .then(() => navigate("/home"));
  };

  const id = useParams().id;
  // console.log(id);

  const fetchDetails = async () => {
    const res = await axios
      .get(`https://gdkn.onrender.com/api/findCustomer/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  useEffect(() => {
    fetchDetails().then((data) => {
      setCustomer(data.customer);
      setInputs({
        username: data.customer.username,
        firstname: data.customer.firstname,
        lastname: data.customer.lastname,
        email: data.customer.email,
        password: data.customer.password,
        phone: data.customer.phone,
        dob: data.customer.dob,
        gender: data.customer.gender,
        image: data.customer.image,
        address: data.customer.address,
        city: data.customer.city,
        country: data.customer.country,
        state: data.customer.state,
        zipcode: data.customer.zipcode,
      });
    });
  }, [id]);

  // useEffect(() => {});

  return (
    <div>
      <div>
        {/* First Page start */}
        <div
          className=" mx-auto p-4 m-10 w-1/2 h-4/5  bg-yellow-200"
          style={{ width: "700px" }}
        >
          <p className="text-xl font-bold pb-3">Add User| Login Details</p>
          <form className="w-full grid grid-cols-1 gap-3">
            <input
              className="px-5 py-2 rounded-md"
              type="text"
              id="username"
              onChange={handleChange}
              value={inputs.username}
              placeholder="Username*"
              required
            />
            <input
              className="px-5 py-2 rounded-md"
              type="text"
              id="firstname"
              onChange={handleChange}
              value={inputs.firstname}
              placeholder="Firstname*"
              required
            />
            <input
              className="px-5 py-2 rounded-md"
              type="text"
              id="lastname"
              onChange={handleChange}
              value={inputs.lastname}
              placeholder="Lastname*"
              required
            />
            <input
              className="px-5 py-2 rounded-md"
              type="email"
              id="email"
              onChange={handleChange}
              value={inputs.email}
              placeholder="Email id*"
              required
            />
            <input
              className="px-5 py-2 rounded-md"
              type="password"
              id="password"
              onChange={handleChange}
              value={inputs.password}
              placeholder="Password*"
              required
            />
            <div className="flex justify-between">
              <input
                className="px-5 py-2 rounded-md"
                type="tel"
                id="phone"
                onChange={handleChange}
                value={inputs.phone}
                name="phone"
                size="30"
                maxLength="10"
                placeholder="Phone*"
                required
              />
              <input
                className="px-5 py-2  w-1/3 rounded-md"
                type="date"
                id="dob"
                onChange={handleChange}
                value={inputs.dob}
                name="dob"
                required
              />
            </div>
            <div className="flex justify-between">
              <select
                className="px-5 py-2 w-1/3 rounded-md"
                id="gender"
                onChange={handleChange}
                value={inputs.gender}
                name="Gender"
                required
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
              </select>
              <input
                className="px-5 py-2  w-3/5 rounded-md"
                type="text"
                id="image"
                onChange={handleChange}
                value={inputs.image}
                name="image"
                placeholder="Image Url"
                required
              ></input>
            </div>
            <div className="flex justify-between">
              <input
                className="px-5 py-2 w-3/6 rounded-md"
                type="text"
                id="address"
                onChange={handleChange}
                value={inputs.address}
                name="address"
                placeholder="Address Lane*"
                required
              />
              <input
                className="px-5 py-2 w-2/6 rounded-md"
                type="text"
                id="city"
                onChange={handleChange}
                value={inputs.city}
                name="city"
                placeholder="City*"
                required
              />
            </div>
            <div className="flex justify-between">
              <input
                className="px-5 w-1/4 py-2 rounded-md"
                type="state"
                id="state"
                onChange={handleChange}
                value={inputs.state}
                name="state"
                placeholder="State*"
                required
              />
              <input
                className="px-5 w-1/4 py-2 rounded-md"
                type="country"
                id="country"
                onChange={handleChange}
                value={inputs.country}
                name="country"
                placeholder="Country*"
                required
              />
              <input
                className="px-5 w-1/4 py-2 rounded-md"
                type="zipcode"
                id="zipcode"
                onChange={handleChange}
                value={inputs.zipcode}
                name="zipcode"
                maxLength="6"
                placeholder="Zip-code*"
                required
              />
            </div>
            <div className="flex justify-evenly">
              <button className="bg-red-800 w-1/5 p-2 rounded text-white">
                <Link to="/home">
                  <CancelIcon /> CANCEL
                </Link>
              </button>
              <button
                className="bg-blue-800 w-1/5 p-2 rounded text-white"
                type="submit"
                onClick={handleSubmit}
              >
                <BookmarkAddedIcon /> UPDATE
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Updateform;
