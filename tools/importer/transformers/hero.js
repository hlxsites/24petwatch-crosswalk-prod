/* global WebImporter */

const createHero = (main, document) => {
  const hero = main.querySelector('div#mainContent > div > div:first-child');
  if (hero) {
    const title = hero.querySelector('h1');
    if (title) {
      const titleNodes = hero.querySelector('h1').childNodes;

      const h1 = document.createElement('h1');
      for (let i = 0; i < titleNodes.length; i += 1) {
        const node = titleNodes[i];
        if (node.nodeType === 3) {
          const text = document.createTextNode(node.textContent);
          h1.append(text);
        }
        if (node.nodeType === 1) {
          if (node.tagName === 'BR') {
            h1.append(document.createElement('br'));
          }

          if (node.tagName === 'SPAN') {
            const em = document.createElement('em');
            em.textContent = node.textContent;
            h1.append(em);
          }
        }
      }

      const description = hero.querySelector('h4').textContent;
      const ctaText = hero.querySelector('a').textContent;
      const ctaHref = hero.querySelector('a').getAttribute('href');
      const imgSrc = hero.querySelector('img').getAttribute('src');
      const imgAlt = hero.querySelector('img').getAttribute('alt');

      const img = document.createElement('img');
      img.setAttribute('src', imgSrc);
      img.setAttribute('alt', imgAlt);

      const div = document.createElement('div');
      div.append(h1);
      const p1 = document.createElement('p');
      p1.textContent = description;
      div.append(p1);
      const p2 = document.createElement('p');
      const a = document.createElement('a');
      const strong = document.createElement('strong');
      a.setAttribute('href', ctaHref);
      a.textContent = ctaText;
      strong.append(a);
      p2.append(strong);
      div.append(p2);

      const cells = [
        ['Hero'],
        [div, img],
      ];

      const block = WebImporter.DOMUtils.createTable(cells, document);
      main.append(block);
      main.append(document.createElement('hr'));
    }
  }
};

export default createHero;
