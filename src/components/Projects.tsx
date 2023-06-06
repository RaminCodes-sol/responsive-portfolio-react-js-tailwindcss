import { Link } from 'react-router-dom'
import image  from '../assets/ferdinand-unsplash.jpg'



const Projects = () => {
  return (
    <section className='w-[100%] max-w-[1150px] mx-auto'>

      {/*------------Title------------*/}
      <div className='flex justify-between text-white px-3 py-7 mt-7'>
        <h1 className='text-3xl font-bold'>Projects</h1>
        <button className='font-semibold border-b-[.15rem] border-[#17ffc4]'>
          <Link to=''>CONTACT ME</Link>
        </button>
      </div>

      {/*----------Projects----------*/}
      <div className='text-white px-4 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3'>
        {
          new Array(6).fill(0).map((_, index) => {
            return (
              <div key={index} className='rounded-sm overflow-hidden font-Space_Grotesk mb-7'>
                <img src={image} alt='img' className='object-cover' />
                <h2 className='text-xl mt-3 sm:text-[1rem] sm:mt-1'>DESIGN PORTFOLIO</h2>
                <div className='flex gap-3 my-1.5 text-[silver] sm:text-[.84rem] sm:my-0'>
                  <span>HTML</span>
                  <span>CSS</span>
                </div>
                <div className='flex gap-3 text-l sm:hidden '>
                  <button className='border-b-[2px] border-[#17ffc4] pb-1'><Link to=''>view project</Link></button>
                  <button className='border-b-[2px] border-[#17ffc4] pb-1'><Link to=''>view code</Link></button>
                </div>
              </div>
            )
          })
        }
      </div>

    </section>
  )
}

export default Projects