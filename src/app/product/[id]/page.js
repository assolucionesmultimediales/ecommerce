import { getOneProductDB } from "@/app/actions";
import ProductSingle from "@/app/components/ProductSingle";

const Product = async ({ params }) => {
  const { id } = params;
  const response = await getOneProductDB(id);
 
  const product = {   
    ...response.product,
    id
  }

  return <ProductSingle product={product}/>
};

export default Product;
