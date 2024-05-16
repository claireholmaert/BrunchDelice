// images
import Image1 from '../../public/medias/images/the.jpeg';
import Image2 from '../../public/medias/images/plat1.jpeg';
import Image3 from '../../public/medias/images/plat2.jpeg';

function Menu() {
  return (
    <div className="w-full mt-40 tracking-wide">
        <h2 className="text-center text-4xl text-white">Our Menu</h2>
        <div className="grid grid-cols-3 gap-5 p-20">
            <div className= "w-full">
                <div className="flex flex-col space-y-5">
                    <img 
                    className='mb-5' 
                    src={Image1} 
                    alt="" 
                    />
                    <h3 className='text-yellow text-3xl uppercase'>Italian Source Mushroom</h3>
                    <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <h4 className='text-yellow text-xl'>Price: $12.00</h4>
                </div>
            </div>
            <div className="w-full">
            <div className="flex flex-col space-y-5">
                    <img 
                    className='mb-5' 
                    src={Image2} 
                    alt="" 
                    />
                    <h3 className='text-yellow text-3xl uppercase'>Italian Source Mushroom</h3>
                    <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <h4 className='text-yellow text-xl'>Price: $12.00</h4>
                </div>
            </div>
            <div className="w-full">
            <div className="flex flex-col space-y-5">
                    <img 
                    className='mb-5' 
                    src={Image3} 
                    alt="" 
                    />
                    <h3 className='text-yellow text-3xl uppercase'>Italian Source Mushroom</h3>
                    <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <h4 className='text-yellow text-xl'>Price: $12.00</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Menu
