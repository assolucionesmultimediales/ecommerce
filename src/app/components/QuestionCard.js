'use client';
import {useTriviaContext} from '@/app/contexts/TriviaContext'; // importo el context que necesito
import AnswerCard from '@/app/components/AnswersCard';

const QuestionCard = ({ question }) => {
  const { triviaResponses } = useTriviaContext(); // uso el context que necesito

  return (
    <div className="border-4 border-pink-300 p-10">
      {/* Mostrar el título */}
      <h2 className="text-pink-500 font-inter font-semibold text-lg text-center">
        {question.title}
      </h2>

      {/* Mapear las respuestas en columna */}
      <div className="mt-12 flex flex-col gap-2">
        {question.answers.map((answer, index) => (
          <AnswerCard key={index} answer={answer} question={question} />
        ))}
      </div>

      {/* Verificación de respuesta */}
      <div className="mt-10">
        {triviaResponses.find((response) => response.question.title === question.title) ? (
          <p className='text-pink-700 font-semibold'>Respondido</p>
        ) : (
          <p>No respondió</p>
        )}
      </div>
    </div>
  );
};

export default QuestionCard;
