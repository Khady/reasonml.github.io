webpackJsonp([155],{"./node_modules/json-loader/index.js!./.cache/json/api-type-more-labels-map-make-html.json":function(x,A){x.exports={data:{file:{relativePath:"api/type_MoreLabels.Map.Make.html",childRawHtml:{content:'<div class="ocamldoc"><pre>functor&#xA0;(Ord&#xA0;:&#xA0;OrderedType)&#xA0;-&gt;\n\n&#xA0;&#xA0;sig\n&#xA0;&#xA0;&#xA0;&#xA0;type&#xA0;key&#xA0;=&#xA0;Ord.t\n&#xA0;&#xA0;&#xA0;&#xA0;and&#xA0;+&apos;a&#xA0;t\n&#xA0;&#xA0;&#xA0;&#xA0;val&#xA0;empty&#xA0;:&#xA0;&apos;a&#xA0;t\n&#xA0;&#xA0;&#xA0;&#xA0;val&#xA0;is_empty&#xA0;:&#xA0;&apos;a&#xA0;t&#xA0;-&gt;&#xA0;bool\n&#xA0;&#xA0;&#xA0;&#xA0;val&#xA0;mem&#xA0;:&#xA0;key&#xA0;-&gt;&#xA0;&apos;a&#xA0;t&#xA0;-&gt;&#xA0;bool\n&#xA0;&#xA0;&#xA0;&#xA0;val&#xA0;add&#xA0;:&#xA0;key:key&#xA0;-&gt;&#xA0;data:&apos;a&#xA0;-&gt;&#xA0;&apos;a&#xA0;t&#xA0;-&gt;&#xA0;&apos;a&#xA0;t\n&#xA0;&#xA0;&#xA0;&#xA0;val&#xA0;singleton&#xA0;:&#xA0;key&#xA0;-&gt;&#xA0;&apos;a&#xA0;-&gt;&#xA0;&apos;a&#xA0;t\n&#xA0;&#xA0;&#xA0;&#xA0;val&#xA0;remove&#xA0;:&#xA0;key&#xA0;-&gt;&#xA0;&apos;a&#xA0;t&#xA0;-&gt;&#xA0;&apos;a&#xA0;t\n&#xA0;&#xA0;&#xA0;&#xA0;val&#xA0;merge&#xA0;:\n&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;f:(key&#xA0;-&gt;&#xA0;&apos;a&#xA0;option&#xA0;-&gt;&#xA0;&apos;b&#xA0;option&#xA0;-&gt;&#xA0;&apos;c&#xA0;option)&#xA0;-&gt;&#xA0;&apos;a&#xA0;t&#xA0;-&gt;&#xA0;&apos;b&#xA0;t&#xA0;-&gt;&#xA0;&apos;c&#xA0;t\n&#xA0;&#xA0;&#xA0;&#xA0;val&#xA0;compare&#xA0;:&#xA0;cmp:(&apos;a&#xA0;-&gt;&#xA0;&apos;a&#xA0;-&gt;&#xA0;int)&#xA0;-&gt;&#xA0;&apos;a&#xA0;t&#xA0;-&gt;&#xA0;&apos;a&#xA0;t&#xA0;-&gt;&#xA0;int\n&#xA0;&#xA0;&#xA0;&#xA0;val&#xA0;equal&#xA0;:&#xA0;cmp:(&apos;a&#xA0;-&gt;&#xA0;&apos;a&#xA0;-&gt;&#xA0;bool)&#xA0;-&gt;&#xA0;&apos;a&#xA0;t&#xA0;-&gt;&#xA0;&apos;a&#xA0;t&#xA0;-&gt;&#xA0;bool\n&#xA0;&#xA0;&#xA0;&#xA0;val&#xA0;iter&#xA0;:&#xA0;f:(key:key&#xA0;-&gt;&#xA0;data:&apos;a&#xA0;-&gt;&#xA0;unit)&#xA0;-&gt;&#xA0;&apos;a&#xA0;t&#xA0;-&gt;&#xA0;unit\n&#xA0;&#xA0;&#xA0;&#xA0;val&#xA0;fold&#xA0;:&#xA0;f:(key:key&#xA0;-&gt;&#xA0;data:&apos;a&#xA0;-&gt;&#xA0;&apos;b&#xA0;-&gt;&#xA0;&apos;b)&#xA0;-&gt;&#xA0;&apos;a&#xA0;t&#xA0;-&gt;&#xA0;init:&apos;b&#xA0;-&gt;&#xA0;&apos;b\n&#xA0;&#xA0;&#xA0;&#xA0;val&#xA0;for_all&#xA0;:&#xA0;f:(key&#xA0;-&gt;&#xA0;&apos;a&#xA0;-&gt;&#xA0;bool)&#xA0;-&gt;&#xA0;&apos;a&#xA0;t&#xA0;-&gt;&#xA0;bool\n&#xA0;&#xA0;&#xA0;&#xA0;val&#xA0;exists&#xA0;:&#xA0;f:(key&#xA0;-&gt;&#xA0;&apos;a&#xA0;-&gt;&#xA0;bool)&#xA0;-&gt;&#xA0;&apos;a&#xA0;t&#xA0;-&gt;&#xA0;bool\n&#xA0;&#xA0;&#xA0;&#xA0;val&#xA0;filter&#xA0;:&#xA0;f:(key&#xA0;-&gt;&#xA0;&apos;a&#xA0;-&gt;&#xA0;bool)&#xA0;-&gt;&#xA0;&apos;a&#xA0;t&#xA0;-&gt;&#xA0;&apos;a&#xA0;t\n&#xA0;&#xA0;&#xA0;&#xA0;val&#xA0;partition&#xA0;:&#xA0;f:(key&#xA0;-&gt;&#xA0;&apos;a&#xA0;-&gt;&#xA0;bool)&#xA0;-&gt;&#xA0;&apos;a&#xA0;t&#xA0;-&gt;&#xA0;&apos;a&#xA0;t&#xA0;*&#xA0;&apos;a&#xA0;t\n&#xA0;&#xA0;&#xA0;&#xA0;val&#xA0;cardinal&#xA0;:&#xA0;&apos;a&#xA0;t&#xA0;-&gt;&#xA0;int\n&#xA0;&#xA0;&#xA0;&#xA0;val&#xA0;bindings&#xA0;:&#xA0;&apos;a&#xA0;t&#xA0;-&gt;&#xA0;(key&#xA0;*&#xA0;&apos;a)&#xA0;list\n&#xA0;&#xA0;&#xA0;&#xA0;val&#xA0;min_binding&#xA0;:&#xA0;&apos;a&#xA0;t&#xA0;-&gt;&#xA0;key&#xA0;*&#xA0;&apos;a\n&#xA0;&#xA0;&#xA0;&#xA0;val&#xA0;max_binding&#xA0;:&#xA0;&apos;a&#xA0;t&#xA0;-&gt;&#xA0;key&#xA0;*&#xA0;&apos;a\n&#xA0;&#xA0;&#xA0;&#xA0;val&#xA0;choose&#xA0;:&#xA0;&apos;a&#xA0;t&#xA0;-&gt;&#xA0;key&#xA0;*&#xA0;&apos;a\n&#xA0;&#xA0;&#xA0;&#xA0;val&#xA0;split&#xA0;:&#xA0;key&#xA0;-&gt;&#xA0;&apos;a&#xA0;t&#xA0;-&gt;&#xA0;&apos;a&#xA0;t&#xA0;*&#xA0;&apos;a&#xA0;option&#xA0;*&#xA0;&apos;a&#xA0;t\n&#xA0;&#xA0;&#xA0;&#xA0;val&#xA0;find&#xA0;:&#xA0;key&#xA0;-&gt;&#xA0;&apos;a&#xA0;t&#xA0;-&gt;&#xA0;&apos;a\n&#xA0;&#xA0;&#xA0;&#xA0;val&#xA0;map&#xA0;:&#xA0;f:(&apos;a&#xA0;-&gt;&#xA0;&apos;b)&#xA0;-&gt;&#xA0;&apos;a&#xA0;t&#xA0;-&gt;&#xA0;&apos;b&#xA0;t\n&#xA0;&#xA0;&#xA0;&#xA0;val&#xA0;mapi&#xA0;:&#xA0;f:(key&#xA0;-&gt;&#xA0;&apos;a&#xA0;-&gt;&#xA0;&apos;b)&#xA0;-&gt;&#xA0;&apos;a&#xA0;t&#xA0;-&gt;&#xA0;&apos;b&#xA0;t\n&#xA0;&#xA0;end</pre></div>'}}},pathContext:{relativePath:"api/type_MoreLabels.Map.Make.html"}}}});
//# sourceMappingURL=path---api-type-more-labels-map-make-html-a88c13a167a6279abd9c.js.map