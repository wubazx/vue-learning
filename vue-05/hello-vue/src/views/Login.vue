<template>
  <div>
    <el-form ref="loginForm" :model="form" label-width="80px;" class="login-box" :rules="rules">
      <h3 class="login-title">登录</h3>
      <el-form-item label="账号" prop="username">
        <el-input type="text" placeholder="请输入账号" v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="username">
        <el-input type="password" placeholder="请输入密码" v-model="form.password"></el-input>
      </el-form-item>
      <el-form>
        <el-button type="primary" @click="onSubmit('loginForm')">登录</el-button>
      </el-form>
    </el-form>
  </div>
</template>

<script>
  export default{
    data(){
      //自定义校验
      var validateUsername = (rule, value, callback) => {
         if (value === '') {
           callback(new Error('请输入用户名'));
         }else if(this.form.password === ''){
           callback(new Error('请输入密码'));
         }
         else{
           callback();
         }
       };
       var validatePassword = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入密码'));
          }else if(this.form.username === ''){
           callback(new Error('请输入用户名'));
         }
          else{
            callback();
          }
        };

      return{
        form: {
          username: '',
          password: ''
        },

        // 表单验证，需要在 el-form-item 元素中增加 prop 属性
        rules: {
          username: [
            {validator: validateUsername, trigger: 'blur'}
          ],
          password: [
            {validator: validatePassword, trigger: 'blur'}
          ]
        },
      };
    },

    methods: {
      onSubmit(formName) {
       // 为表单绑定验证功能
       this.$refs[formName].validate((valid) => {
         if (valid) {
           // 设置用户登录成功
           sessionStorage.setItem('isLogin', 'true');
           // 使用 vue-router 路由到指定页面，该方式称之为编程式导航
           this.$router.push("/main");
         } else {
            this.$message({
                     message: '请输入用户名和密码！',
                     type: 'warning'
                   });
           return false;
         }
       });
      }
    }
  }
</script>

<style>
  .login-box{
    width: 250px;
    border: darkgray;
    margin: 180px auto;
    border-radius: 25px;
    border: 1px solid #DCDFE6;
    padding: 15px 100px 35px 100px;
    box-shadow: 0 0 10px #A9A9A9;
  }
  .login-title{
    text-align: center;
  }
</style>
