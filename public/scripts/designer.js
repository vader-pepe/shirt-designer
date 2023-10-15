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
  const colorBtns = Array.from(document.querySelectorAll(`div.flex.gap-2.mr-20.flex-wrap > button[style="transition: all 100ms cubic-bezier(.68,-0.55,.27,1.55);"]`))
  for (let i = 0; i < colorBtns.length; i++) {
    colorBtns[i].addEventListener('click', (e) => {
      if (e.target instanceof HTMLDivElement) {
        myImg.fill(window.getComputedStyle(e.target, null).getPropertyValue('background-color'))
      }
    })
  }

  layer.add(myImg);
};
imageObj.src = '/public/assets/transparent-shirt-front.png';

layer.draw();
