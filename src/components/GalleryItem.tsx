import "./GalleryItem.css";
import type { Image } from "../types/GalleryItem";

type Props = {
  id: string;
  title: string;
  caption: string;
  coverImage: Image;
};

export const GalleryItem = ({ id, title, caption, coverImage }: Props) => {
  return (
    <div className="gallery-item">
      <img
        className="gallery-item-img"
        src={coverImage.url}
        width={coverImage.width}
        height={coverImage.height}
        alt={coverImage.alt ?? "Gallery Preview"}
      />
      <div className="gallery-item-title">{title}</div>
      <div className="gallery-item-caption">{caption}</div>
    </div>
  );
};
