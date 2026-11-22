export const get = (key, fallback) => {
  try { return JSON.parse(localStorage.getItem('ramsa.' + key)) ?? fallback; }
  catch { return fallback; }
};
export const save = (key, value) => {
  try { localStorage.setItem('ramsa.' + key, JSON.stringify(value)); } catch {}
};
export const escape = value => String(value).replace(/[&<>"']/g, char => ({
  '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'
}[char]));
export const heading = (title, intro) => `<div class="page-heading"><h1>${title}</h1><p>${intro}</p></div>`;

