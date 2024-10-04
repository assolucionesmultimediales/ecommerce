import Inner from '@/app/components/Inner';
import ProductCard from '@/app/components/ProductCard';
import { getAllProductsDB } from '@/app/actions';

const specialProducts = async () => {
  // Obtener todos los productos
  const response = await getAllProductsDB();

  // Filtrar los productos con el nombre de "Sailor Moon"
  const sailorMoonProducts = response.products?.filter((item) =>
    item.name.toLowerCase().includes("sailor moon")
  );

  return (
    <section>
      <Inner>
        <h2 className="text-start ml-5 mb-14 mt-40 text-pink-500 text-3xl font-bold">
          Selección Especial
        </h2>
        <div className="grid grid-cols-12 gap-1 mb-8 mt-20">
          {sailorMoonProducts.map((item, index) => (
            <ProductCard key={index} item={item} />
          ))}
        </div>
      </Inner>
    </section>
  );
};

export default specialProducts;
