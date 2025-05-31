import { UnsplashSearchParams } from '../dtos/unsplassearh-params.dto';
import { ImageSearch } from '@pickimage/domain';

export class ImageSearchMapper {
  static mapDomainToDto(params: ImageSearch): UnsplashSearchParams {
    return {
      text: params.text,
      order_by: params.orderBy,
      per_page: params.itemsPerPage,
      page: params.page,
    };
  }
}
