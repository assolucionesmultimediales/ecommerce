'use client'; // Asegúrate de marcar que esto se ejecuta del lado del cliente

import { createContext, useState, useContext } from 'react'; // Importa funciones para crear contexto y manejar el estado

const TriviaContext = createContext(undefined);

export const TriviaContextProvider = ({ children }) => {
  const [triviaScore, setTriviaScore] = useState(0); // Puntaje acumulado
  const [triviaResponses, setTriviaResponses] = useState([]); // Respuestas seleccionadas

  // Función para manejar las respuestas seleccionadas
  const handleSetTriviaResponses = (question, selectedAnswerText) => {
    // Verificar si la respuesta ya fue seleccionada para esta pregunta
    const alreadyAnswered = triviaResponses.find(
      (response) => response.question.title === question.title
    );

    // Si ya respondió, no hacer nada
    if (alreadyAnswered) return;

    // Encuentra la respuesta seleccionada
    const selectedAnswer = question.answers.find(
      (answer) => answer.text === selectedAnswerText
    );

    // Si la respuesta es correcta, sumamos el puntaje de la pregunta
    if (selectedAnswer && selectedAnswer.isCorrect) {
      setTriviaScore((prevScore) => prevScore + question.score);
    }

    // Almacenar la respuesta en el estado
    setTriviaResponses((prevResponses) => [
      ...prevResponses,
      { question, selectedAnswer },
    ]);
  };

  return (
    <TriviaContext.Provider
      value={{
        triviaScore, // Puntaje acumulado
        triviaResponses, // Respuestas seleccionadas
        handleSetTriviaResponses, // Función para manejar respuestas
      }}
    >
      {children} {/* Renderiza los componentes hijos */}
    </TriviaContext.Provider>
  );
};

export const useTriviaContext = () => {
  const context = useContext(TriviaContext);
  if (!context) {
    throw new Error('useTriviaContext debe ser usado dentro del provider');
  }
  return context;
};

export default TriviaContext;
