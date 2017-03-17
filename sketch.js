var video;
var pg;
var blurSlider;
var noiseSlider;

function setup() {
  //create canvas and slider for blur effect
  canvas = createCanvas(400, 400, WEBGL);
  canvas.id('p5canvas');
  blurSlider = createSlider(0, 1, 0.5, 0.01);
  blurSlider.id('slider1');
  //create canvas for noise effects
  pg = createGraphics(400, 400, WEBGL);
  pg.id("canvas2");
  noiseSlider = createSlider (0 ,1, 0.5, 0.01);
  noiseSlider.id('slider2');
  //streaming video
  video = createCapture(VIDEO);
  video.id('p5video');
  video.hide();
  //create object for blur effect
  var seriously = new Seriously();
  var src = seriously.source('#p5video');
  var target = seriously.target('#p5canvas');
  var blur = seriously.effect('blur');
  blur.amount = '#slider1';//hook blur amount to the slider
  blur.source = src;
  target.source = blur;
  //create object for noise effect
  var seriously1 = new Seriously();
  var src1 = seriously1.source('#p5video');
  var target1 = seriously1.target('#canvas2');
  var noise = seriously1.effect('noise');
  noise.amount = '#slider2';//hook blur amount to the slider
  noise.source = src1;
  target1.source = noise;

  seriously.go();
  seriously1.go();
  pg.show();
}
