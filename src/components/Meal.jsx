// images
import Image from '../../public/medias/images/plat-fraise.png';

function Meal() {
  return (
    <div className='bg-yellow w-full h-96 mt-20'>
        <div className='flex'>
            <div className='relative hidden 2xl:block w-full'>
                <img className='absolute -top-24' src={Image} alt="" />
            </div>
            <div className='w-full flex flex-col justify-center text-white space-y-5 mt-24 px-10 2xl:px-0 2xl:pr-40'>
                <h2 className='text-4xl'>Enjoy Our Meal</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
        </div>
    </div>
  )
}

export default Meal;
