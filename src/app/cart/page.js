import Inner from "@/app/components/Inner";
import ProductsChekOut from "@/app/components/cart/ProductsChekOut";
import FormCheckout from "@/app/components/cart/FormCheckout";

const Cart = () => {
  return (
    <section className='flex flex-col min-h-screen mt-28'>
      <h1 className='text-pink-500 text-2xl font-semibold mt-5 mb-4 ml-64'>Completa tu compra</h1>
      <Inner className="flex-grow">
        <div className='grid grid-cols-12'>
          <div className='col-span-12 lg:col-span-6 text-pink-500 text-lg font-medium mt-5'>
            <FormCheckout />
          </div>
          <div className='col-span-12 lg:col-span-6 text-pink-500 text-lg font-medium mt-8'>
            <ProductsChekOut />
          </div>
        </div>
      </Inner>
    </section>
  );
};

export default Cart;
