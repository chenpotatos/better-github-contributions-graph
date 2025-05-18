// Compiled by ClojureScript 1.11.132 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('gh_colorful_contributions.components.panel');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('gh_colorful_contributions.data');
if((typeof gh_colorful_contributions !== 'undefined') && (typeof gh_colorful_contributions.components !== 'undefined') && (typeof gh_colorful_contributions.components.panel !== 'undefined') && (typeof gh_colorful_contributions.components.panel.page_theme !== 'undefined')){
} else {
gh_colorful_contributions.components.panel.page_theme = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("light");
}
if((typeof gh_colorful_contributions !== 'undefined') && (typeof gh_colorful_contributions.components !== 'undefined') && (typeof gh_colorful_contributions.components.panel !== 'undefined') && (typeof gh_colorful_contributions.components.panel.user_selected_fill !== 'undefined')){
} else {
gh_colorful_contributions.components.panel.user_selected_fill = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("none");
}
chrome.storage.sync.get(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$theme,"light",cljs.core.cst$kw$gccUserSelectedFills,"none"], null)),(function (result){
var clj_result = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(result,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,true], 0));
var theme = cljs.core.cst$kw$theme.cljs$core$IFn$_invoke$arity$1(clj_result);
var s_fill = cljs.core.cst$kw$gccUserSelectedFills.cljs$core$IFn$_invoke$arity$1(clj_result);
document.documentElement.setAttribute("data-theme",theme);

cljs.core.reset_BANG_(gh_colorful_contributions.components.panel.page_theme,theme);

return cljs.core.reset_BANG_(gh_colorful_contributions.components.panel.user_selected_fill,s_fill);
}));
gh_colorful_contributions.components.panel.panel = (function gh_colorful_contributions$components$panel$panel(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$section$section$gcc_DASH_panel,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2$title$is_DASH_5,"Colors:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$fills,cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function gh_colorful_contributions$components$panel$panel_$_iter__12008(s__12009){
return (new cljs.core.LazySeq(null,(function (){
var s__12009__$1 = s__12009;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__12009__$1);
if(temp__5823__auto__){
var s__12009__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12009__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__12009__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__12011 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__12010 = (0);
while(true){
if((i__12010 < size__5479__auto__)){
var vec__12012 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5478__auto__,i__12010);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12012,(0),null);
var fill = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12012,(1),null);
cljs.core.chunk_append(b__12011,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$control,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$value,cljs.core.name(k),cljs.core.cst$kw$checked,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(gh_colorful_contributions.components.panel.user_selected_fill),cljs.core.name(k)),cljs.core.cst$kw$on_DASH_change,((function (i__12010,vec__12012,k,fill,c__5478__auto__,size__5479__auto__,b__12011,s__12009__$2,temp__5823__auto__){
return (function (e){
cljs.core.reset_BANG_(gh_colorful_contributions.components.panel.user_selected_fill,e.target.value);

return gh_colorful_contributions.data.set_selected_fill(k);
});})(i__12010,vec__12012,k,fill,c__5478__auto__,size__5479__auto__,b__12011,s__12009__$2,temp__5823__auto__))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__5480__auto__ = ((function (i__12010,vec__12012,k,fill,c__5478__auto__,size__5479__auto__,b__12011,s__12009__$2,temp__5823__auto__){
return (function gh_colorful_contributions$components$panel$panel_$_iter__12008_$_iter__12015(s__12016){
return (new cljs.core.LazySeq(null,((function (i__12010,vec__12012,k,fill,c__5478__auto__,size__5479__auto__,b__12011,s__12009__$2,temp__5823__auto__){
return (function (){
var s__12016__$1 = s__12016;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__12016__$1);
if(temp__5823__auto____$1){
var s__12016__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__12016__$2)){
var c__5478__auto____$1 = cljs.core.chunk_first(s__12016__$2);
var size__5479__auto____$1 = cljs.core.count(c__5478__auto____$1);
var b__12018 = cljs.core.chunk_buffer(size__5479__auto____$1);
if((function (){var i__12017 = (0);
while(true){
if((i__12017 < size__5479__auto____$1)){
var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5478__auto____$1,i__12017);
cljs.core.chunk_append(b__12018,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background,f], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,f], null)));

var G__12026 = (i__12017 + (1));
i__12017 = G__12026;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12018),gh_colorful_contributions$components$panel$panel_$_iter__12008_$_iter__12015(cljs.core.chunk_rest(s__12016__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12018),null);
}
} else {
var f = cljs.core.first(s__12016__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background,f], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,f], null)),gh_colorful_contributions$components$panel$panel_$_iter__12008_$_iter__12015(cljs.core.rest(s__12016__$2)));
}
} else {
return null;
}
break;
}
});})(i__12010,vec__12012,k,fill,c__5478__auto__,size__5479__auto__,b__12011,s__12009__$2,temp__5823__auto__))
,null,null));
});})(i__12010,vec__12012,k,fill,c__5478__auto__,size__5479__auto__,b__12011,s__12009__$2,temp__5823__auto__))
;
return iter__5480__auto__(fill);
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,k], null)));

var G__12027 = (i__12010 + (1));
i__12010 = G__12027;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12011),gh_colorful_contributions$components$panel$panel_$_iter__12008(cljs.core.chunk_rest(s__12009__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12011),null);
}
} else {
var vec__12019 = cljs.core.first(s__12009__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12019,(0),null);
var fill = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12019,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$control,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$value,cljs.core.name(k),cljs.core.cst$kw$checked,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(gh_colorful_contributions.components.panel.user_selected_fill),cljs.core.name(k)),cljs.core.cst$kw$on_DASH_change,((function (vec__12019,k,fill,s__12009__$2,temp__5823__auto__){
return (function (e){
cljs.core.reset_BANG_(gh_colorful_contributions.components.panel.user_selected_fill,e.target.value);

return gh_colorful_contributions.data.set_selected_fill(k);
});})(vec__12019,k,fill,s__12009__$2,temp__5823__auto__))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__5480__auto__ = ((function (vec__12019,k,fill,s__12009__$2,temp__5823__auto__){
return (function gh_colorful_contributions$components$panel$panel_$_iter__12008_$_iter__12022(s__12023){
return (new cljs.core.LazySeq(null,(function (){
var s__12023__$1 = s__12023;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__12023__$1);
if(temp__5823__auto____$1){
var s__12023__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__12023__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__12023__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__12025 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__12024 = (0);
while(true){
if((i__12024 < size__5479__auto__)){
var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5478__auto__,i__12024);
cljs.core.chunk_append(b__12025,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background,f], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,f], null)));

var G__12028 = (i__12024 + (1));
i__12024 = G__12028;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12025),gh_colorful_contributions$components$panel$panel_$_iter__12008_$_iter__12022(cljs.core.chunk_rest(s__12023__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12025),null);
}
} else {
var f = cljs.core.first(s__12023__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background,f], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,f], null)),gh_colorful_contributions$components$panel$panel_$_iter__12008_$_iter__12022(cljs.core.rest(s__12023__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__12019,k,fill,s__12009__$2,temp__5823__auto__))
;
return iter__5480__auto__(fill);
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,k], null)),gh_colorful_contributions$components$panel$panel_$_iter__12008(cljs.core.rest(s__12009__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(gh_colorful_contributions.components.panel.page_theme),"light"))?gh_colorful_contributions.data.default_fills:gh_colorful_contributions.data.dark_fills));
})())], null)], null);
});
