<template>
<div>
     <div class="container login-container" >
       <div class="form-container">
            <form action="">
                    <h4>Welcome</h4>
                    <p>Signup to chichi to order your food</p>
                    <div class="alert alert-danger"
                    :value="userExists"
                    icon="warning"
                    >
                    This email already exists
                    </div>
                    <div class="form-group">
                        <input type="text" v-model="name" placeholder="Name" class="form-control" id="name" required>
                    </div>
                     <div class="form-group">
                        <input type="email" name="email" v-model="email" placeholder="Email" class="form-control" id="email" required>
                    </div>
                    <div class="form-group">
                        <input type="password" name="password" v-model="password" id="password" placeholder="Password" class="form-control" required minlength="8">
                    </div>
                    <div class="form-group">
                        <button class="btn btn-primary form-control" type="submit" @click.prevent="register()">Signup</button>
                    </div>
                    <div class="form-group">
                        <hr>
                    </div>
                    <div class="form-group">
                         <a href="" class="btn btn-primary form-control" id="a">Continue with Google</a>
                    </div>
                    <div class="form-group">
                        <a href="" class=" btn btn-primary form-control" id="a"> Continue with Facebook</a>
                    </div>
                    <div class="form-group">
                        <hr>
                    </div>
                    <div class="form-group">
                            <router-link to="/login" class="haveaccount">Already Have An Account? Login</router-link>
                    </div>
                </form>
       </div>
    </div>
</div>
</template>
<script>
export default {
    name:'signup',
    data:()=>({
        userExists:false,
        name:'',
        email:'',
        password:'',
    }),
    methods:{
        register(){
            this.$store.dispatch("REGISTER",{
                name: this.name,
                email: this.email,
                password: this.password
            })
            .then(({status})=>{
                this.$store.commit("SET_NOTIFICATION",{
                    display: true,
                    text: 'Your account has been successfully created! you can now login',
                    alertClass:"danger"
                });
                this.$router.push('/login');
            })
            .catch(error =>{
                this.userExists = true;
            })
        }
    }
}
</script>
<style scoped>


form{
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    width: 40%;
    box-shadow: 0px 0px 5px 2px rgba(247, 247,247,1);
    padding: 30px;
    margin-left: 30%;
    margin-right: 30%;
}
form h4{
    font-size: 1.5rem;
    text-transform: uppercase;
    color: #333;
    text-align: center;
    margin-bottom: 20px;
}
.btn{
    border:none;
    border-radius: 0px;
    box-shadow: none;
}
#a{
    color: white;
}
.pcolor{
    color: #000;
}
hr{
    margin-top: 30px;
    margin-bottom: 30px;
    width: 200px;
    margin-left: 100px;
    margin-right: 100px;

}

</style>


