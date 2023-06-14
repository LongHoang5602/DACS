import { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import "./resetPassword.scss";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const { resetPassword } = useAuth();
  const { token } = useParams();
  const history = useHistory();

  const handleResetPassword = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      await resetPassword(token, password);
      setMessage("Password reset successful");
      setTimeout(() => history.push("/login"), 2000);
    } catch (error) {
      setMessage("Failed to reset password");
    }
  };

  return (
    <div className="reset-password">
      <div className="card">
        <h1>Reset Password</h1>
        <form onSubmit={handleResetPassword}>
          <input
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            required
          />
          <button type="submit">Reset Password</button>
        </form>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default ResetPassword;