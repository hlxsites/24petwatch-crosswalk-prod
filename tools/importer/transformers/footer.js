const createFooter = (main, document) => {
    main.querySelectorAll('footer > div > div > div').forEach((e) => {
      main.append(e);
    });
    const copyright = main.querySelector('footer > div > div:last-child');
    if (copyright) {
      main.append(document.createElement('hr'));
      main.append(copyright);
    }
  };

export default createFooter;
