import "./App.css";
import HeroPage from "./components/Pages/HeroPage";
import AboutPage from "./components/Pages/AboutPage";
import SkillsPage from "./components/Pages/SkillsPage";
import PortfolioPage from "./components/Pages/PortfolioPage";
import TeamProjectsPage from "./components/Pages/TeamProjectsPage";
import ContactsPage from "./components/Pages/ContactsPage";
import Footer from "./components/Pages/Footer";

function App() {
  return (
    <>
      <HeroPage />
      <AboutPage />
      <SkillsPage />
      <PortfolioPage />
      <TeamProjectsPage />
      <ContactsPage />
      <Footer />
    </>
  );
}

export default App;
