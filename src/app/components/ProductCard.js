import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ item }) => {
  return (
    <div className='col-span-3 flex justify-center items-center flex-col'>
      <Image
      className='border-4 border-yellow-400 '
        src={`/imgs/${item.image}`}
        alt={item.name}
        width={0}
        height={0}
        sizes='100vw'
        style={{ width: '85%', height: 'auto' }}
      />
      <h3 className='text-pink-500 text-lg font-medium mt-5'>{item.name}</h3>
      <h2 className='text-pink-500 text-l font-medium mt-2'>{item.author}</h2>
      <Link className='text-yellow-400 font-bold mb-8' href={`/product/${item._id}`}>View More</Link>
    </div>
  );
};

export default ProductCard;
