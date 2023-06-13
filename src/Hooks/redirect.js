import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function usePreventAuthUser(route, auth) {
  const location = useLocation();
  const navigate = useNavigate();

  console.log(auth);

  useEffect(() => {
    if (auth && location.pathname.split("/")[1] === route) {
      navigate("/");
    }
  }, [auth, location.pathname, navigate, route]);
}
