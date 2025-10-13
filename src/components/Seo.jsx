// src/components/Seo.jsx
import { useEffect } from "react";

export default function Seo({ title, description, canonical, schema }) {
  useEffect(() => {
    // ---- Title ----
    if (title) document.title = title;

    // ---- Description ----
    let metaDesc = document.querySelector("meta[name='description']");
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", description || "");

    // ---- Canonical ----
    let linkCanonical = document.querySelector("link[rel='canonical']");
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.rel = "canonical";
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute("href", canonical || window.location.href);

    // ---- JSON-LD Structured Data ----
    let script;
    if (schema) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    // Cleanup when unmounting or changing page
    return () => {
      if (script) document.head.removeChild(script);
    };
  }, [title, description, canonical, schema]);

  return null;
}
