import Image from 'next/image';
import Link from 'next/link';
import AddToCart from '@/app/components/AddToCart';

const ProductCard = ({ item }) => {
  return (
    <div className='col-span-3 flex justify-center items-start flex-col'>
      <Link href={`/product/${item._id}`}>
        <Image
          className='border-4 border-yellow-400'
          src={`/imgs/${item.image}`}
          alt={item.name}
          width={0}
          height={0}
          sizes='100vw'
          style={{ width: '85%', height: 'auto' }}
        />
      </Link>
      <h2 className='text-pink-500 text-lg font-inter font-bold mt-4'>{item.name}</h2>
      <h2 className='text-pink-500 text-l font-medium mt-2 mb-2'>{item.author}</h2>
      <Link className='text-yellow-400 font-bold mb-4 font-montserrat' href={`/product/${item._id}`}>Ver más</Link>
      <AddToCart name={item.name} image={item.image} price={item.price} id={item._id} />
    </div>
  );
};

export default ProductCard;

