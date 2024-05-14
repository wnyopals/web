import React, { useEffect, useState } from "react";
import { useAddUserMutation } from "../../store/features/apiSlice";
import { useNavigate } from "react-router-dom";
import { SignUpRequest } from "../../../types/Users";

const SignUpForm = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [addressLineOne, setAddressLineOne] = useState<string>("");
  const [addressLineTwo, setAddressLineTwo] = useState<string>("");
  const [addressCity, setAddressCity] = useState<string>("");
  const [addressStateProvince, setAddressStateProvince] = useState<string>("");
  const [addressPostalCode, setAddressPostalCode] = useState<number>(0);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [addUser, { isSuccess }] = useAddUserMutation();
  const navigate = useNavigate();

  // const [dirty, setDirty] = useState<boolean>(false);

  // const [errors, setErrors] = useState<string []>([])

  useEffect(() => {
    if (isSuccess) {
      alert("Sign in successful! Please sign in")
      navigate("/sign-in")
    }
  })

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const user: SignUpRequest = {
      email,
      firstName,
      lastName,
      addressLineOne,
      addressLineTwo,
      addressCity,
      addressPostalCode,
      addressStateProvince,
      password,
    };
    addUser(user);
  }

  return (
    <form onSubmit={onSubmit}>
      <h1>Sign Up</h1>

      {/* Name */}
      <h2>Your Info</h2>
      <div>
        <div>
          <label>
            <h3>first name</h3>
          </label>
          <input
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
        </div>
        <div>
          <label>
            <h3>last name</h3>
          </label>
          <input
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
        </div>
      </div>

      {/* User Info */}
      <h2>Login Info</h2>
      <div>
        <div>
          <label htmlFor="">
            <h3>Email</h3>
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">
            <h3>Password</h3>
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label htmlFor="">
            <h3>Confirm Password</h3>
          </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
      </div>

      {/* address info (optional) */}
      <h2>Location info (Optional)</h2>
      <div>
        <div>
          <label>
            <h3>Address line one</h3>
          </label>
          <input
            onChange={(e) => setAddressLineOne(e.target.value)}
            value={addressLineOne}
          />
        </div>
        <div>
          <label>
            <h3>Address Line Two</h3>
          </label>
          <input
            onChange={(e) => setAddressLineTwo(e.target.value)}
            value={addressLineTwo}
          />
        </div>
        <div>
          <label>
            <h3>City</h3>
          </label>
          <input
            onChange={(e) => setAddressCity(e.target.value)}
            value={addressCity}
          />
        </div>
        <div>
          <label>
            <h3>State or Province</h3>
          </label>
          <input
            onChange={(e) => setAddressStateProvince(e.target.value)}
            value={addressStateProvince}
          />
        </div>
        <div>
          <label>
            <h3>Postal Code</h3>
          </label>
          <input
            onChange={(e) => setAddressPostalCode(parseInt(e.target.value))}
            value={addressPostalCode}
          />
        </div>
      </div>
      <input type="submit" value="sign up" />
    </form>
  );
};

export default SignUpForm;
