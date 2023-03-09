function setRem() {
    const sixe = window.innerWidth / 10
    document.documentElement.style.fontSize = sixe + 'px'
  }
  // 初始化
  setRem()

  window.addEventListener('resize', setRem)