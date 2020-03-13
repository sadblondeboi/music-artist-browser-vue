<template>
  <div class="main">
      <div class="search-bar">
      <input type="text" placeholder="Search...">
      </div>
      <button id="button1">By title</button>
      <button id="button2">By artist</button>
      <button id="button3">By year</button>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.main {
    display: grid;
	grid-template-columns: [first] 1fr [second] 1fr [third] 1fr;
    grid-template-rows: 6vh 6vh;
	margin-bottom: 2vh;
	margin-left: 2vw;
    margin-right: 2vw;

    text-align: center;


    grid-template-areas: 
    "header header header"
    "option1 option2 option3";
}

button {
    color: #fff;
    text-decoration: none;
    font-size: 1rem;
    display: block;
    padding-bottom: 0.5em;
    background: none;


}

.search-bar {
    grid-area: header;
}

.search-bar input {
    width: 90vw;
    height: 5vh;
    background-color: black;
    color: white;
    border: none;
    border-bottom: 1px solid white;

}

#button1 {
    grid-area: option1;
    justify-content: center;
}

#button2 {
    grid-area: option2;
    justify-content: center;
}

#button3 {
    grid-area: option3;
    justify-content: center;
}
</style>