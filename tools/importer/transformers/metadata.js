const createMetadata = (main, document) => {
    const meta = {};
  
    const title = document.querySelector('title');
    if (title) {
      meta.Title = title.textContent.replace(/[\n\t]/gm, '');
    }
  
    const desc = document.querySelector('[property="og:description"]');
    if (desc) {
      meta.Description = desc.content;
    }
  
    const img = document.querySelector('[property="og:image"]');
    if (img && img.content) {
      const el = document.createElement('img');
      el.src = img.content;
      meta.Image = el;
    }
  
    if (meta.Title && (meta.Title === 'Footer' || meta.Title === 'Header')) {
      meta.Robots = 'noindex, nofollow';
      delete meta.Title;
    }
  
    const block = WebImporter.Blocks.getMetadataBlock(document, meta);
    main.append(block);
  
    return meta;
  };

export default createMetadata;
