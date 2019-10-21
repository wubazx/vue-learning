<template>
  <div>
    博客列表,博客Id为:{{id}}
  </div>
</template>

<script>
  export default{
    name: "BLogList",
    props: ['id'],
    beforeRouteEnter: (to,from,next) => {
      console.log('准备进入');//此时还没有进入，则当前vue组件还没有实例化
      next(vm => {
        vm.getData();
      });
    },
    beforeRouteLeave: (to,from,next) => {
      console.log('准备离开');
      next();
    },
    methods: {
      getData: function(){
        this.axios({
          method: 'get',
          url: 'http://localhost:8080/data.json'
        }).then(function (repos){
          console.log(repos);
        }).catch(function(error){
          console.log(error);
        });
      }
    }
  }
</script>

<style>
</style>
