/**
 * Theme Name: Two Up
 * Version: 1.0.0
 * Theme URL: http://sequencejs.com/themes/two-up/
 *
 * A full-screen, two column layout for showing a featured image and description
 *
 * This theme is powered by Sequence.js - The
 * responsive CSS animation framework for creating unique sliders,
 * presentations, banners, and other step-based applications.
 *
 * Author: Ian Lunn
 * Author URL: http://ianlunn.co.uk/
 *
 * Theme License: http://sequencejs.com/licenses/#free-theme
 * Sequence.js Licenses: http://sequencejs.com/licenses/
 *
 * Copyright © 2015 Ian Lunn Design Limited unless otherwise stated.
 */

// Get the Sequence element
var sequenceElement = document.getElementById("sequence");

// Place your Sequence options here to override defaults
// See: http://sequencejs.com/documentation/#options
var options = {
  phaseThreshold: false,
  fadeStepWhenSkipped: false,
  navigationSkip: false,
  autoPlayPauseOnHover: false,
  reverseWhenNavigatingBackwards: false,
  reverseTimingFunctionWhenNavigatingBackwards: false,
  startingStepAnimatesIn: false,
  startingStepId: 1,
  phaseThreshold: false,
  autoPlay: true,
  autoPlayInterval: 5000,
  fallback: {
    speed: 300
  }
}


// Launch Sequence on the element, and with the options we specified above
var mySequence = sequence(sequenceElement, options);
