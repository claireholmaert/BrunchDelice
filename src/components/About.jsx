// images
import Image1 from '../../public/medias/images/menu.jpeg';
import Image2 from '../../public/medias/images/toast.png';

function About() {
  return (
    <div className="text-white mt-20">
        <div className='flex items-center p-20 space-x-10'>
          <div>
            <img className='-rotate-90' src={Image1} alt="" />
          </div>
          <div className='tracking-wide space-y-5 w-1/2'>
            <h2 className='text-4xl'>About Us</h2>
            <p className='text-xl'>Welcome to our home, where each day begins with the promise of a delicious taste journey. Our brunch restaurant is much more than just a place to eat; it is a sanctuary for foodies, a place where flavors come together to create unforgettable culinary experiences. Located in the heart of the city, our establishment exudes friendliness and authenticity. Our dedicated team works with passion to provide our guests with fine dining, showcasing fresh local ingredients and inventive recipes. Whether for a brunch with friends, a business lunch or a moment of relaxation alone, our restaurant is the ideal place to savor every moment. Come join us and let us tantalize your taste buds with our tempting menu and warm atmosphere.</p>
          </div>
        </div> 
    </div>
  )
}

export default About;
