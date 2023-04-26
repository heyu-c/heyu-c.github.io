// 获取导航栏元素
var navbar = document.getElementById("navbar");

// 获取菜单按钮元素
var menuBtn = document.getElementById("menu-btn");

// 添加菜单按钮的单击事件
menuBtn.addEventListener("click", function() {
  // 如果导航栏处于隐藏状态，则显示它；否则，隐藏它
  if (navbar.style.display === "none") {
    navbar.style.display = "block";
  } else {
    navbar.style.display = "none";
  }
});

// 添加窗口调整大小的事件
window.addEventListener("resize", function() {
  // 如果屏幕宽度大于600像素，则显示导航栏
  if (window.innerWidth > 600) {
    navbar.style.display = "block";
  }
});