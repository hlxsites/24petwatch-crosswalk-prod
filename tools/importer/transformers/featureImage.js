/* global WebImporter */

const createFeatureImage = (main, document) => {
  main.querySelectorAll('fulllayout').forEach((fl) => {
    fl.querySelectorAll('grid[columns="2"]').forEach((item) => {
      const columns = [];
      const templates = item.querySelectorAll('template');
      if (templates.length > 2) {
        const featureImage = templates[0].content.querySelector('div.featureimage');
        const imageText = templates[1].content.querySelector('imagetext');
        if (featureImage) {
          columns.push(featureImage);
        }
        if (imageText) {
          const img = document.createElement('img');
          img.setAttribute('src', imageText.getAttribute('image'));
          columns.push(img);
        }
        const cells = [
          ['Columns'],
          [...columns],
        ];

        if (columns.length > 0) {
          const block = WebImporter.DOMUtils.createTable(cells, document);
          fl.append(block);
        }
      }
    });
  });
};

export default createFeatureImage;
