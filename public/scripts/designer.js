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
var mainCanvas = new Image();
mainCanvas.onload = function() {
  var mainCanvasImg = new Konva.Image({
    x: 0,
    y: 0,
    fill: 'rgb(0, 0, 0 )',
    image: mainCanvas,
    width: 750,
    height: 750,
  });

  const colorBtns = /** @type {HTMLButtonElement[]} */(Array.from(document.querySelectorAll(`div.flex.gap-2.mr-20.flex-wrap > button[style="transition: all 100ms cubic-bezier(.68,-0.55,.27,1.55);"]`)))
  for (let i = 0; i < colorBtns.length; i++) {
    colorBtns[i].addEventListener('click', (e) => {
      if (e.target instanceof HTMLDivElement) {
        mainCanvasImg.fill(window.getComputedStyle(e.target, null).getPropertyValue('background-color'))
      }
    })
  }

  // teespring dimension
  // 535 x 535
  // 208 x 277

  // teecraft dimension
  // 750 x 750
  // 327 x 258

  const designAreaPos = {
    x: 246,
    y: 265,
  }
  const designAreaDimension = {
    width: 258,
    height: 327,
  }
  var designArea = new Konva.Rect({
    width: designAreaDimension.width,
    height: designAreaDimension.height,
    x: designAreaPos.x,
    y: designAreaPos.y,
    stroke: 'rgb(239,68,68)',
  });
  designArea.dash([10])
  designArea.listening(false);

  const inputEle = /** @type {HTMLInputElement} */(document.querySelector('#upfile'))
  inputEle.addEventListener('change', e => {
    if (e.target instanceof HTMLInputElement) {
      const file = e.target.files?.[0]
      if (file) {

        const rawDesignImg = new Image();
        rawDesignImg.src = URL.createObjectURL(file)

        rawDesignImg.onload = function() {
          // this is valid properties
          console.log(this.naturalWidth)
          console.log(this.naturalHeight)

        }
        var designImg = new Konva.Image({
          image: rawDesignImg,
          draggable: true,
          globalCompositeOperation: 'lighten',
        });

        let imagePos = getMiddlePos(designAreaPos, designAreaDimension, { width: designImg.width(), height: designImg.height() });
        designImg.setAttrs({
          x: imagePos.x,
          y: imagePos.y,
          width: designImg.width(),
          height: designImg.height(),
        })

        designImg.on('dragmove', (e) => {
          if (e.target.x() <= designAreaPos.x) {
            designImg.x(designAreaPos.x)
          }

          if (e.target.x() >= (designAreaPos.x + designAreaDimension.width - (e.target.width() * e.target.scaleX()))) {
            designImg.x(designAreaPos.x + designAreaDimension.width - (e.target.width() * e.target.scaleX()))
          }

          if (e.target.y() <= designAreaPos.y) {
            designImg.y(designAreaPos.y)
          }

          if (e.target.y() >= (designAreaPos.y + designAreaDimension.height - (e.target.height() * e.target.scaleY()))) {
            designImg.y(designAreaPos.y + designAreaDimension.height - (e.target.height() * e.target.scaleY()))
          }
        })

        var tr = new Konva.Transformer({
          boundBoxFunc: function(oldBoundBox, newBoundBox) {
            // "boundBox" is an object with
            // x, y, width, height and rotation properties
            // transformer tool will try to fit nodes into that box

            // the logic is simple, if new width is too big
            // we will return previous state
            if (Math.abs(newBoundBox.width) > designAreaDimension.width || Math.abs(newBoundBox.height) > designAreaDimension.height) {
              return oldBoundBox;
            }

            return newBoundBox;
          },
        });

        layer.add(designImg)
        layer.add(tr)
        tr.nodes([designImg])
        document.addEventListener('keydown', (e) => {
          if (e.isComposing || e.keyCode === 46) {
            tr.destroy()
            designImg.destroy()
          }
        })
        const downloadImg = /** @type {HTMLButtonElement} */(document.querySelector(`.py-10.flex.flex-col.border-b-2 > .flex.gap-2.justify-center.items-center.border.py-2.px-3.rounded-md.mr-20`))
        downloadImg.addEventListener('click', () => {
          tr.destroy()
          designImg.draggable(false)
          designArea.destroy()
        })
      }
    }
  })

  const buttons = /** @type {HTMLButtonElement[]} */(Array.from(document.querySelectorAll(`button[style="transition: all 100ms cubic-bezier(.68,-0.55,.27,1.55);"] > .flex.gap-2.justify-center.items-center`)))
  const addTextBtn = buttons[2]
  addTextBtn.addEventListener('click', (e) => {
    var simpleText = new Konva.Text({
      x: stage.width() / 2,
      y: designAreaPos.y,
      text: 'Simple Text',
      fontSize: 30,
      fontFamily: 'Calibri',
      fill: 'green',
    });

    simpleText.offsetX(simpleText.width() / 2);
    layer.add(simpleText)
  })

  layer.add(mainCanvasImg);

  layer.add(designArea);
};

mainCanvas.src = '/public/assets/transparent-shirt-front.png';

layer.draw();

/**
* @typedef {Object} Coords
* @property {number} x 
* @property {number} y
*/

/**
* @typedef {Object} Dimension
* @property {number} width 
* @property {number} height
*/

/**
* @typedef {Object} Rotation
* @property {number} rotation 
*/

/**
 * simple function to get the x & y for the image to be centered in the frame
 * @name getMiddlePos
 * @function
 * @param {Coords} framePos frame position
 * @param {Dimension} frameSize size of the frame
 * @param {Dimension} imageSize size of the image
 * @return {Coords} return x and y
*/
function getMiddlePos(framePos, frameSize, imageSize) {
  return {
    x: framePos.x + (frameSize.width - imageSize.width) / 2,
    y: framePos.y + (frameSize.height - imageSize.height) / 2,
  }
}
