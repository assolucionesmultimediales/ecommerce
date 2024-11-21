'use client';
import { useAppContext } from '@/app/contexts/AppContext';
import { useTriviaContext } from '@/app/contexts/TriviaContext'; // Importo el context de Trivia
import Link from 'next/link';
import Image from 'next/image';
import { FaCartShopping } from 'react-icons/fa6';


export default function Navbar() {
  const { cartLength } = useAppContext(); // Accedemos al contexto del carrito
  const { triviaScore } = useTriviaContext(); // Accedemos al puntaje de trivia desde el contexto

  return (
    <div className='flex justify-between items-center h-24 bg-pink-700 border-b-4 border-yellow-400 text-white px-10 fixed top-0 w-full'>
      <Link href={`/`} className='flex'>
        <Image src={`/imgs/logo.png`} width={50} height={50} alt='Logo' />
        <h3 className='text-lg mt-3 font-semibold'>KIRA´S MANGA STORE</h3>
      </Link>
      <nav>
        <ul>
          <li>
            <Link className='mr-32' href={`/specialProducts`}>Seleccion especial</Link>
          </li>
        </ul>
      </nav>

      <div className='flex items-center gap-5'>
        {/* Mostrar el puntaje de trivia */}
        {triviaScore > 0 && (
          <span className='text-white font-bold'>
            Puntaje: {triviaScore}
          </span>
        )}
        <Link href={`/cart`}>
          <div className='relative mr-10'>
            <FaCartShopping size={30} />
            {cartLength > 0 && (
              <span className='absolute top-5 left-5 flex items-center justify-center bg-yellow-400 text-pink-500 rounded-full w-2 h-4 p-4 text-sm font-bold'>
                {cartLength}
              </span>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
}
