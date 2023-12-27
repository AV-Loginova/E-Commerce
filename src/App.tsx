import SubNav from "./components/SubNav/SubNav";
import NavBar from "./components/NavBar/NavBar";
import Catalogue from "./components/Catalogue/Catalogue";

function App() {
  return (
    <div className="w-[100vw]">
      <NavBar />
      <SubNav />
      <Catalogue />
    </div>
  );
}

export default App;
