/*
直接更新state的多个方法的对象
 */

const mutations = {
    //目录章节
    upTutoriaContent(state,data) {
        state.articleList.directory = data.directory
        state.articleList.crud=data.crud
      },
    //文章内容
      upArticleContent(state,data) {
        state.articleContent = data
      }
}

export default mutations