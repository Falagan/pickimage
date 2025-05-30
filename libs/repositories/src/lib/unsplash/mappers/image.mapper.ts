import { Image } from '@pickimage/domain';
import { UnsplashImageDto } from '../dtos/unsplash-image.dto';

export class ImageMapper {
  static mapDtoToDomain(dto: UnsplashImageDto): Image {
    return {
      description: dto.description,
    };
  }

  static mapDomainToDto(image: Image): UnsplashImageDto {
    return {
      description: image.description,
    };
  }
}
