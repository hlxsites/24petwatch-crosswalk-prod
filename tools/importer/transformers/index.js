import createCards from "./cards.js";
import createTeaser from "./teaser.js";
import createFeatureImage from "./featureImage.js";
import createFooter from "./footer.js";
import createFullLayoutSection from "./FullLayoutSection.js";
import createHomepage from "./homepage.js";
import createHeader from "./header.js";
import createHero from "./hero.js";
import createLogoCloud from "./logoCloud.js";
import createMetadata from "./metadata.js";
import createWeSee from "./weSee.js";

export const transformers = [
    createFullLayoutSection,
    createHero,
    createHomepage,
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
