import createCards from './cards.js';
import createFeatureImage from './featureImage.js';
import createFooter from './footer.js';
import createFullLayoutSection from './fullLayoutSection.js';
import createHomepage from './homepage.js';
import createHeader from './header.js';
import createHero from './hero.js';
import createMetadata from './metadata.js';
import cleanUpHTML from './cleanUpHTML.js';
import createBlogArticle from './blogArticle.js';
import createBlogBanner from './blogBanner.js';
import cleanBlog from './cleanBlog.js';
import makeProxySrcs from './makeProxySrcs.js';

export const transformers = [
  createFullLayoutSection,
  createHero,
  createHomepage,
  createCards,
  createFeatureImage,
  createBlogArticle,
  createBlogBanner,
];

export const xfTransformers = [
  createFooter,
];

export const xfAsyncTransformers = [
  createHeader,
];

export const preTransformers = [
];

export const postTransformers = [
  createMetadata,
  cleanUpHTML,
  cleanBlog,
];
