const createHeader = async (main, document) => {
  const header = main.querySelector('div.page-header');
  if (header) {
    const logo = document.createElement('span');
    logo.classList.add('icon');
    logo.classList.add('icon-logo');
    logo.textContent = ':logo:';
    main.append(logo);

    main.append(document.createElement('hr'));

    const strong = document.createElement('strong');
    strong.append(document.querySelector('div.page-header__get-quote'));
    main.append(strong);

    main.append(document.createElement('hr'));

    const blog = document.createElement('li');

    // Force append blog to the end of the navigation group
    blog.innerHTML = '<a href="/blog" class="cmp-navigation__item-link">Blog</a>';
    const navigationGroup = document.querySelector('ul.cmp-navigation__group');
    navigationGroup.children[navigationGroup.children.length - 1].before(blog);

    main.append(navigationGroup);

    main.append(document.createElement('hr'));

    const ul = document.createElement('ul');
    document.querySelectorAll('div.page-header__notificationBar > div > div').forEach((element) => {
      if (!element.classList.contains('languagenavigation')) {
        const li = document.createElement('li');
        const link = element.querySelector('a');
        li.append(link);
        ul.append(li);
      }
    });
    main.append(ul);

    header.innerHTML = '';
  }
};

export default createHeader;
