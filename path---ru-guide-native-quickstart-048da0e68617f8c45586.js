webpackJsonp([14],{"./node_modules/json-loader/index.js!./.cache/json/ru-guide-native-quickstart.json":function(e,t){e.exports={data:{allFile:{edges:[{node:{relativePath:"ru/guide/index.md",childMarkdownRemark:{frontmatter:{title:"Гайд по Reason",order:0}}}},{node:{relativePath:"ru/guide/examples.md",childMarkdownRemark:{frontmatter:{title:"Примеры",order:60}}}},{node:{relativePath:"ru/guide/ocaml.md",childMarkdownRemark:{frontmatter:{title:"Comparison to OCaml",order:50}}}},{node:{relativePath:"ru/guide/what-and-why.md",childMarkdownRemark:{frontmatter:{title:"Что и Зачем",order:0}}}},{node:{relativePath:"ru/guide/editor-tools/global-installation.md",childMarkdownRemark:{frontmatter:{title:"Глобальная установка",order:10}}}},{node:{relativePath:"ru/guide/editor-tools/editors-plugins.md",childMarkdownRemark:{frontmatter:{title:"Плагины редактора",order:20}}}},{node:{relativePath:"ru/guide/editor-tools/extra-goodies.md",childMarkdownRemark:{frontmatter:{title:"Дополнительные бонусы",order:30}}}},{node:{relativePath:"ru/guide/editor-tools/index.md",childMarkdownRemark:{frontmatter:{title:"Настройка редактора",order:10}}}},{node:{relativePath:"ru/guide/language/destructuring.md",childMarkdownRemark:{frontmatter:{title:"Деструктурирование",order:130}}}},{node:{relativePath:"ru/guide/language/boolean.md",childMarkdownRemark:{frontmatter:{title:"Булев",order:30}}}},{node:{relativePath:"ru/guide/language/external.md",childMarkdownRemark:{frontmatter:{title:"External",order:170}}}},{node:{relativePath:"ru/guide/language/exception.md",childMarkdownRemark:{frontmatter:{title:"Исключения",order:175}}}},{node:{relativePath:"ru/guide/language/index.md",childMarkdownRemark:{frontmatter:{title:"Основы языка",order:20}}}},{node:{relativePath:"ru/guide/language/if-else.md",childMarkdownRemark:{frontmatter:{title:"If-Else",order:110}}}},{node:{relativePath:"ru/guide/language/function.md",childMarkdownRemark:{frontmatter:{title:"Функция",order:100}}}},{node:{relativePath:"ru/guide/language/integer-and-float.md",childMarkdownRemark:{frontmatter:{title:"Числа",order:40}}}},{node:{relativePath:"ru/guide/language/imperative-loops.md",childMarkdownRemark:{frontmatter:{title:"Императивные циклы",order:150}}}},{node:{relativePath:"ru/guide/language/let-binding.md",childMarkdownRemark:{frontmatter:{title:"Let привязка",order:10}}}},{node:{relativePath:"ru/guide/language/jsx.md",childMarkdownRemark:{frontmatter:{title:"JSX",order:160}}}},{node:{relativePath:"ru/guide/language/list-and-array.md",childMarkdownRemark:{frontmatter:{title:"Список и Массив",order:80}}}},{node:{relativePath:"ru/guide/language/module.md",childMarkdownRemark:{frontmatter:{title:"Модуль",order:180}}}},{node:{relativePath:"ru/guide/language/more-on-type.md",childMarkdownRemark:{frontmatter:{title:"Больше о типах",order:120}}}},{node:{relativePath:"ru/guide/language/object.md",childMarkdownRemark:{frontmatter:{title:"Объект",order:175}}}},{node:{relativePath:"ru/guide/language/mutation.md",childMarkdownRemark:{frontmatter:{title:"Мутации",order:140}}}},{node:{relativePath:"ru/guide/language/overview.md",childMarkdownRemark:{frontmatter:{title:"Обзор",order:0}}}},{node:{relativePath:"ru/guide/language/pattern-matching.md",childMarkdownRemark:{frontmatter:{title:"Паттерн-матчинг",order:135}}}},{node:{relativePath:"ru/guide/language/string-and-char.md",childMarkdownRemark:{frontmatter:{title:"Строка и символ",order:20}}}},{node:{relativePath:"ru/guide/language/record.md",childMarkdownRemark:{frontmatter:{title:"Запись",order:60}}}},{node:{relativePath:"ru/guide/language/tuple.md",childMarkdownRemark:{frontmatter:{title:"Кортеж",order:50}}}},{node:{relativePath:"ru/guide/language/type.md",childMarkdownRemark:{frontmatter:{title:"Тип!",order:15}}}},{node:{relativePath:"ru/guide/language/variant.md",childMarkdownRemark:{frontmatter:{title:"Вариант!",order:70}}}},{node:{relativePath:"ru/guide/javascript/interop.md",childMarkdownRemark:{frontmatter:{title:"Взаимодействие",order:1}}}},{node:{relativePath:"ru/guide/javascript/converting.md",childMarkdownRemark:{frontmatter:{title:"Перенос JS кода",order:5}}}},{node:{relativePath:"ru/guide/javascript/index.md",childMarkdownRemark:{frontmatter:{title:"JavaScript",order:30}}}},{node:{relativePath:"ru/guide/javascript/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Быстрый старт",order:0}}}},{node:{relativePath:"ru/guide/javascript/libraries.md",childMarkdownRemark:{frontmatter:{title:"Библиотеки",order:2}}}},{node:{relativePath:"ru/guide/native/convert-from-ocaml.md",childMarkdownRemark:{frontmatter:{title:"Converting from OCaml",order:4}}}},{node:{relativePath:"ru/guide/javascript/syntax-cheatsheet.md",childMarkdownRemark:{frontmatter:{title:"Шпаргалка по синтаксису",order:1}}}},{node:{relativePath:"ru/guide/native/index.md",childMarkdownRemark:{frontmatter:{title:"Native",order:40}}}},{node:{relativePath:"ru/guide/native/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}}]},file:{relativePath:"ru/guide/native/quickstart.md",childMarkdownRemark:{html:'<p><strong>Note: the native workflow is heavily work-in-progress</strong>.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-sh"><code><span class="hljs-comment"># On OSX, install opam via Homebrew:</span>\nbrew update\nbrew install opam\n<span class="hljs-comment"># On Linux, see here (you\'ll need opam &gt;= 1.2.2): http://opam.ocaml.org/doc/Install.html</span>\nopam init\n<span class="hljs-comment"># **Note**: add the line below to your ~/.bashrc or ~/.zshrc too; it\'s needed at every shell startup</span>\n<span class="hljs-built_in">eval</span> $(opam config env)\nopam update\nopam switch <span class="hljs-number">4.02</span>.<span class="hljs-number">3</span></code></pre>\n      </div>\n<p>Then clone our example <a href="https://github.com/reasonml/ReasonNativeProject"><code>ReasonNativeProject</code></a> repo, and you\'re good to go!</p>',frontmatter:{title:"Quickstart"}}}},pathContext:{section:"ru",relativePath:"ru/guide/native/quickstart.md",relatedFiles:"/^ru\\/.*\\.md$/"}}}});
//# sourceMappingURL=path---ru-guide-native-quickstart-048da0e68617f8c45586.js.map