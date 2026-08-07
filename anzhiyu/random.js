var posts=["2026/08/07/hello-world/","2026/08/07/1st/","2026/08/07/hexo-anzhiyu-first-post/","2026/08/07/anzhiyu-post-template/","2026/08/07/(/img/example.jpg)/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };