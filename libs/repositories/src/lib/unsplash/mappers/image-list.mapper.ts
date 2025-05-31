
import { UnsplashImage } from '../dtos/unsplash-image.dto';
import { UnsplashApiResponsePaginated } from '../models/unsplash-api-response.model';
import { ImageMapper } from './image.mapper';
import { ImageList } from '@pickimage/domain'

export class ImageListMapper {
  static mapDtoToDomain(
    dto: UnsplashApiResponsePaginated<UnsplashImage>
  ): ImageList {
    return {
      items: dto.results.map(ImageMapper.mapDtoToDomain),
      total: dto.total,
    };
  }
}
