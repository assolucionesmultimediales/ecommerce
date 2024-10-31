import Inner from '@/app/components/Inner';
import { getAllQuestionsDB } from '@/app/actions';
import QuestionCard from '@/app/components/QuestionCard';

const Trivia = async () => {
  const response = await getAllQuestionsDB();

  return (
    <section className='relative min-h-screen'> {/* Contenedor principal */}

      {/* Contenido */}
      <h1 className='text-3xl font-roboto font-semibold text-pink-600 mt-32 pb-10 text-center'>
            Trivia
          </h1>
      <div className="relative z-10 flex flex-col justify-between min-h-screen pb-20"> {/* Espacio para el footer */}
        <Inner>
          {/* Grilla responsive */}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 text-white'>
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


