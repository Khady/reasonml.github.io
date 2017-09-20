webpackJsonp([11],{"./node_modules/json-loader/index.js!./.cache/json/ru-guide-what-and-why.json":function(e,r){e.exports={data:{allFile:{edges:[{node:{relativePath:"ru/guide/index.md",childMarkdownRemark:{frontmatter:{title:"Гайд по Reason",order:0}}}},{node:{relativePath:"ru/guide/examples.md",childMarkdownRemark:{frontmatter:{title:"Примеры",order:60}}}},{node:{relativePath:"ru/guide/ocaml.md",childMarkdownRemark:{frontmatter:{title:"Comparison to OCaml",order:50}}}},{node:{relativePath:"ru/guide/what-and-why.md",childMarkdownRemark:{frontmatter:{title:"Что и Зачем",order:0}}}},{node:{relativePath:"ru/guide/editor-tools/global-installation.md",childMarkdownRemark:{frontmatter:{title:"Глобальная установка",order:10}}}},{node:{relativePath:"ru/guide/editor-tools/editors-plugins.md",childMarkdownRemark:{frontmatter:{title:"Плагины редактора",order:20}}}},{node:{relativePath:"ru/guide/editor-tools/extra-goodies.md",childMarkdownRemark:{frontmatter:{title:"Дополнительные бонусы",order:30}}}},{node:{relativePath:"ru/guide/editor-tools/index.md",childMarkdownRemark:{frontmatter:{title:"Настройка редактора",order:10}}}},{node:{relativePath:"ru/guide/language/destructuring.md",childMarkdownRemark:{frontmatter:{title:"Деструктурирование",order:130}}}},{node:{relativePath:"ru/guide/language/boolean.md",childMarkdownRemark:{frontmatter:{title:"Булев",order:30}}}},{node:{relativePath:"ru/guide/language/external.md",childMarkdownRemark:{frontmatter:{title:"External",order:170}}}},{node:{relativePath:"ru/guide/language/exception.md",childMarkdownRemark:{frontmatter:{title:"Исключения",order:175}}}},{node:{relativePath:"ru/guide/language/index.md",childMarkdownRemark:{frontmatter:{title:"Основы языка",order:20}}}},{node:{relativePath:"ru/guide/language/if-else.md",childMarkdownRemark:{frontmatter:{title:"If-Else",order:110}}}},{node:{relativePath:"ru/guide/language/function.md",childMarkdownRemark:{frontmatter:{title:"Функция",order:100}}}},{node:{relativePath:"ru/guide/language/integer-and-float.md",childMarkdownRemark:{frontmatter:{title:"Числа",order:40}}}},{node:{relativePath:"ru/guide/language/imperative-loops.md",childMarkdownRemark:{frontmatter:{title:"Императивные циклы",order:150}}}},{node:{relativePath:"ru/guide/language/let-binding.md",childMarkdownRemark:{frontmatter:{title:"Let привязка",order:10}}}},{node:{relativePath:"ru/guide/language/jsx.md",childMarkdownRemark:{frontmatter:{title:"JSX",order:160}}}},{node:{relativePath:"ru/guide/language/list-and-array.md",childMarkdownRemark:{frontmatter:{title:"Список и Массив",order:80}}}},{node:{relativePath:"ru/guide/language/module.md",childMarkdownRemark:{frontmatter:{title:"Модуль",order:180}}}},{node:{relativePath:"ru/guide/language/more-on-type.md",childMarkdownRemark:{frontmatter:{title:"Больше о типах",order:120}}}},{node:{relativePath:"ru/guide/language/object.md",childMarkdownRemark:{frontmatter:{title:"Объект",order:175}}}},{node:{relativePath:"ru/guide/language/mutation.md",childMarkdownRemark:{frontmatter:{title:"Мутации",order:140}}}},{node:{relativePath:"ru/guide/language/overview.md",childMarkdownRemark:{frontmatter:{title:"Обзор",order:0}}}},{node:{relativePath:"ru/guide/language/pattern-matching.md",childMarkdownRemark:{frontmatter:{title:"Паттерн-матчинг",order:135}}}},{node:{relativePath:"ru/guide/language/string-and-char.md",childMarkdownRemark:{frontmatter:{title:"Строка и символ",order:20}}}},{node:{relativePath:"ru/guide/language/record.md",childMarkdownRemark:{frontmatter:{title:"Запись",order:60}}}},{node:{relativePath:"ru/guide/language/tuple.md",childMarkdownRemark:{frontmatter:{title:"Кортеж",order:50}}}},{node:{relativePath:"ru/guide/language/type.md",childMarkdownRemark:{frontmatter:{title:"Тип!",order:15}}}},{node:{relativePath:"ru/guide/language/variant.md",childMarkdownRemark:{frontmatter:{title:"Вариант!",order:70}}}},{node:{relativePath:"ru/guide/javascript/interop.md",childMarkdownRemark:{frontmatter:{title:"Взаимодействие",order:1}}}},{node:{relativePath:"ru/guide/javascript/converting.md",childMarkdownRemark:{frontmatter:{title:"Перенос JS кода",order:5}}}},{node:{relativePath:"ru/guide/javascript/index.md",childMarkdownRemark:{frontmatter:{title:"JavaScript",order:30}}}},{node:{relativePath:"ru/guide/javascript/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Быстрый старт",order:0}}}},{node:{relativePath:"ru/guide/javascript/libraries.md",childMarkdownRemark:{frontmatter:{title:"Библиотеки",order:2}}}},{node:{relativePath:"ru/guide/native/convert-from-ocaml.md",childMarkdownRemark:{frontmatter:{title:"Converting from OCaml",order:4}}}},{node:{relativePath:"ru/guide/javascript/syntax-cheatsheet.md",childMarkdownRemark:{frontmatter:{title:"Шпаргалка по синтаксису",order:1}}}},{node:{relativePath:"ru/guide/native/index.md",childMarkdownRemark:{frontmatter:{title:"Native",order:40}}}},{node:{relativePath:"ru/guide/native/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}}]},file:{relativePath:"ru/guide/what-and-why.md",childMarkdownRemark:{html:'<h3 id="Что-такое-reason"><a href="#%D0%A7%D1%82%D0%BE-%D1%82%D0%B0%D0%BA%D0%BE%D0%B5-reason" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Что такое Reason?</h3>\n<p>Reason — это не новый язык, это — новый синтаксис и набор инструментов для проверенного временем языка\n<a href="https://ocaml.org">OCaml</a>. Reason предоставляет синтаксис ориентированный на JavaScript программистов\nи использует уже всем известный способ распространения через NPM/Yarn.</p>\n<p>Можно рассматривать Reason как строго типизированного, быстрого и простого кузена JavaScript, минус\nисторические проблемы, плюс фичи ES2030, которые можно использовать сейчас и доступ сразу к двум\nэкосистемам: JS и OCaml!</p>\n<p>Reason компилируется в JavaScript благодаря партнерскому проекту\n<a href="https://bucklescript.github.io/bucklescript/Manual.html">BuckleScript</a>, который компилирует OCaml/Reason\nв читаемый JavaScript и простым интеропом. Также Reason может быть скомпилирован в быстрый,\nнизкоуровневый нативный код благодаря OCaml.</p>\n<h3 id="Зачем-reason"><a href="#%D0%97%D0%B0%D1%87%D0%B5%D0%BC-reason" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Зачем Reason?</h3>\n<blockquote>\n<p>"Зачем утомлять себя изучением <strong>полностью</strong> нового языка?"</p>\n</blockquote>\n<p>Это не совсем так в случае с Reason.</p>\n<p>Нужно понимать, что 80% семантики OCaml (то есть как он работает) уже однозначно ложится на современный\nJavaScript (обратное также верно*). Если разработчик готов оставить некоторые из особенностей JavaScript\nи добавить несколько новых вещей, то он может получить нечто, что компилируется в достаточно читаемый JS\nи напрямую использует 80% его экосистемы. И как дополнение может быть скомпилировано в нативный код, iOS,\nAndroid и даже бинарник для <a href="http://www.algo-prog.info/ocapic/web/index.php?id=ocapic">микроконтроллера</a>.</p>\n<p>Однако, совершенно неясно, какие фичи JS нужно изменить, чтобы сделать из него язык с быстрой семантикой\nи хорошей системой типов. Мы может <em>пойти от обратного</em>, от уже готового языка, производительного и\nпростого, и добавить несколько твиков, чтобы он был более поход на язык для веба, который мы все знаем.</p>\n<p>Как результат этих решений, кривая изучения Reason не намного выше изучения JS + система типов. А в\nнаграду вы получите:</p>\n<ul>\n<li><strong>Строгую и продуманную систуму типов</strong>. OCaml типы дают 100% покрытие (каждая строка код), выведение\nтипов (компилятор сам определит типы, и нет необходимости описывать их руками), и созвучность (если\nкод скомпилировался, то язык дает гарантии, что проблем с типа нет)</li>\n<li><strong>Нацеленность на простоту и прагматизм</strong>. Язык разрешает побочные эффекты, мутации и объекты для\nсходства и интеропа, оставляя другую часть языка чистой, иммутабельной и функциональной</li>\n<li><strong>Фокус на производительность</strong>. Система сборки Reason,\n<a href="http://bucklescript.github.io/bucklescript/Manual.html#_bucklescript_build_system_code_bsb_code"><code>bsb</code></a>\nпозволяет делать сборки менее чем за 100 мс (инкрементальные).</li>\n<li><strong>Постепенное изучение и конвертация кода</strong>. Воспользуйтесь преимуществами полностью типизированного\nкода с первого дня. Вы всегда можете <a href="../guide/javascript/interop">вставить JavaScript код прямо в Reason файл</a></li>\n<li><strong>Отличная экосистема и инструменты</strong>. Используйте <a href="../guide/editor-tools/editors-plugins">ваш любимый редактор</a>,\n<a href="../guide/javascript/libraries">ваш любимый NPM пакет</a>, и любой\n<a href="https://github.com/reasonml/reason-react">любимый</a>\n<a href="https://github.com/reasonml-community/bs-jest">существующий</a>\n<a href="https://webpack.js.org">стек</a>.</li>\n</ul>\n<p>* Не верите? Посмотрите нашу <a href="../guide/javascript/syntax-cheatsheet">JS -> Reason шпаргалку</a> или\nпопробуйте код в <a href="/try/">песочнице</a>, наблюдая полученный код справа.</p>\n<p><em>Reason — это сообщество открытого искходного кода от Facebook</em>.</p>',frontmatter:{title:"Что и Зачем"}}}},pathContext:{section:"ru",relativePath:"ru/guide/what-and-why.md",relatedFiles:"/^ru\\/.*\\.md$/"}}}});
//# sourceMappingURL=path---ru-guide-what-and-why-a915baad67d6ab66763d.js.map