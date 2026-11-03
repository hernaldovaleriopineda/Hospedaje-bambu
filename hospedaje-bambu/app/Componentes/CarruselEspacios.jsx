"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const slides = [
  {
    image: "/imagenes/Cabaña redimensionada.jpg",
    alt: "Cabaña ecológica de bambú entre jardines tropicales",
    title: "Bamboo Hut",
    detail: "Calidez natural para descansar en Uvita.",
  },
  {
    image: "/imagenes/Domo redimensionada.jpg",
    alt: "Domo glamping rodeado de jardines y palmeras",
    title: "Domos Glamping de Lujo",
    detail: "Una escapada diferente en medio de la naturaleza.",
  },
  {
    image: "/imagenes/Rancho.jpg",
    alt: "Terraza techada de bambú y jacuzzi privado del domo",
    title: "Detalles para disfrutar",
    detail: "Espacios privados pensados para relajarte.",
  },
];

export default function CarruselEspacios() {
  const carouselRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  function goToSlide(index) {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const nextIndex = (index + slides.length) % slides.length;
    carousel.scrollTo({
      left: nextIndex * carousel.clientWidth,
      behavior: "auto",
    });
    setActiveSlide(nextIndex);
  }

  function handleScroll() {
    const carousel = carouselRef.current;
    if (!carousel) return;

    setActiveSlide(Math.round(carousel.scrollLeft / carousel.clientWidth));
  }

  return (
    <section
      className="spaces-carousel-section"
      aria-label="Galería de nuestros hospedajes"
      aria-roledescription="carrusel"
    >
      <div className="spaces-carousel-heading">
        <div>
          <p className="section-eyebrow">Un vistazo a tu próxima estadía</p>
          <h2>Espacios para reconectar</h2>
        </div>
        <div className="carousel-controls">
          <button
            className="carousel-arrow"
            type="button"
            onClick={() => goToSlide(activeSlide - 1)}
            aria-label="Ver imagen anterior"
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            className="carousel-arrow"
            type="button"
            onClick={() => goToSlide(activeSlide + 1)}
            aria-label="Ver imagen siguiente"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      <div
        className="spaces-carousel-track"
        ref={carouselRef}
        onScroll={handleScroll}
        tabIndex={0}
        aria-label="Imágenes de Bamboo Hut y Domos Glamping"
      >
        {slides.map((slide, index) => (
          <article
            className="spaces-carousel-slide"
            key={slide.image}
            role="group"
            aria-roledescription="diapositiva"
            aria-label={`${index + 1} de ${slides.length}: ${slide.title}`}
          >
            <Image
              className="spaces-carousel-image"
              src={slide.image}
              alt={slide.alt}
              fill
              sizes="(max-width: 760px) 100vw, 82vw"
            />
            <div className="spaces-carousel-shade" />
            <div className="spaces-carousel-caption">
              <p>{slide.detail}</p>
              <h3>{slide.title}</h3>
            </div>
          </article>
        ))}
      </div>

      <div className="spaces-carousel-footer">
        <div className="carousel-indicators" aria-label="Elegir imagen">
          {slides.map((slide, index) => (
            <button
              className="carousel-indicator"
              key={slide.image}
              type="button"
              onClick={() => goToSlide(index)}
              aria-label={`Ver imagen ${index + 1}: ${slide.title}`}
              aria-current={activeSlide === index ? "true" : undefined}
            />
          ))}
        </div>
        <span className="carousel-count" aria-live="polite">
          {String(activeSlide + 1).padStart(2, "0")}{" "}
          <span aria-hidden="true">/ {String(slides.length).padStart(2, "0")}</span>
          <span className="sr-only">
            , imagen {activeSlide + 1} de {slides.length}
          </span>
        </span>
      </div>
    </section>
  );
}
