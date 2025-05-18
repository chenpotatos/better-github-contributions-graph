(ns gh-colorful-contributions.components.footer)

(defn footer []
  [:footer.section
   [:p.has-text-right {:style {:font-size "0.875rem"}}
    "Made with ❤️ and fun by "
    [:span {:style {:color "seagreen" :cursor "pointer"}
            :on-click #(.create (.. js/chrome -tabs)
                                (clj->js {:url "https://github.com/chenpotatos"}))} "不吃土豆泥."]]])
