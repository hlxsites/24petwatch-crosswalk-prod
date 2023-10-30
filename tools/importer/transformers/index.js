import createCards from "./cards.js";
import createColumns from "./columns.js";
import createFeatureImage from "./featureImage.js";
import createFooter from "./footer.js";
import createFullLayoutSection from "./FullLayoutSection.js";
import createGrids from "./grid.js";
import createHeader from "./header.js";
import createHero from "./hero.js";
import createLogoCloud from "./logoCloud.js";
import createMetadata from "./metadata.js";
import createWeSee from "./weSee.js";

export const transformers = [
    createFullLayoutSection,
    createHero,
    createColumns,
    createGrids,
    createCards,
    createLogoCloud,
    createWeSee,
    createFeatureImage,
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
];
