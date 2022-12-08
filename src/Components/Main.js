import React from "react";
import Navbar from "./Navbar";
import SearchIcon from "@mui/icons-material/Search";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import Pagination from "./Pagination";
import axios from "axios";

const Main = () => {
  //  user details state management
  const [users, setUsers] = useState([]);

  const [query, setQuery] = useState("");

  useEffect(() => {
    const getCustomers = async () => {
      const response = await fetch("https://gdkn.onrender.com/api/customers");
      const data = await response.json();
      console.log(data.customers);
      if (response.ok) {
        setUsers(data.customers);
      }
    };

    getCustomers();
  }, []);

  // Pagination

  const [currentPage, setCurrentPage] = useState(1);
  const [customersPerPage] = useState(5);

  // Get current customers list
  const indexOfLastCustomer = currentPage * customersPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
  const currentCustomers = users.slice(
    indexOfFirstCustomer,
    indexOfLastCustomer
  );

  // PAGINATION
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // GETTING SINGLE ID

  const [singleuser, setSingleUser] = useState({
    username: "USER NAME",
    firstname: "FIRST NAME",
    lastname: "LAST NAME",
    email: "E-MAIL",
    password: "PWD",
    phone: "PHONE",
    dob: "D-O-B",
    gender: "GENDER",
    address: "ADDRESS",
    city: "CITY",
    state: "STATE",
    country: "COUNTRY",
    zipcode: "ZIP CODE",
    image:
      "https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg",
  });

  const navigate = useNavigate();

  const { id } = useParams();

  const getUser = async () => {
    try {
      const { data } = await axios.get(
        `https://gdkn.onrender.com/api/findCustomer/${id}`
      );
      setSingleUser(data.customer);
      console.log(data.customer);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getUser();
  }, [id]);

  // DELETE CUSTOMER

  const deleteRequest = async () => {
    const res = await axios
      .delete(`https://gdkn.onrender.com/api/deleteCustomer/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  const handleDelete = () => {
    deleteRequest()
      .then(() => navigate("/home"))
      .then(() => navigate("/"));
  };

  // UPDATE CUSTOMER

  const handleEdit = (e) => {
    navigate(`/updateCustomer/${id}`);
  };

  return (
    <div>
      <div>
        <Navbar
          firstname={singleuser.firstname}
          image={singleuser.image}
          lastname={singleuser.lastname}
          username={singleuser.username}
        />
      </div>
      <div className="flex">
        <div className="w-1/5">
          <div>
            <div className="bg-white">
              {/* Search Box Start */}
              <div className=" m-2 border-b-2 border-black flex justify-between pb-2 ">
                <input
                  className="border-0 border-white outline-none text-center"
                  type="text"
                  name="Customers"
                  placeholder="Customers"
                  onChange={(event) => setQuery(event.target.value)}
                />
                <div className="flex gap-2">
                  <button>
                    <SearchIcon />
                  </button>
                  <Link to="/addCustomer">
                    <button>
                      <AddBoxOutlinedIcon />
                    </button>
                  </Link>
                </div>
              </div>
              {/* Search box End */}

              {/* Active User Start */}

              <div className="bg-slate-400">
                <div className="flex p-2 mx-3 border-b w-4/5 border-gray-300">
                  <div>
                    <img
                      className="rounded-full border-2 border-white w-16 h-16 object-cover"
                      src={singleuser.image}
                      alt=""
                    />
                  </div>
                  <div className="text-xs w-4/5 text-center">
                    <p className="font-bold text-lg">{singleuser.firstname}</p>
                    <p>{singleuser.email}</p>
                  </div>
                </div>
              </div>

              {/* Active User End */}

              {/* All User Start */}
              <div className="">
                {currentCustomers
                  .filter((g) => g.firstname.toLowerCase().includes(query))
                  .map((ele, index) => {
                    return (
                      <button
                        className="flex p-2 mx-3 border-b w-4/5 border-gray-300"
                        // onClick={() => getUser()}
                        onClick={() => navigate("/Customer/" + ele._id)}
                      >
                        <div>
                          <img
                            className="rounded-full border-2 border-white w-16 h-16 object-cover"
                            src={ele.image}
                            alt=""
                          />
                        </div>
                        <div className="text-xs w-4/5">
                          <p className="font-bold text-lg">{ele.firstname}</p>
                          <p>{ele.email}</p>
                        </div>
                      </button>
                    );
                  })}
                ;
              </div>
              <div className="flex justify-center">
                <Pagination
                  customersPerPage={customersPerPage}
                  totalCustomers={users.length}
                  paginate={paginate}
                />
              </div>

              {/* All User End */}
            </div>
          </div>
        </div>

        {/* Right side */}

        <div className="w-4/5 bg-yellow-200 p-3">
          <div className="bg-white">
            <div className="p-5">
              {/* Profile Start */}
              <div className="flex gap-7 border-black pb-3 my-4 border-b-2">
                <div>
                  <img
                    className=" border rounded-full w-20 h-20 object-cover"
                    src={singleuser.image}
                    alt=""
                  />
                </div>
                <div>
                  <p className="text-xl mb-2 font-bold ">
                    {singleuser.firstname}
                  </p>
                  <div className="flex gap-10 mb-8">
                    <p>
                      <PersonOutlineOutlinedIcon />
                      {singleuser.username}
                    </p>
                    <p>
                      <MailOutlinedIcon /> {singleuser.email}
                    </p>
                    <p>
                      <PhoneOutlinedIcon />
                      +91 {singleuser.phone}
                    </p>
                  </div>
                  <div className="flex gap-10 border-b-black pb-4">
                    <button
                      className="border-2 border-yellow-700 text-yellow-700 px-3 py-1"
                      onClick={handleEdit}
                    >
                      <EditOutlinedIcon /> Edit
                    </button>
                    <button
                      className="border-2 border-red-500 text-red-500 px-3 py-1"
                      onClick={handleDelete}
                    >
                      <DeleteForeverOutlinedIcon /> Delete Customer
                    </button>
                  </div>
                </div>
              </div>
              {/* Profile End */}

              {/* Personal Details Start */}
              <div className="my-5 pb-3">
                <div className="font-bold text-lg my-2">Personal Details</div>
                <div className="flex justify-evenly gap-5 mt-4">
                  <div className="bg-yellow-200 rounded-md px-3 py-2 w-1/4">
                    <p className="text-xs">First Name</p>
                    <p className="text-base font-bold">
                      {singleuser.firstname}
                    </p>
                  </div>
                  <div className="bg-yellow-200 rounded-md px-3 py-1 w-1/4">
                    <p className="text-xs">Last Name</p>
                    <p className="text-base font-bold">{singleuser.lastname}</p>
                  </div>
                  <div className="bg-yellow-200 rounded-md px-3 py-1 w-1/4">
                    <p className="text-xs">Gender</p>
                    <p className="text-base font-bold">{singleuser.gender}</p>
                  </div>
                  <div className="bg-yellow-200 rounded-md px-3 py-1 w-1/4">
                    <p className="text-xs">Date of Birth</p>
                    <p className="text-base font-bold">{singleuser.dob}</p>
                  </div>
                </div>
              </div>
              {/* Personal Details End */}

              {/* Address Start */}
              <div>
                <div className="font-bold text-lg">Address</div>
                <div className="pt-3 mt-3">
                  <div className="w-1/2 flex px-3 py-1 mb-2 bg-yellow-200 rounded  justify-between">
                    <p className="text-xs">Address Lane</p>
                    <p className="text-xs font-medium">{singleuser.address}</p>
                  </div>
                  <div className="w-1/2 flex px-3 py-1 mb-2 bg-slate-100 rounded  justify-between">
                    <p className="text-xs">City</p>
                    <p className="text-xs font-medium">{singleuser.city}</p>
                  </div>
                  <div className="w-1/2 flex px-3 py-1 mb-2 bg-yellow-200 rounded  justify-between">
                    <p className="text-xs">State</p>
                    <p className="text-xs font-medium">{singleuser.state}</p>
                  </div>
                  <div className="w-1/2 flex px-3 py-1 mb-2 bg-slate-100 rounded  justify-between">
                    <p className="text-xs">Country</p>
                    <p className="text-xs font-medium">{singleuser.country}</p>
                  </div>
                  <div className="w-1/2 flex px-3 py-1 mb-2 bg-yellow-200 rounded  justify-between">
                    <p className="text-xs">Zip Code</p>
                    <p className="text-xs font-medium">{singleuser.zipcode}</p>
                  </div>
                </div>
              </div>
              {/* Address End */}
            </div>
          </div>
        </div>

        {/* Right side End */}
      </div>
    </div>
  );
};

export default Main;
