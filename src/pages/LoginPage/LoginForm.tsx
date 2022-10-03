import { useState } from "react";
import { useNavigate } from "react-router-dom";

const USERNAME = "asd";
const PASSWORD = "asd";

export function LoginForm() {
  const [errMsg, setErrMsg] = useState(false);
  const [inputData, setInputData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (inputData.username === USERNAME && inputData.password === PASSWORD) {
      navigate("/dashboard", { replace: true });
    } else {
      setErrMsg(true);
      const t = setTimeout(() => {
        setErrMsg(false);
        return () => clearInterval(t);
      }, 2000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="loginpage-form">
      <input
        type="text"
        name="username"
        placeholder="Username"
        onChange={(e) =>
          setInputData({ ...inputData, username: e.target.value })
        }
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={(e) =>
          setInputData({ ...inputData, password: e.target.value })
        }
      />
      <p className="loginpage-form-error">
        {errMsg && "Wrong username or password"}
      </p>
      <input type="submit"></input>
    </form>
  );
}
