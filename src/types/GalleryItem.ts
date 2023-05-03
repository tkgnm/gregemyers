export interface GalleryItem {
  id: string;
  coverImage: Image;
  title: string;
  subtitle?: string;
  caption: string;
  description?: string;
  pictures: Picture[];
  date: number;
}

export interface Image {
  url: string;
  alt?: string;
  width?: number;
  height?: number;
}

export interface Picture extends Image {
  title?: string;
  technicalDetail?: string;
  hideCaption?: boolean;
}
