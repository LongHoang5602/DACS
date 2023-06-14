import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import "./forget.scss";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleForgotPassword = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:1812/api/auth/forgetpwd", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email }),
    });
    if (response.status === 200) {
      const data = await response.json();
      console.log(data)
      setMessage(data.message);
    } else {
      setMessage("Invalid email address");
    }
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Welcome to FoodVN</h1>
          <p>
            FoodVN sẽ mang đến bạn một trải nghiệm người dùng một cách hiện đại, nơi
            gặp của những người bạn trên mạng xã hội.
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Forgot Password</h1>
          <form onSubmit={handleForgotPassword}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <button type="submit">Reset Password</button>
          </form>
          <p>{message}</p>
          <Link to="/login">Back to Login</Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;