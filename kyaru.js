const app = new Vue({
  el: '#kyaru',
  data () {
    return {
      heads: [...new Array(39)].keys(),
      img: null,
      draggingImg: null
    }
  },
  created () {
  },
  methods: {
    fileUploaded () {
      let file = document.querySelector('#selector').files[0]
      if (!~file.type.indexOf('image/')) {
        return alert('请选择受害者的图片')
      }
      let fr = new FileReader()
      fr.readAsDataURL(file)
      fr.onload = () => {
        let img = new Image()
        img.src = fr.result
        this.img = img
        Promise.resolve().then(() => {
          this.drawImage(img)
        })
      }
    },
    setCanvasSize ({width, height}) {
      const canvas = document.querySelector('#canvas')
      canvas.style.width = width + 'px'
      canvas.style.height = height + 'px'
    },
    drawImage (img, x = img.width, y = img.height) {
      const canvas = document.querySelector('#canvas')
      canvas.ondragover = (e) => {
        e.preventDefault()
        return false
      }
      const ctx = canvas.getContext('2d')
      ctx.drawImage(img, 0, 0, x, y)
    },
    dragStart (e) {
      this.draggingImg = e.target
    },
    dragEnd (e) {
      this.draggingImg = null
    },
    dragOver (e) {
      console.log(e)
    },
    ondrop (e) {
      let { offsetX, offsetY } = e
      this.drawImage(this.draggingImg, offsetX, offsetY)
    }
  }
})