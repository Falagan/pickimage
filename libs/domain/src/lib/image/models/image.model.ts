import { ImageUrls } from './image-urls.model';

export interface Image {
  id: string;
  width: number;
  height: number;
  color: string;
  description: string;
  createdAt: Date;
  urls: ImageUrls;
  likes: number;
  username: string;
  tags: string[];
}
