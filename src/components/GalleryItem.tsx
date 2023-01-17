import { Link } from "preact-router/match";
import "./GalleryItem.css";

type Props = {
  id: string;
  title: string;
  caption: string;
  coverImageURL: string;
};

export const GalleryItem = ({ id, title, caption, coverImageURL }: Props) => {
  return (
    <Link href={id}>
      <figure>
        <div>{title}</div>
        <figcaption>{caption}</figcaption>
        <img src={coverImageURL} alt="Gallery preview" width="200" />
      </figure>
    </Link>
  );
};
