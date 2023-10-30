const createHeader = async (main, document) => {
    const danaherHeaderEl = main.querySelector('danaher-header');
    if (danaherHeaderEl) {
      const templates = Array.from(danaherHeaderEl.getElementsByTagName('template'));
      // eslint-disable-next-line no-restricted-syntax
      for await (const t of templates) {
        const brandNavigationEl = t.content.querySelector('brand-navigation');
        if (brandNavigationEl) {
          createBrandNavigation(brandNavigationEl, document, main);
        }
  
        const navBarEl = t.content.querySelector('navbar');
        if (navBarEl) {
          createNavBar(navBarEl, main, document);
        }
  
        const megaMenuHoverEl = t.content.querySelector('megamenuhover');
        if (megaMenuHoverEl) {
          await createMegaMenu(megaMenuHoverEl, main, document);
        }
      }
    }
  };

export default createHeader;
