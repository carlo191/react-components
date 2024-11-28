import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/header";
import Card from "./card";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <h1 className="text-center p-3 ">il mio blog </h1>
      </div>
      <div className="d-flex justify-content-center mt-2 ">
        <Card />
      </div>

      <div id="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
