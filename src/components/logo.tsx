import Image from 'next/image';
import logo from '../../public/medihub-logo.png'; 

export const Logo = () => (
  <div className="relative">
    <Image 
      src={logo} 
      alt='Logo'
      priority 
      className="w-48 h-auto sm:w-48 md:w-52 lg:w-56 object-contain" 
    />
  </div>
);