<template>
  <div class="wrapper">
      <div class="about-author">
        <h4 class="author-name">{{this.authorName}}</h4>
        <h2 class="album-name">{{this.albumName}}</h2>
        <h5 class="description-short">It was originally released in late 1969 under 
            his birth name, Scott Engel, and failed to 
            chart. Subsequent reissues have been...</h5>   
      </div>

      <div class="see-more">
        <h5 class="release-year">{{this.albumReleaseYear}}</h5> 
        <button class="btn-more">See more</button>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      authorName: "Scott Walker",
      albumName: "SCOTT 4",
      descriptionShort: "",
      albumReleaseYear: 1969
    }
  }
}
</script>

<style>
html {
    background: url('../assets/img/BG.png') no-repeat;
    background-position: -40px -140px;
    background-attachment: fixed;
}

.wrapper {
  margin-top: 110%;
  margin-left: 5%;
  margin-right: 5%;
  display: grid;
  grid-template-rows: 2;
  justify-items: start;
}

.about-author .author-name {
  font-size: 22px;
  font-family: PTSerif;
  margin: 0;
}
.about-author .album-name {
  font-size: 46px;
  margin: 0;
}

.see-more {
  align-self: center;
  text-align: center;
  margin: auto;
}

.see-more h5 {
  margin-bottom: 5%;
}

.btn-more {
  background: url(../assets/see_more_icon.svg) no-repeat;
  background-position: bottom center;
  height: 70px;
  width: 100px;
  color: white;
}

</style>