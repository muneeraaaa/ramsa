import {pair as p} from './types.js';

/** @type {import('./types.js').Practice[]} */
export const practices = [
  {id:'pearling',title:p('Pearl diving','الغوص على اللؤلؤ'),place:p('Ajman coast','ساحل عجمان'),risk:78,confidence:p('Medium · incomplete historical records','متوسطة · سجلات تاريخية غير مكتملة'),evidence:p('The sample register shows few opportunities to learn from experienced practitioners. Oral accounts still need review.','يُظهر السجل التجريبي فرصاً محدودة للتعلّم من الممارسين ذوي الخبرة. وتحتاج الروايات الشفوية إلى مراجعة.'),action:p('Record consented oral histories and test a guided school programme.','وثّق الروايات الشفوية بعد الموافقة وجرّب برنامجاً مدرسياً موجّهاً.')},
  {id:'weaving',title:p('Palm-frond weaving','سفّ الخوص'),place:p('Ajman and Manama','عجمان والمنامة'),risk:68,confidence:p('Medium · small sample of training records','متوسطة · عينة محدودة من سجلات التدريب'),evidence:p('The example workshop register shows limited progression from a first lesson to supervised practice.','يُظهر سجل الورش التجريبي محدودية الانتقال من الدرس الأول إلى الممارسة بإشراف الحرفيين.'),action:p('Pair an introductory workshop with a practitioner-led apprenticeship.','اربط الورشة التمهيدية بمسار تلمذة يقوده أحد الممارسين.')},
  {id:'boats',title:p('Wooden boatbuilding','صناعة السفن الخشبية'),place:p('Ajman coast','ساحل عجمان'),risk:56,confidence:p('Low · materials and workshop costs need verification','منخفضة · يجب التحقق من تكاليف المواد والورش'),evidence:p('The example inventory has gaps in tool and materials records. It also identifies limited supervised training.','يتضمن الجرد التجريبي فجوات في سجلات الأدوات والمواد ويشير إلى محدودية التدريب بإشراف المختصين.'),action:p('Validate the materials inventory and document assembly with a boatbuilder.','تحقّق من جرد المواد ووثّق مراحل التجميع مع صانع سفن.')},
];
export const regions = [
  [p('Ajman','عجمان'),p('Maritime heritage, historic neighbourhoods and traditional markets.','التراث البحري والأحياء التاريخية والأسواق التقليدية.')],
  [p('Masfout','مصفوت'),p('Community heritage, traditional architecture and historic sites.','تراث المجتمع والعمارة التقليدية والمواقع التاريخية.')],
  [p('Manama','المنامة'),p('Local history, historic sites and cultural institutions.','التاريخ المحلي والمواقع التاريخية والمؤسسات الثقافية.')],
];

