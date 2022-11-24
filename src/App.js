import Header from "./components/Header/Header";
import Company from "./components/Company/Company";
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/Services/Services";
import Advantages from "./components/Advantages/Advantages";
import Footer from "./components/Footer/Footer";
import './scss/style.scss';



function App() {
  return (
    <>
     <Header/>
     <Company/>
     <Portfolio/>
     <main>
     <Services/>
     </main>
     <Advantages/>
     <Footer/>
    </>
  );
}

export default App;
