var posts=["2025/03/13/LearningTips/","2025/03/18/数据库系统概论（第六版）/","2025/03/08/hello-world/","2025/03/17/timeLine/","2025/07/02/考前突击笔记/","2025/04/26/追风的石头/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };