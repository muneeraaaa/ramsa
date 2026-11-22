import {heading} from '../shared/ui.js';

let mode = 'dive';
let step = 0;
let shells = 0;
let weave = 0;

export function visitor({main,locale,copy:c}) {
  const dive = [
    [c('On the jalbout','على متن الجالبوت'),c('Before descending, the diver prepares a nose clip and a basket called a dayyeen to hold oysters.','قبل النزول، يجهّز الغوّاص الفطام للأنف والدِّيّين لجمع المحار.'),c('Descend','انزل إلى الماء')],
    [c('Search the seabed','ابحث في قاع البحر'),c('Gather three oysters into the dayyeen. Pearl diving relied on teamwork between the diver and the crew above.','اجمع ثلاث محارات في الدِّيّين. اعتمد الغوص على التعاون بين الغوّاص والطاقم على السطح.'),c('Return to the surface','عُد إلى السطح')],
    [c('Open an oyster','افتح محارة'),c('Back on board, the crew opens the catch. Many oysters contain no pearl.','بعد العودة إلى السفينة يفتح الطاقم المحار. وكثير منه لا يحتوي على لؤلؤة.'),c('Open the sample oyster','افتح المحارة التجريبية')],
    [c('From sea to market','من البحر إلى السوق'),c('Pearls were sorted and traded. The next stop in RAMSA is learning about the practice through workshops and exhibitions.','كان اللؤلؤ يُفرز ويُتاجر به. والمحطة التالية في رمسة هي التعرّف على الممارسة من خلال الورش والمعارض.'),c('Restart voyage','أعد الرحلة')],
  ];
  const weaving = [
    [c('Prepare the fronds','حضّر الخوص'),c('Before weaving, prepare flexible palm strips. The demo uses two alternating passes to illustrate interlacing.','قبل السفّ تُحضّر شرائط خوص مرنة. يوضّح النموذج التشبيك بتمريرتين متعاقبتين.'),c('Lay out the strips','رتّب الشرائط')],
    [c('Weave a sample','سُفّ عيّنة'),c('Pass the working strip over and under in turn.','مرّر شريط العمل فوق الشرائط وتحتها بالتناوب.'),c('View the finished sample','شاهد العيّنة المكتملة')],
    [c('Continue with a practitioner','تابع التعلّم مع حرفي'),c('A supervised workshop can cover material selection, tightening and finishing.','تتضمن الورشة بإشراف حرفي اختيار المواد وشدّ الشرائط وإنهاء القطعة.'),c('Restart weaving','أعد تجربة السفّ')],
  ];
  const current = (mode === 'dive' ? dive : weaving)[step];
  const collecting = mode === 'dive' && step === 1;
  const interlacing = mode === 'weave' && step === 1;
  const sceneAsset = collecting ? 'underwater.webp' : mode === 'dive' ? 'vision-5.webp' : 'vision-3.webp';
  const listen = 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;

  main.innerHTML = `<section class="wrap stack">${heading(c('Experience living heritage','عِش التراث الحي'),c('Try a 2D browser preview of the proposed VR experiences. The guide follows your selected language.','جرّب معاينة ثنائية الأبعاد لتجارب الواقع الافتراضي المقترحة. يتحدث المرشد باللغة التي اخترتها.'))}
  <div class="controls">
   <button id="dive" aria-pressed="${mode === 'dive'}">${c('Pearl diving','الغوص على اللؤلؤ')}</button>
   <button id="weave" aria-pressed="${mode === 'weave'}">${c('Palm-frond weaving','سفّ الخوص')}</button>
  </div>
  <div class="scene ${collecting ? 'deep' : ''}" style="--scene-image:url('assets/${sceneAsset}')">
   <div><h2 id="scene-title" tabindex="-1">${current[0]}</h2><p>${current[1]}</p><div class="controls">
    ${collecting ? `<button id="collect" ${shells >= 3 ? 'disabled' : ''}>${c('Collect an oyster','اجمع محارة')}</button><span id="progress" role="status">${shells.toLocaleString(locale)} / ${(3).toLocaleString(locale)}</span>` : ''}
    ${interlacing ? `<button id="over" ${weave !== 0 ? 'disabled' : ''}>${c('Pass over','مرّر من فوق')}</button><button id="under" ${weave !== 1 ? 'disabled' : ''}>${c('Pass under','مرّر من تحت')}</button><span id="progress" role="status">${weave.toLocaleString(locale)} / ${(2).toLocaleString(locale)}</span>` : ''}
    <button class="action" id="advance" ${(collecting && shells < 3) || (interlacing && weave < 2) ? 'disabled' : ''}>${current[2]}</button>
    ${listen ? `<button id="listen">${c('Play guide','شغّل المرشد')}</button>` : ''}
   </div><p class="status" role="status" id="voice-status"></p></div>
  </div>
  <a class="button" href="#youth">${c('Explore workshop pathways','استكشف مسارات الورش')}</a>
  </section>
  <section class="wrap section"><h2>${c('Watch the original prototypes','شاهد النماذج الأولية الأصلية')}</h2>
  <p>${c('The submitted videos use AI-generated Emirati Arabic narration and fictional sample data. The interactive steps above provide an English or Arabic walkthrough.','تستخدم الفيديوهات المقدّمة سرداً إماراتياً مولّداً بالذكاء الاصطناعي وبيانات توضيحية افتراضية. وتوفّر الخطوات التفاعلية أعلاه شرحاً بالعربية أو الإنجليزية.')}</p>
  <div class="grid">${[1,2].map(i=>`<figure><video controls playsinline preload="none" poster="assets/vision-${i===1 ? 5 : 3}.webp" aria-label="${i===1 ? c('Pearl diving prototype','نموذج الغوص على اللؤلؤ') : c('Weaving prototype','نموذج سفّ الخوص')}"><source src="assets/demo-${i}.mp4" type="video/mp4"></video><figcaption>${i===1 ? c('Pearl diving prototype','نموذج الغوص على اللؤلؤ') : c('Weaving and early warning prototype','نموذج سفّ الخوص والإنذار المبكر')}</figcaption></figure>`).join('')}</div>
  <p><a href="#tour">${c('Back to judges’ tour','العودة إلى جولة لجنة التحكيم')}</a></p></section>`;

  const advance = main.querySelector('#advance');
  const select = id => {
    if (listen) speechSynthesis.cancel();
    mode = id;
    step = shells = weave = 0;
    visitor({main,locale,copy:c});
    main.querySelector('#' + id).focus();
  };
  main.querySelector('#dive').onclick = () => select('dive');
  main.querySelector('#weave').onclick = () => select('weave');
  advance.onclick = () => {
    if (listen) speechSynthesis.cancel();
    step = (step + 1) % (mode === 'dive' ? dive.length : weaving.length);
    if (step === 0) shells = weave = 0;
    visitor({main,locale,copy:c});
    main.querySelector('#scene-title').focus({preventScroll:true});
  };
  if (collecting) {
    const collect = main.querySelector('#collect');
    const progress = main.querySelector('#progress');
    collect.onclick = () => {
      shells += 1;
      progress.textContent = shells.toLocaleString(locale) + ' / ' + (3).toLocaleString(locale);
      if (shells === 3) { collect.disabled = true; advance.disabled = false; advance.focus(); }
    };
  }
  if (interlacing) {
    const over = main.querySelector('#over');
    const under = main.querySelector('#under');
    const progress = main.querySelector('#progress');
    over.onclick = () => {
      weave = 1;
      over.disabled = true;
      under.disabled = false;
      progress.textContent = (1).toLocaleString(locale) + ' / ' + (2).toLocaleString(locale);
      under.focus();
    };
    under.onclick = () => {
      weave = 2;
      under.disabled = true;
      advance.disabled = false;
      progress.textContent = (2).toLocaleString(locale) + ' / ' + (2).toLocaleString(locale);
      advance.focus();
    };
  }
  if (listen) main.querySelector('#listen').onclick = () => {
    speechSynthesis.cancel();
    const narration = new SpeechSynthesisUtterance(current[1]);
    narration.lang = locale === 'ar' ? 'ar-AE' : 'en';
    narration.onerror = event => {
      const status = main.querySelector('#voice-status');
      if (status && !['interrupted','canceled'].includes(event.error)) status.textContent =
        c('This device could not play the narration. Read the guide above.','تعذّر تشغيل السرد على هذا الجهاز. اقرأ نص المرشد أعلاه.');
    };
    speechSynthesis.speak(narration);
  };
}

