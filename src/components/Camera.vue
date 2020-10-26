<template>
	<div class="div" id = "camera.id">
		<p :title = "camera.full_name" >Name: {{camera.name}}</p>
		<p>Rover id: {{camera.rover_id}}</p>
	</div>
</template>
<script>
export default{
	props:{
		camera:Object
	}
}
</script>
<style scoped>
	p{
		color:#c9c9c9;
	}
</style>