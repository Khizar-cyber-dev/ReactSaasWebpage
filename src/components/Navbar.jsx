import {useState} from 'react'
import logo from '../assets/logo.png'
import { RiCloseFill, RiMenu3Line } from 'react-icons/ri';


const Navbar = () => {
    const [isOpen,setIsOpen] = useState(false);
    const toggleMenu = ()=>{
        setIsOpen(!isOpen)
    } 
  return (
    <nav className='fixed top-0 left-0 right-0 z-50 m-2'>
        <div className='text-neutral-500 bg-black/60 backdrop-blur-md max-w-7xl mx-auto px-4 py-3 flex justify-between items-center rounded-xl border border-neutral-800'>
            <img src={logo} alt="logo" width={120} height={24}/>
            <div className="hidden md:flex space-x-6 ml-[65px]">
                <a href="#works" className='hover:text-neutral-200'>How its work?</a>
                <a href="#Pricing" className='hover:text-neutral-200'>Pricing</a>
                <a href="#testimonials" className='hover:text-neutral-200'>Testimonials</a>
            </div>
            <div className='hidden md:flex space-x-4 items-center'>
                <a href="#" className='hover:text-neutral-200'>Login</a>
                <a href="#" className='border border-neutral-700 text-white py-2 px-4 rounded-lg hover:bg-neutral-700 transition'>Get a Demo</a>
                <a href="#" className='bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition'>Start Free Trial</a>
            </div>
            <div className='md:hidden'>
                <button onClick={toggleMenu} className='text-white focus:outline-none' aria-label={isOpen ? "CloseMenu" : "OpenMenu"}>{isOpen ? <RiCloseFill /> : <RiMenu3Line />}</button>
            </div>
        </div>

        {isOpen && (
            <div className='md:hidden bg-neutral-900/60 backdrop-blur-md border border-neutral-800 rounded-xl mt-2'>
                <div className="flex flex-col space-y-4">
                    <div className="flex flex-col items-center justify-center space-y-5">
                    <a href="#" className='hover:text-neutral-200'>Product</a>
                    <a href="#" className='hover:text-neutral-200'>Pricing</a>
                    <a href="#" className='hover:text-neutral-200'>Resources</a>
                    <a href="#" className='hover:text-neutral-200'>Login</a>
                    </div>
                    <a href="#" className='border border-neutral-700 text-white py-2 px-4 rounded-lg text-center hover:bg-neutral-700 transition'>Get a Demo</a>
                    <a href="#" className='bg-blue-600 text-white py-2 px-4 rounded-lg text-center hover:bg-blue-500 transition'>Start Free Trial</a>
                </div>
            </div>
        )}
    </nav>
  )
}

export default Navbar