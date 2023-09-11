import "./App.css";
import WorkBoard from "./WorkBoard"
import logo1 from "./logos/scoot.svg";
import logo2 from "./logos/blogr.svg";
import logo3 from "./logos/vector.svg";


function App() {
  return (
    <div className="logoContainer">
      <WorkBoard />
      <WorkBoard />
    </div>
  );
}

export default App;
