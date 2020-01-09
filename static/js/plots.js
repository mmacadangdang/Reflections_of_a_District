
// Median Household Income - Line Chart
var trace1 = {
  x: ["2015", "2016", "2017", "2018"],
  y: ["$101,133", "$107,075 ", "$115,908 ", "$122,930"],
  name: "MHI",
  type: "line"
};

// Number of Students Enrolled - Line Chart
var trace2 = {
  x: ["2015-206", "2016-2017", "2017-2018", "2018-2019"],
  y: [9357, 9260, 9133, 8887],
  name: "Students Enrolled",
  type: "line",
  xaxis: 'x2',
  yaxis: 'y2',
  type: 'line'
};

var data = [trace1, trace2];

var layout = {
  xaxis: { title: "Year" },
  yaxis: { title: "MHI" },
  xaxis2: { title: "School Year"},
  yaxis2: { title:  "# of Students"},
  width: 1300,
  height: 700,
  grid: {
    rows: 2,
    columns: 1,
    pattern: 'independent',
    roworder: 'top to bottom'}
};

Plotly.newPlot('plot', data, layout);

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml14 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml14 .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeInOutExpo",
    duration: 900
  }).add({
    targets: '.ml14 .letter',
    opacity: [0,1],
    translateX: [40,0],
    translateZ: 0,
    scaleX: [0.3, 1],
    easing: "easeOutExpo",
    duration: 800,
    offset: '-=600',
    delay: (el, i) => 150 + 25 * i
  }).add({
    targets: '.ml14',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });


