export interface GalleryItem {
  id: string;
  coverImageURL: string;
  title: string;
  subtitle?: string;
  caption: string;
  description?: string;
  pictures: Picture[];
  date: number;
}

export interface Picture {
  url: string;
  title?: string;
  technicalDetail?: string;
  hideCaption?: boolean;
}
