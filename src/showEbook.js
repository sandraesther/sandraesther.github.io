function llamaLibro(src) {
  var myDiv = document.getElementById('e-book');
  $('#e-book')
    .children()
    .each(function (index, item) {
      console.log(item.tagName);
      item.remove();
    });
  var newBook = document.createElement('iframe');
  newBook.setAttribute('src', src);
  newBook.setAttribute('width', '100%');
  newBook.setAttribute('height', '480');
  newBook.setAttribute('style', "margin-top: 2em;");
  newBook.setAttribute('seamless', 'seamless');
  newBook.setAttribute('scrolling', 'no');
  newBook.setAttribute('frameborder', '0');
  newBook.setAttribute('width', '100%');
  newBook.setAttribute('allowfullscreen', 'true');
  myDiv.appendChild(newBook);
}
