import { useEffect } from "react";

export default function Seo({
  title,
  description,
  canonical,
  schema,
}) {
  useEffect(() => {
    // ----- Page title -----
    if (title) {
      document.title = title;
    }

    // ----- Meta description -----
    const metaDesc = document.querySelector("meta[name='description']");
    if (metaDesc) {
      metaDesc.setAttribute("content", description || "");
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = description || "";
      document.head.appendChild(meta);
    }

    // ----- Canonical -----
    let linkCanonical = document.querySelector("link[rel='canonical']");
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.rel = "canonical";
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute("href", canonical || window.location.href);

    // ----- JSON-LD Structured Data -----
    if (schema) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);

      // Cleanup on unmount
      return () => {
        document.head.removeChild(script);
      };
    }
  }, [title, description, canonical, schema]);

  return null; // no UI
}
