import { Route } from '@angular/router';
import { IMAGE_REPOSITORY } from '@pickimage/domain';
import { UnsplashRepository } from '@pickimage/repositories';

export const appRoutes: Route[] = [
  {
    path: '',
    providers: [
      {
        provide: IMAGE_REPOSITORY,
        useClass: UnsplashRepository,
      },
    ],
    loadComponent: () =>
      import('@pickimage/features').then((c) => c.SearchImagesComponent),
  },
];
