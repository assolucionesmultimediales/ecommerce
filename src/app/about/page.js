import  { getAllProductsDB }from "@/app/actions"

const About = async () => {

  const products = await getAllProductsDB()
  console.log(products)
  return (
    <div>Hola soy la pagina de about</div>
  )
}

export default About