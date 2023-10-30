const createHeader = async (main, document) => {
  const header = main.querySelector('div.page-header');
  console.log('header');
  if (header) {
    console.log('here');
    const logo = document.createElement('span');
    logo.classList.add('icon');
    logo.classList.add('icon-logo');
    logo.textContent = 'Logo';
    main.append(logo)

    main.append(document.createElement('hr'));

    const strong = document.createElement('strong');
    strong.append(document.querySelector('div.page-header__get-quote'))
    main.append(strong);

    main.append(document.createElement('hr'));

    main.append(document.querySelector('ul.cmp-navigation__group'));

    main.append(document.createElement('hr'));

    const ul = document.createElement('ul');
    document.querySelectorAll('div.page-header__notificationBar > div > div').forEach(element => {
      if (!element.classList.contains('languagenavigation')) {
        const li = document.createElement('li');
        li.append(element);
        ul.append(li);
      }
    });
    main.append(ul);

    header.innerHTML = '';
  };
};
export default createHeader;
