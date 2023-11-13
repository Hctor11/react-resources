import { useRouteError,isRouteErrorResponse } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  let errorMessage : string = "";
  console.error(error);

    if (isRouteErrorResponse(error)) {
        errorMessage = error.data.message;
    }

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>bottomless pit, an unexpected error has occurred.</p>
      <p>
        <i>{errorMessage}</i>
      </p>
    </div>
  );
}