<template>
  <div class="st-rating cr-pt" ref="ratingOuter"
    @mousemove.stop="handleMousemove"
    @mouseenter.stop="handleMouseenter"
    @mouseleave.stop="handleMouseleave"
    @click.stop="handleClick">
    <i class="st-rated" ref="showStar"></i>
    <slot></slot>
  </div>
</template>
<script>
  import './index.css'
  const WIDTH = 92
  export default {
    name: 'st-rating',
    props: {
      stars: {
        type: Number,
        default: 0
      },
      once: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        formerWidth: '0px',
        lock: false
      }
    },
    mounted () {
      let l = this.stars / 5 * WIDTH > WIDTH ? WIDTH : this.stars / 5 * WIDTH
      this.$refs.showStar.style.width = `${l}px`
      this.formerWidth = this.$refs.showStar.style.width
    },
    methods: {
      /**
       * 根据传入距离，展示星星
       * @param {Number} dis 距离，单位：px
       */
      _transDisToShowStars (dis) {
        if (typeof dis !== 'number') {
          return false
        }
        let star = dis / WIDTH * 5
        if (star >= 5) {
          star = 5
        } else {
          star = Math.ceil(star)
        }
        this.$refs.showStar.style.width = `${star / 5 * WIDTH}px`
      },
      handleMousemove (e) {
        if (this.lock) {
          return
        }
        let dis = (e.pageX - e.currentTarget.offsetLeft)
        this._transDisToShowStars(dis)
      },
      handleMouseenter (e) {
        if (this.lock) {
          return
        }
        this.formerWidth = this.$refs.showStar.style.width
      },
      handleMouseleave (e) {
        if (this.lock) {
          return
        }
        this.$refs.showStar.style.width = this.formerWidth
      },
      handleClick (e) {
        if (this.lock) {
          return
        }
        this.formerWidth = this.$refs.showStar.style.width
        if (this.once) {
          this.lock = true
          this.$refs.ratingOuter.className = this.$refs.ratingOuter.className.replace('cr-pt', '')
          this.$emit('starred')
        }
      }
    }
  }
</script>
