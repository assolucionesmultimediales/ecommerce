'use client'; // Indica que este componente se ejecuta del lado del cliente
import { useTriviaContext } from '@/app/contexts/TriviaContext'; // Importa el contexto
import { useState } from 'react';

const AnswerCard = ({ answer, question }) => {
  const { handleSetTriviaResponses, selectedTriviaAnswer } = useTriviaContext(); // Obtiene las funciones y valores del contexto
  const [selected, setSelected] = useState(false); // Estado local para manejar la selección visual

  // Función para manejar el clic en una respuesta
  const handleAnswerClick = () => {
    handleSetTriviaResponses(question, answer.text); // Guarda la respuesta seleccionada
    setSelected(true); // Marca como seleccionada para efectos visuales
  };

  // Verifica si la respuesta fue seleccionada
  const isSelected = selectedTriviaAnswer(question, answer.text);
  
  return (
    <button
      onClick={handleAnswerClick}
      className={`bg-pink-700 text-white p-2 rounded text-base hover:bg-pink-300 mb-3 ${
        isSelected
          ? `border-4 border-yellow-400`
          : `border-4 border-pink-700`
      }`}
    >
      {answer.text} {/* Mostrar el texto de la respuesta */}
    </button>
  );
};

export default AnswerCard;
