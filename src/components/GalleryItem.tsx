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
      <div>{title}</div>
      <div className="gallery-item-caption">{caption}</div>
      <img src={coverImageURL} alt="Gallery preview" width="200" />
    </div>
  );
};
