import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  // ADD CUSTOMER

  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState(null);

  const navigation = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const customer = {
      username,
      firstname,
      lastname,
      email,
      password,
      phone,
      dob,
      gender,
      address,
      city,
      state,
      country,
      zipcode,
      image,
    };
    const response = await fetch("https://gdkn.onrender.com/api/addCustomer", {
      method: "POST",
      body: JSON.stringify(customer),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      console.log("Customer Added Sccessfully", json);
    }
    navigation("/home");
  };

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
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              placeholder="Username*"
              required
            />
            <input
              className="px-5 py-2 rounded-md"
              type="text"
              id="firstname"
              onChange={(e) => setFirstname(e.target.value)}
              value={firstname}
              placeholder="Firstname*"
              required
            />
            <input
              className="px-5 py-2 rounded-md"
              type="text"
              id="lastname"
              onChange={(e) => setLastname(e.target.value)}
              value={lastname}
              placeholder="Lastname*"
              required
            />
            <input
              className="px-5 py-2 rounded-md"
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Email id*"
              required
            />
            <input
              className="px-5 py-2 rounded-md"
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Password*"
              required
            />
            <div className="flex justify-between">
              <input
                className="px-5 py-2 rounded-md"
                type="tel"
                id="phone"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
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
                onChange={(e) => setDob(e.target.value)}
                value={dob}
                name="dob"
                required
              />
            </div>
            <div className="flex justify-between">
              <select
                className="px-5 py-2 w-1/3 rounded-md"
                id="gender"
                onChange={(e) => setGender(e.target.value)}
                value={gender}
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
                onChange={(e) => setImage(e.target.value)}
                value={image}
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
                onChange={(e) => setAddress(e.target.value)}
                value={address}
                name="address"
                placeholder="Address Lane*"
                required
              />
              <input
                className="px-5 py-2 w-2/6 rounded-md"
                type="text"
                id="city"
                onChange={(e) => setCity(e.target.value)}
                value={city}
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
                onChange={(e) => setState(e.target.value)}
                value={state}
                name="state"
                placeholder="State*"
                required
              />
              <input
                className="px-5 w-1/4 py-2 rounded-md"
                type="country"
                id="country"
                onChange={(e) => setCountry(e.target.value)}
                value={country}
                name="country"
                placeholder="Country*"
                required
              />
              <input
                className="px-5 w-1/4 py-2 rounded-md"
                type="zipcode"
                id="zipcode"
                onChange={(e) => setZipcode(e.target.value)}
                value={zipcode}
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
                className="bg-green-800 w-1/5 p-2 rounded text-white"
                type="submit"
                onClick={handleSubmit}
              >
                <BookmarkAddedIcon /> SAVE
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
