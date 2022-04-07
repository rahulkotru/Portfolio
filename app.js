const sections =document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransitions(){
    for (let i=0; i< sectBtn.length;i++){
        sectBtn[i].addEventListener('click', function() {
            let currentBtn=document.querySelectorAll('.active-btn');
            currentBtn[0].className=currentBtn[0].className.replace('active-btn', '');
            this.className +=' active-btn';
        })
    }

    allSections.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        if(id){
            sectBtns.forEach((btn) =>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            sections.forEach((section) =>{
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

    const themeBtn= document.querySelector('.theme-btn');
    themeBtn.addEventListener('click',() =>{
        let element=document.body;
        element.classList.toggle('light-mode')
    })

}

window.addEventListener("DOMContentLoaded", function () {
    // get the form elements defined in your form HTML above
  
    var form = document.getElementById("my-form");
    // var button = document.getElementById("my-form-button");
    var status = document.getElementById("status");
  
    // Success and Error functions for after the form is submitted
  
    function success() {
      form.reset();
      status.classList.add("success");
      status.innerHTML = "Thanks!";
    }
  
    function error() {
      status.classList.add("error");
      status.innerHTML = "Oops! There was a problem.";
    }
  
    // handle the form submission event
  
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  // helper function for sending an AJAX request
  
  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }
  


PageTransitions();