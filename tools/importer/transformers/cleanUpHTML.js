function cleanUpHTML(main, document) {
  // to remove /content/24petwatch/us/en' from internal URL
  // main.querySelectorAll('img').forEach((img) => {
  //   if (img.src.startsWith('//')) {
  //     img.src = `https:${img.src}`;
  //   } else if (img.src.startsWith('/')) {
  //     // make absolute
  //     const cu = new URL(host);
  //     img.src = `${cu.origin}${img.src}`;
  //   }
  //   try {
  //     const u = new URL(img.src);
  //     u.searchParams.append('host', u.origin);
  //     img.src = `http://localhost:3001${u.pathname}${u.search}`;
  //   } catch (error) {
  //     console.warn(`Unable to make proxy src for ${img.src}: ${error.message}`);
  //   }
  // });

  main.querySelectorAll('a').forEach((anc) => {
    anc.href = anc.href.replace('/content/24petwatch/us/en', '');
    anc.href = anc.href.replace('/content/24petwatch/language-masters/en', '');
  });

  main.querySelectorAll('span.cmp-text--largetext').forEach((e) => {
    e.outerHTML = `<b>${e.textContent}</b>`;
  });

  main.querySelectorAll('div.cmp-text-specialfineprint ').forEach((e) => {
    e.outerHTML = `<em>${e.textContent}</em>`;
  });

  main.querySelectorAll('div.button').forEach((e) => {
    const importedLink = e.querySelector('a');
    const buttonType = importedLink.getAttribute('href').startsWith('https://')
      ? 'em'
      : 'strong';
    const cta = document.createElement('a');
    const button = document.createElement(buttonType);
    cta.setAttribute('href', importedLink.getAttribute('href'));
    cta.textContent = importedLink.textContent;
    button.append(cta);
    e.outerHTML = button.outerHTML;
  });

  return main;
}

export default cleanUpHTML;
