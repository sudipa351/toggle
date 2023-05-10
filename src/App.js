// import Footer from "rc-footer";
import "./App.css";
import Carousal from "./Carousal";
import Header from "./Header";
import Footer from "./Footer";
import { Card } from "react-bootstrap";
function App() {
  return (
    <div className="App">
      <Header />
      <Carousal />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
