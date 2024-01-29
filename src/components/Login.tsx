import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

export const Login = () => {
  const authLogin = true;
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (authLogin) {
      const { from } = location.state || { from: { pathname: "/about" } };
      navigate(from, { replace: true });
    }
  }, [authLogin, location, navigate]);
  return (
    <div>
      <input />
      <button>User Name</button>
    </div>
  );
};
