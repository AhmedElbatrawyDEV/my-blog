import { ScullyConfig } from '@scullyio/scully';
export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "my-blog",
  outDir: './dist/static',
  routes: {
    '/blog/:title': {
      type: 'contentFolder',
      title: {
        folder: "./mdblog"
      }
    },
    '/blog/:id': {
      type: 'contentFolder',
      id: {
        folder: "./blog"
      }
    },
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./blog"
      }
    }
  }
};