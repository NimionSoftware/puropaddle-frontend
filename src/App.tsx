import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="h-screen">
        <img src="/padel-icon-1.png"></img>
        <h1 className="text-blue-300">Puro Padel</h1>
      </div>
      <Footer />
    </>
  );
}

export default App;
