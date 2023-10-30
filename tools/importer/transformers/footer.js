function processEntry (entry, main, document) {
    const title = entry.querySelector('*:is(h2, h3, h4, h5, h6)')
    const ul = document.createElement('ul');
    entry.querySelectorAll('div.text p').forEach((e) => {
        const li = document.createElement('li');
        li.append(e);
        ul.append(li);
    });
    if (title !== null) {
        main.append(title);
        main.append(ul);
    }
}


const createFooter = (main, document) => {
    main.querySelectorAll('#footer-labels > div.aem-Grid > div.aem-GridColumn').forEach((e) => {
        let isAccordion = false;
        e.querySelectorAll('div.cmp-accordion__item').forEach((e) => {
            isAccordion = true;
            processEntry(e, main, document);
        });

        if (!isAccordion) {
            processEntry(e, main, document);
        }
    });

    main.append(document.createElement('hr'));

    main.querySelectorAll('div.image').forEach((img) => {
        main.append(img);
    });

    main.append(document.createElement('hr'));

    main.querySelectorAll('div#footer-links-container a').forEach((link) => {
        main.append(link);
    });

    main.append(main.querySelector('div#footer-notice-global'))
};

export default createFooter;
