import createColumns from './columns';
import createTeaser from './teaser';

function createSection(currentBlock, main, document) {
    if (currentBlock.textContent.trim() === '') {
        return;
    }

    const headers = currentBlock.querySelector('div.headers');
    if (headers) {
        main.append(headers);
    }

    const teaser = currentBlock.querySelector('div.teaser');
    if (teaser) {
        createTeaser(main, document);
    }

    const grid = currentBlock.querySelector('div.aem-Grid div.aem-GridColumn')
    if (!teaser && grid) {
        createColumns(currentBlock, main, document);
    }

    main.append(document.createElement('hr'));
}
// Generalize creating columns from grids
//Extract all aem-Grid--12 that have aem-GridColumn--default--6
// 12 is the container (100%) that holds two columns of 6 (50% each)
const createHomepage = (main, document) => {

    // Find all aem-GridColumn--default--6 that are children of aem-Grid--12
    const sectionRaw = main.querySelectorAll('div#mainContent > div.aem-Grid > div.aem-GridColumn--default--12:nth-child(2) > div.cmp-container > div.aem-Grid > div.aem-GridColumn');

    if (sectionRaw) {

        for (let i = 0; i < sectionRaw.length; i += 1) {
            createSection(sectionRaw[i], main, document);
        }
    }
};

export default createHomepage;