import mongoose, { Schema } from "mongoose";

const answerSchema = new Schema({
  text: { type: String, required: true },    // Texto de la respuesta
  isCorrect: { type: Boolean, required: true } // Si es correcta o no
});

const questionSchema = new Schema({
  questionId: { type: Number, required: true },
  title: { type: String, required: true },
  image: { type: String, required: true },
  score: { type: Number, required: true }, // Añadido para almacenar el puntaje
  answers: [answerSchema] // Array de respuestas que usa el esquema de respuesta
});

const Question =
  mongoose.models.Question || mongoose.model("Question", questionSchema);

export default Question;

