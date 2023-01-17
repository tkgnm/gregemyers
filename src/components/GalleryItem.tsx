import "./GalleryItem.css";

type Props = {
  id: string;
  title: string;
  caption: string;
  coverImageURL: string;
};

export const GalleryItem = ({ id, title, caption, coverImageURL }: Props) => {
  return (
    <figure>
      <div>{title}</div>
      <figcaption>{caption}</figcaption>
      <img src={coverImageURL} alt="Gallery preview" width="200" />
    </figure>
  );
};
