var posts=["2026/08/07/anzhiyu-post-template/","2026/08/07/hello-world/","2026/08/07/hexo-anzhiyu-first-post/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };