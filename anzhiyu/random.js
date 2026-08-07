var posts=["2026/08/07/hello-world/","2026/08/07/1st/","2026/08/07/hexo-anzhiyu-first-post/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };