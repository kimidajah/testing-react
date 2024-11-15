import logo from "./logo.svg";
import "./App.css";
import MyButton from "./components/MyButton";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const navText = "Hilmannur";
  const kuliah = "Kaist";
  const click = () => {
    alert("tombol berhasil di click");
  }
  const paragraf = () => {
    return (
      <div>
        <i>mantap bang</i>
        <h5>horeee</h5>
        <marquee>jos gamdos</marquee>
      </div>
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <Header test={navText}/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Halo cuyyy</p>
        <MyButton kuli={kuliah} click={click}/>
        <Footer text={paragraf}/>
      </header>
    </div>
  );
};

export default App;
