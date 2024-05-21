// images
import Image from '../../public/medias/images/enjoy.jpeg';

function Enjoy() {
  return (
    <div className=''>
      <div className='bg-no-repeat bg-cover w-full h-full p-10 xl:p-40' style={{ backgroundImage: `url(${Image})`}}>
        <div className='top-80 w-full flex items-center justify-center'>
        <div className='backdrop-blur-sm z-10 lg:w-2/5 flex flex-col items-center justify-center p-10 xl:p-20 border-8 border-yellow text-white space-y-5 tracking-wide'>
          <h2 className='text-2xl lg:text-4xl'>Enjoy Our Food</h2>
          <p className='text-center'>It's treating yourself to a moment of pure indulgence and conviviality. Our team of talented chefs takes pride in preparing each dish with fresh, local ingredients, ensuring authentic and delicious flavors. Whether for a brunch with friends, a family lunch or a solo gourmet break, our varied menu will satisfy all your desires. Each bite is an invitation to discover exquisite textures and refined tastes, all in a warm and welcoming atmosphere. Come and enjoy our food for an unforgettable dining experience.</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Enjoy;
