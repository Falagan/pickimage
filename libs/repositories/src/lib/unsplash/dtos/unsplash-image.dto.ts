export interface UnsplashImage {
  id: string;
  created_at: Date;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  likes: number;
  liked_by_user: false;
  description: string;
  user: {
    id: string;
    username: string;
    name: string;
    first_name: string;
    last_name: string;
    instagram_username: string;
    twitter_username: string;
    portfolio_url: string;
    profile_image: {
      small: string;
      medium: string;
      large: string;
    };
    links: {
      self: string;
      html: string;
      photos: string;
      likes: number;
    };
  };
  current_user_collections: [];
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  links: {
    self: string;
    html: string;
    download: string;
  };
}
