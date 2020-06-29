import Typed from 'typed.js';
const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Rakete","Geißbock", "Macher", "Brubri", "Jannik"],
    typeSpeed: 150,
    loop: true
  });
}
export { loadDynamicBannerText };
