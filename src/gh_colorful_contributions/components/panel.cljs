(ns gh-colorful-contributions.components.panel
  (:require
   [reagent.core :as r]
   [gh-colorful-contributions.data :refer [default-fills
                                           dark-fills
                                           set-selected-fill]]))

(defonce page-theme (r/atom "light"))
(defonce user-selected-fill (r/atom "none"))

(.get
 (.. js/chrome -storage -sync)
 (clj->js {:theme "light" :gccUserSelectedFills "none"})
 (fn [result] (let [clj-result (js->clj result :keywordize-keys true)
                    theme (:theme clj-result)
                    s-fill (:gccUserSelectedFills clj-result)]
                (.setAttribute (.. js/document -documentElement) "data-theme" theme)
                (reset! page-theme theme)
                (reset! user-selected-fill s-fill))))

(defn panel []
  [:section.section.gcc-panel
   [:h2.title.is-5 "Colors:"]
   [:div.fills
    (doall (for [[k fill] (if (= @page-theme "light") default-fills dark-fills)]
             ^{:key k} [:div.control
                        [:input {:type "radio"
                                 :value (name k)
                                 :checked (= @user-selected-fill (name k))
                                 :on-change (fn [e]
                                              (reset! user-selected-fill (.. e -target -value))
                                              (set-selected-fill k))}]
                        [:ul (for [f fill]
                               ^{:key f}
                               [:li {:style {:background f}}])]]))]])
