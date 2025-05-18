(ns gh-colorful-contributions.data)

(def default-fills {:green ["#aceebb", "#4ac26b", "#2da44e", "#116329"]
                    :blue [ "#a4c8ff", "#388bfd", "#0366d6", "#00499e"]
                    :purple ["#d2b4ff", "#a371f7", "#7431d8", "#5b349d"]
                    :orange ["#ffab70", "#f66a0e", "#c84600", "#b04800"]
                    :red ["#ff7b72", "#f85149", "#c93c37", "#9c1e1e"]
                    :pink ["#fdeaea", "#fad5d5", "#f9cacb", "#f8bfc0"]
                    :halloween ["#631c03", "#bd561d", "#fa7a18", "#fddf68"]})

(def dark-fills {:green ["#033a16", "#196c2e", "#2ea043", "#56d364"]
                 :blue [ "#1c3251", "#2d5999", "#4993ff", "#8bb8ff"]
                 :purple ["#33274d", "#5b3b82", "#8957e5", "#b989ff"]
                 :orange ["#3d2013", "#7d3a11", "#c45e1c", "#f6854d"]
                 :red ["#37181a", "#6e2226", "#ae3636", "#f35d5d"]
                 :pink ["#fdeaea", "#fad5d5", "#f9cacb", "#f8bfc0"]
                 :halloween ["#631c03", "#bd561d", "#fa7a18", "#fddf68"]})

(defn reload-content-scripts []
  (.sendMessage (.. js/chrome -runtime) "runInject"))

(defn set-selected-fill [key]
  (.set (.. js/chrome -storage -sync)
        (clj->js {:gccUserSelectedFills key}))
  (reload-content-scripts))
