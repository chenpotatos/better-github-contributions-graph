(ns ^:figwheel-hooks gh-colorful-contributions.core
  (:require [goog.dom :as gdom]
            [reagent.dom :as rdom]
            [gh-colorful-contributions.components.header :refer [header]]
            [gh-colorful-contributions.components.panel :refer [panel]]
            [gh-colorful-contributions.components.footer :refer [footer]]))

(defn get-app-element []
  (gdom/getElement "app"))

(defn github-colorful-contributions []
  [:div.container
   [header]
   [:hr]
   [panel]
   [footer]])

(defn mount [el]
  (rdom/render [github-colorful-contributions] el))

(defn mount-app-element []
  (when-let [el (get-app-element)]
    (mount el)))

;; conditionally start your application based on the presence of an "app" element
;; this is particularly helpful for testing this ns without launching the app
(mount-app-element)

;; specify reload hook with ^:after-load metadata
(defn ^:after-load on-reload []
  (mount-app-element)
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  )
