/** @typedef {'ar' | 'en'} Locale */
/** @typedef {{ar:string,en:string}} LocalizedText */
/** @typedef {'home'|'government'|'visitor'|'youth'|'artisan'|'project'|'tour'} Route */
/** @typedef {{id:string,title:LocalizedText,place:LocalizedText,risk:number,confidence:LocalizedText,evidence:LocalizedText,action:LocalizedText}} Practice */
/** @param {string} en @param {string} ar @returns {LocalizedText} */
export const pair = (en, ar) => ({en, ar});

