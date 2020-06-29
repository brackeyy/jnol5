import Typed from 'typed.js';
const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Rakete","Rakete","Geißbock", "Macher", "Schlawiner"],
    typeSpeed: 150,
    loop: true
  });
}
export { loadDynamicBannerText };
