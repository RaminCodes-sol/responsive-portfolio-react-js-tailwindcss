

const Skills = () => {
  return (
    <section className="space-y-4 w-[100%] max-w-[1150px] mx-auto">

      <h1 className="text-white text-center text-[1.2rem] font-bold font-Space_Grotesk border-b-[.15rem] border-[#17ffc4] inline-block ml-7 sm:text-l">
        Skills:
      </h1>

      <div className="text-[1.7rem] font-bold font-Space_Grotesk grid grid-cols-1 gap-y-[1.5rem] justify-center items-center text-center text-white sm:text-2xl sm:grid-cols-2 md:grid-cols-3 sm:gap-y-9 ">
        <h1>HTML</h1>
        <h1>CSS</h1>
        <h1>Sass</h1>
        <h1>Javascript</h1>
        <h1>Typescript</h1>
        <h1>React</h1>
        <h1>Nextjs</h1>
      </div>
       
      <div className='flex justify-center pt-3'>
        <span className='w-[100%] h-[1px] inline-block bg-[#a8a8a8]'></span>
      </div>
        
    </section>
  )
}

export default Skills