<template>
	<div class="" :id="rover.id">
		<p>Name: {{rover.name}}</p>
		<p>Landing date: {{rover.landing_date|chDates}}</p>
		<p>Launch date: {{rover.launch_date|chDates}}</p>
		<p>Status: {{rover.status}}</p>
		
	</div>
</template>
<script>
export default{
	props:{
		rover:Object
	},
	filters:{
		chDates(value){
			if (!value) return ''
			value = value.split("-").reverse().join('.');
			return value
		}
	}
}
</script>
<style scoped>
	p{
		color:#c9c9c9;
	}
</style>