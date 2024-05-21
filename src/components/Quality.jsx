// images
import Image from '../../public/medias/images/plat-fraise.png';

function Quality() {
  return (
    <div className="bg-yellow w-full rounded-sm mt-20">
      <div className="flex items-center p-10 lg:p-40 space-x-10">
        <div className="w-full space-y-5 text-white tracking-wide">
            <h2 className="text-4xl">Our Food Quality</h2>
            <p>At Brunch Delice, the quality of our food is our most valuable commitment. We meticulously choose fresh, local and organic ingredients to guarantee tasty and healthy dishes. Each recipe is crafted with careful attention to detail, ensuring authentic and exquisite cuisine. Our priority is to offer you an unforgettable culinary experience, where every bite reflects our passion for excellence.</p>
        </div>
        <div className="hidden lg:block w-full">
            <img src={Image} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Quality;
