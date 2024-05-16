// components
import HeroTop from "../components/HeroTop";
import About from "../components/About";
import Quality from "../components/Quality";
import Enjoy from "../components/Enjoy";
import Menu from "../components/Menu";
import Meal from "../components/Meal";
import Footer from "../components/Footer";

function Homepage() {
  return (
    <div className="bg-gray-900 font-primary tracking-wide">
      <HeroTop />
      <About />
      <Quality />
      <Enjoy />
      <Menu />
      <Meal />
      <Footer />
    </div>
  )
}

export default Homepage;
