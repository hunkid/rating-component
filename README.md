# st-rating

A Vue2 component of rating.
### Usage

first:
```
npm install st-rating
```
You can choose to import `st-rating` globally or locally. 
#### If globally, in your `main.js`:
```
import Vue from 'vue'
import Rating from './plugins/ratings/index'
Vue.use(Rating)
```
then in you `.vue` file, you can write like this:
```
<st-rating :once="true"></st-rating>
```
#### If locally, in your `.vue`:
```
<template>
    <rating :once="true"></rating>
</template>
<script>
import rating from 'st-rating'
export default {
    /*...*/
    components: {
        rating
    }
    /*...*/
}
</script>
```
## props
| name | type |isRequired | default | meaning |
|:----:|:----:|:----:|:----:|:-------:|
| once |Boolean| no  | false|If true, just click once|
| stars|Number | no  | 0    |Showed stars when mounted.|

## Event
If component has been clicked (starred), you can be infromed by means of this:
```
<rating @starred="handleStarred"></rating>
<script>
methods: {
    handleStarred () {
        alert('Starred')
    }
}
</script>
```