import { Link } from "react-router-dom"
import { BsGithub, BsTwitter } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";



const Footer = () => {
  return (
    <footer className='bg-zinc-800 mt-5'>

        {/*-----------Inputs-----------*/}
        <div className='w-[100%] max-w-[1150px] mx-auto'>
            <div className='w-[100%] max-w-[1100px] mx-auto grid grid-cols-1 gap-6 text-white py-12 px-5 md:grid-cols-2'>
                <div className='font-Space_Grotesk mb-7 md:mb-0'>
                    <h1 className='text-6xl mb-5'>Contact</h1>
                    <p className='md:w-[370px]'>I would love to hear about your project and how i could help. Please fill in the form, and I'll get back to you as soon as possible.</p>
                </div>
                <div className='flex flex-col gap-3'>
                    <input type='text' placeholder="NAME" className="outline-none px-2 py-2 bg-transparent  border-b border-[#9b9b9b]" />
                    <input type='text' placeholder="EMAIL" className="outline-none px-2 py-2 bg-transparent  border-b border-[#9b9b9b]" />
                    <textarea name="message" rows={4} cols={50} placeholder="MESSAGE" className="outline-none resize-none p-1 bg-transparent border-b border-[#9b9b9b]"></textarea>
                    <button className="bg-[#17ffc4] p-2 text-black rounded-sm transition-colors hover:bg-[#0bc597]">submit</button>
                </div>
            </div>

            <div className='flex justify-center mt-5'>
                <span className='w-[100%] h-[1px] inline-block bg-[#a8a8a8]'></span>
            </div>

            {/*-----------Social-Medias-----------*/}
            <div className='w-[100%] max-w-[1100px] mx-auto flex justify-between p-3 pb-7 px-5 mt-5'>
                <div>
                    <h4 className="text-xl text-white font-bold font-Space_Grotesk">Ramin Yousefpour</h4>
                </div>

                <div className='space-x-6'>
                    <button className="text-[1.3rem] text-white">
                        <Link to=''><BsGithub /></Link>
                    </button>
                    <button className="text-[1.3rem] text-white">
                        <Link to=''><FaLinkedin /></Link>
                    </button>
                    <button className="text-[1.3rem] text-white">
                        <Link to=''><BsTwitter /></Link>
                    </button>
                </div>

            </div>
        </div>
     
    </footer>
  )
}

export default Footer