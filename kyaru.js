const app = new Vue({
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
          let fabImg = new fabric.Image(img, {
            top: 10,
            left: 10,
            width: img.width,
            height: img.height
          })
          this.fabImg = fabImg
          this.fabricCanvas.setBackgroundImage(fabImg, this.fabricCanvas.renderAll.bind(this.fabricCanvas))
        }
        fr.readAsDataURL(file)
        e.target.value = null
      })
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
      // this.ctx.drawImage(img, 0, 0, x, y)
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
      a.target = '_blank'
      a.href = url
      a.download = '接头霸王.png'
      a.hidden = true
      document.body.appendChild(a)
      a.click()
    }
  }
})