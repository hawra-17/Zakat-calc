import "./App.css";
import NavPar from "./components/navPar";
import CardBlock from "./components/cardBlock";

function App() {
  return (
    <main>
      <NavPar />
      <div className="bg-green-50 h-screen flex flex-col justify-center items-center p-44">
        <CardBlock />
      </div>
    </main>
  );
}

export default App;
