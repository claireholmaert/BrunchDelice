// components
import HeroTop from "../components/HeroTop";
import About from "../components/About";
import Quality from "../components/Quality";
import Enjoy from "../components/Enjoy";
import Menu from "../components/Menu";

function Homepage() {
  return (
    <div className="bg-gray-900 font-primary">
      <HeroTop />
      <About />
      <Quality />
      <Enjoy />
      <Menu />
    </div>
  )
}

export default Homepage;
