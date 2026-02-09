import Image from 'next/image';
import logo from '../../public/medihub-logo.png'; 

export const Logo = () => (
  // <img src={logo} alt="Medihub" className="h-10" />

    <Image  className='w-56 h-56' src={logo} alt='Logo'/>
 
)