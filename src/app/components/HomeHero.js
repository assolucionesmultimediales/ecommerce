'use client'; // Esto asegura que el código solo se ejecute en el cliente
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HomeHero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = [
    "Hace nuestra trivia",
    "Demostrá cuánto sabes",
    "Suma puntos",
    "Gana descuentos"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000); // Cambiar cada 3 segundos

    return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonte
  }, []);

  return (
    <Link href="/trivia">
      <div className="w-full h-[20vh] bg-gradient-to-t from-pink-700 via-black to-black bg-noise flex items-center justify-center mt-20">
        <h1 className="text-white text-3xl md:text-4xl font-bold text-center px-4 hover:underline text-glow">
          {texts[textIndex]}
        </h1>
      </div>
    </Link>
  );
};

export default HomeHero;
