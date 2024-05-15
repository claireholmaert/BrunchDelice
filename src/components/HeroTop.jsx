// images
import Image from '../../public/medias/images/herotop.jpeg';
import Image2 from '../../public/medias/images/plat-fraise.png';
import Logo from '../../public/medias/images/pancakes.png';

function HeroTop() {
  return (
    <div className='font-primary tracking-wide'>
        <header className='relative'>
            <img 
            className='absolute w-full brightness-[.1]' 
            src={Image} 
            alt="vue de dessus d'un brunch avec croissants, gauffres et autre gourmandises" 
            />
            <div className='absolute py-10 px-20 w-full'>
                <div className='flex items-center justify-between'>
                <nav className='text-white space-x-20 uppercase'>
                    <a href="#" className='animate hover:text-yellow'>Home</a>
                    <a href="#" className='animate hover:text-yellow'>About</a>
                    <a href="#" className='animate hover:text-yellow'>Menus</a>
                    <a href="#" className='animate hover:text-yellow'>Offers</a>
                </nav>
                <div className='flex flex-col items-center'>
                    <img 
                    className='w-20'
                    src={Logo} 
                    alt="" 
                    />
                    <h1 className='text-white'>Brunch Delice</h1>
                </div>
                <nav className='text-white uppercase space-x-20 mr-40'>
                    <a href="" className='animate hover:text-yellow'>Gallery</a>
                    <a href="" className='animate hover:text-yellow'>Contact</a>
                    <a href="" className='animate hover:text-yellow'>Blog</a>
                </nav>
                </div>
            </div>
        </header>
        <div className='absolute bottom-0 p-20'>
            <div className='flex items-center justify-evenly'>
                <img className='rotate-[200deg] w-1/2' src={Image2} alt="vue de dessus d'une assiette avec une gauffre chantilly, des morceaux de fraise par dessus, une boule de glace saveur vanille à côté de la gauffre ainsin qu'une tasse de café, une cuillère en bois, du lait" />
                <div className='flex flex-col items-start space-y-7 w-1/3'>
                    <h2 className='text-yellow text-6xl'>Contact Us For Best Breakfast</h2>
                    <p className='text-white'>Découvrez une expérience culinaire unique avec notre brunch irrésistible ! Des saveurs authentiques et créatives vous attendent dans un cadre chaleureux et convivial. Rejoignez-nous pour une expérience gourmande inoubliable !</p>
                    <button className='btn animate bg-yellow px-5 py-3 rounded-md'>Contact Us</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroTop;
