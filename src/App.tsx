import SubNav from "./components/SubNav/SubNav";
import NavBar from "./components/NavBar/NavBar";

function App() {
  // const handleClick = (e: any) => {
  //   console.log(e);
  // };
  return (
    <div className="w-[100vw]">
      <NavBar />
      <SubNav />
    </div>
  );
}

export default App;
