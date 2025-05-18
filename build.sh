echo "Move images ---"

if [ -d "build/images" ]; then
  rm -r build/images
fi
cp -r resources/public/images build

echo "Move css ---"

if [ -d "build/css" ]; then
  rm -r build/css
fi
cp -r resources/public/css build

echo "Compile js ---"

lein fig:min

echo "Move js ---"

if [ -d "build/js" ]; then
  rm -r build/js
fi
cp -r resources/public/js build

# Copy the main file
cp resources/public/cljs-out/min-main.js build/js/gh-colorful-contributions.js

echo "Move manifest.json ---"
cp resources/public/manifest.json build/

if [ -f "g-c-c.zip" ]; then
  rm g-c-c.zip
fi

echo "Zip ---"
zip -r g-c-c build -x *.DS_Store
