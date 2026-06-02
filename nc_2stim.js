/***************** 
 * Nc_2Stim *
 *****************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2026.1.3.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'nc_2stim';  // from the Builder filename that created this script
let expInfo = {
    '班別學號 (e.g., 1a01)': '',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color('white'),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(introRoutineBegin());
flowScheduler.add(introRoutineEachFrame());
flowScheduler.add(introRoutineEnd());
flowScheduler.add(blank1000RoutineBegin());
flowScheduler.add(blank1000RoutineEachFrame());
flowScheduler.add(blank1000RoutineEnd());
const preloopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(preloopLoopBegin(preloopLoopScheduler));
flowScheduler.add(preloopLoopScheduler);
flowScheduler.add(preloopLoopEnd);



flowScheduler.add(intro2RoutineBegin());
flowScheduler.add(intro2RoutineEachFrame());
flowScheduler.add(intro2RoutineEnd());
flowScheduler.add(blank1000RoutineBegin());
flowScheduler.add(blank1000RoutineEachFrame());
flowScheduler.add(blank1000RoutineEnd());
const testloopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(testloopLoopBegin(testloopLoopScheduler));
flowScheduler.add(testloopLoopScheduler);
flowScheduler.add(testloopLoopEnd);



flowScheduler.add(thankRoutineBegin());
flowScheduler.add(thankRoutineEachFrame());
flowScheduler.add(thankRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'resources/ncprac.csv', 'path': 'resources/ncprac.csv'},
    {'name': 'resources/nc2test.csv', 'path': 'resources/nc2test.csv'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2026.1.3';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["\u73ed\u5225\u5b78\u865f (e.g., 1a01)"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var introClock;
var introtext;
var ok;
var blank1000Clock;
var b1000;
var preClock;
var left;
var right;
var leftbutt;
var rightbutt;
var blank500Clock;
var b500;
var intro2Clock;
var introtext_2;
var ok_2;
var testClock;
var left_2;
var right_2;
var leftbutt_2;
var rightbutt_2;
var thankClock;
var introtext_3;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "intro"
  introClock = new util.Clock();
  introtext = new visual.TextBox({
    win: psychoJS.window,
    name: 'introtext',
    text: '接下來，你會在螢幕兩邊看到兩個三位數。\n請用最快的速度，將手指點在數值較大的數字上。\n\n現在有三題練習題讓你熟悉測試內容，\n準備好後按 “OK” 按鈕即可開始。',
    placeholder: 'Type here...',
    font: 'Noto Sans TC',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [1.2, 1.2],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  ok = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'ok',
    text: 'OK',
    font: 'Noto Sans TC',
    pos: [0.45, (- 0.35)],
    size: [0.2, 0.08],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'aliceblue',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -1,
    letterHeight: 0.05,
    bold: false,
    italic: false,
  });
  ok.clock = new util.Clock();
  
  // Initialize components for Routine "blank1000"
  blank1000Clock = new util.Clock();
  b1000 = new visual.TextBox({
    win: psychoJS.window,
    name: 'b1000',
    text: '.',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.5, 0.5],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  // Initialize components for Routine "pre"
  preClock = new util.Clock();
  left = new visual.TextBox({
    win: psychoJS.window,
    name: 'left',
    text: '',
    placeholder: 'Type here...',
    font: 'Noto Sans TC',
    pos: [(- 0.3), 0], 
    draggable: false,
    letterHeight: 0.1,
    lineSpacing: 1.0,
    size: [0.5, 0.5],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  right = new visual.TextBox({
    win: psychoJS.window,
    name: 'right',
    text: '',
    placeholder: 'Type here...',
    font: 'Noto Sans TC',
    pos: [0.3, 0], 
    draggable: false,
    letterHeight: 0.1,
    lineSpacing: 1.0,
    size: [0.5, 0.5],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -1
  });
  
  leftbutt = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'leftbutt',
    text: '',
    font: 'Noto Sans TC',
    pos: [(- 0.3), 0],
    size: [0.5, 0.5],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: null,
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0,
    opacity: null,
    depth: -2,
    letterHeight: 0.05,
    bold: false,
    italic: false,
  });
  leftbutt.clock = new util.Clock();
  
  rightbutt = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'rightbutt',
    text: '',
    font: 'Noto Sans TC',
    pos: [0.3, 0],
    size: [0.5, 1],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: null,
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0,
    opacity: null,
    depth: -3,
    letterHeight: 0.05,
    bold: false,
    italic: false,
  });
  rightbutt.clock = new util.Clock();
  
  // Initialize components for Routine "blank500"
  blank500Clock = new util.Clock();
  b500 = new visual.TextBox({
    win: psychoJS.window,
    name: 'b500',
    text: '.',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.5, 0.5],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  // Initialize components for Routine "intro2"
  intro2Clock = new util.Clock();
  introtext_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'introtext_2',
    text: '接下來，你會在螢幕兩邊看到兩個三位數。\n請用最快的速度，將手指點在數值較大的數字上。\n\n測試共有二十題，\n準備好後按 “OK” 按鈕即可開始。',
    placeholder: 'Type here...',
    font: 'Noto Sans TC',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [1.2, 1.2],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  ok_2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'ok_2',
    text: 'OK',
    font: 'Noto Sans TC',
    pos: [0.45, (- 0.35)],
    size: [0.2, 0.08],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'black',
    fillColor: 'aliceblue',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -1,
    letterHeight: 0.05,
    bold: false,
    italic: false,
  });
  ok_2.clock = new util.Clock();
  
  // Initialize components for Routine "test"
  testClock = new util.Clock();
  left_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'left_2',
    text: '',
    placeholder: 'Type here...',
    font: 'Noto Sans TC',
    pos: [(- 0.3), 0], 
    draggable: false,
    letterHeight: 0.1,
    lineSpacing: 1.0,
    size: [0.5, 0.5],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  right_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'right_2',
    text: '',
    placeholder: 'Type here...',
    font: 'Noto Sans TC',
    pos: [0.3, 0], 
    draggable: false,
    letterHeight: 0.1,
    lineSpacing: 1.0,
    size: [0.5, 0.5],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: 'black',
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  leftbutt_2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'leftbutt_2',
    text: '',
    font: 'Noto Sans TC',
    pos: [(- 0.3), 0],
    size: [0.5, 0.5],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: null,
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0,
    opacity: null,
    depth: -2,
    letterHeight: 0.05,
    bold: false,
    italic: false,
  });
  leftbutt_2.clock = new util.Clock();
  
  rightbutt_2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'rightbutt_2',
    text: '',
    font: 'Noto Sans TC',
    pos: [0.3, 0],
    size: [0.5, 0.5],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: null,
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0,
    opacity: null,
    depth: -3,
    letterHeight: 0.05,
    bold: false,
    italic: false,
  });
  rightbutt_2.clock = new util.Clock();
  
  // Initialize components for Routine "thank"
  thankClock = new util.Clock();
  introtext_3 = new visual.TextBox({
    win: psychoJS.window,
    name: 'introtext_3',
    text: '恭喜你！你已完成數字比較（一）之測試。\n請不要離開頁面，等待下一步指示。',
    placeholder: 'Type here...',
    font: 'Noto Sans TC',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [1.2, 1.2],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var introMaxDurationReached;
var introMaxDuration;
var introComponents;
function introRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'intro' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    introClock.reset();
    routineTimer.reset();
    introMaxDurationReached = false;
    // update component parameters for each repeat
    // reset ok to account for continued clicks & clear times on/off
    ok.reset()
    psychoJS.experiment.addData('intro.started', globalClock.getTime());
    introMaxDuration = null
    // keep track of which components have finished
    introComponents = [];
    introComponents.push(introtext);
    introComponents.push(ok);
    
    for (const thisComponent of introComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function introRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'intro' ---
    // get current time
    t = introClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *introtext* updates
    if (t >= 0.0 && introtext.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      introtext.tStart = t;  // (not accounting for frame time here)
      introtext.frameNStart = frameN;  // exact frame index
      
      introtext.setAutoDraw(true);
    }
    
    
    // if introtext is active this frame...
    if (introtext.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *ok* updates
    if (t >= 0 && ok.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ok.tStart = t;  // (not accounting for frame time here)
      ok.frameNStart = frameN;  // exact frame index
      
      ok.setAutoDraw(true);
    }
    
    
    // if ok is active this frame...
    if (ok.status === PsychoJS.Status.STARTED) {
    }
    
    if (ok.status === PsychoJS.Status.STARTED) {
      // check whether ok has been pressed
      if (ok.isClicked) {
        if (!ok.wasClicked) {
          // store time of first click
          ok.timesOn.push(ok.clock.getTime());
          // store time clicked until
          ok.timesOff.push(ok.clock.getTime());
        } else {
          // update time clicked until;
          ok.timesOff[ok.timesOff.length - 1] = ok.clock.getTime();
        }
        if (!ok.wasClicked) {
          // end routine when ok is clicked
          continueRoutine = false;
          
        }
        // if ok is still clicked next frame, it is not a new click
        ok.wasClicked = true;
      } else {
        // if ok is clicked next frame, it is a new click
        ok.wasClicked = false;
      }
    } else {
      // keep clock at 0 if ok hasn't started / has finished
      ok.clock.reset();
      // if ok is clicked next frame, it is a new click
      ok.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of introComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function introRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'intro' ---
    for (const thisComponent of introComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('intro.stopped', globalClock.getTime());
    psychoJS.experiment.addData('ok.numClicks', ok.numClicks);
    psychoJS.experiment.addData('ok.timesOn', ok.timesOn);
    psychoJS.experiment.addData('ok.timesOff', ok.timesOff);
    // the Routine "intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var blank1000MaxDurationReached;
var blank1000MaxDuration;
var blank1000Components;
function blank1000RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'blank1000' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    blank1000Clock.reset(routineTimer.getTime());
    routineTimer.add(1.000000);
    blank1000MaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('blank1000.started', globalClock.getTime());
    blank1000MaxDuration = null
    // keep track of which components have finished
    blank1000Components = [];
    blank1000Components.push(b1000);
    
    for (const thisComponent of blank1000Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function blank1000RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'blank1000' ---
    // get current time
    t = blank1000Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *b1000* updates
    if (t >= 0.0 && b1000.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      b1000.tStart = t;  // (not accounting for frame time here)
      b1000.frameNStart = frameN;  // exact frame index
      
      b1000.setAutoDraw(true);
    }
    
    
    // if b1000 is active this frame...
    if (b1000.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (b1000.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      b1000.tStop = t;  // not accounting for scr refresh
      b1000.frameNStop = frameN;  // exact frame index
      // update status
      b1000.status = PsychoJS.Status.FINISHED;
      b1000.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of blank1000Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function blank1000RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'blank1000' ---
    for (const thisComponent of blank1000Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('blank1000.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (blank1000MaxDurationReached) {
        blank1000Clock.add(blank1000MaxDuration);
    } else {
        blank1000Clock.add(1.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var preloop;
function preloopLoopBegin(preloopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    preloop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'resources/ncprac.csv',
      seed: undefined, name: 'preloop'
    });
    psychoJS.experiment.addLoop(preloop); // add the loop to the experiment
    currentLoop = preloop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPreloop of preloop) {
      snapshot = preloop.getSnapshot();
      preloopLoopScheduler.add(importConditions(snapshot));
      preloopLoopScheduler.add(preRoutineBegin(snapshot));
      preloopLoopScheduler.add(preRoutineEachFrame());
      preloopLoopScheduler.add(preRoutineEnd(snapshot));
      preloopLoopScheduler.add(blank500RoutineBegin(snapshot));
      preloopLoopScheduler.add(blank500RoutineEachFrame());
      preloopLoopScheduler.add(blank500RoutineEnd(snapshot));
      preloopLoopScheduler.add(preloopLoopEndIteration(preloopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function preloopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(preloop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function preloopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var testloop;
function testloopLoopBegin(testloopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    testloop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'resources/nc2test.csv',
      seed: undefined, name: 'testloop'
    });
    psychoJS.experiment.addLoop(testloop); // add the loop to the experiment
    currentLoop = testloop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTestloop of testloop) {
      snapshot = testloop.getSnapshot();
      testloopLoopScheduler.add(importConditions(snapshot));
      testloopLoopScheduler.add(testRoutineBegin(snapshot));
      testloopLoopScheduler.add(testRoutineEachFrame());
      testloopLoopScheduler.add(testRoutineEnd(snapshot));
      testloopLoopScheduler.add(blank500RoutineBegin(snapshot));
      testloopLoopScheduler.add(blank500RoutineEachFrame());
      testloopLoopScheduler.add(blank500RoutineEnd(snapshot));
      testloopLoopScheduler.add(testloopLoopEndIteration(testloopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function testloopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(testloop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function testloopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var preMaxDurationReached;
var preMaxDuration;
var preComponents;
function preRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'pre' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    preClock.reset();
    routineTimer.reset();
    preMaxDurationReached = false;
    // update component parameters for each repeat
    left.setText(Ltext);
    right.setText(Rtext);
    // reset leftbutt to account for continued clicks & clear times on/off
    leftbutt.reset()
    // reset rightbutt to account for continued clicks & clear times on/off
    rightbutt.reset()
    psychoJS.experiment.addData('pre.started', globalClock.getTime());
    preMaxDuration = null
    // keep track of which components have finished
    preComponents = [];
    preComponents.push(left);
    preComponents.push(right);
    preComponents.push(leftbutt);
    preComponents.push(rightbutt);
    
    for (const thisComponent of preComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function preRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'pre' ---
    // get current time
    t = preClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *left* updates
    if (t >= 0.0 && left.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      left.tStart = t;  // (not accounting for frame time here)
      left.frameNStart = frameN;  // exact frame index
      
      left.setAutoDraw(true);
    }
    
    
    // if left is active this frame...
    if (left.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *right* updates
    if (t >= 0.0 && right.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      right.tStart = t;  // (not accounting for frame time here)
      right.frameNStart = frameN;  // exact frame index
      
      right.setAutoDraw(true);
    }
    
    
    // if right is active this frame...
    if (right.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *leftbutt* updates
    if (t >= 0 && leftbutt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      leftbutt.tStart = t;  // (not accounting for frame time here)
      leftbutt.frameNStart = frameN;  // exact frame index
      
      leftbutt.setAutoDraw(true);
    }
    
    
    // if leftbutt is active this frame...
    if (leftbutt.status === PsychoJS.Status.STARTED) {
    }
    
    if (leftbutt.status === PsychoJS.Status.STARTED) {
      // check whether leftbutt has been pressed
      if (leftbutt.isClicked) {
        if (!leftbutt.wasClicked) {
          // store time of first click
          leftbutt.timesOn.push(leftbutt.clock.getTime());
          // store time clicked until
          leftbutt.timesOff.push(leftbutt.clock.getTime());
        } else {
          // update time clicked until;
          leftbutt.timesOff[leftbutt.timesOff.length - 1] = leftbutt.clock.getTime();
        }
        if (!leftbutt.wasClicked) {
          // end routine when leftbutt is clicked
          continueRoutine = false;
          
        }
        // if leftbutt is still clicked next frame, it is not a new click
        leftbutt.wasClicked = true;
      } else {
        // if leftbutt is clicked next frame, it is a new click
        leftbutt.wasClicked = false;
      }
    } else {
      // keep clock at 0 if leftbutt hasn't started / has finished
      leftbutt.clock.reset();
      // if leftbutt is clicked next frame, it is a new click
      leftbutt.wasClicked = false;
    }
    
    // *rightbutt* updates
    if (t >= 0 && rightbutt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rightbutt.tStart = t;  // (not accounting for frame time here)
      rightbutt.frameNStart = frameN;  // exact frame index
      
      rightbutt.setAutoDraw(true);
    }
    
    
    // if rightbutt is active this frame...
    if (rightbutt.status === PsychoJS.Status.STARTED) {
    }
    
    if (rightbutt.status === PsychoJS.Status.STARTED) {
      // check whether rightbutt has been pressed
      if (rightbutt.isClicked) {
        if (!rightbutt.wasClicked) {
          // store time of first click
          rightbutt.timesOn.push(rightbutt.clock.getTime());
          // store time clicked until
          rightbutt.timesOff.push(rightbutt.clock.getTime());
        } else {
          // update time clicked until;
          rightbutt.timesOff[rightbutt.timesOff.length - 1] = rightbutt.clock.getTime();
        }
        if (!rightbutt.wasClicked) {
          // end routine when rightbutt is clicked
          continueRoutine = false;
          
        }
        // if rightbutt is still clicked next frame, it is not a new click
        rightbutt.wasClicked = true;
      } else {
        // if rightbutt is clicked next frame, it is a new click
        rightbutt.wasClicked = false;
      }
    } else {
      // keep clock at 0 if rightbutt hasn't started / has finished
      rightbutt.clock.reset();
      // if rightbutt is clicked next frame, it is a new click
      rightbutt.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of preComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function preRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'pre' ---
    for (const thisComponent of preComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('pre.stopped', globalClock.getTime());
    psychoJS.experiment.addData('leftbutt.numClicks', leftbutt.numClicks);
    psychoJS.experiment.addData('leftbutt.timesOn', leftbutt.timesOn);
    psychoJS.experiment.addData('leftbutt.timesOff', leftbutt.timesOff);
    psychoJS.experiment.addData('rightbutt.numClicks', rightbutt.numClicks);
    psychoJS.experiment.addData('rightbutt.timesOn', rightbutt.timesOn);
    psychoJS.experiment.addData('rightbutt.timesOff', rightbutt.timesOff);
    // the Routine "pre" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var blank500MaxDurationReached;
var blank500MaxDuration;
var blank500Components;
function blank500RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'blank500' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    blank500Clock.reset(routineTimer.getTime());
    routineTimer.add(0.500000);
    blank500MaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('blank500.started', globalClock.getTime());
    blank500MaxDuration = null
    // keep track of which components have finished
    blank500Components = [];
    blank500Components.push(b500);
    
    for (const thisComponent of blank500Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function blank500RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'blank500' ---
    // get current time
    t = blank500Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *b500* updates
    if (t >= 0.0 && b500.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      b500.tStart = t;  // (not accounting for frame time here)
      b500.frameNStart = frameN;  // exact frame index
      
      b500.setAutoDraw(true);
    }
    
    
    // if b500 is active this frame...
    if (b500.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (b500.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      b500.tStop = t;  // not accounting for scr refresh
      b500.frameNStop = frameN;  // exact frame index
      // update status
      b500.status = PsychoJS.Status.FINISHED;
      b500.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of blank500Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function blank500RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'blank500' ---
    for (const thisComponent of blank500Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('blank500.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (blank500MaxDurationReached) {
        blank500Clock.add(blank500MaxDuration);
    } else {
        blank500Clock.add(0.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var intro2MaxDurationReached;
var intro2MaxDuration;
var intro2Components;
function intro2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'intro2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    intro2Clock.reset();
    routineTimer.reset();
    intro2MaxDurationReached = false;
    // update component parameters for each repeat
    // reset ok_2 to account for continued clicks & clear times on/off
    ok_2.reset()
    psychoJS.experiment.addData('intro2.started', globalClock.getTime());
    intro2MaxDuration = null
    // keep track of which components have finished
    intro2Components = [];
    intro2Components.push(introtext_2);
    intro2Components.push(ok_2);
    
    for (const thisComponent of intro2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function intro2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'intro2' ---
    // get current time
    t = intro2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *introtext_2* updates
    if (t >= 0.0 && introtext_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      introtext_2.tStart = t;  // (not accounting for frame time here)
      introtext_2.frameNStart = frameN;  // exact frame index
      
      introtext_2.setAutoDraw(true);
    }
    
    
    // if introtext_2 is active this frame...
    if (introtext_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *ok_2* updates
    if (t >= 0 && ok_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ok_2.tStart = t;  // (not accounting for frame time here)
      ok_2.frameNStart = frameN;  // exact frame index
      
      ok_2.setAutoDraw(true);
    }
    
    
    // if ok_2 is active this frame...
    if (ok_2.status === PsychoJS.Status.STARTED) {
    }
    
    if (ok_2.status === PsychoJS.Status.STARTED) {
      // check whether ok_2 has been pressed
      if (ok_2.isClicked) {
        if (!ok_2.wasClicked) {
          // store time of first click
          ok_2.timesOn.push(ok_2.clock.getTime());
          // store time clicked until
          ok_2.timesOff.push(ok_2.clock.getTime());
        } else {
          // update time clicked until;
          ok_2.timesOff[ok_2.timesOff.length - 1] = ok_2.clock.getTime();
        }
        if (!ok_2.wasClicked) {
          // end routine when ok_2 is clicked
          continueRoutine = false;
          
        }
        // if ok_2 is still clicked next frame, it is not a new click
        ok_2.wasClicked = true;
      } else {
        // if ok_2 is clicked next frame, it is a new click
        ok_2.wasClicked = false;
      }
    } else {
      // keep clock at 0 if ok_2 hasn't started / has finished
      ok_2.clock.reset();
      // if ok_2 is clicked next frame, it is a new click
      ok_2.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of intro2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function intro2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'intro2' ---
    for (const thisComponent of intro2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('intro2.stopped', globalClock.getTime());
    psychoJS.experiment.addData('ok_2.numClicks', ok_2.numClicks);
    psychoJS.experiment.addData('ok_2.timesOn', ok_2.timesOn);
    psychoJS.experiment.addData('ok_2.timesOff', ok_2.timesOff);
    // the Routine "intro2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var testMaxDurationReached;
var testMaxDuration;
var testComponents;
function testRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'test' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    testClock.reset();
    routineTimer.reset();
    testMaxDurationReached = false;
    // update component parameters for each repeat
    left_2.setText(Ltext);
    right_2.setText(Rtext);
    // reset leftbutt_2 to account for continued clicks & clear times on/off
    leftbutt_2.reset()
    // reset rightbutt_2 to account for continued clicks & clear times on/off
    rightbutt_2.reset()
    psychoJS.experiment.addData('test.started', globalClock.getTime());
    testMaxDuration = null
    // keep track of which components have finished
    testComponents = [];
    testComponents.push(left_2);
    testComponents.push(right_2);
    testComponents.push(leftbutt_2);
    testComponents.push(rightbutt_2);
    
    for (const thisComponent of testComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function testRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'test' ---
    // get current time
    t = testClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *left_2* updates
    if (t >= 0.0 && left_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      left_2.tStart = t;  // (not accounting for frame time here)
      left_2.frameNStart = frameN;  // exact frame index
      
      left_2.setAutoDraw(true);
    }
    
    
    // if left_2 is active this frame...
    if (left_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *right_2* updates
    if (t >= 0.0 && right_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      right_2.tStart = t;  // (not accounting for frame time here)
      right_2.frameNStart = frameN;  // exact frame index
      
      right_2.setAutoDraw(true);
    }
    
    
    // if right_2 is active this frame...
    if (right_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *leftbutt_2* updates
    if (t >= 0 && leftbutt_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      leftbutt_2.tStart = t;  // (not accounting for frame time here)
      leftbutt_2.frameNStart = frameN;  // exact frame index
      
      leftbutt_2.setAutoDraw(true);
    }
    
    
    // if leftbutt_2 is active this frame...
    if (leftbutt_2.status === PsychoJS.Status.STARTED) {
    }
    
    if (leftbutt_2.status === PsychoJS.Status.STARTED) {
      // check whether leftbutt_2 has been pressed
      if (leftbutt_2.isClicked) {
        if (!leftbutt_2.wasClicked) {
          // store time of first click
          leftbutt_2.timesOn.push(leftbutt_2.clock.getTime());
          // store time clicked until
          leftbutt_2.timesOff.push(leftbutt_2.clock.getTime());
        } else {
          // update time clicked until;
          leftbutt_2.timesOff[leftbutt_2.timesOff.length - 1] = leftbutt_2.clock.getTime();
        }
        if (!leftbutt_2.wasClicked) {
          // end routine when leftbutt_2 is clicked
          continueRoutine = false;
          
        }
        // if leftbutt_2 is still clicked next frame, it is not a new click
        leftbutt_2.wasClicked = true;
      } else {
        // if leftbutt_2 is clicked next frame, it is a new click
        leftbutt_2.wasClicked = false;
      }
    } else {
      // keep clock at 0 if leftbutt_2 hasn't started / has finished
      leftbutt_2.clock.reset();
      // if leftbutt_2 is clicked next frame, it is a new click
      leftbutt_2.wasClicked = false;
    }
    
    // *rightbutt_2* updates
    if (t >= 0 && rightbutt_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rightbutt_2.tStart = t;  // (not accounting for frame time here)
      rightbutt_2.frameNStart = frameN;  // exact frame index
      
      rightbutt_2.setAutoDraw(true);
    }
    
    
    // if rightbutt_2 is active this frame...
    if (rightbutt_2.status === PsychoJS.Status.STARTED) {
    }
    
    if (rightbutt_2.status === PsychoJS.Status.STARTED) {
      // check whether rightbutt_2 has been pressed
      if (rightbutt_2.isClicked) {
        if (!rightbutt_2.wasClicked) {
          // store time of first click
          rightbutt_2.timesOn.push(rightbutt_2.clock.getTime());
          // store time clicked until
          rightbutt_2.timesOff.push(rightbutt_2.clock.getTime());
        } else {
          // update time clicked until;
          rightbutt_2.timesOff[rightbutt_2.timesOff.length - 1] = rightbutt_2.clock.getTime();
        }
        if (!rightbutt_2.wasClicked) {
          // end routine when rightbutt_2 is clicked
          continueRoutine = false;
          
        }
        // if rightbutt_2 is still clicked next frame, it is not a new click
        rightbutt_2.wasClicked = true;
      } else {
        // if rightbutt_2 is clicked next frame, it is a new click
        rightbutt_2.wasClicked = false;
      }
    } else {
      // keep clock at 0 if rightbutt_2 hasn't started / has finished
      rightbutt_2.clock.reset();
      // if rightbutt_2 is clicked next frame, it is a new click
      rightbutt_2.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of testComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function testRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'test' ---
    for (const thisComponent of testComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('test.stopped', globalClock.getTime());
    psychoJS.experiment.addData('leftbutt_2.numClicks', leftbutt_2.numClicks);
    psychoJS.experiment.addData('leftbutt_2.timesOn', leftbutt_2.timesOn);
    psychoJS.experiment.addData('leftbutt_2.timesOff', leftbutt_2.timesOff);
    psychoJS.experiment.addData('rightbutt_2.numClicks', rightbutt_2.numClicks);
    psychoJS.experiment.addData('rightbutt_2.timesOn', rightbutt_2.timesOn);
    psychoJS.experiment.addData('rightbutt_2.timesOff', rightbutt_2.timesOff);
    // the Routine "test" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var thankMaxDurationReached;
var thankMaxDuration;
var thankComponents;
function thankRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot);
    
    // Disable automatic browser download (optional)
    psychoJS._saveResults = 0;
    
    // --- Helper: Convert experiment data to CSV ---
    function getExperimentData() {
      // Try to get data from the ExperimentHandler
      let allData = [];
      
      // Method 1: _trialsData (most common)
      if (psychoJS.experiment._trialsData && psychoJS.experiment._trialsData.length > 0) {
        allData = psychoJS.experiment._trialsData;
      }
      // Method 2: _dataEntries (fallback)
      else if (psychoJS.experiment._dataEntries && psychoJS.experiment._dataEntries.length > 0) {
        allData = psychoJS.experiment._dataEntries;
      }
      // Method 3: getTrialData() if available
      else if (typeof psychoJS.experiment.getTrialData === 'function') {
        allData = psychoJS.experiment.getTrialData();
      }
      
      if (allData.length === 0) {
        console.warn('No trial data found. Check experiment data collection.');
        return null;
      }
      
      // Build CSV
      const headers = Object.keys(allData[0]);
      const rows = allData.map(row => 
        headers.map(h => JSON.stringify(row[h] || '')).join(',')
      );
      return [headers.join(','), ...rows].join('\n');
    }
    
    // --- Extract data ---
    const csvData = getExperimentData();
    if (!csvData) {
      console.error('No data to save – experiment may have recorded nothing.');
      // Still continue to show thank you screen
    } else {
      // Prepare filename
      const participantId = expInfo["班別學號 (e.g., 1a01)"] || 'unknown';
      const filename = `data/${participantId}_${expName}_${expInfo["date"]}.csv`;
      
      console.log('Saving data to OSF via DataPipe...');
      console.log(`Filename: ${filename}`);
      console.log(`Data length: ${csvData.length} characters`);
      
      try {
        const response = await fetch('https://pipe.jpsych.org/api/data', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': '*/*',
          },
          body: JSON.stringify({
            experimentID: 'Pyz0Uh6L3iCs',  // your DataPipe experiment ID
            filename: filename,
            data: csvData,
          }),
        });
        
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        const result = await response.json();
        console.log('DataPipe upload successful:', result);
      } catch (error) {
        console.error('Failed to save data to OSF:', error);
        // Optionally alert the user, but do not break the experiment
      }
    }
    
    // --- Original routine setup (unchanged) ---
    t = 0;
    frameN = -1;
    continueRoutine = true;
    routineForceEnded = false;
    thankClock.reset(routineTimer.getTime());
    routineTimer.add(10.000000);
    thankMaxDurationReached = false;
    psychoJS.experiment.addData('thank.started', globalClock.getTime());
    thankMaxDuration = null;
    thankComponents = [];
    thankComponents.push(introtext_3);
    
    for (const thisComponent of thankComponents) {
      if ('status' in thisComponent) {
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
      }
    }
    
    return Scheduler.Event.NEXT;
  };
}


function thankRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'thank' ---
    // get current time
    t = thankClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *introtext_3* updates
    if (t >= 0.0 && introtext_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      introtext_3.tStart = t;  // (not accounting for frame time here)
      introtext_3.frameNStart = frameN;  // exact frame index
      
      introtext_3.setAutoDraw(true);
    }
    
    
    // if introtext_3 is active this frame...
    if (introtext_3.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (introtext_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      introtext_3.tStop = t;  // not accounting for scr refresh
      introtext_3.frameNStop = frameN;  // exact frame index
      // update status
      introtext_3.status = PsychoJS.Status.FINISHED;
      introtext_3.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of thankComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function thankRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'thank' ---
    for (const thisComponent of thankComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('thank.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (thankMaxDurationReached) {
        thankClock.add(thankMaxDuration);
    } else {
        thankClock.add(10.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
