import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

//
export default function Login() {
  //
  const [form, setform] = useState({ email: "", password: "" });
  //
  const navigate = useNavigate();
  //
  const LoginUser = async (e) => {
    e.preventDefault();
    const { email, password } = form;
    try {
      const { data } = await axios.post("/login", {
        email,
        password,
      });
      if (data?.error) {
        toast.error(data.error);
      } else {
        setform({ email: "", password: "" });
        navigate("/");
      }
    } catch (error) {
      console.log("err", error);
    }
  };
  //

  return (
    <>
      <form className="m-2" onSubmit={LoginUser}>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            value={form.email}
            onChange={(e) => setform({ ...form, email: e.target.value })}
            aria-describedby="emailHelp"
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
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" className="btn btn-primary ">
          Submit
        </button>
      </form>
    </>
  );
}
