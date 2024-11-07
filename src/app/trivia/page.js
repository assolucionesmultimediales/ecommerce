import Inner from '@/app/components/Inner';
import { getAllQuestionsDB } from '@/app/actions';
import QuestionCard from '@/app/components/QuestionCard';

const Trivia = async () => {
  const response = await getAllQuestionsDB();

  return (
    <section className='min-h-screen'> {/* Contenedor principal */}

      {/* Contenido */}
      <h1 className='text-3xl font-roboto font-semibold text-pink-600 mt-32 pb-10 text-center'>
            Trivia
          </h1>
      <div className="flex flex-col justify-between min-h-screen pb-20"> {/* Espacio para el footer */}
        <Inner>
          {/* Grilla responsive */}
          <div className='grid grid-cols-1 mb-4 text-white'>
            {response.questions && response.questions.map((question, index) => (
              <QuestionCard key={index} question={question} />
            ))}
          </div>
        </Inner>
      </div>
    </section>
  );
};

export default Trivia;


