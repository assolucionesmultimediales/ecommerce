import Image from "next/image";

const Page = () => {
  return (
    <div className="mt-20 relative w-full h-screen">
      {/* Imagen de fondo */}
      <Image
        className="border-4 border-yellow-400"
        src={`/imgs/fondogif.gif`}
        alt="Fondo animado"
        fill
        style={{ objectFit: "cover" }}
      />
      {/* Texto superpuesto */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold text-center drop-shadow-lg">
          ¡Gracias por su compra!
        </h1>
      </div>
    </div>
  );
};

export default Page;
