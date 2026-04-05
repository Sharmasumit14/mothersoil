import { useState, useCallback } from "react";
import "./Gallery.css";

/** Add your field / farm photos under public/assets/gallery/ and list them here. */
const GALLERY_ITEMS = [
  {
    id: "g1",
    src: "/assets/gallery1.webp",
    alt: "Vermicompost and soil care on the farm",
    caption:
      "Handcrafted soil enrichment through natural vermicomposting practices.",
  },
  {
    id: "g2",
    src: "/assets/gallery5.webp",
    alt: "Farm and composting work",
    caption:
      "Sustainable beekeeping with carefully maintained honeycomb frames.",
  },
  {
    id: "g3",
    src: "/assets/gallery3.webp",
    alt: "Team in the field",
    caption: "Nature’s pollinator at work—capturing purity in every drop.",
  },
  {
    id: "g4",
    src: "/assets/gallery4.webp",
    alt: "Natural produce and packing",
    caption:
      "Expansive apiary setup ensuring quality honey production at scale.",
  },
  {
    id: "g5",

    src: "/assets/gallery2.webp",
    alt: "Farm work and harvest",
    caption:
      "Dedicated care and precision in every step of organic processing.",
  },
  {
    id: "g6",
    src: "/assets/gallery6.webp",
    alt: "Mother Soil in the field",
    caption: "Pure, raw honeycomb preserved in its most natural form.",
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
        Glimpses from our hives, fields, and everyday work—pure nature, no
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
