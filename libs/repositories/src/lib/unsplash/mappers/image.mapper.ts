import { Image } from '@pickimage/domain';
import { UnsplashImage } from '../dtos/unsplash-image.dto';

export class ImageMapper {
  static mapDtoToDomain(dto: UnsplashImage): Image {
    return {
      id: dto.id,
      color: dto.color,
      urls: {
        raw: dto.urls.raw,
        full: dto.urls.full,
        regular: dto.urls.regular,
        small: dto.urls.small,
        thumb: dto.urls.thumb,
      },
      description: dto.description,
      width: dto.width,
      height: dto.height,
      createdAt: dto.created_at,
      likes: dto.likes,
      username: dto.user.name,
      tags: dto.tags ? dto.tags.map( tag => tag.title) : []
    };
  }
}
