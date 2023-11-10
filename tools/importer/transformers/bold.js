function createBold(main, document) {
    main.querySelectorAll('span.cmp-text--largetext').forEach((e) => {
        e.outerHTML = `<b>${e.textContent}</b>`
    });
}

export default createBold;
