function setRem() {
    const sixe = window.innerWidth / 10
    document.documentElement.style.fontSize = sixe + 'px'
  }
  // 初始化
  setRem()
  // 改变窗口大小时重新设置 rem
  window.onresize = () => {
    setRem()
  }