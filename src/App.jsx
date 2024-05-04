import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import MySearch from "./components/MySearche";
import MyFootere from "./components/MyFooter";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <MySearch />
      <MyFootere />
    </div>
  );
}

export default App;
