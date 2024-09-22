import Inner from "@/app/components/Inner";
import ProductsChekOut from "@/app/components/cart/ProductsChekOut";
import FormCheckout from "@/app/components/cart/FormCheckout";

const Cart = () => {
  return (
    <section className='h-screen mt-32'>
      <h1 className='text-pink-500 text-2xl font-medium mt-5'>Cart</h1>
      <Inner>
        <div className='grid grid-cols-12'>
          <div className='col-span-12 lg:col-span-6 text-pink-500 text-lg font-medium mt-5'>
            <FormCheckout />
          </div>
          <div className='col-span-12 lg:col-span-6 text-pink-500 text-lg font-medium mt-5'>
            <ProductsChekOut />
          </div>
        </div>
      </Inner>
    </section>
  );
};

export default Cart;
