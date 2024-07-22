import logo from '../assets/MC.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
const navbar = () => {
  return (
    <>
    <nav className=' mb-20 flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 item-center'>
        <a href=""><img  className='mx-2 w-20' src={logo} alt="logo"/></a>
      </div>
      <div className='flex m-8 item-center justify-center gap-4 text-2xl'>
       <a href="https://www.linkedin.com/in/manas-chaudhary-6a2098224/"><FaLinkedin/></a> 
        <a href="https://github.com/Manas0066"><FaGithub/></a>
        <a href=""><FaTwitter/></a>
        <a href=""><FaInstagram/></a>
      </div>
    </nav>
    </>
  )
}

export default navbar
