var posts=["2026/08/07/anzhiyu-post-template/","2026/08/07/hexo-anzhiyu-first-post/","2026/08/10/class/","2026/08/08/cloudflare-pages-netease-music/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };