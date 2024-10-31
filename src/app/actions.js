import axios from 'axios';
import Product from "@/app/models/Product";
import Question from '@/app/models/Question';
import dbConnect from '@/app/database/dbConnect';

// Obtener todos los productos de la base de datos
export async function getAllProductsDB() {
  await dbConnect();
  try {
    const products = await Product.find().sort({ name: "asc" });
    return { products: JSON.parse(JSON.stringify(products)) };
  } catch (error) {
    console.log("Error al obtener productos: ", error.message);
    return { products: [], category: null };
  }
}

// Obtener un producto específico por su ID
export async function getOneProductDB(id) {
  await dbConnect();
  try {
    const product = await Product.findById(id);
    return { product: JSON.parse(JSON.stringify(product)) };
  } catch (error) {
    console.log("Error al obtener el producto:", error.message);
    return null;
  }
}
//obtener todas las respuestas
export async function getAllQuestionsDB() {
  await dbConnect();
  try {
    const questions = await Question.find().sort({ questionId: 'asc' });
    console.log(questions)
    return { questions: JSON.parse(JSON.stringify(questions)) };
  } catch (error) {
    console.log('Error: ', error.message);
    return { questions: [], category: null };
  }
}

