/*
直接更新state的多个方法的对象
 */

const mutations = {
    //目录章节
    upTutoriaContent(state,data) {
        state.articleList.directory = data.directory
        state.articleList.crud=data.crud
        state.articleContent = data.articleContent
      }
  
}

export default mutations