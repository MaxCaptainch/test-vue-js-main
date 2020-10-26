<template>
	<div class = "parent" >
		<div class="card" v-for = "(photo,index) of marsPhotos" :key="photo.id" :id = "index">
			<imgSrc :imgSrc = "photo.img_src"></imgSrc>
			<p><span>Camera:</span></p>
			<camera :camera = "photo.camera"></camera>
			<earthDate :earthDate = "photo.earth_date"></earthDate>
			<p>Rover:</p>
			<rover :rover = "photo.rover"></rover>
			<sol :sol = "photo.sol"></sol>
		</div>
	</div>
</template>
<script>
import camera from '@/components/Camera.vue'
import earthDate from '@/components/Earth_date.vue'
import imgSrc from '@/components/Img_src.vue'
import rover from '@/components/Rover.vue'
import sol from '@/components/Sol.vue'
export default{
	components:{
		camera,
		earthDate,
		imgSrc,
		rover,
		sol
	},
	props:{
		marsPhotos:Array,
		size:Object
	},
	mounted(){
		let el = document.querySelector(".parent");
		el.style.gridTemplateColumns = "repeat("+this.size.colums+", 1fr)";
		el.style.gridTemplateRows = "repeat("+this.size.rows+", 1fr)";
	}
	
	
}
</script>
<style scoped>
	.parent{
	display: grid;
	grid-column-gap: 0px;
	grid-row-gap: 0px;
	align-items: start;

	}
	.card{
		box-shadow: 8px 8px 15px black;
		margin: 5%;
		text-align: center;
		padding-bottom: 2%;
	}
	.card img{
		max-width: 100%;
		max-height: 40%;
	}
	p{
		font-family: 'Merriweather', serif;
		font-size: 20px;
		letter-spacing: 1px;
		max-width: 320px;
		width: 100%;
		position: relative;
		display: inline-block;
		color: #465457;
		margin: 2%;
	}
	p{
		color: #F16246;
		text-align: center;
	}
	p::after {
		content: "";
		position: absolute;
		bottom: -2px;
		left: 50%;
		margin-left: -15%;
		width: 30%;
		height: 2px;
		background: #FA5F4C;
}


</style>