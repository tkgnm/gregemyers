import "./Content.css";
import type { Picture } from "../types/GalleryItem";

type Props = {
  // path is not used as a prop in the component,
  // but is necessary for type safety with preact-router
  path: string;
  title: string;
  subtitle?: string;
  description?: string;
  pictures: Picture[];
  date: number;
};

export const Content = ({
  title,
  subtitle,
  description,
  pictures,
  date,
}: Props) => {
  return (
    <>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{subtitle}</p>
      <p>{date}</p>
      {/* <img src={"https://gem.blipdiscs.com/img/galleryimages/1/1.jpeg"} /> */}
      <div>
        {/* {pictures.map((picture) => {
          // <img src={picture.url} />;
          picture.caption && <p>{picture.caption}</p>;
        })} */}
        {pictures.map((picture) => (
          <figure>
            <p>
              <img src={picture.url} className="content" />
            </p>
            <figcaption>{picture.caption}</figcaption>
          </figure>
        ))}
      </div>
    </>
  );
};
