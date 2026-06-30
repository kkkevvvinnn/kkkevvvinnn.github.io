/**
 * 博客主脚本 - 优化版
 * 合并了滚动处理、轮播初始化、动态年份等功能
 */
(function () {
  'use strict';

  // ========== 页眉滚动效果 ==========
  const header = document.getElementById('header');
  if (header) {
    let ticking = false;
    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(function () {
          const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
          if (scrollTop > 10) {
            header.classList.replace('header-absolute', 'header-fixed');
          } else {
            header.classList.replace('header-fixed', 'header-absolute');
          }
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // ========== 页脚动态年份 ==========
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // ========== 轮播默认选中 ==========
  const carouselRadios = document.getElementsByName('carousel');
  for (let i = 0; i < carouselRadios.length; i++) {
    if (carouselRadios[i].value === '0') {
      carouselRadios[i].checked = true;
      break;
    }
  }

  // ========== Feather 图标替换（仅在页面有图标时） ==========
  if (typeof feather !== 'undefined' && document.querySelector('[data-feather]')) {
    feather.replace();
  }
})();
