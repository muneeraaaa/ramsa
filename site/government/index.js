import {practices} from '../shared/data.js';
import {get,save,heading} from '../shared/ui.js';

let practiceId = 'weaving';
export function government({main,t,copy:c,locale}) {
  const practice = practices.find(item => item.id === practiceId) ?? practices[0];
  const reviewed = get('review.' + practice.id,false);
  main.innerHTML = `<section class="wrap">${heading(c('Heritage early warning','الإنذار المبكر للتراث'),c('Review the evidence behind each safeguarding priority. Cases, scores and confidence levels are illustrative.','راجع الأدلة التي تستند إليها أولويات الصون. الحالات والدرجات ومستويات الثقة توضيحية.'))}
  <div class="split"><aside class="panel stack"><h2>${c('Practice register','سجل الممارسات')}</h2>
  <div class="controls">${practices.map(item=>`<button data-practice="${item.id}" aria-pressed="${item === practice}">${t(item.title)}</button>`).join('')}</div></aside>
  <article class="panel">
    <span class="badge">${t(practice.place)}</span>
    <h2>${t(practice.title)}</h2>
    <p><label for="risk">${c('Illustrative vulnerability','الهشاشة التوضيحية')} · ${practice.risk.toLocaleString(locale)} / ${(100).toLocaleString(locale)}</label><meter class="meter" id="risk" min="0" max="100" value="${practice.risk}"></meter></p>
    <dl><dt>${c('Evidence and gaps','الأدلة والفجوات')}</dt><dd>${t(practice.evidence)}</dd>
    <dt>${c('Confidence','درجة الثقة')}</dt><dd>${t(practice.confidence)}</dd>
    <dt>${c('Suggested intervention','التدخل المقترح')}</dt><dd>${t(practice.action)}</dd>
    <dt>${c('Review status','حالة المراجعة')}</dt><dd id="review-status" role="status">${reviewed ? c('Reviewed in this browser','تمت المراجعة في هذا المتصفح') : c('Awaiting simulated review','بانتظار المراجعة التجريبية')}</dd></dl>
    <button class="action" id="review" aria-pressed="${reviewed}">${reviewed ? c('Undo sample review','التراجع عن المراجعة التجريبية') : c('Mark sample reviewed','وضع علامة تمت المراجعة')}</button>
  </article></div></section>
  <section class="wrap section"><div class="grid">
   <article class="panel"><h3>${c('Documentation review','مراجعة التوثيق')}</h3><p>${c('Sample paraphrase from a weaving lesson. Soften the fronds before interlacing them so the strips bend during the demonstration.','إعادة صياغة تجريبية لدرس في السفّ. تُليّن أوراق النخيل قبل تشبيكها حتى تنثني الشرائط أثناء العرض.')}</p><dl><dt>${c('Suggested tags','الوسوم المقترحة')}</dt><dd>${c('Palm fronds · material preparation · weaving','خوص النخيل · إعداد المواد · السفّ')}</dd><dt>${c('Publication gate','شرط النشر')}</dt><dd>${c('Illustrative transcript · verify consent and have a practitioner approve the technique and translation.','تفريغ توضيحي · تحقّق من الموافقة واعرض التقنية والترجمة على ممارس لاعتمادهما.')}</dd></dl><a href="#artisan">${c('Open the practitioner workflow','افتح مسار الممارس')}</a></article>
   <article class="panel"><h3>${c('Follow the intervention','متابعة التدخل')}</h3><p>${c('For a sample apprenticeship, compare first-workshop participation with the number of learners who reach supervised practice and are still learning at follow-up.','في التلمذة التجريبية، قارِن المشاركة في الورشة الأولى بعدد المتعلّمين الذين وصلوا إلى الممارسة بإشراف الحرفي واستمروا عند المتابعة.')}</p><a href="#youth">${c('Open the learner pathway','افتح مسار المتعلّم')}</a></article>
  </div><p><a href="#tour">${c('Back to judges’ tour','العودة إلى جولة لجنة التحكيم')}</a></p></section>`;
  for (const button of main.querySelectorAll('[data-practice]')) {
    button.addEventListener('click', () => {
      practiceId = button.dataset.practice;
      government({main,t,copy:c,locale});
      main.querySelector('[aria-pressed=true]').focus();
    });
  }
  const review = main.querySelector('#review');
  review.addEventListener('click', () => {
    const next = review.getAttribute('aria-pressed') !== 'true';
    save('review.' + practice.id,next);
    review.setAttribute('aria-pressed',next);
    review.textContent = next ? c('Undo sample review','التراجع عن المراجعة التجريبية') : c('Mark sample reviewed','وضع علامة تمت المراجعة');
    main.querySelector('#review-status').textContent = next ? c('Reviewed in this browser','تمت المراجعة في هذا المتصفح') : c('Awaiting simulated review','بانتظار المراجعة التجريبية');
  });
}

