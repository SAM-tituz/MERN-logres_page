import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Register() {
  // 
  const [form, setform] = useState({ name: "", email: "", password: "" });
  //
  const navigate = useNavigate();
  const RegisterUser = async (e) => {
    e.preventDefault();
    const { name, email, password } = form;
    try {
      const { data } = await axios.post("/register", {
        name,
        email,
        password,
      });
      if (data?.error) {
        toast.error(data.error);
      } else {
        setform({name:"",email:"",password:""});
        toast.success("Registration successful!");
        navigate("/login");
      }
    } catch (error) {
      console.error("RegisterUser error:", error);
      toast.error(error.response?.data?.error || "Something went wrong registration Failed");
    }
  };
  return (
    <>
      <form className="m-2" onSubmit={RegisterUser}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setform({ ...form, name: e.target.value })}
            className="form-control"
            placeholder="Enter your Name..."
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setform({ ...form, email: e.target.value })}
            className="form-control"
            placeholder="Enter your Email..."
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            value={form.password}
            onChange={(e) => setform({ ...form, password: e.target.value })}
            className="form-control"
            placeholder="Enter your Password..."
          />
        </div>

        <button type="submit" className="btn btn-primary ">
          Submit
        </button>
      </form>
    </>
  );
}

export default Register;
