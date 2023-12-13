/* global WebImporter */

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

  const img = document.querySelector('body img:first-child');
  if (img && img.src) {
    const el = document.createElement('img');
    el.src = img.src.replace('https://www.24petwatch.com', '');
    meta.Image = el;
  }

  const metaImage = document.querySelector('[property="og:image"]');
  if (metaImage) {
    const el = document.createElement('img');
    el.src = metaImage.content.replace('https://www.24petwatch.com', '');
    meta.Image = el;
  }

  if (meta.Title && (meta.Title === 'Footer' || meta.Title === 'Header')) {
    meta.Robots = 'noindex, nofollow';
    delete meta.Title;
  }

  const author = document.querySelector('div.cmp-contentfragment__element--byline dd');
  if (author) {
    meta.Author = author.textContent.trim().replace(/^By /, '');
  }

  const blogTags = document.querySelectorAll('div.cmp-contentfragment__element--tag > dd.cmp-contentfragment__element-value');
  if (blogTags) {
    for (let i = 0; i < blogTags.length; i += 1) {
      meta.Tags = blogTags[i].innerHTML.trim()
        .replaceAll('24petwatch:newletter/topic/', '')
        .replaceAll('<br>', ',');
    }
  }

  const block = WebImporter.Blocks.getMetadataBlock(document, meta);
  main.append(block);

  return meta;
};

export default createMetadata;
