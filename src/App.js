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
      <Route path="cardblock" element={<CardBlock />} /> {/* CardBlock route */}
      <Route path="home" element={<Home />} /> {/* Route for /home */}
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
