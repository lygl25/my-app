<template >
     
        <v-content class="pa-0 mt-10" >
        <v-responsive max-width="800px" class="mx-auto">
         <v-container   >
        <!-- 文章标题 -->
        <!-- <p class="mb-10 display-1 font-weight-black ">{{$store.state.articleList.crud}}</p> -->
        <!-- 文章内容 -->
         <!-- <p class="title">{{$route.params.id}}</p> -->
        <!-- <p class="title"> {{$store.state.articleContent}}</p> -->
         <div v-html="$store.state.articleContent"></div>
      </v-container>
     </v-responsive>
    </v-content>
  
</template>

<script>  
//import demo from "../../assets/articleContent/1.md";
export default {
    data: () => ({
    articleContent:""

  }),
   computed: {
    // 计算属性的 getter
    }
  }

</script>