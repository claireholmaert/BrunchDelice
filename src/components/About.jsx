// images
import Image1 from '../../public/medias/images/menu.jpeg';

// elements
import Container from './elements/Container';

function About() {
  return (
    <div className="text-white lg:mt-20 p-10">
        <div className='flex flex-col xl:flex-row items-center space-x-10'>
          <div>
            <img className='-rotate-90' src={Image1} alt="" />
          </div>
          <div className='tracking-wide space-y-5 lg:w-1/2 mt-10'>
            <h2 className='text-4xl'>About Us</h2>
            <p className='md:text-xl'>Welcome to our home, where each day begins with the promise of a delicious taste journey. Our brunch restaurant is much more than just a place to eat; it is a sanctuary for foodies, a place where flavors come together to create unforgettable culinary experiences. Located in the heart of the city, our establishment exudes friendliness and authenticity. Our dedicated team works with passion to provide our guests with fine dining, showcasing fresh local ingredients and inventive recipes. Whether for a brunch with friends, a business lunch or a moment of relaxation alone, our restaurant is the ideal place to savor every moment. Come join us and let us tantalize your taste buds with our tempting menu and warm atmosphere.</p>
          </div>
        </div> 
    </div>
  )
}

export default About;
