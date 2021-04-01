import { useEffect, useState } from "react";

function Route({ path, children }) {
  const [cureentPath, setCureentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCureentPath(window.location.pathname);
    };

    window.addEventListener("popstate", onLocationChange);

    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []);

  return cureentPath === path ? children : null;
}

export default Route;
