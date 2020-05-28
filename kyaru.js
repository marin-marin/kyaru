var canvas = this.__canvas = new fabric.Canvas('c');
var flipIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABWklEQVRYR+3XPUsdURDG8d/9CFa+VIKCjWCVRkU0kEIF0YQUdnZJaWVjYz5BSiGNvTYWgoWIIpgyhWjANJYBbS0tZOBcOCy73vV60cI9MCx7ds48f55TzGzLG6/WG+trAMocWMUfXPfwegbwBVc4zesWAX5iPSWc4TjFeRcww/iMFUxn58fwr/1eBDjBbInY3wwmoO4rgKL4YoqPFTlzuQtVAD/wCZMlRW6xj2/ZtylsYKmGU7UBtjCBhQQTB/MVAL/Sxi6+1hCPlGcBFGvOINyJa4pnQMaquroyphcB5GINQONA40DjQOPA+3NgBB9SG36VZhStNgTz6MvaW96Ot/G9l+34IAn3lxT9jaOsFUdK5G1iHqMdQGq142KNGCQDKoQvOggERDvKYJ4EWMNOEgjRPRzipqa9xbQY6ZbTYNqGGcL/qqE09gfxgLsuRauOjeOy+LH5M2oceAQNmIwhbwQKzQAAAABJRU5ErkJggg==";
var deleteIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABNElEQVRYR+2XsU4CQRCGv2t5AzttKOzsTZSWBzBQKZVPQK3WPAGVUkl4AFo0oaezoIGON6DFTLJnjsnt7Q135ih2utvbmf/LP7mdvYSGIzlB/xp4AO5U7jcwA34sNU8BeAeePCIfwOA/AS6BjRP4UkL37vkK2JaFsDogIgtXvAOkEL71IMfZAYyBdgA7tdrXAr2uy62B53RRO3AIelbPhj/dswMo04KqHhS2oGpxc771KzALhBJ8AF1gGEo2vh8Bc53jA3gFXowCoe1vgNQ9ighgdUCGzMR5qFskFks8AjK0dNTSAjlmZQhJyFDKHst561mICBAdiA5EB2pxoPGTMDTxit6bHOgBn1XUcnL7wLTsOG4BS+CmJogVcAvsywLIvgt3f9c/oVYm+WmVy+4uL7HxO+EvDoFqIaO0EOIAAAAASUVORK5CYII=";

var flipImg = document.createElement('img');
flipImg.src = flipIcon;
var delImg = document.createElement('img');
delImg.src = deleteIcon;

fabric.Object.prototype.controls.flipY = new fabric.Control({
  position: { x: -0.4, y: -0.6 },
  cursorStyle: 'pointer',
  mouseUpHandler: flipObject,
  render: renderIcon(flipImg),
  cornerSize: 24
});

fabric.Object.prototype.controls.deleteControl = new fabric.Control({
  position: { x: 0.4, y: -0.6 },
  cursorStyle: 'pointer',
  mouseUpHandler: deleteObject,
  render: renderIcon(delImg),
  cornerSize: 24
});

function deleteObject(eventData, target) {
  var canvas = target.canvas;
    canvas.remove(target)
    canvas.requestRenderAll();
}

function flipObject(eventData, target) {
  var canvas = target.canvas;
    target.flipX = !target.flipX
    canvas.requestRenderAll();
}

function renderIcon (icon) {
  return function renderIcon(ctx, left, top, styleOverride, fabricObject) {
    var size = this.cornerSize;
    ctx.save();
    ctx.translate(left, top);
    ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
    ctx.drawImage(icon, -size/2, -size/2, size, size);
    ctx.restore();
  }
}

new Vue({
  el: '#kyaru',
  data () {
    return {
      heads: [...new Array(39)].keys(),
      img: null,
      draggingImg: null,
      canvas: document.querySelector('canvas'),
      ctx: document.querySelector('canvas').getContext('2d'),
      fabricCanvas: null,
      fabImg: null,
      headImg: null
    }
  },
  mounted () {
    this.fabricCanvas = new fabric.Canvas('canvas')
    this.fabricCanvas.ondrop
  },
  methods: {
    fileUploaded (e) {
      let file = document.querySelector('#selector').files[0]
      if (!~file.type.indexOf('image/')) {
        return alert('请选择受害者的图片')
      }
      this.fabricCanvas.clear()
      setTimeout(() => {
        let fr = new FileReader()
        fr.onload = () => {
          let img = new Image()
          img.src = fr.result
          this.img = img
          img.onload = () => {
            let fabImg = new fabric.Image(img, {
              top: 10,
              left: 10,
              width: img.width,
              height: img.height
            })
            this.fabImg = fabImg
            this.fabricCanvas.setBackgroundImage(fabImg, this.fabricCanvas.renderAll.bind(this.fabricCanvas))
            this.fabricCanvas.setWidth(this.fabImg.width + 100)
            this.fabricCanvas.setHeight(this.fabImg.height + 100)
          }
        }
        fr.readAsDataURL(file)
        e.target.value = null
      }, 10)
    },
    setCanvasSize ({width, height}) {
      this.canvas.width = width
      this.canvas.height = height
    },
    drawImage (img, x = img.width, y = img.height) {
      this.canvas.ondragover = (e) => {
        e.preventDefault()
        return false
      }
    },
    dragStart (e) {
      this.draggingImg = e.target
    },
    dragEnd (e) {
      this.draggingImg = null
    },
    ondrop (e) {
      let { offsetX, offsetY } = e
      let headImg = new fabric.Image(this.draggingImg, {
        top: offsetY,
        left: offsetX,
      })
      this.fabricCanvas.add(headImg)
      this.headImg = headImg
    },
    clearKyaru () {
      this.fabricCanvas.remove(this.headImg)
      this.headImg = null
    },
    finishKyaru () {
      let url = this.fabricCanvas.toDataURL({
        format: 'png',
        width: this.fabImg.width,
        height: this.fabImg.height
      })
      let a = document.createElement('a')
      a.className = 'download'
      a.target = '_blank'
      a.href = url
      a.download = '接头霸王.png'
      a.hidden = true
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
    }
  }
})