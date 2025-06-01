import { Route } from '@angular/router';
import { IMAGE_REPOSITORY } from '@pickimage/domain';
import { UnsplashRepository } from '@pickimage/repositories';
import { LayoutComponent } from './layout/layout.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('@pickimage/features').then((c) => c.SearchImagesComponent),
        providers: [
          {
            provide: IMAGE_REPOSITORY,
            useClass: UnsplashRepository,
          },
        ],
      },
      {
        path: 'image/:id',
        loadComponent: () =>
          import('@pickimage/features').then((c) => c.ImageDetailComponent),
        providers: [
          {
            provide: IMAGE_REPOSITORY,
            useClass: UnsplashRepository,
          },
        ],
      },
    ],
  },
];
