(function() {
  'use strict';

  var body = document.getElementsByTagName('body')[0];
  var navToggle = document.getElementById('mobile-nav-toggle');
  var dimmer = document.getElementById('mobile-nav-dimmer');
  var CLASS_NAME = 'mobile-nav-on';
  if (!navToggle) return;

  // 无障碍：设置 ARIA 属性
  navToggle.setAttribute('role', 'button');
  navToggle.setAttribute('aria-label', '切换导航菜单');
  navToggle.setAttribute('aria-expanded', 'false');
  navToggle.setAttribute('tabindex', '0');

  navToggle.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    var isOpen = body.classList.toggle(CLASS_NAME);
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // 键盘支持
  navToggle.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      navToggle.click();
    }
  });

  if (dimmer) {
    dimmer.addEventListener('click', function(e) {
      if (!body.classList.contains(CLASS_NAME)) return;
      e.preventDefault();
      body.classList.remove(CLASS_NAME);
      navToggle.setAttribute('aria-expanded', 'false');
    });
  }
}());
