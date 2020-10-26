<template>
  <div class = "main">
    <h1>Nasa API</h1>
      <div class="top-bar">
      <select v-model="sortBy" @change = "sortItem" >         <!-- Sort  -->
          <option disabled value="">Choose one of the options</option>
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
        <option value="old">Old</option>
        <option value="new">New</option>
      </select>
  
    </div>
    <div class="content">
      <photo :marsPhotos = "items" :size = "{rows:1,colums:4}"></photo>   <!-- Pass the array and mesh sizes -->
    </div>
                                                                          <!--Pagination -->
    <Paginate 
       v-model="page"
      :page-count="pageCount"
      :click-handler="pageChangeHandler(page)"
      :prev-text="'Prev'"
      :next-text="'Next'"
      :container-class="'pagination'"
      :page-class="'waves-effect'"
      >                                                                    
    </Paginate>
  </div>
</template>

<script>
import axios from "axios";
import photo from "@/components/Photo.vue";            
import paginationMixin from "@/components/mixins/pagination.mixin.js";   //Pagination functions
export default {
  mixins:[paginationMixin],
  components:{
    photo
  },
  name: 'Nasa',
  props: {},
  data() {
    return {
      marsPhotos: [],
      marsPhotosApiUrl: 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=rofwC6fioq2HWJD4scIuboubhE4XD0ZCxBAgOwfz',
      
      sortBy:''
    };
  },
  methods: {
    getApiData() {
      axios({
        url: this.marsPhotosApiUrl,
        method: 'GET'
      }).then((response) => {
        const dataPage = response.data;
   
        this.marsPhotos = dataPage.photos;
        this.setupPagination(this.marsPhotos);
      
      });
    },
    //Sort functions
     sortItem(){
      if(this.sortBy == "asc"){
        return this.setupPagination(this.marsPhotos.sort(function(a,b){
            if(a.camera.name < b.camera.name) { return  -1; }
            if(a.camera.name > b.camera.name) { return 1; }
            return 0;
      }))}
      if(this.sortBy == "desc"){
        return this.setupPagination(this.marsPhotos.sort(function(a,b){
            if(a.camera.name < b.camera.name) { return  1; }
            if(a.camera.name > b.camera.name) { return -1; }
            return 0;
      }))}
      if(this.sortBy == "old"){ //Даты из апи одинаковые но должно работать если прийдут разные
        return this.setupPagination(this.marsPhotos.sort(function(a,b){
            a = a.earth_date.split('-');
            a = new Date(a[2],a[1],a[0]);
            b = b.earth_date.split('-');
            b = new Date(a[2],a[1],a[0]);
            if(a<b) { return  1; }
            if(a>b) { return -1; }
            return 0;
      }))}
      if(this.sortBy == "new"){
        return this.setupPagination(this.marsPhotos.sort(function(a,b){
            a = a.earth_date.split('-');
            a = new Date(a[2],a[1],a[0]);
            b = b.earth_date.split('-');
            b = new Date(a[2],a[1],a[0]);
            if(a<b) { return  -1; }
            if(a>b) { return 1; }
            return 0;
      }))}
    }
      
  },
  
  beforeMount() {
     this.getApiData();
  },
}

</script>


<style >
.pagination{
  list-style-type: none;
  user-select: none;
  margin-top: 2%;
}
.pagination li.active {
    background-color: #ee6e73;
}
ul:not(.browser-default)>li {
    list-style-type: none;
}
.pagination li {
    display: inline-block;
    border-radius: 2px;
    text-align: center;
    vertical-align: top;
    height: 30px;
}
.pagination li a {
    color: #fff;
    display: inline-block;
    font-size: 1.2rem;
    padding: 0 10px;
    line-height: 30px;
}
h1{
  color:white;
  margin-top: 0;
}
.main{
  width: 100%;
  height: 100%;
}
.content{
  width: 85%;
  height: 80%;
  display: inline-block;
  text-align: left;
}
.top-bar{
  width: 100%;
  height: 5%;
  color:white;
  text-align: center;
}
.top-bar select{
  display: block;
  width: 15%;
  margin-bottom: 4%;
  margin: 0 auto;
}
</style>
