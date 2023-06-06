import { Link } from "react-router-dom"
import profieImage from '../assets/Ramin.png'



const HeaderSection = () => {
  return (
    <section className='mb-9 w-[100%] max-w-[1150px] mx-auto'>

      {/*------------Text------------*/}
      <div className="py-7 pb-9 px-3 flex items-center justify-center gap-8 flex-col sm:flex-row ">
        <div className="flex flex-col items-center font-Space_Grotesk text-white order-2 sm:order-1">
          <h1 className="text-3xl font-bold md:text-[2.7rem] lg:text-[3.5rem]">Nice to meet you!</h1>
          <h1 className="text-[1.4rem] md:text-[1.7rem] font-extrabold mt-2 mb-5">I'm <span className='border-b-[.25rem] border-[#17ffc4]'>Ramin Yousefpour.</span></h1>
          <p className='w-[340px] sm:w-[400px] text-center text-[#c4c4c4] mb-5 text-[1rem] px-4'>I'm frontend developer passionate about building accessible web apps that users love.</p>
          <button className="border-b-2 border-[#17ffc4] mt-4 text-[.9rem] font-bold tracking-[.1rem] sm:text-[1.1rem]">
            <Link to=''>CONTACT ME</Link>
          </button>
        </div>

        {/*-------Image-------*/}
        <div className="profile-image flex justify-center order-1 sm:order-2 sm:rounded-t-full overflow-hidden">
          <img src={profieImage} alt='img' className="object-cover w-[200px] sm:w-[270px]" />
        </div>
      </div>

      {/*------------Bottom-Line------------*/}
      <div className='flex justify-center'>
        <span className='w-[100%] h-[1px] inline-block bg-[#a8a8a8]'></span>
      </div>

    </section>
  )
}

export default HeaderSection