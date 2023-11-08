function createCarousel(currentBlock, main, document) {
    console.log('Carousel found!')
    let carouselItems = currentBlock.querySelectorAll('div.cmp-carousel__item');
    const text = document.createElement('div');
    const image = document.createElement('div');
    let carousel = ['Carousel'];

    for (let i = 0; i < carouselItems.length; i += 1) {

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

        carouselItem = [image, text];
        carousel.push(carouselItem);
    
    }

    console.log(carousel);
 
    const block = WebImporter.DOMUtils.createTable(carousel, document);
    main.append(block);

}

export default createCarousel;