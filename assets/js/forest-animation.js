// Green Stripes Background
(function() {
  'use strict';

  // Wait for DOM to load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    createStripesContainer();
  }

  function createStripesContainer() {
    const container = document.createElement('div');
    container.id = 'green-stripes';
    container.innerHTML = `
      <div class="stripes-left"></div>
      <div class="stripes-right"></div>
    `;
    document.body.insertBefore(container, document.body.firstChild);
  }
})();
