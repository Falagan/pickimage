import { UnsplashImage } from '../dtos/unsplash-image.dto';

export class UnsplashImageBuilder {
  private image: UnsplashImage;

  constructor() {
    this.image = {
      id: 'img-1',
      created_at: new Date('2024-05-01T12:00:00Z'),
      width: 4000,
      height: 3000,
      color: '#aabbcc',
      blur_hash: 'LKO2?U%2Tw=w]~RBVZRi};RPxuwH',
      likes: 150,
      liked_by_user: false,
      description: 'A beautiful sunset over the mountains',
      user: {
        id: 'user-456',
        username: 'john_doe',
        name: 'John Doe',
        first_name: 'John',
        last_name: 'Doe',
        instagram_username: 'john_doe_insta',
        twitter_username: 'johndoe_twitter',
        portfolio_url: 'https://johndoeportfolio.com',
        profile_image: {
          small: 'https://images.unsplash.com/profile-small.jpg',
          medium: 'https://images.unsplash.com/profile-medium.jpg',
          large: 'https://images.unsplash.com/profile-large.jpg',
        },
        links: {
          self: 'https://api.unsplash.com/users/john_doe',
          html: 'https://unsplash.com/@john_doe',
          photos: 'https://api.unsplash.com/users/john_doe/photos',
          likes: 350,
        },
      },
      current_user_collections: [],
      urls: {
        raw: 'https://images.unsplash.com/photo-raw.jpg',
        full: 'https://images.unsplash.com/photo-full.jpg',
        regular: 'https://images.unsplash.com/photo-regular.jpg',
        small: 'https://images.unsplash.com/photo-small.jpg',
        thumb: 'https://images.unsplash.com/photo-thumb.jpg',
      },
      links: {
        self: 'https://api.unsplash.com/photos/img-123',
        html: 'https://unsplash.com/photos/img-123',
        download: 'https://unsplash.com/photos/img-123/download',
      },
    };
  }

  withId(id: string): UnsplashImageBuilder {
    this.image = {
      ...this.image,
      id,
    };
    return this;
  }

  withDescription(description: string): UnsplashImageBuilder {
    this.image = {
      ...this.image,
      description,
    };
    return this;
  }

  withAltDescription(description: string): UnsplashImageBuilder {
    this.image = {
      ...this.image,
      description,
    };
    return this;
  }

  withLikes(likes: number): UnsplashImageBuilder {
    this.image = {
      ...this.image,
      likes,
    };
    return this;
  }

  withCreatedAt(created_at: Date): UnsplashImageBuilder {
    this.image = {
      ...this.image,
      created_at,
    };
    return this;
  }

  withUrls(urls: Partial<UnsplashImage['urls']>): UnsplashImageBuilder {
    this.image = {
      ...this.image,
      urls: {
        ...this.image.urls,
        ...urls,
      },
    };
    return this;
  }

  withUser(user: Partial<UnsplashImage['user']>): UnsplashImageBuilder {
    this.image = {
      ...this.image,
      user: {
        ...this.image.user,
        ...user,
        links: {
          ...this.image.user?.links,
          ...user.links,
        },
        profile_image: {
          ...this.image.user?.profile_image,
          ...user.profile_image,
        },
      },
    };
    return this;
  }

  build(): UnsplashImage {
    return this.image as UnsplashImage;
  }

  buildMany(count: number): UnsplashImage[] {
    return Array.from({ length: count }, (_, i) =>
      new UnsplashImageBuilder()
        .withId(`img-${i + 1}`)
        .withDescription(`Description ${i + 1}`)
        .withAltDescription(`Alt description ${i + 1}`)
        .withLikes(100 + i)
        .withCreatedAt(new Date(Date.now() - i * 86400000))
        .withUrls({
          small: `https://images.unsplash.com/photo-${i + 1}`,
          full: `https://images.unsplash.com/photo-${i + 1}-full`,
          thumb: `https://images.unsplash.com/photo-${i + 1}-thumb`,
          raw: `https://images.unsplash.com/photo-${i + 1}-raw`,
          regular: `https://images.unsplash.com/photo-${i + 1}-regular`,
        })
        .withUser({
          name: `Photographer ${i + 1}`,
          username: `user${i + 1}`,
          links: {
            html: `https://unsplash.com/@user${i + 1}`,
            self: `https://api.unsplash.com/photos/img-${i + 1}`,
            photos: 'https://api.unsplash.com/users/john_doe/photos',
            likes: i + 1,
          },
          profile_image: {
            small: `https://unsplash.com/user${i + 1}-small.jpg`,
            medium: `https://unsplash.com/user${i + 1}-medium.jpg`,
            large: `https://unsplash.com/user${i + 1}-large.jpg`,
          },
        })
        .build()
    );
  }
}
