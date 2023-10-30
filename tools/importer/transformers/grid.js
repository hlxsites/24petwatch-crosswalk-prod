function createSection(currentBlock, main, document) {

    const cols = currentBlock.querySelectorAll('div.aem-GridColumn--default--6');
    let newCols = [];
    for (let i = 0; i < cols.length; i += 1) {

        const div = document.createElement('div');

        // H1 heading
        if (cols[i].querySelector('h1')) {
            const h1 = document.createElement('h1');
            h1.textContent = cols[i].querySelector('h1').textContent;
            div.append(h1);
        }

        // H2 heading
        if (cols[i].querySelector('h2')) {
            const h2 = document.createElement('h2');
            h2.textContent = cols[i].querySelector('h2').textContent;
            div.append(h2);
        }

        // H4 heading
        if (cols[i].querySelector('h4')) {
            const h4 = document.createElement('h4');
            h4.textContent = cols[i].querySelector('h4').textContent;
            div.append(h4);
        }

        // paragraphs
        if (cols[i].querySelector('p')) {
            const p = document.createElement('p');
            p.textContent = cols[i].querySelector('p').textContent;
            div.append(p);
        }

        // image
        if (cols[i].querySelector('img')) {
            const img = document.createElement('img');
            const imgSrc = cols[i].querySelector('img').getAttribute('src');
            img.setAttribute('src', imgSrc);
            div.append(img);
        }

        // CTA button
        if (cols[i].querySelector('.cmp-button')) {
            const cta = document.createElement('a');
            const ctaHref = cols[i].querySelector('a').getAttribute('href');
            const ctaText = cols[i].querySelector('.cmp-button').textContent;
            cta.setAttribute('href', ctaHref);
            cta.textContent = ctaText;

            // If link opens in a new window, render it in bold
            if (cols[i].querySelector('.cmp-button').getAttribute('target') === '_blank') {
                const strong = document.createElement('strong');
                strong.append(cta);
                div.append(strong);
                console.log(i);
                console.log('strong')
                console.log(cols[i].querySelector('.cmp-button').getAttribute('target'));
            }
            // If link opens in current window, render it as normal
            else {
                div.append(cta);
                console.log(i);
                console.log('not strong');
                console.log(cols[i].querySelector('.cmp-button').getAttribute('target'));
                console.log(cols[i].querySelector('.cmp-button').getAttribute('target'));
                console.log(cols[i].querySelector('.cmp-button').hasAttribute('target'));
            }
        }

        // Check if current and next nodes are siblings and if so, add current node to grid, otherwise output current grid
        // First see if next element exists and if not print grid as-is
        if (i + 1 >= cols.length) {
            newCols.push(div);
            // Build array for columns
            const cells = [
                ['Columns'],
                newCols,
            ];

            const block = WebImporter.DOMUtils.createTable(cells, document);
            main.append(block);
        }
        // Check if the next node and current are siblings, if so, just add column to array to add it them to the same grid
        else if (cols[i].parentNode === cols[i + 1].parentNode) {
            newCols.push(div);
        }
        // Otherwise the current node and next aren't siblings, so print out array and start a new grid
        else {
            newCols.push(div);
            // Build array for columns
            const cells = [
                ['Columns'],
                newCols,
            ];

            const block = WebImporter.DOMUtils.createTable(cells, document);
            main.append(block);

            // Reset columns array to an empty one to start a new grid
            newCols = [];
        }
    }
}
// Generalize creating columns from grids
//Extract all aem-Grid--12 that have aem-GridColumn--default--6
// 12 is the container (100%) that holds two columns of 6 (50% each)
const createGrids = (main, document) => {

    // Find all aem-GridColumn--default--6 that are children of aem-Grid--12
    const sectionRaw = main.querySelectorAll('div#mainContent > div.aem-Grid > div.aem-GridColumn--default--12:nth-child(2) > div.cmp-container > div.aem-Grid > div.aem-GridColumn');
    let sections = [];

    if (sectionRaw) {

        for (let i = 0; i < sectionRaw.length; i += 1) {
            createSection(sectionRaw[i], main, document);
        }
    }

    main.querySelectorAll('div.aem-Grid--12 > div.aem-GridColumn--default--12 h4').forEach(element => {
        main.append(element);
    });
};

export default createGrids;