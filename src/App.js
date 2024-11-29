import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import NavPar from "./components/navPar";
import CardBlock from "./components/cardBlock";
import Home from "./components/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavPar />}>
      <Route index element={<Home />} />
    </Route>
  )
);

function App() {
  return (
    <main>
      <NavPar />
      <RouterProvider router={router} />
      <div className="bg-green-50 h-screen flex flex-col justify-center items-center p-44">
        <CardBlock />
      </div>
    </main>
  );
}

export default App;
