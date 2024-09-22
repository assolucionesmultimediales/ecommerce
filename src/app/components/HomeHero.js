import Image from 'next/image';

const HomeHero = () => {
  return (
    <Image
      src={`/imgs/banner1.png`}
      width={0}
      height={0}
      sizes='100vw'
      style={{ width: '70%', height: 'auto', marginLeft: '16%', marginTop:'6%'}} // optional
      alt='hero'
    />
  );
};

export default HomeHero;
