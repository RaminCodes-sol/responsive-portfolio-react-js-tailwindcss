import { Link } from "react-router-dom"
import { BsGithub, BsTwitter } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className='w-[100%] max-w-[1150px] mx-auto flex flex-col gap-y-5 py-7 text-center sm:flex-row sm:items-center sm:justify-between sm:px-7'>

        <div>
            <h1 className="text-2xl text-white font-semibold font-Space_Grotesk">Ramin Yousefpour</h1>
        </div>

        <div className='space-x-6'>
            <button className="text-[1.5rem] text-white">
                <Link to=''><BsGithub /></Link>
            </button>
            <button className="text-[1.5rem] text-white">
                <Link to=''><FaLinkedin /></Link>
            </button>
            <button className="text-[1.5rem] text-white">
                <Link to=''><BsTwitter /></Link>
            </button>
        </div>

    </nav>
  )
}

export default Navbar