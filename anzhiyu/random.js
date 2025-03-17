var posts=["2025/03/13/LearningTips/","2025/03/08/hello-world/","2025/03/17/timeLine/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };