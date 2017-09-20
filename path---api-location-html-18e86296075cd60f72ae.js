webpackJsonp([297],{"./node_modules/json-loader/index.js!./.cache/json/api-location-html.json":function(n,e){n.exports={data:{file:{relativePath:"api/Location.html",childRawHtml:{content:'<div class="ocamldoc">\n<div class="navbar"><a class="pre" href="Lexer.html" title="Lexer">Previous</a>\n&#xA0;<a class="up" href="index.html" title="Index">Up</a>\n&#xA0;<a class="post" href="Longident.html" title="Longident">Next</a>\n</div>\n<h1>Module <a href="type_Location.html">Location</a></h1>\n\n<pre><span class="keyword">module</span> Location: sig .. end</pre><div class="info module top">\nAn arbitrary value of type <code class="code">t</code>; describes an empty ghost range.<br>\n</div>\n<hr width="100%">\n\n<pre><span class="keyword">type</span> t = {</pre><table class="typetable">\n<tbody><tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>loc_start&#xA0;: Lexing.position;</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>loc_end&#xA0;: Lexing.position;</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>loc_ghost&#xA0;: bool;</code></td>\n\n</tr></tbody></table>\n}\n\n\n\n<pre id="VALnone"><span class="keyword">let</span> none: t;\n</pre><div class="info ">\nAn arbitrary value of type <code class="code">t</code>; describes an empty ghost range.<br>\n</div>\n\n<pre id="VALin_file"><span class="keyword">let</span> in_file: string =&gt; t;\n</pre><div class="info ">\nReturn an empty ghost range located in a given file.<br>\n</div>\n\n<pre id="VALinit"><span class="keyword">let</span> init: Lexing.lexbuf =&gt; string =&gt; unit;\n</pre><div class="info ">\nSet the file name and line number of the <code class="code">lexbuf</code> to be the start\n    of the named file.<br>\n</div>\n\n<pre id="VALcurr"><span class="keyword">let</span> curr: Lexing.lexbuf =&gt; t;\n</pre><div class="info ">\nGet the location of the current token from the <code class="code">lexbuf</code>.<br>\n</div>\n\n<pre id="VALsymbol_rloc"><span class="keyword">let</span> symbol_rloc: unit =&gt; t;\n</pre>\n<pre id="VALsymbol_gloc"><span class="keyword">let</span> symbol_gloc: unit =&gt; t;\n</pre>\n<pre id="VALrhs_loc"><span class="keyword">let</span> rhs_loc: int =&gt; t;\n</pre><div class="info ">\n<code class="code">rhs_loc n</code> returns the location of the symbol at position <code class="code">n</code>, starting\n  at 1, in the current parser rule.<br>\n</div>\n\n<pre id="VALinput_name"><span class="keyword">let</span> input_name: Pervasives.ref string;\n</pre>\n<pre id="VALinput_lexbuf"><span class="keyword">let</span> input_lexbuf: Pervasives.ref (option Lexing.lexbuf);\n</pre>\n<pre id="VALget_pos_info"><span class="keyword">let</span> get_pos_info: Lexing.position =&gt; (string, int, int);\n</pre>\n<pre id="VALprint_loc"><span class="keyword">let</span> print_loc: Format.formatter =&gt; t =&gt; unit;\n</pre>\n<pre id="VALprint_error"><span class="keyword">let</span> print_error: Format.formatter =&gt; t =&gt; unit;\n</pre>\n<pre id="VALprint_error_cur_file"><span class="keyword">let</span> print_error_cur_file: Format.formatter =&gt; unit;\n</pre>\n<pre id="VALprint_warning"><span class="keyword">let</span> print_warning: t =&gt; Format.formatter =&gt; Warnings.t =&gt; unit;\n</pre>\n<pre id="VALformatter_for_warnings"><span class="keyword">let</span> formatter_for_warnings: Pervasives.ref Format.formatter;\n</pre>\n<pre id="VALprerr_warning"><span class="keyword">let</span> prerr_warning: t =&gt; Warnings.t =&gt; unit;\n</pre>\n<pre id="VALecho_eof"><span class="keyword">let</span> echo_eof: unit =&gt; unit;\n</pre>\n<pre id="VALreset"><span class="keyword">let</span> reset: unit =&gt; unit;\n</pre>\n<pre id="VALwarning_printer"><span class="keyword">let</span> warning_printer: Pervasives.ref (t =&gt; Format.formatter =&gt; Warnings.t =&gt; unit);\n</pre><div class="info ">\nHook for intercepting warnings.<br>\n</div>\n\n<pre id="VALdefault_warning_printer"><span class="keyword">let</span> default_warning_printer: t =&gt; Format.formatter =&gt; Warnings.t =&gt; unit;\n</pre><div class="info ">\nOriginal warning printer for use in hooks.<br>\n</div>\n\n<pre id="VALhighlight_locations"><span class="keyword">let</span> highlight_locations: Format.formatter =&gt; list t =&gt; bool;\n</pre>\n<pre><span class="keyword">type</span> &apos;a loc = {</pre><table class="typetable">\n<tbody><tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>txt&#xA0;: &apos;a;</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>loc&#xA0;: t;</code></td>\n\n</tr></tbody></table>\n}\n\n\n\n<pre id="VALmknoloc"><span class="keyword">let</span> mknoloc: &apos;a =&gt; loc &apos;a;\n</pre>\n<pre id="VALmkloc"><span class="keyword">let</span> mkloc: &apos;a =&gt; t =&gt; loc &apos;a;\n</pre>\n<pre id="VALprint"><span class="keyword">let</span> print: Format.formatter =&gt; t =&gt; unit;\n</pre>\n<pre id="VALprint_filename"><span class="keyword">let</span> print_filename: Format.formatter =&gt; string =&gt; unit;\n</pre>\n<pre id="VALabsolute_path"><span class="keyword">let</span> absolute_path: string =&gt; string;\n</pre>\n<pre id="VALshow_filename"><span class="keyword">let</span> show_filename: string =&gt; string;\n</pre><div class="info ">\nIn -absname mode, return the absolute path for this filename.\n        Otherwise, returns the filename unchanged.<br>\n</div>\n\n<pre id="VALabsname"><span class="keyword">let</span> absname: Pervasives.ref bool;\n</pre>\n<pre><span class="keyword">type</span> error = {</pre><table class="typetable">\n<tbody><tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>loc&#xA0;: t;</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>msg&#xA0;: string;</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>sub&#xA0;: error list;</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>if_highlight&#xA0;: string;</code></td>\n\n</tr></tbody></table>\n}\n\n\n\n<pre id="EXCEPTIONError"><span class="keyword">exception</span> Error error;\n</pre>\n\n<pre id="VALerror"><span class="keyword">let</span> error: loc::t? =&gt; sub::list error? =&gt; if_highlight::string? =&gt; string =&gt; error;\n</pre>\n<pre id="VALerrorf"><span class="keyword">let</span> errorf:\n  loc::t? =&gt;\n  sub::list error? =&gt;\n  if_highlight::string? =&gt;\n  Pervasives.format4 &apos;a unit string error =&gt;\n  &apos;a;\n</pre>\n<pre id="VALraise_errorf"><span class="keyword">let</span> raise_errorf:\n  loc::t? =&gt;\n  sub::list error? =&gt;\n  if_highlight::string? =&gt;\n  Pervasives.format4 &apos;a unit string &apos;b =&gt;\n  &apos;a;\n</pre>\n<pre id="VALerror_of_printer"><span class="keyword">let</span> error_of_printer: t =&gt; (Format.formatter =&gt; &apos;a =&gt; unit) =&gt; &apos;a =&gt; error;\n</pre>\n<pre id="VALerror_of_printer_file"><span class="keyword">let</span> error_of_printer_file: (Format.formatter =&gt; &apos;a =&gt; unit) =&gt; &apos;a =&gt; error;\n</pre>\n<pre id="VALerror_of_exn"><span class="keyword">let</span> error_of_exn: exn =&gt; option error;\n</pre>\n<pre id="VALregister_error_of_exn"><span class="keyword">let</span> register_error_of_exn: (exn =&gt; option error) =&gt; unit;\n</pre>\n<pre id="VALreport_error"><span class="keyword">let</span> report_error: Format.formatter =&gt; error =&gt; unit;\n</pre>\n<pre id="VALerror_reporter"><span class="keyword">let</span> error_reporter: Pervasives.ref (Format.formatter =&gt; error =&gt; unit);\n</pre><div class="info ">\nHook for intercepting error reports.<br>\n</div>\n\n<pre id="VALdefault_error_reporter"><span class="keyword">let</span> default_error_reporter: Format.formatter =&gt; error =&gt; unit;\n</pre><div class="info ">\nOriginal error reporter for use in hooks.<br>\n</div>\n\n<pre id="VALreport_exception"><span class="keyword">let</span> report_exception: Format.formatter =&gt; exn =&gt; unit;\n</pre></div>'}}},pathContext:{relativePath:"api/Location.html"}}}});
//# sourceMappingURL=path---api-location-html-18e86296075cd60f72ae.js.map