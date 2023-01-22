import { galleryItems } from "../fixtures/galleryItems";
import { GalleryItem } from "./GalleryItem";
import "./Gallery.css";
import { Link } from "preact-router/match";

export const Gallery = () => {
  return (
    <div className="container">
      {galleryItems.map((item) => (
        <div className="grid-item">
          <Link
            activeClassName="active"
            href={`${item.title
              .replace(/[^a-zA-Z0-9 -]|[\s]/gu, "")
              .toLowerCase()}`}
          >
            <GalleryItem
              id={item.id}
              title={item.title}
              caption={item.caption}
              coverImageURL={item.coverImageURL}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};
