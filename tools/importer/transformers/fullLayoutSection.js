/* global WebImporter */

const createFullLayoutSection = (main, document) => {
  main.querySelectorAll('fulllayout').forEach((e) => {
    const div = e.querySelector('div');
    const style = div.getAttribute('class');
    const cells = [['Section Metadata'], ['style', style]];
    const table = WebImporter.DOMUtils.createTable(cells, document);
    e.after(table);
    table.after(document.createElement('hr'));
  });
};

export default createFullLayoutSection;
