// images
import Image1 from '../../public/medias/images/herotop1.png';
import Image2 from '../../public/medias/images/plat-fraise.png';

// elements
import Container from './elements/Container';

// sections
import Header from './sections/Header';

function HeroTop() {
  return (
    <div className='w-full h-screen tracking-wide'>
        <div className='bg-no-repeat bg-cover w-full h-full' style={{ backgroundImage: `url(${Image1})`}}>  
        <Header />          
            <Container>
                <div className='flex items-center mt-40'>
                    <div className='hidden xl:block'>
                    <img 
                    src={Image2} 
                    className='rotate-[150deg]'
                    alt="" 
                    />
                    </div>
                    <div className='flex flex-col items-start space-y-8'>
                    <h2 className='text-yellow text-4xl sm:text-6xl tracking-wide'>Contact Us For Best Breakfast</h2>
                    <p className='text-white'>Discover a unique culinary experience with our irresistible brunch! Authentic and creative flavors await you in a warm and friendly setting. Join us for an unforgettable gourmet experience!</p>
                    <button className='bg-yellow px-5 py-3 rounded-md animate hover:bg-yellow/70'>Contact Us</button>
                    </div>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default HeroTop;
