import Link from "next/link";

export const metadata = { title: "Página no encontrada", robots: { index: false } };

export default function NotFound() {
  return (
    <section className="container-site grid flex-1 place-items-center py-28 text-center">
      <div>
        <p className="eyebrow justify-center animate-fade-up">Error 404</p>
        <h1 className="mt-5 font-display text-6xl font-semibold animate-fade-up [animation-delay:120ms]">
          Esta página <span className="italic text-gold animate-shine">no está en el repertorio</span>
        </h1>
        <Link href="/" className="btn-primary mt-10 animate-fade-up [animation-delay:240ms]">
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}
