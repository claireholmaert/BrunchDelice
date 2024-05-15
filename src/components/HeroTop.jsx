// images
import Image1 from '../../public/medias/images/herotop1.png';
import Image2 from '../../public/medias/images/plat-fraise.png';

// elements
import Container from './elements/Container';

// sections
import Header from './sections/Header';

function HeroTop() {
  return (
    <div className='w-full h-screen font-primary tracking-wide'>
        <div className='bg-no-repeat bg-cover w-full h-full' style={{ backgroundImage: `url(${Image1})`}}>  
        <Header />          
            <Container>
                <div className='flex items-center mt-40'>
                    <div className=''>
                    <img 
                    src={Image2} 
                    className='rotate-[150deg]'
                    alt="" 
                    />
                    </div>
                    <div className='flex flex-col items-start space-y-8'>
                    <h2 className='text-yellow text-6xl tracking-wide'>Contact Us For Best Breakfast</h2>
                    <p className='text-white'>Découvrez une expérience culinaire unique avec notre brunch irrésistible ! Des saveurs authentiques et créatives vous attendent dans un cadre chaleureux et convivial. Rejoignez-nous pour une expérience gourmande inoubliable !</p>
                    <button className='bg-yellow px-5 py-3 rounded-md animate hover:bg-yellow/70'>Contact Us</button>
                    </div>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default HeroTop;
