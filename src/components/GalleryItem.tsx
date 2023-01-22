import "./GalleryItem.css";

type Props = {
  id: string;
  title: string;
  caption: string;
  coverImageURL: string;
};

export const GalleryItem = ({ id, title, caption, coverImageURL }: Props) => {
  return (
    <div className="gallery-item">
      <img
        className="gallery-item-img"
        src={coverImageURL}
        alt="Gallery preview"
      />
      <div className="gallery-item-title">{title}</div>
      <div className="gallery-item-caption">{caption}</div>
    </div>
  );
};
