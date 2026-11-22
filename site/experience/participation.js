import {practices,regions} from '../shared/data.js';
import {heading,escape,get,save} from '../shared/ui.js';

const options = t => practices.map(item => `<option value="${item.id}">${t(item.title)}</option>`).join('');

export function youth({main,locale,t,copy:c}) {
  const stages = [c('Discover','الاكتشاف'),c('Introductory workshop','ورشة تمهيدية'),c('Supervised practice','ممارسة بإشراف حرفي'),c('Follow-up','المتابعة')];
  let saved = get('learner',{practice:'weaving',stage:0,interest:false});
  main.innerHTML = `<section class="wrap">${heading(c('Learn a heritage skill','تعلّم مهارة تراثية'),c('Follow an illustrative pathway from discovery to supervised practice. Workshop interest is saved in this browser.','تابع مساراً توضيحياً من الاكتشاف إلى الممارسة بإشراف حرفي. يُحفظ اهتمامك بالورشة في هذا المتصفح.'))}
  <div class="grid"><form class="panel stack" id="learner">
    <label>${c('Choose a practice','اختر ممارسة')}<select name="practice">${options(t)}</select></label>
    <ol id="stages">${stages.map(stage=>`<li>${stage}</li>`).join('')}</ol>
    <div class="controls"><button class="action" id="interest" type="submit">${c('Save workshop interest','احفظ اهتمامك بالورشة')}</button><button id="progress-stage" type="button">${c('Advance sample pathway','تقدّم في المسار التجريبي')}</button></div>
    <p class="status" id="state" role="status"></p></form>
    <article class="panel"><h2>${c('Where to explore','أين تستكشف؟')}</h2>
     <dl>${regions.map(([name,desc])=>`<dt>${t(name)}</dt><dd>${t(desc)}</dd>`).join('')}</dl>
     <p>${c('The proposed pilot would confirm venues and schedules with participating organisers before opening registration.','تتحقق التجربة المقترحة من المواقع والمواعيد مع المنظّمين المشاركين قبل فتح التسجيل.')}</p><a href="#visitor">${c('Try the browser experiences','جرّب تجارب المتصفح')}</a></article></div>
    <p class="section"><a href="#tour">${c('Back to judges’ tour','العودة إلى جولة لجنة التحكيم')}</a></p></section>`;
  const form = main.querySelector('#learner');
  const advance = main.querySelector('#progress-stage');
  form.elements.practice.value = saved.practice;
  function update() {
    [...main.querySelector('#stages').children].forEach((item,i) => {
      if (i === saved.stage) { item.setAttribute('aria-current','step'); item.style.fontWeight = '700'; }
      else { item.removeAttribute('aria-current'); item.style.fontWeight = ''; }
    });
    advance.disabled = !saved.interest || saved.stage === stages.length-1;
    main.querySelector('#state').textContent = saved.interest ?
      c('Interest saved locally. Current stage: ','حُفظ الاهتمام محلياً. المرحلة الحالية: ') + stages[saved.stage] : '';
  }
  form.elements.practice.onchange = () => {
    saved = {practice:form.elements.practice.value,stage:0,interest:false};
    save('learner',saved);
    update();
  };
  form.onsubmit = event => {
    event.preventDefault();
    saved.interest = true;
    save('learner',saved);
    update();
  };
  advance.onclick = () => {
    saved.stage = Math.min(saved.stage+1,stages.length-1);
    save('learner',saved);
    update();
  };
  update();
}

export function artisan({main,t,copy:c}) {
  const draft = get('draft',{practice:'weaving',note:'',access:'review',workshop:'',consent:false});
  main.innerHTML = `<section class="wrap">${heading(c('Share a practice','شارك ممارستك'),c('Draft a documentation contribution and a workshop proposal for a sample review. Use fictional details in this browser-only demo.','أنشئ مسودة مساهمة للتوثيق واقتراح ورشة للمراجعة التجريبية. استخدم تفاصيل افتراضية في هذا العرض المحلي.') )}
  <div class="split"><aside class="panel"><h2>${c('Your knowledge, your permissions','معرفتك وأذوناتك')}</h2><p>${c('A cultural reviewer would verify the technique, permissions, access limits and any translation with the practitioner.','يتحقق المراجع الثقافي من التقنية والأذونات وحدود الإتاحة وأي ترجمة بالتعاون مع الممارس.')}</p><a href="#government">${c('See the documentation review example','اطّلع على مثال مراجعة التوثيق')}</a></aside>
  <form class="panel stack" id="draft">
   <label>${c('Practice','الممارسة')}<select name="practice">${options(t)}</select></label>
   <label>${c('Technique or story','تقنية أو رواية')}<textarea name="note" required maxlength="600">${escape(draft.note)}</textarea></label>
   <label>${c('Access preference','تفضيل الإتاحة')}<select name="access"><option value="review">${c('Review team only','لفريق المراجعة فقط')}</option><option value="public">${c('May be public after approval','يمكن نشرها بعد الاعتماد')}</option></select></label>
   <label>${c('Workshop idea (optional)','فكرة ورشة (اختياري)')}<input name="workshop" maxlength="120" value="${escape(draft.workshop)}"></label>
   <label class="check"><input type="checkbox" name="consent" required ${draft.consent ? 'checked' : ''}> ${c('I consent to saving this fictional contribution in this browser.','أوافق على حفظ هذه المساهمة الافتراضية في هذا المتصفح.')}</label>
   <div class="controls"><button class="action" type="submit">${c('Save review draft','احفظ مسودة المراجعة')}</button><button type="button" id="clear-draft">${c('Clear draft','امسح المسودة')}</button></div>
   <p class="status" id="draft-result" role="status">${draft.consent ? c('Draft saved locally · awaiting simulated review.','حُفظت المسودة محلياً · بانتظار المراجعة التجريبية.') : ''}</p>
  </form></div><p class="section"><a href="#tour">${c('Back to judges’ tour','العودة إلى جولة لجنة التحكيم')}</a></p></section>`;
  const form = main.querySelector('#draft');
  const status = main.querySelector('#draft-result');
  form.elements.practice.value = draft.practice;
  form.elements.access.value = draft.access;
  form.onsubmit = event => {
    event.preventDefault();
    const values = Object.fromEntries(new FormData(form));
    save('draft',{...values,consent:true});
    status.textContent = c('Draft saved locally · awaiting simulated review.','حُفظت المسودة محلياً · بانتظار المراجعة التجريبية.');
  };
  main.querySelector('#clear-draft').onclick = () => {
    save('draft',null);
    artisan({main,t,copy:c});
    main.querySelector('#clear-draft').focus();
  };
}

