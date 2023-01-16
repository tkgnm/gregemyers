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
    <>
      <div>{title}</div>
      <div>{caption}</div>
      <img src={coverImageURL} alt="" />
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </>
  );
};
