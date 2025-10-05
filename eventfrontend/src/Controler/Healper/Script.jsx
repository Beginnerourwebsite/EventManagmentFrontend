import { useEffect } from "react";

const useTemplateScripts = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "assets/js/app.js"; // path in public folder
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
};

export default useTemplateScripts;
