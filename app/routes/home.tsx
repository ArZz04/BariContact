import type { Route } from "./+types/home";
import BranchPage from "../branches/branches";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Imagen de fondo */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-90 blur-sm z-0"
        style={{ backgroundImage: "url('/debari1.png')" }}
      ></div>

      {/* Contenido que se coloca por encima */}
      <div className="relative z-10">
        <BranchPage />
      </div>
    </div>
  );
}