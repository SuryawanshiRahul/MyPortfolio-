import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [activePage, setActivePage] = useState("about");

  return (
    <main>
      <Sidebar />

      <div className="main-content">
        <Navbar
          activePage={activePage}
          setActivePage={setActivePage}
        />

        {activePage === "about" && <About />}
        {activePage === "resume" && <Resume />}
        {activePage === "portfolio" && <Portfolio />}
        {activePage === "contact" && <Contact />}

        <Footer />
      </div>
    </main>
  );
}

export default App;