const createBrandNavigation = (brandNavigationEl, document, main) => {
    // eslint-disable-next-line no-undef
    const brands = JSON.parse(decodeHtmlEntities(brandNavigationEl.getAttribute('brands')));
    const items = [];
    brands.forEach((brand) => {
      const a = document.createElement('a');
      a.setAttribute('href', brand.brandlink);
      a.textContent = brand.brandimagealt;
      const img = document.createElement('img');
      img.setAttribute('src', brand.brandimage);
      img.setAttribute('alt', brand.brandimagealt);
      items.push([img, a]);
    });
    const block = () => {
      const list = document.createElement('ul');
      items.forEach((item) => {
        const li = document.createElement('li');
        li.append(item[0]);
        li.append(item[1]);
        list.append(li);
      });
      return list;
    };
    main.append(block());
    main.append(document.createElement('hr'));
  };

export default createBrandNavigation;
