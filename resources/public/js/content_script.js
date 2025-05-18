var progressGreen = ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39']
var defaultGreen = [0, 1, 2, 3, 4].map((i) =>
  window.getComputedStyle(document.body).getPropertyValue(`--contribution-default-bgColor-${i}`)
)

var colorMode = document.documentElement.getAttribute('data-color-mode')
var darkTheme = document.documentElement.getAttribute('data-dark-theme')

function initDefaultFills(colorMode, darkTheme) {
  if (colorMode === 'dark' && darkTheme === 'dark_dimmed') {
    return {
      green: defaultGreen,
      blue: [defaultGreen[0], '#1d5494', '#1b6ac8', '#3d8af5', '#76b1ff'],
      purple: [defaultGreen[0], '#382276', '#4a2b9b', '#742de1', '#a371f7'],
      orange: [defaultGreen[0], '#533018', '#723511', '#ae5622', '#e87c39'],
      red: [defaultGreen[0], '#522020', '#6b2020', '#9e2f2f', '#e25a5a'],
      pink: [defaultGreen[0], '#fdeaea', '#fad5d5', '#f9cacb', '#f8bfc0'],
      halloween: [defaultGreen[0], '#631c03', '#bd561d', '#fa7a18', '#fddf68']
    }
  }

  return colorMode === 'light'
    ? {
        green: defaultGreen,
        blue: [defaultGreen[0], '#a4c8ff', '#388bfd', '#0366d6', '#00499e'],
        purple: [defaultGreen[0], '#d2b4ff', '#a371f7', '#7431d8', '#5b349d'],
        orange: [defaultGreen[0], '#ffab70', '#f66a0e', '#c84600', '#b04800'],
        red: [defaultGreen[0], '#ff7b72', '#f85149', '#c93c37', '#9c1e1e'],
        pink: [defaultGreen[0], '#fdeaea', '#fad5d5', '#f9cacb', '#f8bfc0'],
        halloween: [defaultGreen[0], '#631c03', '#bd561d', '#fa7a18', '#fddf68']
      }
    : {
        green: defaultGreen,
        blue: [defaultGreen[0], '#1c3251', '#2d5999', '#4993ff', '#8bb8ff'],
        purple: [defaultGreen[0], '#33274d', '#5b3b82', '#8957e5', '#b989ff'],
        orange: [defaultGreen[0], '#3d2013', '#7d3a11', '#c45e1c', '#f6854d'],
        red: [defaultGreen[0], '#37181a', '#6e2226', '#ae3636', '#f35d5d'],
        pink: [defaultGreen[0], '#fdeaea', '#fad5d5', '#f9cacb', '#f8bfc0'],
        halloween: [defaultGreen[0], '#631c03', '#bd561d', '#fa7a18', '#fddf68']
      }
}

var defaultFills = initDefaultFills(colorMode, darkTheme)

var maxTries = 5
var tries = 0
var intervalId

// If intervalId is null, it means the page has already loaded.
if (intervalId === null) {
  main()
} else {
  intervalId = setInterval(() => {
    main()

    if (++tries === maxTries) {
      clearInterval(intervalId)
      intervalId = null
    }
  }, 1000)
}

function main() {
  if (document.querySelector('.js-yearly-contributions')) {
    if (intervalId) {
      clearInterval(intervalId)
      intervalId = null
    }

    chrome.storage.sync.get(
      { gccPreDefinedFills: defaultFills.green, gccUserSelectedFills: 'green' },
      function (result) {
        chrome.storage.local.get(['isInject'], function (localResult) {
          var originFills
          if (localResult.isInject) {
            originFills = result.gccPreDefinedFills
          } else {
            originFills = defaultFills.green
          }

          run(originFills, defaultFills[result.gccUserSelectedFills])
        })
      }
    )

    initThemeObserver()
  }
}

function initThemeObserver() {
  if (typeof themeObserved !== 'undefined') {
    return
  } else {
    chrome.storage.sync.set({ theme: colorMode }) // Set the theme in advance for use by popup

    const observer = new MutationObserver(function (mutationsList) {
      for (const mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-color-mode') {
          var theme = mutation.target.getAttribute(mutation.attributeName)

          defaultFills = initDefaultFills(theme, darkTheme)
          chrome.storage.sync.get(
            {
              gccPreDefinedFills: defaultFills.green,
              gccUserSelectedFills: 'green',
            },
            function (result) {
              run(result.gccPreDefinedFills, defaultFills[result.gccUserSelectedFills])
            }
          )
          chrome.storage.sync.set({ theme })
        }
      }
    })

    observer.observe(document.documentElement, { attributes: true })
    themeObserved = true
  }
}

function run(originFills, definedFills) {
  // calendar
  const weeks = Array(53)
    .fill()
    .map((_, i) => i)
    .map((i) => document.querySelectorAll(`.js-calendar-graph-table tbody td.ContributionCalendar-day[data-ix="${i}"]`))
  if (weeks.length === 0) {
    return
  }
  weeks.forEach(function (week) {
    var rects = Array.prototype.slice.call(week)

    rects.forEach(function (rect) {
      const level = rect.getAttribute('data-level')

      rect.style.backgroundColor = definedFills[parseInt(level, 10)]
    })
  })

  // legends
  var legends = document.querySelectorAll('.js-calendar-graph .float-right div')
  Array.prototype.slice.call(legends).map(function (t, i) {
    t.style.backgroundColor = definedFills[i]
  })

  // progress
  var progressSpans = document.querySelectorAll('.Progress > span.Progress-item:not(.progress-pjax-loader-bar)')
  if (progressSpans.length) {
    Array.prototype.slice.call(progressSpans).map((span) => {
      const currentColor = span.getAttribute('data-bg-color') || span.getAttribute('style').split(' ')[2]

      span.style.backgroundColor = definedFills[progressGreen.indexOf(currentColor)]
      span.setAttribute('data-bg-color', currentColor)
    })
  }

  // Activity overview
  var activityOverviewGraph = document.querySelector('.js-activity-overview-graph-container > svg > g')
  if (activityOverviewGraph) {
    Array.prototype.slice.call(activityOverviewGraph.children).map((child) => {
      if (child.nodeName === 'path') {
        child.attributes.fill.value = definedFills[3]
        child.style.stroke = definedFills[3]
      }
      if (child.nodeName === 'line') {
        child.style.stroke = definedFills[3]
      }
      if (child.nodeName === 'ellipse') {
        child.style.stroke = definedFills[3]
      }
    })
  }

  // Isometric Contributions
  let count = 0
  const icStatsId = setInterval(() => {
    var icStatsSpans = document.querySelectorAll('.ic-contributions-wrapper .color-fg-success')

    if (icStatsSpans.length > 0) {
      Array.prototype.slice.call(icStatsSpans).map((span) => {
        span.style = `color: ${definedFills[4]} !important;`
      })
      changeIsoColors(originFills, definedFills)
      clearInterval(icStatsId)
    } else {
      count++
    }

    if (count === 10) {
      clearInterval(icStatsId)
    }
  }, 500)

  chrome.storage.sync.set({
    gccPreDefinedFills: definedFills,
  })
  chrome.storage.local.set({
    isInject: false,
  })
}

function changeIsoColors(originFills, definedFills) {
  var iso = document.querySelector('canvas#isometric-contributions')
  var ctx = iso.getContext('2d')
  var imageData = ctx.getImageData(0, 0, iso.width, iso.height)
  var data = imageData.data

  function helper(val) {
    return val
      .map((d) => {
        var color = new obelisk.CubeColor().getByHorizontalColor(parseInt('0x' + d.replace('#', ''))) // border / borderHighlight / horizontal / left / right
        var colorValues = Object.values(color)
          .map((d) => Number(d).toString(16).slice(2))
          .slice(1) // Remove border value

        return colorValues
      })
      .reduce((acc, d) => acc.concat(d), [])
      .map(hex2rgb)
      .map((d) => `${d.r},${d.g},${d.b}`)
  }

  var originFillsObelisk = helper(originFills)
  var definedFillsObelisk = helper(definedFills)

  for (var i = 0; i < data.length; i += 4) {
    var originalRgb = `${data[i]},${data[i + 1]},${data[i + 2]}`
    var hit = originFillsObelisk.indexOf(originalRgb)

    if (hit > 0) {
      var rgb = definedFillsObelisk[hit].split(',').map((d) => parseInt(d, 10))

      data[i] = rgb[0]
      data[i + 1] = rgb[1]
      data[i + 2] = rgb[2]
    }
  }

  ctx.putImageData(imageData, 0, 0)
}

function hex2rgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)

  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null
}
