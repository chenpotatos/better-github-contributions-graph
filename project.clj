(defproject github-colorful-contributions-graph "5.0.1"
  :description "✨个性化你的 Github Contribution Gragh"
  :url "https://github.com/chenpotatos/better-github-contributions-graph"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :min-lein-version "2.7.1"

  :plugins [[dev.weavejester/lein-cljfmt "0.13.0"]]

  :dependencies [[org.clojure/clojure "1.12.0"]
                 [org.clojure/clojurescript "1.11.132"]
                 [org.clojure/data.json "2.5.1"]
                 [cljsjs/react "18.3.1-1"]
                 [cljsjs/react-dom "18.3.1-1"]
                 [reagent "1.2.0" ]]

  :source-paths ["src"]

  :aliases {"fig:build" ["trampoline" "run" "-m" "figwheel.main" "-b" "dev" "-r"]
            "fig:clean" ["run" "-m" "figwheel.main" "--clean" "dev"]
            "fig:min"   ["run" "-m" "figwheel.main" "-O" "advanced" "-bo" "min"]
            "fig:test"  ["run" "-m" "figwheel.main" "-co" "test.cljs.edn" "-m" "gh-colorful-contributions.test-runner"]}

  :profiles {:dev {:dependencies [[org.slf4j/slf4j-nop "2.0.16"]
                                  [com.bhauman/figwheel-main "0.2.20"]
                                  [com.bhauman/rebel-readline-cljs "0.1.4"]]
                   :resource-paths ["target"]
                   :clean-targets ^{:protect false} [:target-path "resources/public/cljs-out"]
                   }})
