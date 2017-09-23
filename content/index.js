!(function () {

  function qs(selector) {
    return document.querySelector(selector);
  }

  const tagWrapper = qs('.post-taglist').cloneNode(true);
  const sidebar = qs('#sidebar');
  sidebar.insertAdjacentElement('afterbegin', tagWrapper);

})();
