import Vue from 'vue'
//拖动
Vue.directive("drag", {
    inserted: (el) => {
      let oDiv = el; //当前元素
      oDiv.ontouchstart = (e) => {
        let touch;
  
        e.preventDefault();
  
        if (e.touches) {
          touch = e.touches[0];
        } else {
          touch = e;
        }
        //鼠标按下，计算当前元素距离可视区的距离
        let disX = touch.clientX - oDiv.offsetLeft;
        let disY = touch.clientY - oDiv.offsetTop;
        let maxW = document.body.clientWidth - oDiv.offsetWidth;
        let maxH = document.body.clientHeight - oDiv.offsetHeight;
        oDiv.style.zIndex = 1002;
        document.ontouchmove = function(e) {
          //通过事件委托，计算移动的距离
          if (e.touches) {
            touch = e.touches[0];
          } else {
            touch = e;
          }
          let l = touch.clientX - disX;
          let t = touch.clientY - disY;
          //移动当前元素
          if (l < 0) {
            l = 0;
          } else if (l > maxW) {
            l = maxW;
          }
          if (t < 0) {
            t = 0;
          } else if (t >= maxH) {
            t = maxH;
          }
          oDiv.style.left = l + "px";
          oDiv.style.top = t + "px";
        };
        document.ontouchend = (e) => {
          document.ontouchmove = null;
          document.ontouchend = null;
          e.preventDefault(); 
        };
      };
    }
  });