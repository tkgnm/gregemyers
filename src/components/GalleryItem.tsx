import "./GalleryItems.css";

type Props = {
  title: string;
  caption: string;
  coverImageURL: string;
  content: string;
};

export const GalleryItem = ({
  title,
  caption,
  coverImageURL,
  content,
}: Props) => {
  return (
    <figure>
      <div>{title}</div>
      <figcaption>{caption}</figcaption>
      <img src={coverImageURL} alt="Gallery preview" />
      {/* <div dangerouslySetInnerHTML={{ __html: content }}></div> */}
    </figure>
  );
};
