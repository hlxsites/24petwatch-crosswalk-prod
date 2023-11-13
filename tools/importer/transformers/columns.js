function createColumns(currentBlock, main, document) {
    
    let cols = currentBlock.querySelectorAll('div.aem-GridColumn--default--6');
    const text = document.createElement('div');
    const image = document.createElement('div');
    let content = false;
    let textPos = 0;
    let imagePos = 0;
    let newCols = [];

    for (let i = 0; i < cols.length; i += 1) {

        // Headers
        if (cols[i].querySelector('div.headers') )
        {
            // H1 heading
            if (cols[i].querySelector('h1')) {
                const h1 = document.createElement('h1');
                h1.textContent = cols[i].querySelector('h1').textContent;
                text.append(h1);
                content = true;
                textPos = i;
            }

            // H2 heading
            if (cols[i].querySelector('h2')) {
                const h2 = document.createElement('h2');
                h2.textContent = cols[i].querySelector('h2').textContent;
                text.append(h2);
                content = true;
                textPos = i;
            }

            // H4 heading
            if (cols[i].querySelector('h4')) {
                const h4 = document.createElement('h4');
                h4.textContent = cols[i].querySelector('h4').textContent;
                text.append(h4);
                content = true;
                textPos = i;
            }
        }

        // Text
        if (cols[i].querySelector('div.text')) {
            const p = document.createElement('p');
            p.textContent = cols[i].querySelector('p').textContent;
            text.append(p);
            content = true;
            textPos = i;
        }

        // Content Fragment
        if (cols[i].querySelector('div.experiencefragment')) {
            const img = document.createElement('img');
            const imgSrc = cols[i].querySelector('img').getAttribute('src');
            img.setAttribute('src', imgSrc);
            image.append(img);
            content = true;
            imagePos = i;
        }

        // CTA button
        if (cols[i].querySelector('div.button')) {
            let buttonType = 'strong';
            const cta = document.createElement('a');
            const importedLink = cols[i].querySelector('a');
            if (importedLink.getAttribute('href').startsWith('https://')) {
                buttonType = 'em';
            }
            const button = document.createElement(buttonType);
            cta.setAttribute('href', importedLink.getAttribute('href'));
            cta.textContent = importedLink.textContent;
            button.append(cta);
            text.append(button);
            content = true;
            textPos = i;
        }
    }

    // If content was found and created as a document element, build table and add to main
    if (content) {
        
        let cells = [];

        // Find if image should be to left or right of text
        if ( imagePos > textPos ) {
            cells = [
                ['Columns'],
                [text, image],
            ];
        }
        else {
            cells = [
                ['Columns'],
                [image,text],
            ];
        }
        const block = WebImporter.DOMUtils.createTable(cells, document);
        main.append(block);
    }

}


function createSection(currentBlock, main, document) {

    //const cols = currentBlock.querySelectorAll('div.aem-GridColumn--default--6');
    const grid = currentBlock.querySelector('div.aem-Grid div.aem-GridColumn--default--6')
    
    if (currentBlock.textContent.trim() === '') {
        return;
    }

    if (grid) {
        createColumns(currentBlock, main, document);
    } else {
        main.append(currentBlock);
    }

    main.append(document.createElement('hr'));
}

export default createColumns;
