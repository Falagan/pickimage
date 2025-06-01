import { UNSPLASH_API } from '../config/unsplash-api.config';
import { UnsplashSearchParams } from '../dtos/unsplassearh-params.dto';

export class UnsplashApiUrlBuilder {
  static buildGetImageURL(id: string) {
    return `${UNSPLASH_API.BASE_URL}/${UNSPLASH_API.ROUTES.GET_PHOTO}/${id}?client_id=${UNSPLASH_API.API_KEY}`;
  }

  static buildGetImagesURL(params: UnsplashSearchParams) {
    return `${UNSPLASH_API.BASE_URL}/${UNSPLASH_API.ROUTES.SEARCH_PHOTOS}/?client_id=${UNSPLASH_API.API_KEY}&query=${params.text}&order_by=${params.order_by}&per_page=${params.per_page}&page=${params.page}`;
  }
}
