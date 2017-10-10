import Rating from './src/rating'

Rating.install = function (Vue) {
  Vue.component(Rating.name, Rating)
}

export default Rating
