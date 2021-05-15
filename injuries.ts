import { Injury } from "./types";

const injuries: Injury[] = [
  {
    "uid": "bloody_injury",
    "title": "Кривава Рана",
    "type": "memorable",
    "description": "Певні рани просто відмовляються заживати, постійно нагадуючи про себе частою кровотечою. Носій даної травми змушений постійно робити перев’язь та очікувати що рана знову відкриється у найбільш невдалий момент. "
  },
  {
    "uid": "nervous_teak",
    "title": "Нервовий Тик",
    "type": "memorable",
    "description": "Сіпання ока або тремтіння рук нагадують персонажу про те саме лихе поранення. Чим більше носій тику виснажений й напружений, тим помітніший ефект. "
  },
  {
    "uid": "trauma",
    "title": "Ниюча Травма",
    "type": "memorable",
    "description": "Пошкодження зв'язок, суглобів та сухожилля на довгі роки залишає персонажа один на один із ниючим болем. Справжнє ж пекло починається тоді, коли за вікном планує збиратися злива. "
  },
  {
    "uid": "lost_finger",
    "title": "Втрата Пальця",
    "type": "memorable",
    "description": "Вітаємо у клубі піаністів! Здебільшого, ця травма позначає втрату пальця руки, але у певних ситуаціях на розсуд Ведучого може стосуватись пальців ніг. "
  },
  {
    "uid": "rumen",
    "title": "Пам’ятний Рубець",
    "type": "memorable",
    "description": "Не надто вродливий, але видовищний шрам прикрашає тіло персонажа, явно виділяючись з усіх інших рубців. Гарний привід розповісти вашим коханкам й коханцям пару історій про власну хоробрість. "
  },
  {
    "uid": "fracture",
    "title": "Легкий Перелом",
    "type": "memorable",
    "description": "Удар особливої сили або невдале падіння ламає кістку. Якщо постраждала кінцівка, вона стає недієвою до повного зрощення (рука не може тримати зброю, на ногу неможна спиратись – що робить неможливими Пробіги). Перелом зростається повністю за часом повного одужання без особливих побічних наслідків. "
  },
  {
    "uid": "broken_teeth",
    "title": "Вибиті Зуби",
    "type": "memorable",
    "description": "Рот наповнюється кров'ю та уламками зуба чи навіть двох. Втім, варто спробувати їх зберегти – адже вмілий цирульник може приладнати вибиті зуби назад – боляче і без гарантії надійності! "
  },
  {
    "uid": "scar",
    "title": "Шрам На Обличчі",
    "type": "memorable",
    "description": "Добре видимий слід просікає обличчя персонажа, надаючи його вигляду неповторної брутальності, а також створюючи простий орієнтир для його розшуку. "
  },
  {
    "uid": "nose_injury",
    "title": "Пошкодження Носа",
    "type": "memorable",
    "description": "Зазвичай дана травма проявляється у непоправно зламаному носі, сплюснутому або звернутому на бік, але також може включати втрату кінчика або й носа в цілому. Швидше за все, у персонажа також з’являться проблеми із розпізнаванням запахів. "
  },
  {
    "uid": "ear_damage",
    "title": "Пошкодження Вуха",
    "type": "memorable",
    "description": "Пошматоване вухо можливо прикрити довгим волоссям, але чи варто його соромитись? Також, здатність чути пошкодженим вухо значно падає, але милостива природа наділила персонажа другим не просто так! "
  },
  {
    "uid": "gray_hair",
    "title": "Сивина",
    "type": "memorable",
    "description": "Шок від травми може проявитись у появі шанованої сивини у волоссі персонажа, але не кожен буде їй радий. Сивина може бути як і почесним знаком досвіду, так і ганебною таємницею, прикритою дорогою фарбою чи навіть перукою. "
  },
  {
    "uid": "madness",
    "title": "Душевна Травма",
    "type": "fatal",
    "description": "Значний травматичний досвід від складного поранення та надзвичайно тривалого лікування може призвести до появи душевних розладів. Персонаж отримує Глибинний Стрес та генерує Душевну Травму. "
  },
  {
    "uid": "sex_injury",
    "title": "Статеве Пошкодження",
    "type": "fatal",
    "description": "Надзвичайно неприємна травма, що перешкоджає виконанню репродуктивних функцій персонажем. "
  },
  {
    "uid": "blood_infection",
    "title": "Зараження Крові",
    "type": "fatal",
    "description": "Будь це нездолана інфекція або пошкодження органу, відповідального за очистку крові, але тепер кожна рана є потенційно смертельною. Ставши Пораненим, персонаж отримує Тест на Межі зі Складністю 1, Складністю 2 для Важкопораненого, Складністю 3 при Критичному Стані та Складністю 7 коли При поле зору та здатність персонажа оцінювати Смерті. "
  },
  {
    "uid": "coma",
    "title": "Кома",
    "type": "fatal",
    "description": "Дух полишає поранене тіло, не в стані винести здобуті травми, тому персонаж перебуває у вполовину; даний штраф можна нівелювати безпробудному стані D6 тижнів; при результаті «6» куб перекидається, але вже як місяці, і при повторі «6» як роки, і ще при повторі як десятиліття. Персонаж у комі не виживе без спеціалізованого догляду, і його стан здоров'я почне покращуватись тільки після виходу з безпам’ятного стану. "
  },
  {
    "uid": "lost_leg",
    "title": "Втрата Ноги",
    "type": "fatal",
    "description": "Внаслідок травми нога персонажа відмовляє або має бути ампутована для порятунку його життя. Кінцівка втрачена (див. чарт персонажа та позбавляє його Бойових Ампутація Кінцівки), і для пересування персонажу знадобиться костиль або тростина, й бажано якісний протез. "
  },
  {
    "uid": "heavy_fracture",
    "title": "Важкий Перелом",
    "type": "fatal",
    "description": "Аналог Легкого Перелому, тільки навіть після зрощення кістка продовжує бентежити персонажа, змушуючи його шкутильгати на ногу або уникати навантаження на руку"
  },
  {
    "uid": "lost_arm",
    "title": "Втрата Руки",
    "type": "fatal",
    "description": "Відмова кінцівки, аналогічна до Втрати ноги. "
  },
  {
    "uid": "lungs_injury",
    "title": "Ушкодження Легень",
    "type": "fatal",
    "description": "Дана травма ускладнює дихання й уповільнює насичення крові киснем, через що активний рух дається персонажу з труднощами. Після Пробігів у Бою та наративних навантажень персонаж отримує тимчасову Неміч поки не віддихається один повний Раунд або більше на розсуд Ведучого. "
  },
  {
    "uid": "lost_eye",
    "title": "Втрата Ока",
    "type": "fatal",
    "description": "Окрім гордості, від втрати ока страждає ще й поле зору та здатність персонажа оцінювати відстані так, як він це звик робити. Фехтувальні техніки вважаються на один ранг меншими, а Стрільба зменшується вполовину; даний штраф можна нівелювати Бойовим Талантом «Батальне Око». "
  },
  {
    "uid": "voice_injury",
    "title": "Пошкодження Голосу",
    "type": "fatal",
    "description": "Малоприємна втрата язика або голосових зв'язок не робить персонажа німим, але ускладнює будь-яке мовлення до тихого малорозбірливого хрипіння, яке можна почути й розібрати тільки зблизька. "
  },
  {
    "uid": "brain_injury",
    "title": "Травма Мозку",
    "type": "fatal",
    "description": "Трагічне пошкодження голови цілковито блокує один випадковий Наративний Атрибут персонажа та позбавляє його Бойових Талантів й Технік на 1/5 від їх загальної вартості у Бойових Балах. "
  }
]

export default injuries