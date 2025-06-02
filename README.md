# Pickimage

## Run tasks

To run the dev server for your app, use:

```sh
npm run serve
```

To create a production bundle:

```sh
npm run build
```

To run the test for your app, use:

```sh
npm run test
```

To see all available targets to run for a project, run:

```sh
npm run graph
```
## Architecture

![alt text](docs/image.png)
![alt text](docs/image_2.png)

## Features

- Responsive
- Dark Theme
- Infinite Scroll Search
- Keep last image search on reload
- Load last image detail on reload
- [Testing with fluent builder pattern](./libs/repositories/src/lib/unsplash/unsplash.repository.spec.ts)
- [Testing with jest and AAA strategy](./apps/pickimage/src/app/layout/components/theme-toggle/theme-toggle.component.spec.ts)