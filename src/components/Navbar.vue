<template>
<div >
     <nav class="navbar navbar-expand-md mainnav" id="mainnav">
              <div class="container" >
                <div class="collapse navbar-collapse" id="navbarCollapse">
                             <div class="nav-brand">
                                 <img src="../assets/logo.png" width="30" height="30" alt="" srcset="">
                                    Chichi 
                            </div>
                             <div class="navbar-nav ml-auto">
                                        <router-link to="/" class="nav-item nav-link" >Home</router-link>
                                              <router-link to="/res" class="nav-item nav-link">Resturants</router-link>
                                              <router-link to="/price" class="nav-item nav-link">Pricing</router-link>
                                              <router-link to="/api" class="nav-item nav-link">Developers</router-link>
                                            <router-link to="/login" class="nav-item nav-link">Login</router-link>
                            </div>
                </div>
             </div>
     </nav>
</div>    
</template>
<script>
export default {
    name: 'Navbar'  
}
</script>
<style scoped>

#mainnav{
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
   background-color: #0076a3;
   color: white;
   padding: 0;
   margin: 0;
 }
 .mainnav a{
   color: white;
   padding: 5px;
 }
 .mainnav a:hover{
     color: #000;
 }
</style>


