import React, { useEffect, useState } from "react";
import { SignInRequest } from "../../../types/Users";
import { useSignInUserMutation } from "../../store/features/apiSlice";
import { useNavigate } from "react-router-dom";

const SignInForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [signIn, { isSuccess }] = useSignInUserMutation();
  const navigate = useNavigate();
  // const [errors, setErrors] = useState<string []>([])
  // const [dirty, setDirty] = useState<boolean>(false)

  useEffect(() => {
    if (isSuccess) {
      navigate("/")
    }
  }, [
    isSuccess,
  ]);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const credentials: SignInRequest = {
      credential: email,
      password,
    };
    signIn(credentials);
  }
  return (
    <form onSubmit={onSubmit}>
      <h1>Sign In</h1>
      <div>
        <label>
          <h2>Email</h2>
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
      </div>
      <div>
        <label>
          <h2>Password</h2>
        </label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
      </div>
      <input type="submit" value="Sign In" />
    </form>
  );
};

export default SignInForm;
