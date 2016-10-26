/* globals hopscotch: false */

/* ============ */
/* EXAMPLE TOUR */
/* ============ */
var tour = {
  id: 'hello-hopscotch',
  steps: [
    {
      target: '.active',
      title: 'Interactive Sales Charts',
      content: 'Click on these thumbnails to switch between product charts.',
      placement: 'top',
      width:250,
      arrowOffset: 60
    },

    {
      target: '.accordion',
      placement: 'top',
      title: 'Expanding and Collapsing Lists',
      content: 'Click on the plus/minus icon to expand and collapse the list.',
      width:350,    
      arrowOffset: 125
    },
    {
      target:'.ion-map',
      placement:'top',
      title:'Product Roadmaps',
      content:'Click on these icons to explore each product\s roadmap.',
      width:250,
      arrowOffset: 125,
      xOffset: -135
    },  
    { 
      target: '.headline img',
      placement: 'left',
      title: 'Have Questions?',
      content:'If you have any questions regarding the data you are seeing, click this icon for a list of names you can contact.'
    }
      
  ],
  showPrevButton: true,
  scrollTopMargin: 100
},

/* ========== */
/* TOUR SETUP */
/* ========== */
addClickListener = function(el, fn) {
  if (el.addEventListener) {
    el.addEventListener('click', fn, false);
  }
  else {
    el.attachEvent('onclick', fn);
  }
},

init = function() {
  var startBtnId = 'joyridebutton',
      calloutId = 'startTourCallout',
      mgr = hopscotch.getCalloutManager(),
      state = hopscotch.getState();

  if (state && state.indexOf('hello-hopscotch:') === 0) {
    // Already started the tour at some point!
    hopscotch.startTour(tour);
  }
  else {
    // Looking at the page for the first(?) time.
    setTimeout(function() {
      mgr.createCallout({
        id: calloutId,
        target: startBtnId,
        placement: 'bottom',
        title: 'Welcome to the Digital Delivery Dashboard',
        content: 'Press this "Take a Tour" button for a complete walkthrough of this web page.',
        yOffset: 0,
        xOffset: -50,  
        arrowOffset: 80,
        width: 200
      });
    }, 100);
  }

  addClickListener(document.getElementById(startBtnId), function() {
    if (!hopscotch.isActive) {
      mgr.removeAllCallouts();
      hopscotch.startTour(tour);
    }
  });
};

init();

