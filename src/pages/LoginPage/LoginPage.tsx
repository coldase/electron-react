import "./LoginPage.css";
import { LoginForm } from "./LoginForm";

export function LoginPage() {
  function handleNewBtn() {
    window.open("test.html");
  }
  return (
    <div className="loginpage-container">
      <button onClick={handleNewBtn}>New window</button>
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
}
