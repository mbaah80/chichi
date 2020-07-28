<template>
  <div class="container-fliud">
    <Navbar/>
    <div class="jumbotron text-center">
      <img src="../assets/undraw_order_confirmed_aaw7.png" width="400" height="300" alt="" srcset="">
      <h1>Chichi World</h1>
      <p>Order any food of your choice from any place in the world just with click at the <br> comfort of home or anywhere you are</p>
      <router-link to="/signup" class="btn btn-primary ">TRY IT FOR FREE</router-link>
      <a href="" class="btn btn-primary">HOW IT WORKS</a>
    </div>
    <div class="container">
      <div class="row">
       <div class="col-md-6">
         <h3>ARE YOU LOST</h3>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi commodi ad quod fugiat saepe adipisci 
           rerum non excepturi earum enim nobis eaque atque esse repellat nemo magni consequuntur, tenetur sed!</p>
       </div>
        <div class="col-md-6">
          <img src="../assets/undraw_online_groceries_a02y.png" width="600" height="400" class="img" alt="">
        </div>
      </div>
      <div class="row">
       <div class="col-md-6">
         <img src="../assets/undraw_mail1_uab6.png" width="600" height="400" class="img" alt="">
       </div>
        <div class="col-md-6">
         
        </div>
      </div>
    </div>
    <div class="content">
        <h1>What is Chichi</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat rem illo deleniti libero corrupti, eveniet ipsa temporibus. Harum, voluptatem <br> temporibus a quaerat quae laboriosam labore omnis consectetur? Sequi, temporibus quae?</p>
        <button class="btn btn-danger" id="startherebtn">START HERE</button>
    </div>
    <bottom/>
  </div>
</template>

<script>
  import Navbar from '../components/Navbar'
  import bottom from '../components/bottom'
  export default {
    name: 'HelloWorld',
    components:{
      Navbar,
      bottom
    },    

    data: () => ({
     
    }),
  }
</script>
<style  lang="scss" scoped>
.jumbotron{
  padding: 20px;
  background-color: white;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
 .btn{
   color: white;
   margin: 10px;
   padding: 10px;
   border: none;
   box-shadow: none;
   border-radius: 0px;
   width: 200px;
   background-color: #6c63ff;
 }
 .content{
   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
   padding: 100px;
   background-color: #0072bc;
   text-align: center;
   color: #fff;
 }
 #startherebtn{
   background-color: #fff;
   color: #000;
 }
 .details{
   display: flex;
   justify-content: center;
   align-items: center;
 }

</style>
