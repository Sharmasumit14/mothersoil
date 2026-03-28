import { useState, useCallback } from "react";
import "./Gallery.css";

/** Add your field / farm photos under public/assets/gallery/ and list them here. */
const GALLERY_ITEMS = [
  {
    id: "g1",
    src: "/assets/vermicompost.webp",
    alt: "Vermicompost and soil care on the farm",
    caption: "Vermicompost & soil care",
  },
  {
    id: "g2",
    src: "/assets/gallery/field-2.webp",
    alt: "Farm and composting work",
    caption: "Soil & compost",
  },
  {
    id: "g3",
    src: "/assets/gallery/field-3.webp",
    alt: "Team in the field",
    caption: "In the field",
  },
  {
    id: "g4",
    src: "/assets/gallery/field-4.webp",
    alt: "Natural produce and packing",
    caption: "From farm to pack",
  },
];

function GalleryCard({ item }) {
  const [broken, setBroken] = useState(false);
  const onError = useCallback(() => setBroken(true), []);

  return (
    <figure className="gallery-card">
      <div className="gallery-card-media">
        {broken ? (
          <div
            className="gallery-card-fallback"
            role="img"
            aria-label={item.alt}
          >
            <span className="gallery-card-fallback-icon" aria-hidden="true" />
            <span className="gallery-card-fallback-text">Add your photo</span>
            <code className="gallery-card-fallback-path">
              public/assets/gallery/{item.src.split("/").pop()}
            </code>
          </div>
        ) : (
          <img
            src={item.src}
            alt={item.alt}
            loading="lazy"
            decoding="async"
            onError={onError}
          />
        )}
      </div>
      <figcaption className="gallery-card-caption">{item.caption}</figcaption>
    </figure>
  );
}

const Gallery = () => (
  <section
    id="gallery"
    className="gallery section"
    aria-labelledby="gallery-heading"
  >
    <div className="gallery-inner">
      <p className="gallery-eyebrow">Behind the scenes</p>
      <h2 id="gallery-heading">Gallery</h2>
      <p className="gallery-intro">
        Four glimpses from our hives, fields, and everyday work—pure nature, no
        shortcuts.
      </p>
      <div className="gallery-grid">
        {GALLERY_ITEMS.map((item) => (
          <GalleryCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  </section>
);

export default Gallery;
