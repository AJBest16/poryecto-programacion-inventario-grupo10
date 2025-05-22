import Principal from "@/module/principal";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Principal>
      <main className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-amber-50 gap-8 p-8">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 space-y-6">
        <h1 className="text-4xl font-bold text-gray-900">Conoce Nuestro Laboratorio</h1>
        <p className="text-gray-700 text-lg">
          Hemos creado un <strong>laboratorio de innovación</strong> enfocado en el desarrollo de soluciones tecnológicas aplicadas a la ciencia, la educación y la industria. Nuestro objetivo es fomentar la experimentación, la colaboración interdisciplinaria y el aprendizaje práctico.
        </p>
        <p className="text-gray-700 text-lg">
          Este espacio está equipado con herramientas modernas y está diseñado para impulsar proyectos que generen un impacto real en la sociedad. Invitamos a estudiantes, investigadores y emprendedores a sumarse a esta iniciativa.
        </p>
        <div className="flex justify-end">
          <Link href="/product">
            <button className="px-4 py-2 rounded-md bg-amber-100 hover:bg-amber-200 text-gray-950 hover:text-blue-700 transition">
              Ingresar Productos
            </button>
          </Link>
        </div>
      </div>
      <img
        src="https://www.tplaboratorioquimico.com/wp-content/uploads/2023/11/materiales-e-instrumentos-laboratorio-quimico.jpg"
        alt="Interior de un laboratorio de investigación"
        className=" rounded-xl "
        width={500}
        height={500}
      />
    </main>
    </Principal>
  );
}
