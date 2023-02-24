import About from "./components/About";
import Nav from "./components/Nav";
import Header from "./components/Header";
import WhatWeDo from "./components/WhatWeDo";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer1 from "./components/Footer1";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <Nav />
    <Header />
    <About />
    {/**<About2 /> */}
    <WhatWeDo />
    <Clients />
    <Contact />
    <Footer1 />
    </>
  );
}

export default App;
