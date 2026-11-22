import {pair as p} from './shared/types.js';
import {get,save} from './shared/ui.js';
import {home,project,tour} from './home.js';
import {government} from './government/index.js';
import {visitor,youth,artisan} from './experience/index.js';

const pages = {home, government, visitor, youth, artisan, project, tour};
const labels = {
  home:p('Home','الرئيسية'), government:p('Government','الجهات الحكومية'),
  visitor:p('Visitor','الزائر'), youth:p('Youth','الشباب'), artisan:p('Artisan','الحرفي'),
  project:p('The project','عن المشروع'), tour:p('Judges’ tour','جولة لجنة التحكيم'),
  skip:p('Skip to content','تخطَّ إلى المحتوى'),
  footer:p('Ajman heritage · Student innovation demo','تراث عجمان · نموذج طلابي للابتكار')
};
const main = document.querySelector('main');
const language = document.querySelector('#language');
const nav = document.querySelector('#nav');
let locale = get('locale','ar') === 'en' ? 'en' : 'ar';
const t = text => text[locale];
const copy = (en, ar) => t(p(en,ar));
const route = () => {
  const key = location.hash.slice(1);
  return Object.hasOwn(pages,key) ? key : 'home';
};

function render(moveFocus = false) {
  const key = route();
  document.documentElement.lang = locale;
  document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
  document.title = t(labels[key]) + ' | RAMSA';
  language.textContent = locale === 'ar' ? 'English' : 'العربية';
  language.lang = locale === 'ar' ? 'en' : 'ar';
  for (const element of document.querySelectorAll('[data-copy]')) element.textContent = t(labels[element.dataset.copy]);
  nav.innerHTML = ['government','visitor','youth','artisan','tour'].map(id =>
    `<a href="#${id}" ${key === id ? 'aria-current="page"' : ''}>${t(labels[id])}</a>`).join('');
  const context = {main,locale,t,copy,labels};
  pages[key](context);
  if (moveFocus) {
    window.scrollTo(0,0);
    main.focus({preventScroll:true});
  }
}
language.addEventListener('click', () => {
  if ('speechSynthesis' in window) speechSynthesis.cancel();
  locale = locale === 'ar' ? 'en' : 'ar';
  save('locale',locale);
  render();
});
document.querySelector('.skip').addEventListener('click', event => {
  event.preventDefault();
  main.focus();
});
window.addEventListener('hashchange', () => {
  if ('speechSynthesis' in window) speechSynthesis.cancel();
  render(true);
});
render();

