"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const domePhotos = {
  "Domo 1": [
    "IMG_1254.jpeg",
    "IMG_1269.jpeg",
    "IMG_1270.jpeg",
    "IMG_1271.jpeg",
    "IMG_1272.jpeg",
    "IMG_1273.jpeg",
    "IMG_1274.jpeg",
    "IMG_1275.jpeg",
    "IMG_1277.jpeg",
    "IMG_9004.jpeg",
    "IMG_9005.jpeg",
    "IMG_9008.jpeg",
    "IMG_9016.jpeg",
    "IMG_9020.jpeg",
    "IMG_9050.jpeg",
    "IMG_9051.jpeg",
  ],
  "Domo 2": [
    "IMG_1257.jpeg",
    "IMG_1258.jpeg",
    "IMG_1260.jpeg",
    "IMG_1261.jpeg",
    "IMG_1262.jpeg",
    "IMG_1263.jpeg",
    "IMG_1266.jpeg",
    "IMG_1268.jpeg",
    "IMG_8751.jpeg",
    "IMG_8757.jpeg",
    "IMG_9109.jpeg",
    "IMG_9132.jpeg",
  ],
};

function getSlides(domo) {
  return domePhotos[domo].map((photo, index) => ({
    image: `/imagenes/${encodeURIComponent(domo)}/${photo}`,
    alt: `Fotografía ${index + 1} de ${domo}`,
    title: domo,
    detail: `Conoce cada detalle de tu estadía · ${String(index + 1).padStart(2, "0")}`,
  }));
}

export default function CarruselEspacios({ domo }) {
  const slides = getSlides(domo);
  const carouselRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  function goToSlide(index) {
    const carousel = carouselRef.current;
    const nextIndex = (index + slides.length) % slides.length;
    const slide = carousel?.children[nextIndex];
    if (!carousel || !slide) return;

    carousel.scrollTo({
      left:
        carousel.scrollLeft +
        slide.getBoundingClientRect().left -
        carousel.getBoundingClientRect().left,
      behavior: "smooth",
    });
    setActiveSlide(nextIndex);
  }

  function handleScroll() {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const slides = Array.from(carousel.children);
    const nearestSlide = slides.reduce(
      (nearest, slide, index) => {
        const distance = Math.abs(
          slide.getBoundingClientRect().left -
            carousel.getBoundingClientRect().left,
        );
        return distance < nearest.distance ? { index, distance } : nearest;
      },
      { index: 0, distance: Number.POSITIVE_INFINITY },
    );

    setActiveSlide(nearestSlide.index);
  }

  return (
    <section
      className="spaces-carousel-section"
      id={domo.toLowerCase().replace(" ", "-")}
      aria-label={`Galería de ${domo}`}
      aria-roledescription="carrusel"
    >
      <div className="spaces-carousel-heading">
        <div>
          <p className="section-eyebrow">Conoce cada detalle</p>
          <h2>{domo}</h2>
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
        aria-label={`Imágenes de ${domo}`}
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
