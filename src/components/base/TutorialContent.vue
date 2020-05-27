<template >
     
        <v-content class="pa-0 mt-10" >
        <v-responsive max-width="700px" class="mx-auto">
         <v-container >
        <!-- 文章标题 -->
        
        <p class="mb-10 display-1 font-weight-black ">{{$store.state.articleList.crud}}</p>
        <!-- 文章内容 -->
        <v-content class="pa-0 ma-2">
     
        <p class="title"> {{$store.state.articleContent}}</p>
          
         </v-content>
      </v-container>
     </v-responsive>
    </v-content>
  
</template>

<script>  

export default {
    data: () => ({
    

  }),
   computed: {
    // 计算属性的 getter
 
    }
  }

</script>