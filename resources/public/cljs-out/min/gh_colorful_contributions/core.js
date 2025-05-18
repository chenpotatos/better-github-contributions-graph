// Compiled by ClojureScript 1.11.132 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('gh_colorful_contributions.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.dom');
goog.require('reagent.dom');
goog.require('gh_colorful_contributions.components.header');
goog.require('gh_colorful_contributions.components.panel');
goog.require('gh_colorful_contributions.components.footer');
gh_colorful_contributions.core.get_app_element = (function gh_colorful_contributions$core$get_app_element(){
return goog.dom.getElement("app");
});
gh_colorful_contributions.core.github_colorful_contributions = (function gh_colorful_contributions$core$github_colorful_contributions(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gh_colorful_contributions.components.header.header], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hr], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gh_colorful_contributions.components.panel.panel], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gh_colorful_contributions.components.footer.footer], null)], null);
});
gh_colorful_contributions.core.mount = (function gh_colorful_contributions$core$mount(el){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gh_colorful_contributions.core.github_colorful_contributions], null),el);
});
gh_colorful_contributions.core.mount_app_element = (function gh_colorful_contributions$core$mount_app_element(){
var temp__5823__auto__ = gh_colorful_contributions.core.get_app_element();
if(cljs.core.truth_(temp__5823__auto__)){
var el = temp__5823__auto__;
return gh_colorful_contributions.core.mount(el);
} else {
return null;
}
});
gh_colorful_contributions.core.mount_app_element();
gh_colorful_contributions.core.on_reload = (function gh_colorful_contributions$core$on_reload(){
return gh_colorful_contributions.core.mount_app_element();
});
