function generateMetaDesc(string) {
  let meta = document.createElement(`meta`);
  meta.setAttribute("name", "description");
  meta.setAttribute("content", string);

  let current = document.querySelector(`meta[name='description']`);
  if (current) {
    current.remove();
  }

  document.querySelector(`head`).appendChild(meta);
}

export default generateMetaDesc;
