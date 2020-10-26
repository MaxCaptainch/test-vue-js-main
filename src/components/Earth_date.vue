<template>
	<p>Earth date: {{earthDate|chDates}}</p>
</template>
<script>
export default{
	props:{
		earthDate:String
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