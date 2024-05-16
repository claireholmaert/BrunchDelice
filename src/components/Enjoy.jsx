// images
import Image from '../../public/medias/images/enjoy.jpeg';

function Enjoy() {
  return (
    <div>
      <div className='relative'>
        <img className='absolute w-full z-0' src={Image} alt="" />
        <div className='absolute top-80 w-full flex items-center justify-center'>
        <div className='backdrop-blur-sm z-10 w-1/3 flex flex-col items-center justify-center p-20 border-8 border-yellow text-white space-y-5 tracking-wide'>
          <h2 className='text-4xl'>Enjoy Our Food</h2>
          <p>It's treating yourself to a moment of pure indulgence and conviviality. Our team of talented chefs takes pride in preparing each dish with fresh, local ingredients, ensuring authentic and delicious flavors. Whether for a brunch with friends, a family lunch or a solo gourmet break, our varied menu will satisfy all your desires. Each bite is an invitation to discover exquisite textures and refined tastes, all in a warm and welcoming atmosphere. Come and enjoy our food for an unforgettable dining experience.</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Enjoy;
