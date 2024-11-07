import Image from 'next/image';
import Link from 'next/link';

const HomeHero = () => {
  return (
    <Link href="/trivia">
      <Image
        src={`/imgs/banner1.png`}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '70%', height: 'auto', marginLeft: '15%', marginTop: '5%' }} // opcional
        alt="hero"
      />
    </Link>
  );
};

export default HomeHero;
