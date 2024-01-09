import SubNav from "./components/SubNav/SubNav";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="w-[100vw] flex flex-col h-[100vh]">
      <NavBar />
      <SubNav />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
