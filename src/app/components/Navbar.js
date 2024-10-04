'use client';
import { useAppContext } from '@/app/contexts/AppContext';
import Link from 'next/link';
import Image from 'next/image';
import { FaCartShopping } from 'react-icons/fa6';


export default function Navbar() {
  const { cartLength } = useAppContext();
  return (
    <div className='flex justify-between items-center h-24 bg-pink-500 border-b-4 border-yellow-400  text-white px-10 fixed top-0 w-full'>
      <Link href={`/`}>
        <Image src={`/imgs/logo.png`} width={50} height={50} alt='Logo' />
      </Link>
      <nav>
        <ul className='flex justify-center items-center gap-5'>
          <li>
            <Link href={`/specialProducts`}>Seleccion especial</Link>
          </li>
          <li>
            <Link href={`/cart`}>Cart</Link>
          </li>
        </ul>
      </nav>

      <Link href={`/cart`}>
        <div className='relative'>
          <FaCartShopping size={30} />
          {cartLength > 0 && (
            <span className=' absolute top-5 left-5 flex items-center justify-center bg-yellow-400 text-pink-500 rounded-full w-2 h-4 p-4 text-sm font-bold'>
              {' '}
              {cartLength}
            </span>
          )}
        </div>
      </Link>
    </div>
  );
}
