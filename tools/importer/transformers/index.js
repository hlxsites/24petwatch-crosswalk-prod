import createBrandNavigation from "./brandNavigation.js";
import createCards from "./cards.js";
import createColumns from "./columns.js";
import createFeatureImage from "./featureImage.js";
import createFooter from "./footer.js";
import createFullLayoutSection from "./FullLayoutSection.js";
import createHeader from "./header.js";
import createHero from "./hero.js";
import createLogoCloud from "./logoCloud.js";
import createMegaMenu from "./megaMenu.js";
import createMetadata from "./metadata.js";
import createNavBar from "./navBar.js";
import createWeSee from "./weSee.js";

export const transformers = [
    createHeader,
    createFooter,
    createMetadata,
    createHero,
    createFeatureImage,
    createFullLayoutSection,
    createCards,
    createLogoCloud,
    createWeSee,
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
