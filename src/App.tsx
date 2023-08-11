import Footer from "./components/Footer";
import Header from "./components/Header";
import TimeGrid from "./components/TimeGrid";

function App() {
  return (
    <>
      <Header />
      {/* <div className="h-screen">
        <img src="/padel-icon-1.png"></img>
        <h1 className="text-blue-300">Puro Padel</h1>
      </div> */}
      <div className="flex justify-center items-center h-[1000px] bg-gray-100">
        <TimeGrid />
      </div>
      <Footer />
    </>
  );
}

export default App;
