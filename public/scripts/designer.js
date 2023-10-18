/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/**
 * @type {import('konva')} Konva 
 */
// @ts-ignore
const Konva = window.Konva

var stage = new Konva.Stage({
  container: 'c',
  width: 750,
  height: 750,
});

var layer = new Konva.Layer();

stage.add(layer);

// main API:
var imageObj = new Image();
imageObj.onload = function() {
  var myImg = new Konva.Image({
    x: 0,
    y: 0,
    fill: 'rgb(0, 0, 0 )',
    image: imageObj,
    width: 750,
    height: 750,
  });

  /** @type {HTMLButtonElement[]} */
  const colorBtns = Array.from(document.querySelectorAll(`div.flex.gap-2.mr-20.flex-wrap > button[style="transition: all 100ms cubic-bezier(.68,-0.55,.27,1.55);"]`))
  for (let i = 0; i < colorBtns.length; i++) {
    colorBtns[i].addEventListener('click', (e) => {
      if (e.target instanceof HTMLDivElement) {
        myImg.fill(window.getComputedStyle(e.target, null).getPropertyValue('background-color'))
      }
    })
  }

  // 535 x 535
  // 208 x 277

  // 750 x 750
  // 327 x 258

  var box = new Konva.Rect({
    width: 258,
    height: 327,
    x: 246,
    y: 265,
    stroke: 'rgb(239,68,68)',
  });
  box.dash([10])

  layer.add(myImg);

  layer.add(box)
};

imageObj.src = '/public/assets/transparent-shirt-front.png';

layer.draw();

const inputEle = /** @type {HTMLInputElement} */(document.querySelector('#upfile'))
inputEle.addEventListener('change', e => {
  if (e.target instanceof HTMLInputElement) {
    var file = e.target.value
    var fileName = file.split("\\");
    console.log(e.target.parentElement)

    // x.innerHTML = fileName[fileName.length - 1]

  }
})
