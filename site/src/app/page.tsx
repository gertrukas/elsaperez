import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, ChevronDown, Heart, Mic, Radio, Tv } from "lucide-react";
import ContactSection from "@/components/ContactSection";
import Equalizer from "@/components/Equalizer";
import SectionHeading from "@/components/SectionHeading";
import { DESTACADOS, GALERIA, RECONOCIMIENTOS, SENCILLOS } from "@/content/data";

const ICONS = { award: Award, mic: Mic, heart: Heart, radio: Radio };

export default function Home() {
  return (
    <>
      {/* HERO: imagen a todo el ancho, texto a la derecha */}
      <section id="inicio" className="hero relative isolate flex overflow-hidden">
        <Image
          src="/images/hero-elsa-urbina.jpg"
          alt="Elsa Urbina, cantante mexicana, sonriendo al aire libre"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-[22%_15%] animate-ken-burns"
        />
        {/* Velo: oscuro abajo en móvil, a la derecha en escritorio */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/60 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-ink/10 lg:to-ink/85" aria-hidden />

        <div className="container-site flex items-end pb-14 lg:items-center lg:pb-0">
          <div className="ml-auto w-full max-w-xl lg:w-1/2">
            <p className="inline-flex items-center gap-2.5 rounded-full border border-accent/40 bg-ink/60 px-4 py-1.5 text-sm font-semibold text-accent backdrop-blur animate-fade-up">
              <Mic className="size-4" aria-hidden />
              Cantante, directora y conductora
            </p>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.02] text-secondary animate-fade-up [animation-delay:150ms] sm:mt-6 sm:text-6xl xl:text-7xl">
              La voz y pasión de la <span className="italic text-gold animate-shine">música internacional</span>
            </h1>
            <p className="mt-6 hidden text-base leading-relaxed text-secondary-soft animate-fade-up [animation-delay:300ms] sm:block md:text-lg">
              Elsa Urbina es una experimentada cantante mexicana, con más de 30 años de actividad, capaz de abordar géneros tan apreciados en el mundo como el mariachi, el bolero, la balada y los estándares de jazz, entre otros.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 animate-fade-up sm:mt-8 [animation-delay:450ms]">
              <Link href="/contacto" className="btn-primary">
                Contrataciones <ArrowRight className="size-4" aria-hidden />
              </Link>
              <Link href="/biografia" className="btn-outline bg-ink/40 backdrop-blur">
                Conocer semblanza
              </Link>
            </div>
          </div>
        </div>

        <a href="#destacados" className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-secondary-muted transition-colors hover:text-accent lg:flex" aria-label="Bajar a destacados">
          <ChevronDown className="size-5 animate-scroll-cue" aria-hidden />
        </a>
      </section>

      {/* Destacados */}
      <section id="destacados" className="container-site py-16 md:py-20">
        <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/5 bg-white/5 lg:grid-cols-4">
          {DESTACADOS.map((d, i) => (
            <li key={d.label} data-reveal style={{ "--reveal-delay": `${i * 100}ms` } as React.CSSProperties} className="group bg-ink-800 p-6 text-center transition-colors duration-500 hover:bg-ink-700 md:p-10">
              <p className="font-display text-4xl font-semibold text-accent md:text-5xl">
                {"value" in d ? (
                  <>
                    {d.prefix}
                    <span data-count={d.value} data-count-suffix={d.suffix}>{d.value}{d.suffix}</span>
                  </>
                ) : (
                  d.text
                )}
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-secondary-muted">{d.label}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Semblanza */}
      <section className="section pt-0">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div data-reveal="left" className="relative">
            <div className="absolute -inset-3 -z-10 translate-x-6 translate-y-6 rounded-3xl border border-accent/30" aria-hidden />
            <div className="overflow-hidden rounded-3xl">
              <Image
                src="/images/elsa-urbina-portada.jpeg"
                alt="Elsa Urbina en sesión fotográfica"
                width={1170}
                height={971}
                sizes="(min-width: 1024px) 600px, 100vw"
                className="h-auto w-full transition-transform duration-[1.5s] ease-out-expo hover:scale-105"
              />
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Semblanza"
              title={<>Una vida dedicada <span className="italic text-gold animate-shine">a la música</span></>}
              intro="Originaria de la Ciudad de México, ha dedicado su vida a la música de una manera apasionada. Está convencida de que el arte habrá de salvar al mundo."
            />
            <p data-reveal className="mt-5 leading-relaxed text-secondary-muted">
              Formada en la Escuela de Iniciación Artística de Bellas Artes, fue parte de la Compañía Mexicana de Ópera y del Coro Monumental de Bellas Artes. Desde hace 23 años es la principal voz femenina de Los Internacionales, la Orquesta, de la cual es directora general desde 2021.
            </p>
            <Link data-reveal href="/biografia" className="group mt-8 inline-flex items-center gap-2 font-semibold text-accent">
              Leer biografía completa
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* Sencillos */}
      <section className="section border-y border-white/5 bg-ink-900">
        <div className="container-site">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Discografía"
              title={<>Sencillos <span className="italic text-gold animate-shine">destacados</span></>}
              intro="Producciones y sencillos más representativos interpretados por Elsa Urbina."
            />
            <Link data-reveal href="/discografia" className="btn-outline shrink-0">
              Ver discografía <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
          <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SENCILLOS.slice(0, 6).map((s, i) => (
              <li key={s.titulo} data-reveal style={{ "--reveal-delay": `${(i % 3) * 100}ms` } as React.CSSProperties} className="card card-hover group flex flex-col p-7">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-ink">
                    {s.badge}
                  </span>
                  <Equalizer className="opacity-40 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <h3 className="mt-6 font-display text-3xl font-semibold text-secondary transition-colors group-hover:text-accent">{s.titulo}</h3>
                <p className="mt-3 text-sm leading-relaxed text-secondary-muted">{s.descripcion}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Conductora */}
      <section className="section">
        <div className="container-site grid items-center gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Comunicadora"
              title={<>Conductora y <span className="italic text-gold animate-shine">productora</span></>}
              intro="Dirigió el programa «Músicos en Contacto» (SUTM) y fue conductora y productora de «VIVA LA FIESTA, el mundo de las celebraciones»."
            />
            <p data-reveal className="mt-6 flex items-center gap-3 text-sm text-secondary-soft">
              <Tv className="size-5 text-accent" aria-hidden />
              Participaciones en «Bailando por un sueño», «Cantando por un sueño» y diversas telenovelas.
            </p>
          </div>
          <div data-reveal="right" className="overflow-hidden rounded-3xl border border-white/10">
            <Image
              src="/images/elsa-urbina-viva-la-fiesta.jpeg"
              alt="Elsa Urbina, conductora de Viva la fiesta, el mundo de las celebraciones"
              width={1280}
              height={721}
              sizes="(min-width: 1024px) 680px, 100vw"
              className="h-auto w-full transition-transform duration-[1.5s] ease-out-expo hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Reconocimientos */}
      <section className="section border-y border-white/5 bg-ink-900">
        <div className="container-site">
          <SectionHeading
            align="center"
            eyebrow="Reconocimientos"
            title={<>Excelencia <span className="italic text-gold animate-shine">interpretativa</span></>}
            intro="Otorgados por su excelencia interpretativa y por sus aportaciones a la cultura."
          />
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {RECONOCIMIENTOS.map((r, i) => {
              const Icon = ICONS[r.icon];
              return (
                <li key={r.titulo} data-reveal style={{ "--reveal-delay": `${i * 100}ms` } as React.CSSProperties} className="card card-hover group p-7 text-center">
                  <span className="mx-auto grid size-16 place-items-center rounded-full border border-accent/40 text-accent transition-all duration-500 group-hover:rotate-[360deg] group-hover:bg-accent group-hover:text-ink">
                    <Icon className="size-7" aria-hidden />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-semibold">{r.titulo}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-secondary-muted">{r.descripcion}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Galería */}
      <section className="section">
        <div className="container-site">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow="Galería" title={<>En el <span className="italic text-gold animate-shine">escenario</span></>} />
            <Link data-reveal href="/galeria" className="btn-outline shrink-0">
              Ver galería completa <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
          <ul className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:grid-rows-2">
            {GALERIA.slice(0, 5).map((f, i) => (
              <li
                key={f.src}
                data-reveal="zoom"
                style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
                className={`group relative overflow-hidden rounded-2xl ${i === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-auto" : "aspect-[4/5]"}`}
              >
                <Image
                  src={f.src}
                  alt={f.title}
                  fill
                  sizes={i === 0 ? "(min-width: 768px) 640px, 100vw" : "(min-width: 768px) 320px, 50vw"}
                  className="object-cover transition-transform duration-[1.2s] ease-out-expo group-hover:scale-110"
                />
                <span className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/85 to-transparent p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="font-display text-lg text-secondary">{f.title}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
