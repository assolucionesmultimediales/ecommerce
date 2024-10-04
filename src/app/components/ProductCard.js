import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ item, key }) => {
  return (
    <div key={key} className='col-span-3 flex justify-center items-center flex-col'>
      <Image
      className='border-4 border-yellow-400 '
        src={`/imgs/${item.image}`}
        alt={item.name}
        width={0}
        height={0}
        sizes='100vw'
        style={{ width: '85%', height: 'auto' }}
      />
      <h2 className='text-pink-500 text-lg font-inter font-bold mt-4'>{item.name}</h2>
      <h2 className='text-pink-500 text-l font-medium mt-2 mb-2'>{item.author}</h2>
      <Link className='text-yellow-400 font-bold mb-12 font-montserrat' href={`/product/${item._id}`}>Ver más</Link>
    </div>
  );
};

export default ProductCard;
