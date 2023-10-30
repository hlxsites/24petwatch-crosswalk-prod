const createColumns = (main, document) => {
  
    const columns = main.querySelectorAll('div.teaser');
  
    if (columns) {
  
      const cols = [];
  
      for ( let i = 0; i < columns.length; i += 1) {
        const div = document.createElement('div');
        const img = document.createElement('img');
        const p = document.createElement('p');
  
        const imgSrc = columns[i].querySelector('img').getAttribute('src');
        img.setAttribute('src', imgSrc);
        
        const text = columns[i].querySelector('h4').textContent;
        p.textContent = text;
        
        div.append(img);
        div.append(p);
        cols.push(div);
      }
    
      const cells = [
        ['Columns'],
        cols,
      ];
    
      if (cols.length > 0) {
        const block = WebImporter.DOMUtils.createTable(cells, document);
        main.append(block);
        main.append(document.createElement('hr'));
      }
    }
  
  };

export default createColumns;
