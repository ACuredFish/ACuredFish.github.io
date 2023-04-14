//https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web/JavaScript_basics

/*let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello 123world!';


document.querySelector("h1").addEventListener("click", function () {
    alert("别戳我，我怕疼。");
  });



*/

let myImage = document.querySelector('img');
//返回文档中与指定选择器或选择器组匹配的第一个 Element对象。如果找不到匹配项，则返回null。
//把 <img> 元素的引用存放在 myImage 变量里
myImage.onclick = function() {
//将myImage变量的 onclick 事件与一个匿名函数绑定
      let mySrc = myImage.getAttribute('src');
      //获取myImage图片的 src 属性值,存放在 mySrc 变量里
      if(mySrc === 'images/moution01.png') {
        myImage.setAttribute('src', 'images/moution02.png');
      } else {
        myImage.setAttribute('src', 'images/moution01.png');
      }
  }

  let myButton = document.querySelector('button');
  let myHeading = document.querySelector('h1');

  function setUserName() {
    let myName = prompt('请输入你的名字。');
    localStorage.setItem('name', myName);//将数据存储在浏览器中供后续获取
    myHeading.textContent = 'Mozilla 酷毙了，' + myName;
  }

  //初始化代码，因为它在页面初次读取时进行构造工作
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
  }


  myButton.onclick = function() {
    setUserName();
 }