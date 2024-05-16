// components
import HeroTop from "../components/HeroTop";
import About from "../components/About";
import Quality from "../components/Quality";
import Enjoy from "../components/Enjoy";

function Homepage() {
  return (
    <div className="bg-gray-900 font-primary">
      <HeroTop />
      <About />
      <Quality />
      <Enjoy />
    </div>
  )
}

export default Homepage;
