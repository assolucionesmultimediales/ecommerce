const AnswerCard = ({ answer, question, onAnswerSelect }) => {
  return (
    <div
      onClick={() => onAnswerSelect(answer.text)} // Llama a la función cuando se selecciona una respuesta
      className="cursor-pointer border-4 border-yellow-400 bg-pink-500 text-white p-2 rounded-md hover:bg-pink-200 hover:border-4 hover:border-pink-500 hover:font-bold "
    >
      <p className=" text-center text-white font-semibold hover:text-pink-700">{answer.text}</p>
    </div>
  );
};

export default AnswerCard;

