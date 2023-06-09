import { RouterProvider } from "react-router-dom";
import { Routes } from "./Routes/routes";

function App() {
  return (
    <div>
      <RouterProvider router={Routes}></RouterProvider>
    </div>
  );
}

export default App;
