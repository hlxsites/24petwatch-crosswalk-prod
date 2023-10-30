const createMegaMenu = async (megaMenuHoverEl, main, document) => {
    // eslint-disable-next-line no-undef
    const skipItems = JSON.parse(decodeHtmlEntities(megaMenuHoverEl.getAttribute('menuheadervalues')));
    const response = await fetch('https://lifesciences.danaher.com/content/dam/danaher/system/navigation/megamenu_items_us.json');
    const data = await response.json();
    if (data.length > 0) {
      const list = document.createElement('ul');
      const homeItem = document.createElement('li');
      const homeAnc = document.createElement('a');
      homeAnc.setAttribute('href', '/');
      homeAnc.append('Life Sciences :home-icon:');
      homeItem.append(homeAnc);
      list.append(homeItem);
      data.sort((a, b) => a.displayOrder - b.displayOrder).forEach((i) => {
        if (skipItems.length > 0 && skipItems.includes(i.name)) {
          return;
        }
        const listItem = document.createElement('li');
        if (i.href) {
          const anc = document.createElement('a');
          anc.setAttribute('href', i.href);
          anc.append(i.name);
          listItem.append(anc);
        } else {
          listItem.append(i.name);
        }
        if (i.items.length > 0) {
          const subList = document.createElement('ul');
          i.items.forEach((j) => {
            const subListItem = document.createElement('li');
            const anc = document.createElement('a');
            anc.setAttribute('href', j.href);
            anc.append(j.name);
            subListItem.append(anc);
            subList.append(subListItem);
          });
          listItem.append(subList);
        }
        list.append(listItem);
      });
      main.append(list);
      main.append(document.createElement('hr'));
    }
  };

  export default createMegaMenu;