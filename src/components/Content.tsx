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
  const dateFromUnix = new Date(date * 1000);
  const month = dateFromUnix.toLocaleString("default", {
    month: "long",
  });
  const year = dateFromUnix.getFullYear();
  const formattedDate = `${month} ${year}`;

  return (
    <>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{subtitle}</p>
      <p>{formattedDate}</p>
      {/* <img src={"https://gem.blipdiscs.com/img/galleryimages/1/1.jpeg"} /> */}
      <div>
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
