// images
import Logo from '../../../public/medias/images/pancakes.png';

function Header() {
  return (
    <div className='pt-10 px-40'>
        <nav className='flex items-center justify-between text-white text-xl'>
            <div className='space-x-20'>
                <a href="" className='animate hover:text-yellow'>Home</a>
                <a href="" className='animate hover:text-yellow'>About</a>
                <a href="" className='animate hover:text-yellow'>Menus</a>
                <a href="" className='animate hover:text-yellow'>Offers</a>
            </div>
            <div className='flex flex-col items-center'>
                <img className='w-16' src={Logo} alt="" />
                <h1>Brunch Delice</h1>
            </div>
            <div className='space-x-20'>
                <a href="" className='animate hover:text-yellow'>Gallery</a>
                <a href="" className='animate hover:text-yellow'>Contact</a>
                <a href="" className='animate hover:text-yellow'>Blog</a>
            </div>  
        </nav>
    </div>
  )
}

export default Header;
