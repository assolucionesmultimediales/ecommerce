'use client'; // Indica que este componente se ejecuta del lado del cliente

import { createContext, useState, useContext } from 'react'; // Importa funciones para crear contexto y manejar el estado

// Crea un contexto de React llamado TriviaContext
const TriviaContext = createContext(undefined);

// El proveedor del contexto, que envolverá a los componentes hijos de trivia
export const TriviaContextProvider = ({ children }) => {
  // Estado que almacena las respuestas del usuario para la trivia
  
  const [triviaResponses, setTriviaResponses] = useState([]);

  // Función para manejar el establecimiento de respuestas del usuario en trivia
  const handleSetTriviaResponses = (question, answer) => {
    // Verifica si la pregunta ya tiene una respuesta registrada
    const questionExists = triviaResponses.find(
      (response) => response.question.title === question.title
    );

    if (questionExists) {
      // Si la pregunta existe, actualiza la respuesta
      setTriviaResponses((prevResponses) =>
        prevResponses.map((response) =>
          response.question.title === question.title
            ? { ...response, answer } // Reemplaza la respuesta
            : response // Mantiene la respuesta anterior
        )
      );
    } else {
      // Si la pregunta no existe, agrega una nueva respuesta
      setTriviaResponses((prevResponses) => [
        ...prevResponses,
        { question, answer }, // Crea un nuevo objeto con la pregunta y respuesta
      ]);
    }
  };

  // Función para verificar si una respuesta específica fue seleccionada para una pregunta
  const selectedTriviaAnswer = (question, answer) => {
    return triviaResponses.some(
      (response) =>
      response.question.title === question.title && // Verifica que la pregunta coincida
      response.answer === answer // Y que la respuesta coincida
    );
  };
 
  // Obtiene el total de respuestas registradas en trivia
  const totalTriviaResponses = triviaResponses.length;

  // Devuelve el contexto con las propiedades y funciones necesarias
  return (
    <TriviaContext.Provider
      value={{
        triviaResponses, // Respuestas del usuario para la trivia
        totalTriviaResponses, // Total de respuestas registradas en trivia
        handleSetTriviaResponses, // Función para actualizar las respuestas en trivia
        selectedTriviaAnswer // Función para verificar si una respuesta fue seleccionada
      }}
    >
      {children} {/* Renderiza los componentes hijos específicos de trivia */}
    </TriviaContext.Provider>
  );
};

// Hook personalizado para usar el contexto de trivia de manera más sencilla
export const useTriviaContext = () => {
  const context = useContext(TriviaContext); // Obtiene el contexto

  // Lanza un error si el hook se usa fuera del proveedor
  if (!context) {
    throw new Error(`useTriviaContext tiene que ser usado dentro del provider`);
  }
  return context; // Retorna el contexto
};

// Exporta el contexto para ser usado en otros componentes
export default TriviaContext;
