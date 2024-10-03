import  { getAllProductsDB }from "@/app/actions"

const About = async () => {

  const products = await getAllProductsDB()
  return (
    <div>Hola soy la pagina de about</div>
  )
}

export default About