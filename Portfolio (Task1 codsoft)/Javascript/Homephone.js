window.onclick = function (event) {
     if (!event.target.matches(".menuicon")) {
          const ele = document.getElementById('navbtn');
          const content = document.getElementById('navbtncontent');
          ele.innerHTML = '<img src="/Assets/menuicon.png" alt="menuicon" class="menuicon" >';
          content.classList.add('hide')
     }
}

const changepic = () => {
     const ele = document.getElementById('navbtn');
     const content = document.getElementById('navbtncontent');
     ele.innerHTML = '<img src="/Assets/menu.png" alt="menuicon" class="menuicon" >';
     content.classList.toggle('hide')
}

const managepopup = () => {
     const ele = document.getElementById('navbtn');
     const content = document.getElementById('navbtncontent');
     ele.innerHTML = '<img src="/Assets/menuicon.png" alt="menuicon" class="menuicon" >';
     content.classList.toggle('hide')
}