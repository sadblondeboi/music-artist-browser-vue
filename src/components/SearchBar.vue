<template>
  <div class="main">
      <!-- chowanie search bara jest totalnie bez sensu dlatego tej funkcji nie wprowadzam -->
      <div class="search-bar">
      <input type="text" placeholder="Search...">
      </div>
      <!-- wiem ze to okropna praktyka ale ZDECYDOWANIE za dlugo nad tym siedzę -->
      <button id="button1" @click="changeOption(option1)">By sth</button>
      <button id="button2" @click="changeOption(option2)">By artist</button>
      <button id="button3" @click="changeOption(option3)">By year</button>
  </div>
</template>

<script>
export default {
    data () {
        return {
           option1: 'one',
           option2: 'two',
           option3: 'three',
           isActive: false
        }
    },
    methods: {
        changeOption(payload) {
            this.$emit("search-criteria-changed", payload);
        }
    }
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
    color: rgba(255, 255, 255, 0.603);
    height: 6vh;
    width: 120px;
    text-decoration: none;
    font-size: 1rem;

    background: none;
    text-align: center;
}

.search-bar {
    grid-area: header;
    color:white;
}

::placeholder {
    color: rgba(255, 255, 255, 0.829);
    font-family: sans-serif;
}

.search-bar input {
    width: 90vw;
    height: 5vh;
    background-color: black;
    color: white;
    font-family: sans-serif;
    border: none;
    border-bottom: 1px solid white;
    font-size: inherit;
}

#button1 {
    grid-area: option1;
    justify-content: center;
}

#button2 {
    grid-area: option2;

}

#button3 {
    grid-area: option3;
    justify-content: center;
}
</style>