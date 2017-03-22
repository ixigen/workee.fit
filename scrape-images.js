var fs = require('fs');
var request = require('request');

const links = `http://darebee.com/images/workouts/power-hold-chair-workout-intro.jpg
http://darebee.com/images/workouts/docked-workout-intro.jpg
http://darebee.com/images/workouts/twist-and-fold-workout-intro.jpg
http://darebee.com/images/workouts/cardio-chair-workout-intro.jpg
http://darebee.com/images/workouts/hero-maker-workout-intro.jpg
http://darebee.com/images/workouts/power-squat-workout-intro.jpg
http://darebee.com/images/workouts/fury-master-workout-intro.jpg
http://darebee.com/images/workouts/cardio-inc-workout-intro.jpg
http://darebee.com/images/workouts/ctrl-alt-shift-workout-intro.jpg
http://darebee.com/images/workouts/hero-for-hire-workout-intro.jpg
http://darebee.com/images/workouts/fast-and-dangerous-workout-intro.jpg
http://darebee.com/images/workouts/cardio-mill-workout-intro.jpg
http://darebee.com/images/workouts/destress-stretching-workout-intro.jpg
http://darebee.com/images/workouts/office-yoga-workout-intro.jpg
http://darebee.com/images/workouts/back-pain-yoga-chair-workout-intro.jpg
http://darebee.com/images/workouts/binary-workout-intro.jpg
http://darebee.com/images/workouts/office-warrior-workout-intro.jpg
http://darebee.com/images/workouts/back-pain-yoga-workout-intro.jpg
http://darebee.com/images/workouts/sitting-fix-workout-intro.jpg
http://darebee.com/images/workouts/fullbody-stretch-workout-intro.jpg
http://darebee.com/images/workouts/micro-break-workout-intro.jpg
http://darebee.com/images/workouts/slow-burn-workout-intro.jpg
http://darebee.com/images/workouts/fight-ready-workout-intro.jpg
http://darebee.com/images/workouts/cardio-grind-workout-intro.jpg
http://darebee.com/images/workouts/full-body-works-workout-intro.jpg
http://darebee.com/images/workouts/origami-yoga-workout-intro.jpg
http://darebee.com/images/workouts/back-fix-workout-intro.jpg
http://darebee.com/images/workouts/yoga-flow-workout-intro.jpg
http://darebee.com/images/workouts/refresh-workout-intro.jpg
http://darebee.com/images/workouts/sun-salutation-chair-workout-intro.jpg
http://darebee.com/images/workouts/cardio-party-workout-intro.jpg
http://darebee.com/images/workouts/superset-workout-intro.jpg
http://darebee.com/images/workouts/power-switch-workout-intro.jpg
http://darebee.com/images/workouts/gravity-hold-workout-intro.jpg
http://darebee.com/images/workouts/gravity-hold2-workout-intro.jpg
http://darebee.com/images/workouts/cardio-sculpt-workout-intro.jpg
http://darebee.com/images/workouts/super-charge-workout-intro.jpg
http://darebee.com/images/workouts/destress-yoga-fix-workout-intro.jpg
http://darebee.com/images/workouts/office-circuit-workout-intro.jpg
http://darebee.com/images/workouts/wall-workout-intro.jpg`;

const linkList = links.split('\n');

var download = function(uri, filename, callback){
  request.head(uri, function(err, res, body){
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);

    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

linkList.forEach(link => download(link, `./downloads/${link.split('/').pop()}`, () => console.log(link.split('/').pop())));

// download('https://www.google.com/images/srpr/logo3w.png', 'google.png', function(){
//   console.log('done');
// });