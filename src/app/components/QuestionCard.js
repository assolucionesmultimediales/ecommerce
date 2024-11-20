'use client';
import { useTriviaContext } from '@/app/contexts/TriviaContext'; // Importo el context que necesito
import AnswerCard from '@/app/components/AnswersCard';

const QuestionCard = ({ question }) => {
  const { triviaScore, handleSetTriviaResponses, triviaResponses } = useTriviaContext(); // Usar el context

  // Verificar si esta pregunta ya fue respondida
  const answered = triviaResponses.some((response) => response.question.title === question.title);

  // Manejar la selección de respuesta
  const handleAnswerSelection = (selectedAnswerText) => {
    if (!answered) {
      handleSetTriviaResponses(question, selectedAnswerText); // Solo se permite si no ha sido respondida
    }
  };

  return (
    <div className="border-4 border-yellow-400 p-10 mb-10 bg-gradient-to-t from-pink-700 via-black to-black">
      {/* Mostrar el título */}
      <h2 className="text-pink-500 font-inter font-semibold text-lg text-center">
        {question.title}
      </h2>

      {/* Mapear las respuestas en columna */}
      <div className="mt-12 flex flex-col gap-2 ">
        {question.answers.map((answer, index) => (
          <AnswerCard
            key={index}
            answer={answer}
            question={question}
            onAnswerSelect={handleAnswerSelection} // Pasar la función para manejar selección
            disabled={answered} // Deshabilitar la selección si ya fue respondida
          />
        ))}
      </div>

      {/* Mensaje de respuesta no respondida o respondida */}
      <div className="mt-10 ">
        {answered ? (
          <p className="text-pink-500 font-semibold">Respondio</p>
        ) : (
          <p className="text-yellow-500 font-semibold">No respondida</p>
        )}
      </div>
    </div>
  );
};

export default QuestionCard;
