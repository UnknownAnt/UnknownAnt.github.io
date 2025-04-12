var posts=["2025/03/13/LearningTips/","2025/03/08/hello-world/","2025/03/17/timeLine/","2025/03/18/数据库系统概论（第六版）/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };