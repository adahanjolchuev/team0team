import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import Home from "./components/pages/Home";
import Center from "./components/pages/Center";
import Hero from "./components/pages/Hero/Hero";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Home />
      <Center />
      <Footer />
    </div>
  );
}

export default App;
