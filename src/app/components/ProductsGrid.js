import Inner from '@/app/components/Inner';
import ProductCard from '@/app/components/ProductCard';
import {getAllProductsDB } from '@/app/actions';

export default async function ProductsGrid() {
  const response = await getAllProductsDB()
  
  return (
    <section>
      <Inner>
        <h2 className='text-start mb-12 mt-8 text-pink-500 text-3xl font-bold'>Nuevos ingresos</h2>
        <div className='grid grid-cols-12 gap-1'>
          {response.products && response.products.map((item, index) => (
            <ProductCard key={index} item={item} />
          ))}
        </div>
      </Inner>
    </section>
  );
}
