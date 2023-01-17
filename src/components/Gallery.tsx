import { Link } from "preact-router/match";
import { galleryItems } from "../fixtures/galleryItems";
import { GalleryItem } from "./GalleryItem";
import "./Gallery.css";

export const Gallery = () => {
  return (
    <div className="container">
      {galleryItems.map((item) => (
        <div className="grid-item">
          <Link activeClassName="active" href={`gallery/${item.id}`}>
            <GalleryItem
              title={item.title}
              caption={item.caption}
              coverImageURL={item.coverImageURL}
              content={item.content}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};
