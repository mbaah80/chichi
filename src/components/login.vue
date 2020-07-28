<template>
     <div class="container">
       <div class="form-container">
            <form action="">
                    <h4>Welcome Back</h4>
                    <p>Log in to chichi to order your food</p>
                    <div class=" alert alert-danger"
                    :value="error"
                    icon = "close"
                    >
                        The email or password are incorrect
                    </div>
                    <div class="form-group">
                        <input type="email" name="email" v-model="email" placeholder="Email" class="form-control" id="email" required>
                    </div>
                    <div class="form-group">
                        <input type="password" name="password" v-model="password" id="password" placeholder="Password" class="form-control" required minlength="8">
                    </div>
                    <div class="form-group">
                        <a href="forgetpassword.html" class="forgotPassword">Forgot Password?</a>
                    </div>
                    <div class="form-group">
                        <button class="btn btn-primary form-control" type="submit" @click.prevent="login()">Login</button>
                    </div>
                    <hr>
                    <div class="form-group">
                         <a href="" class="btn btn-primary form-control" id="a">Continue with Google</a>
                    </div>
                    <div class="form-group">
                        <a href="" class=" btn btn-primary form-control" id="a"> Continue with Facebook</a>
                    </div>
                    <hr>
                    <div class="form-group">
                            <router-link to="/signup" class="haveaccount">Don't Have An Account? Register</router-link>
                    </div>
                </form>
       </div>
    </div>
</template>
<script>
export default {
    name:'login',
    data:()=>({
        email:'',
        password:'',
        error: false
    }),
    methods:{
        login(){
            this.$store.dispatch("LOGIN",{
                email: this.email,
                password: this.password
            })
            .then(success =>{
                this.$router.push('/userprofile')
            })
            .catch(error=>{
                this.error = true;
            })
        }
    }
}
</script>
<style scoped>

.form-container{
    margin-top: 60px;
}

form{
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    width: 40%;
    box-shadow: 0px 0px 5px 2px rgba(247, 247,247,1);
    padding: 30px;
    margin-left: 30%;
    margin-right: 30%;
    background-color: #fff;
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

</style>


