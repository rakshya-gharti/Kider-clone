import { Link } from "react-router-dom";

export default function PageHeader({ title }) {
  return (
    <section
      className="relative h-[350px] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/img/carousel-1.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col pl-6 justify-center text-white">
        <h1 className="text-5xl font-bold mb-4">
          {title}
        </h1>

        <div className="flex items-center gap-2 text-lg">
          <Link to="/" className="text-orange-500  hover:border-orange-800">Home</Link>
          <span>/</span>
          <Link
    to="#"
    className="text-orange-500  hover:border-orange-800"
  >
    Pages
  </Link>
          <span>/</span>
          <span>{title}</span>
        </div>
      </div>
    </section>
  );
}