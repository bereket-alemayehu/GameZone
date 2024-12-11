import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const Error = useRouteError();
  return (
    <div>
      {isRouteErrorResponse(Error) ? "Oops Invalid Page" : "Unexpected Error"}
    </div>
  );
};

export default ErrorPage;
