function createCarousel(currentBlock, main, document) {

    // Find carousel items and start array of items
    let carouselItems = currentBlock.querySelectorAll('div.cmp-carousel__item');
    let carousel = [['Carousel']];

    // Iterate through items
    for (let i = 0; i < carouselItems.length; i += 1) {
       
        // Add divs for text and image elements
        const text = document.createElement('div');
        const image = document.createElement('div');

        // Start array for single item to hold both text and image
        let carouselItem = [];
    
        // Text
        if (carouselItems[i].querySelector('div.text')) {
            const p = document.createElement('p');
            p.textContent = carouselItems[i].querySelector('p').textContent;
            text.append(p);
        }

        // Image
        if (carouselItems[i].querySelector('img')) {
            const img = document.createElement('img');
            const imgSrc = carouselItems[i].querySelector('img').getAttribute('src');
            img.setAttribute('src', imgSrc);
            image.append(img);
        }

        // Concatenate text and image in array element and push to items
        carouselItem = [text, image];
        carousel.push(carouselItem);
    
    }
 
    // Output carousel items array of arrays as a table
    const block = WebImporter.DOMUtils.createTable(carousel, document);
    main.append(block);

}

export default createCarousel;