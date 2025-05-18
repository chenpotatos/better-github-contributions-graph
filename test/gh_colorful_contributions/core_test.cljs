(ns gh-colorful-contributions.core-test
  (:require
   [cljs.test :refer-macros [deftest is testing]]))

(defn multiply [a b] (* a b))

(deftest multiply-test
  (is (= (* 1 2) (multiply 1 2))))

(deftest multiply-test-2
  (is (= (* 75 10) (multiply 10 75))))
