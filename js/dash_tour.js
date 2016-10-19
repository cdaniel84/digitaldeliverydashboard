/* globals hopscotch: false */

/* ============ */
/* EXAMPLE TOUR */
/* ============ */
var tour = {
  id: 'hello-hopscotch',
  steps: [
    {
      target: '.lines',
      title: 'Interactive Sales Charts',
      content: 'Hover over the graph with your mouse to get real data.',
      placement: 'right',
      width:220,
      arrowOffset: 60
    },

    {
      target: '.accordion',
      placement: 'top',
      title: 'Expanding and Collapsing Lists',
      content: 'Click on the plus/minus icon to expand and collapse the list.',
      arrowOffset: 125
    },
    { 
      target: 'nt-example2',
      placement: 'bottom',
      title: 'Feedback',
      content:'Please share with us what else you would like this Walk Through to explain.',
      arrowOffset:80
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

