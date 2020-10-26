<template>
  <div id="app">
    <Nasa></Nasa>
  </div>
</template>

<script>
import Nasa from "@/components/Nasa";

export default {
  name: 'App',
  components: {
    Nasa,
  }
}
</script>

<style>
*{
	margin: 0;
	padding: 0;
}
html,body{
	width: 100%;
	height: 100%;
	overflow: hidden;
	background: rgb(20,20,20);
	font-family: 'Trispace', sans-serif;
	font-weight: 100;
}

#app{
	width: 100%;
	height: 100%;
	text-align: center;
}

</style>
