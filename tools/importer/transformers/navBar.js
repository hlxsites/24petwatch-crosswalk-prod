const createNavBar = (navBarEl, main, document) => {
    const logoTemplateEl = navBarEl.querySelector('template[\\#logo]');
    if (logoTemplateEl) {
      const logo = logoTemplateEl.content.querySelector('logo');
      if (logo) {
        const imgSrc = '/content/dam/danaher/brand-logos/svg/1-color/danaher-1c.svg';
        const imgAlt = 'Danaher';
        const link = '/';
        const img = document.createElement('img');
        img.setAttribute('src', imgSrc);
        img.setAttribute('alt', imgAlt);
        const anc = document.createElement('a');
        anc.setAttribute('href', link);
        anc.append(imgAlt);
        main.append(img);
        main.append(anc);
      }
    }
    const linkTemplateEl = navBarEl.querySelector('template[\\#links]');
    if (linkTemplateEl) {
      const headerLinksEl = linkTemplateEl.content.querySelector('header-links');
      if (headerLinksEl) {
        // eslint-disable-next-line no-undef
        const headerLinks = JSON.parse(decodeHtmlEntities(headerLinksEl.getAttribute('headerlinks')));
        const list = document.createElement('ul');
        headerLinks.forEach((i) => {
          const item = document.createElement('li');
          const anc = document.createElement('a');
          anc.setAttribute('href', i.linkUrl);
          anc.append(`:${i.linkIcon.replace(/[A-Z]/g, (match, offset) => (offset > 0 ? '-' : '') + match.toLowerCase())}: ${i.linkName}`);
          item.append(anc);
          list.append(item);
        });
        main.append(list);
      }
    }
  
    main.append(document.createElement('hr'));
  };

export default createNavBar;
