import { galleryItems } from "./fixtures/galleryItems";
import { GalleryItem } from "./GalleryItem";

export const Gallery = () => {
  return (
    <div>
      {galleryItems.map((item) => (
        <GalleryItem
          title={item.title}
          caption={item.caption}
          coverImageURL={item.coverImageURL}
          content={item.content}
        />
      ))}
    </div>
  );
};
