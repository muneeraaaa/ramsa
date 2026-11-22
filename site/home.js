import {heading} from './shared/ui.js';
import {regions} from './shared/data.js';

export function home({main,locale,t,copy,labels}) {
  const c = copy;
  const roles = [
    ['government',c('Review risk signals, evidence and safeguarding actions.','راجع مؤشرات الهشاشة والأدلة وإجراءات الصون.')],
    ['visitor',c('Step aboard a pearling boat or try palm-frond weaving.','اصعد على متن سفينة للغوص أو جرّب سفّ الخوص.')],
    ['youth',c('Find a practice and follow a workshop learning pathway.','اختر حرفة وتابع مسار التعلّم من خلال الورش.')],
    ['artisan',c('Contribute knowledge with consent and plan a workshop.','شارك معرفتك بموافقتك وخطّط لورشة.')],
  ];
  main.innerHTML = `<section class="hero">
    <img src="assets/vision-4.webp" alt="">
    <div class="wrap hero-content">
      <h1>${c('From risk to revival','من الإنذار إلى الإحياء')}</h1>
      <p>${c('How can Ajman’s heritage stay alive? Follow a practice from early warning and documentation to immersive learning, workshops and apprenticeship.','كيف يبقى تراث عجمان حياً؟ تابع رحلة الممارسة من الإنذار المبكر والتوثيق إلى التعلّم الغامر والورش والتلمذة.')}</p>
      <a class="button" href="#tour">${t(labels.tour)}</a>
    </div></section>
    <section class="wrap section"><h2>${c('Choose your journey','اختر رحلتك')}</h2><div class="rows">
    ${roles.map(([id,desc]) => `<a class="row" href="#${id}"><strong>${t(labels[id])}</strong><span>${desc}</span><span aria-hidden="true">${locale === 'ar' ? '↖' : '↗'}</span></a>`).join('')}
    </div></section>
    <section class="strip"><div class="wrap section"><h2>${c('Living heritage across Ajman','التراث الحي في أنحاء عجمان')}</h2>
    <dl>${regions.map(([name,desc]) => `<dt>${t(name)}</dt><dd>${t(desc)}</dd>`).join('')}</dl>
    <a href="#project">${t(labels.project)}</a></div></section>`;
}

export function project({main,copy:c}) {
  const topics = [
    [c('The five-stage cycle','المراحل الخمس'),c('Detect and diagnose risk, safeguard knowledge with practitioners, build immersive experiences, connect learners with real practice, then measure how the practice is doing.','ارصد الهشاشة وشخّصها، وصُن المعرفة مع ممارسيها، وصمّم التجارب الغامرة، واربط المتعلّمين بالممارسة الواقعية، ثم قِس استمرارية المهارة.')],
    [c('What the prototype demonstrates','ما يوضحه النموذج الأولي'),c('A register of three practices, a decision-support case file, a documentation review sample, a browser-based pearling and weaving simulation, and a pathway to real-world learning. The proposed headset version would use Unity, hand tracking, and reviewed multilingual narration.','سجل لثلاث ممارسات وملف لدعم القرار وعينة لمراجعة التوثيق ومحاكاة للغوص والسفّ عبر المتصفح ومسار للتعلّم الواقعي. ويُقترح استخدام Unity وتتبع اليدين وسرد متعدد اللغات يخضع للمراجعة في نسخة النظارات.')],
    [c('Cultural review and permissions','المراجعة الثقافية والأذونات'),c('Seek informed consent and record rights and access restrictions. Practitioners and experts review transcriptions, translations, tagging, and reconstructions before release. Authorities review risk evidence before taking decisions.','تُطلب الموافقة المستنيرة وتُسجّل الحقوق وقيود الإتاحة. يراجع الممارسون والخبراء التفريغ والترجمات والوسوم وإعادة بناء المشاهد قبل النشر. وتراجع الجهات الأدلة قبل اتخاذ القرارات.')],
    [c('Pilot and rollout','التجربة الميدانية والتنفيذ'),c('The proposed 12-month plan covers cultural research, system and experience design, prototype development, accessibility and cultural review, a limited field pilot, then evaluation and refinement. Potential partners include cultural institutions, practitioners, schools and universities.','تغطي خطة التنفيذ المقترحة خلال 12 شهراً البحث الثقافي وتصميم النظام والتجربة وتطوير النموذج والمراجعة الثقافية ومراجعة الإتاحة والتجربة الميدانية المحدودة ثم التقييم والتحسين. ومن الشركاء المحتملين المؤسسات الثقافية والممارسون والمدارس والجامعات.')],
    [c('What we would measure','ما الذي نقيسه؟'),c('Track active practitioners, apprentices still learning after a first workshop, approved documentation, visitor learning and completion, and paid opportunities for artisans. These are proposed measures. The demo has no measured pilot outcomes.','نتابع الممارسين النشطين والمتعلّمين المستمرين بعد الورشة الأولى والتوثيق المعتمد وإكمال تجربة الزائر وتعلّمه والفرص المدفوعة للحرفيين. هذه مؤشرات مقترحة ولا يتضمن النموذج نتائج ميدانية مقاسة.')],
    [c('Ajman 2030 and Tourism 2031','رؤية عجمان 2030 والسياحة 2031'),c('The entry aligns the concept with Ajman’s cultural preservation and community participation goals and the UAE tourism strategy’s emphasis on innovative visitor experiences. It proposes a pilot that can expand across Ajman, Masfout and Manama.','يربط ملف المشاركة الفكرة بأهداف عجمان لصون التراث والمشاركة المجتمعية وبتركيز استراتيجية السياحة الإماراتية على تجارب الزوار المبتكرة. ويقترح تجربة قابلة للتوسع في عجمان ومصفوت والمنامة.')],
    [c('Future Visions scenario','سيناريو رؤى المستقبل'),c('The supplied concept images imagine Ajman in 2030. A pilot would test whether clear evidence helps teams prioritise, whether AI-assisted documentation saves time, and whether simulated craft practice leads to workshop participation.','تتخيّل الصور التصورية المرفقة عجمان في عام 2030. وتختبر التجربة المقترحة فائدة الأدلة في ترتيب الأولويات وأثر الذكاء الاصطناعي في سرعة التوثيق وما إذا كانت المحاكاة تشجّع على حضور الورش.')],
  ];
  main.innerHTML = `<section class="wrap">${heading(c('The RAMSA proposal','مشروع رمسة'),c('A student innovation entry for Sincerely Emirati 2026 in Ajman.','مشاركة طلابية في مسابقة أصالة إماراتية 2026 في عجمان.'))}
  <div class="rows">${topics.map(([title,desc])=>`<details><summary>${title}</summary><p>${desc}</p></details>`).join('')}</div></section>
  <section class="wrap section"><h2>${c('Future Visions','رؤى المستقبل')}</h2><p>${c('AI-generated concepts supplied by the team.','تصورات ولّدها الذكاء الاصطناعي وقدّمها فريق المشروع.')}</p>
  <div class="gallery">${Array.from({length:7},(_,i)=>`<figure><a href="assets/vision-${i+1}.webp"><img loading="lazy" src="assets/vision-${i+1}.webp" alt="${c('View concept','عرض التصور')} ${i+1}"></a><figcaption>${[0,1,6].includes(i) ? c('Decision support concept','تصوّر دعم القرار') : c('Immersive experience concept','تصوّر التجربة الغامرة')}</figcaption></figure>`).join('')}</div></section>`;
}

export function tour({main,copy:c,t,labels,locale}) {
  const steps = [
    ['government',c('Select palm-frond weaving and review its risk evidence and proposed apprenticeship.','اختر سفّ الخوص وراجع أدلة الهشاشة والتلمذة المقترحة.')],
    ['visitor',c('Follow the pearling voyage and try the weaving simulation.','تابع رحلة الغوص وجرّب محاكاة السفّ.')],
    ['youth',c('Save a workshop interest and advance a sample learning pathway.','احفظ اهتمامك بورشة وتقدّم في مسار تعلّم تجريبي.')],
    ['artisan',c('Work through consent and draft a submission for cultural review.','راجع الموافقة وأنشئ مسودة للمراجعة الثقافية.')],
    ['project',c('Review the pilot, impact indicators and Future Visions concepts.','راجع التجربة الميدانية ومؤشرات الأثر وتصورات رؤى المستقبل.')],
  ];
  main.innerHTML = `<section class="wrap">${heading(t(labels.tour),c('Five stops trace the same practice from early warning to the next generation of learners.','خمس محطات تتبع الممارسة من الإنذار المبكر إلى الجيل القادم من المتعلّمين.'))}
  <div class="rows">${steps.map(([route,step],i)=>`<a class="row" href="#${route}"><strong>${(i+1).toLocaleString(locale)}. ${t(labels[route])}</strong><span>${step}</span><span aria-hidden="true">${locale === 'ar' ? '↖' : '↗'}</span></a>`).join('')}</div><div class="section"></div></section>`;
}

