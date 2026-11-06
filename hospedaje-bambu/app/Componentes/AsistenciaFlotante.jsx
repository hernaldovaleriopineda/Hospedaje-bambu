"use client";

import { useState } from "react";
import IconosSociales from "./IconosSociales";

export default function AsistenciaFlotante() {
  const [abierta, setAbierta] = useState(false);

  return (
    <div className="help-widget">
      <section
        className="help-panel"
        id="help-panel"
        role="dialog"
        aria-labelledby="help-title"
        hidden={!abierta}
      >
        <button
          className="help-close"
          type="button"
          aria-label="Cerrar ventana de ayuda"
          onClick={() => setAbierta(false)}
        >
          ×
        </button>
        <p className="section-eyebrow">Contacto</p>
        <h2 id="help-title">¿Necesita ayuda?</h2>
        <p>
          Si tiene alguna pregunta, por favor no dude en contactarnos.
        </p>
        <a className="help-contact-link" href="tel:+50683463622">
          Llamar: (506) 8346-3622
        </a>
        <a
          className="help-contact-link"
          href="mailto:biobambuj@gmail.com"
        >
          Escribir: biobambuj@gmail.com
        </a>
        <IconosSociales />
        <p className="help-social-handle">@bambuk_bio</p>
      </section>
      <button
        className="help-trigger"
        type="button"
        aria-expanded={abierta}
        aria-controls="help-panel"
        onClick={() => setAbierta((actual) => !actual)}
      >
        {abierta ? "Cerrar" : "¿Necesita ayuda?"}
      </button>
    </div>
  );
}
