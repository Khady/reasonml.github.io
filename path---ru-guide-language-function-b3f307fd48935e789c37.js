webpackJsonp([34],{"./node_modules/json-loader/index.js!./.cache/json/ru-guide-language-function.json":function(a,e){a.exports={data:{allFile:{edges:[{node:{relativePath:"ru/guide/index.md",childMarkdownRemark:{frontmatter:{title:"Гайд по Reason",order:0}}}},{node:{relativePath:"ru/guide/examples.md",childMarkdownRemark:{frontmatter:{title:"Примеры",order:60}}}},{node:{relativePath:"ru/guide/ocaml.md",childMarkdownRemark:{frontmatter:{title:"Comparison to OCaml",order:50}}}},{node:{relativePath:"ru/guide/what-and-why.md",childMarkdownRemark:{frontmatter:{title:"Что и Зачем",order:0}}}},{node:{relativePath:"ru/guide/editor-tools/global-installation.md",childMarkdownRemark:{frontmatter:{title:"Глобальная установка",order:10}}}},{node:{relativePath:"ru/guide/editor-tools/editors-plugins.md",childMarkdownRemark:{frontmatter:{title:"Плагины редактора",order:20}}}},{node:{relativePath:"ru/guide/editor-tools/extra-goodies.md",childMarkdownRemark:{frontmatter:{title:"Дополнительные бонусы",order:30}}}},{node:{relativePath:"ru/guide/editor-tools/index.md",childMarkdownRemark:{frontmatter:{title:"Настройка редактора",order:10}}}},{node:{relativePath:"ru/guide/language/destructuring.md",childMarkdownRemark:{frontmatter:{title:"Деструктурирование",order:130}}}},{node:{relativePath:"ru/guide/language/boolean.md",childMarkdownRemark:{frontmatter:{title:"Булев",order:30}}}},{node:{relativePath:"ru/guide/language/external.md",childMarkdownRemark:{frontmatter:{title:"External",order:170}}}},{node:{relativePath:"ru/guide/language/exception.md",childMarkdownRemark:{frontmatter:{title:"Исключения",order:175}}}},{node:{relativePath:"ru/guide/language/index.md",childMarkdownRemark:{frontmatter:{title:"Основы языка",order:20}}}},{node:{relativePath:"ru/guide/language/if-else.md",childMarkdownRemark:{frontmatter:{title:"If-Else",order:110}}}},{node:{relativePath:"ru/guide/language/function.md",childMarkdownRemark:{frontmatter:{title:"Функция",order:100}}}},{node:{relativePath:"ru/guide/language/integer-and-float.md",childMarkdownRemark:{frontmatter:{title:"Числа",order:40}}}},{node:{relativePath:"ru/guide/language/imperative-loops.md",childMarkdownRemark:{frontmatter:{title:"Императивные циклы",order:150}}}},{node:{relativePath:"ru/guide/language/let-binding.md",childMarkdownRemark:{frontmatter:{title:"Let привязка",order:10}}}},{node:{relativePath:"ru/guide/language/jsx.md",childMarkdownRemark:{frontmatter:{title:"JSX",order:160}}}},{node:{relativePath:"ru/guide/language/list-and-array.md",childMarkdownRemark:{frontmatter:{title:"Список и Массив",order:80}}}},{node:{relativePath:"ru/guide/language/module.md",childMarkdownRemark:{frontmatter:{title:"Модуль",order:180}}}},{node:{relativePath:"ru/guide/language/more-on-type.md",childMarkdownRemark:{frontmatter:{title:"Больше о типах",order:120}}}},{node:{relativePath:"ru/guide/language/object.md",childMarkdownRemark:{frontmatter:{title:"Объект",order:175}}}},{node:{relativePath:"ru/guide/language/mutation.md",childMarkdownRemark:{frontmatter:{title:"Мутации",order:140}}}},{node:{relativePath:"ru/guide/language/overview.md",childMarkdownRemark:{frontmatter:{title:"Обзор",order:0}}}},{node:{relativePath:"ru/guide/language/pattern-matching.md",childMarkdownRemark:{frontmatter:{title:"Паттерн-матчинг",order:135}}}},{node:{relativePath:"ru/guide/language/string-and-char.md",childMarkdownRemark:{frontmatter:{title:"Строка и символ",order:20}}}},{node:{relativePath:"ru/guide/language/record.md",childMarkdownRemark:{frontmatter:{title:"Запись",order:60}}}},{node:{relativePath:"ru/guide/language/tuple.md",childMarkdownRemark:{frontmatter:{title:"Кортеж",order:50}}}},{node:{relativePath:"ru/guide/language/type.md",childMarkdownRemark:{frontmatter:{title:"Тип!",order:15}}}},{node:{relativePath:"ru/guide/language/variant.md",childMarkdownRemark:{frontmatter:{title:"Вариант!",order:70}}}},{node:{relativePath:"ru/guide/javascript/interop.md",childMarkdownRemark:{frontmatter:{title:"Взаимодействие",order:1}}}},{node:{relativePath:"ru/guide/javascript/converting.md",childMarkdownRemark:{frontmatter:{title:"Перенос JS кода",order:5}}}},{node:{relativePath:"ru/guide/javascript/index.md",childMarkdownRemark:{frontmatter:{title:"JavaScript",order:30}}}},{node:{relativePath:"ru/guide/javascript/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Быстрый старт",order:0}}}},{node:{relativePath:"ru/guide/javascript/libraries.md",childMarkdownRemark:{frontmatter:{title:"Библиотеки",order:2}}}},{node:{relativePath:"ru/guide/native/convert-from-ocaml.md",childMarkdownRemark:{frontmatter:{title:"Converting from OCaml",order:4}}}},{node:{relativePath:"ru/guide/javascript/syntax-cheatsheet.md",childMarkdownRemark:{frontmatter:{title:"Шпаргалка по синтаксису",order:1}}}},{node:{relativePath:"ru/guide/native/index.md",childMarkdownRemark:{frontmatter:{title:"Native",order:40}}}},{node:{relativePath:"ru/guide/native/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}}]},file:{relativePath:"ru/guide/language/function.md",childMarkdownRemark:{html:'<p>Вы можете поверить, что мы до сих пор не касались функций?</p>\n<p>Объявление функции начинается с <code>fun</code> и возвращает выражение.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> greet = <span class="hljs-func"><span class="hljs-keyword">fun</span><span class="hljs-params"> name<span class="hljs-params"> </span></span></span>=&gt; <span class="hljs-string">"Hello "</span> ^ name;</code></pre>\n      </div>\n<p>Это создает функцию и привязывает ее к имени <code>greet</code>. Вызывается она так:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code>greet <span class="hljs-string">"world!"</span>; <span class="hljs-comment">/* "Hello world!" */</span></code></pre>\n      </div>\n<p>Аргументы разделяются пробелами:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> add = <span class="hljs-func"><span class="hljs-keyword">fun</span><span class="hljs-params"> x<span class="hljs-params"> y<span class="hljs-params"> z<span class="hljs-params"> </span></span></span></span></span>=&gt; x + y + z;\nadd <span class="hljs-number">1</span> <span class="hljs-number">2</span> <span class="hljs-number">3</span>; <span class="hljs-comment">/* 6 */</span></code></pre>\n      </div>\n<p>Тело функции оборачивается в фигурные скобки:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> greetMore = <span class="hljs-func"><span class="hljs-keyword">fun</span><span class="hljs-params"> name<span class="hljs-params"> </span></span></span>=&gt; {\n  <span class="hljs-keyword">let</span> part1 = <span class="hljs-string">"Hello"</span>;\n  part1 ^ <span class="hljs-string">" "</span> ^ name\n};</code></pre>\n      </div>\n<p><strong>Так как объявление функций встречается часто</strong>, существует сокращение <code>let + fun</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> add x y z =&gt; x + y + z;\n<span class="hljs-comment">/* тоде самое: let add = fun x y z =&gt; x + y + z; */</span></code></pre>\n      </div>\n<p><strong>Обращайте внимание на порядок вызова</strong>! В некоторых ситуациях нужно оборачивать вызовы в\nскобки:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> increment x =&gt; x + <span class="hljs-number">1</span>;\n<span class="hljs-keyword">let</span> double x =&gt; x + x;\n\n<span class="hljs-keyword">let</span> eleven = increment (double <span class="hljs-number">5</span>);</code></pre>\n      </div>\n<p>Если забудете обернуть <code>double 5</code> в скобки, то получите <code>increment double 5</code>, как будто\n<code>increment</code> принимает два аргумента.</p>\n<h3 id="Без-аргументов"><a href="#%D0%91%D0%B5%D0%B7-%D0%B0%D1%80%D0%B3%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%BE%D0%B2" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Без аргументов</h3>\n<p>Функции в Reason всегда принимают аргумент. Но иногда вам не нужно ничего передавать. В других\nязыках вы просто не передаете аргумент. В Reason вы передаете значение <code>()</code>, называемое\n"юнит (unit)".</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-comment">/* функция, которая получает юнит аргумент */</span>\n<span class="hljs-keyword">let</span> logSomething () =&gt; {\n  print_endline <span class="hljs-string">"hello"</span>;\n  print_endline <span class="hljs-string">"world"</span>;\n};\n\n<span class="hljs-comment">/* вызов функции с аргументом юнитом */</span>\nlogSomething ();</code></pre>\n      </div>\n<p><code>()</code> это совершенно нормальное значение типа <code>unit</code>. Reason использует специальный синтаксис для\nудобства.</p>\n<h3 id="Именованные-аргументы"><a href="#%D0%98%D0%BC%D0%B5%D0%BD%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D0%B0%D1%80%D0%B3%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Именованные аргументы</h3>\n<p>При вызове функций с несколькими аргументами (особенно если они одного типа), легко запутаться.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> addCoordinates x y =&gt; {\n  <span class="hljs-comment">/* x и y используются здесь */</span>\n};\n...\naddCoordinates <span class="hljs-number">5</span> <span class="hljs-number">6</span>; <span class="hljs-comment">/* какой из них x, а какой y? */</span></code></pre>\n      </div>\n<p>В OCaml/Reason, вы можете давать метки аргументам:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> addCoordinates x::x y::y =&gt; {\n  <span class="hljs-comment">/* x и y используются здесь */</span>\n};\n...\naddCoordinates x::<span class="hljs-number">5</span> y::<span class="hljs-number">6</span>;</code></pre>\n      </div>\n<p>Аргументы можно передавать в любом порядке</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code>addCoordinates y::<span class="hljs-number">6</span> x::<span class="hljs-number">5</span>;</code></pre>\n      </div>\n<p>Запись <code>x::x</code> означает, что функция принимает аргумент <code>x</code> и внутри может ссылаться на\nпеременную <code>x</code> со значением этого аргумента. Это можно использовать для переименования аргумента\nвнутри функции</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> drawCircle radius::r color::<span class="hljs-built_in">c</span> =&gt; {\n  setColor <span class="hljs-built_in">c</span>;\n  startAt r r;\n  ...\n};\n\ndrawCircle radius::<span class="hljs-number">10</span> color::<span class="hljs-string">"red"</span>;</code></pre>\n      </div>\n<p>Для частого случая <code>radius::radius</code> (когда метка и локальное имя совпадают), существует\nспециальный синтаксис <code>::x</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> drawCircle ::radius ::color =&gt; {\n  setColor color;\n  startAt radius radius;\n  ...\n}</code></pre>\n      </div>\n<p>А вот так можно указать типы:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> drawCircle radius::(r: int) color::(<span class="hljs-built_in">c</span>: string) =&gt; ...;</code></pre>\n      </div>\n<h3 id="Необязательные-именованные-аргументы"><a href="#%D0%9D%D0%B5%D0%BE%D0%B1%D1%8F%D0%B7%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%B8%D0%BC%D0%B5%D0%BD%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D0%B0%D1%80%D0%B3%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Необязательные именованные аргументы</h3>\n<p>Именованные аргументы можно пометить как необязательные. Такие аргументы можно пропустить при\nвызове.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-comment">/* радиус можно пропустить */</span>\n<span class="hljs-keyword">let</span> drawCircle ::color ::radius=? () =&gt; {\n  setColor color;\n  <span class="hljs-keyword">switch</span> radius {\n  | <span class="hljs-type">None</span> =&gt; startAt <span class="hljs-number">1</span> <span class="hljs-number">1</span>;\n  | <span class="hljs-type">Some</span> r_ =&gt; startAt r_ r_;\n  }\n};</code></pre>\n      </div>\n<p>В таком случае переменная <code>radius</code> <strong>обернута</strong> в тип <code>option</code>, со значением по умолчанию\nравным <code>None</code>. Если аргумент будет предоставлен, то он будет обернут в <code>Some</code>. Потому тип\n<code>radius</code> или <code>None</code> или <code>Some int</code></p>\n<p><strong>Важно</strong>: <code>None | Some foo</code> это структура данных, описанная <a href="../../guide/language/variant">выше</a>.\nКонкретно этот вариант предоставлен стандартной библиотекой и называется <code>option</code>.\nЕго определение: <code>type option \'a = None | Some \'a</code>.</p>\n<p><strong>Важно</strong> что юнит <code>()</code> находится в конце <code>drawCircle</code>. Так как <code>radius</code> и <code>color</code> являются\nименованными, то из-за каррирования (про это далее) не ясно, что означает следующее:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> whatIsThis = drawCircle ::color;</code></pre>\n      </div>\n<p>Является ли <code>whatIsThis</code> каррированной версией <code>drawCircle</code> ожидающей аргумента <code>radius</code>?\nИли вызов завершен и это результат? Для того, чтобы избежать путаницы нужно добавить\nнеименованный аргумент и OCaml будет считать, что именованный аргумент был пропущен.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> curriedFunction = drawCircle ::color;\n<span class="hljs-keyword">let</span> actualResultWithoutProvidingRadius = drawCircle ::color ();</code></pre>\n      </div>\n<h4 id="Явно-переданные-необязательные-аргументы"><a href="#%D0%AF%D0%B2%D0%BD%D0%BE-%D0%BF%D0%B5%D1%80%D0%B5%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D0%BD%D0%B5%D0%BE%D0%B1%D1%8F%D0%B7%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%B0%D1%80%D0%B3%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Явно переданные необязательные аргументы</h4>\n<p>Иногда вам нужно передать значение я не зная является оно <code>None</code> или <code>Some a</code>. Наивный вариант\nтакой:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> result = <span class="hljs-keyword">switch</span> payloadRadius {\n| <span class="hljs-type">None</span> =&gt; drawCircle ::color ()\n| <span class="hljs-type">Some</span> r =&gt; drawCircle ::color radius::r ()\n};</code></pre>\n      </div>\n<p>Но это быстро надоедает. Потому существует короткая запись.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> result = drawCircle ::color radius::?payloadRadius ();</code></pre>\n      </div>\n<p>Это значит "Я понимаю, что <code>radius</code> необязателен и когда я передаю значение я не знаю, что\nименно я передаю: <code>None</code> или <code>Some val</code>, потому передаю весь <code>option</code>"</p>\n<h4 id="Необязательный-аргумент-со-значением-по-умолчанию"><a href="#%D0%9D%D0%B5%D0%BE%D0%B1%D1%8F%D0%B7%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-%D0%B0%D1%80%D0%B3%D1%83%D0%BC%D0%B5%D0%BD%D1%82-%D1%81%D0%BE-%D0%B7%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D0%B5%D0%BC-%D0%BF%D0%BE-%D1%83%D0%BC%D0%BE%D0%BB%D1%87%D0%B0%D0%BD%D0%B8%D1%8E" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Необязательный аргумент со значением по умолчанию</h4>\n<p>Можно указать значение по умолчанию для необязательного аргумента. Такие аргументы не\nоборачиваются в <code>option</code>.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> drawCircle ::radius=<span class="hljs-number">1</span> ::color () =&gt; {\n  setColor color;\n  startAt r r;\n};</code></pre>\n      </div>\n<h4 id="Рекурсивные-функции"><a href="#%D0%A0%D0%B5%D0%BA%D1%83%D1%80%D1%81%D0%B8%D0%B2%D0%BD%D1%8B%D0%B5-%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%B8" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Рекурсивные функции</h4>\n<p>По умолчанию значения не могут видеть имена к которым привязаны. Но можно обойти это, используя\nключевое слово <code>rec</code> в <code>let</code>. Это позволяет функциям видеть самих себя, давай всю мощь рекурсии.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> <span class="hljs-keyword">rec</span> neverTerminate = <span class="hljs-func"><span class="hljs-keyword">fun</span><span class="hljs-params"> ()<span class="hljs-params"> </span></span></span>=&gt; neverTerminate ();</code></pre>\n      </div>\n<h4 id="Взаимно-рекурсивные-функции"><a href="#%D0%92%D0%B7%D0%B0%D0%B8%D0%BC%D0%BD%D0%BE-%D1%80%D0%B5%D0%BA%D1%83%D1%80%D1%81%D0%B8%D0%B2%D0%BD%D1%8B%D0%B5-%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%B8" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Взаимно рекурсивные функции</h4>\n<p>Такие функции объявляются как и обычные, с <code>rec</code>, но связываются словом <code>and</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> <span class="hljs-keyword">rec</span> callSecond = <span class="hljs-func"><span class="hljs-keyword">fun</span><span class="hljs-params"> ()<span class="hljs-params"> </span></span></span>=&gt; callFirst ()\nand callFirst = <span class="hljs-func"><span class="hljs-keyword">fun</span><span class="hljs-params"> ()<span class="hljs-params"> </span></span></span>=&gt; callSecond ();</code></pre>\n      </div>\n<p><strong>Важно</strong> что нет точки запятой после первой строки в <code>let</code>. Точка с запятой идут после второй\nстроки.</p>\n<h4 id="Каррирование"><a href="#%D0%9A%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Каррирование</h4>\n<p>Reason позволяет <strong>частично</strong> вызывать функции:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> add = <span class="hljs-func"><span class="hljs-keyword">fun</span><span class="hljs-params"> x<span class="hljs-params"> y<span class="hljs-params"> </span></span></span></span>=&gt; x + y;\n<span class="hljs-keyword">let</span> addFive = add <span class="hljs-number">5</span>;\n<span class="hljs-keyword">let</span> eleven = addFive <span class="hljs-number">6</span>;\n<span class="hljs-keyword">let</span> twelve = addFive <span class="hljs-number">7</span>;</code></pre>\n      </div>\n<p>На самом деле, функция <code>add</code> всего лишь синтаксический сахар для слещующего кода:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> add = <span class="hljs-func"><span class="hljs-keyword">fun</span><span class="hljs-params"> x<span class="hljs-params"> </span></span></span>=&gt; <span class="hljs-func"><span class="hljs-keyword">fun</span><span class="hljs-params"> y<span class="hljs-params"> </span></span></span>=&gt; x + y;</code></pre>\n      </div>\n<p>OCaml по возможности устраняет не нужное выделение памяти (тут две функции)!\nТаким образом мы получаем:</p>\n<ul>\n<li>Удобный синтаксис</li>\n<li>Каррирование бесплатно (на самом деле любая функция принимает только один аргумент!)</li>\n<li>Нет потери производительности</li>\n</ul>',frontmatter:{title:"Функция"}}}},pathContext:{section:"ru",relativePath:"ru/guide/language/function.md",relatedFiles:"/^ru\\/.*\\.md$/"}}}});
//# sourceMappingURL=path---ru-guide-language-function-b3f307fd48935e789c37.js.map