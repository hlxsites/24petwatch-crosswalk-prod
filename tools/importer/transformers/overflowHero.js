/* global WebImporter */

function createOverflowHero(currentBlock, main, document) {

  const discount = currentBlock.querySelector('div.cmp-container--rounded-all');
  discount.remove();

  const title = 'OverflowHero';
  const blockClassList = [];

  if (discount) {
    const discountParagraph = document.createElement('p');
    const amount = document.createElement('strong');
    amount.textContent = discount.querySelector('div.cmp-title').textContent;
    const smallPrints = document.createElement('em');
    smallPrints.textContent = discount.querySelector('div.cmp-text-specialfineprint').textContent;

    discountParagraph.append(amount);
    discountParagraph.append(document.createElement('br'));
    discountParagraph.append(discount.querySelector('div.cmp-text--size-large').textContent);
    discountParagraph.append(document.createElement('br'));
    discountParagraph.append(smallPrints);

    currentBlock.append(discountParagraph);

    blockClassList.push('discount');
  }

  let blockTitle;
  if (blockClassList.length > 0) {
    blockTitle = title + ' (' + blockClassList.join(',') + ')'
  } else {
    blockTitle = title
  }

  const overflowHero = [
    [blockTitle],
    [currentBlock],
  ];

  const block = WebImporter.DOMUtils.createTable(overflowHero, document);

  main.append(block);
}

export default createOverflowHero;
