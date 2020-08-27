'use strict'

if(typeof(Storage)!=='undefined'){
    console.log("LocalStorage compatible con tu navegador");
}else{
    console.log("LocalStorage incompatible con tu navegador");
}

var formulario =document.getElementById("formulario");
            formulario.addEventListener('submit',function(){
                var curso= document.getElementById("content").value;
                if(curso.length>=1){
                    localStorage.setItem(curso, curso);
                }
            })
            var ul=document.getElementById("lista");
            for(var i in localStorage){
                console.log(localStorage[i]);
                if(typeof localStorage[i]=="string"){
                    var li=document.createElement("li")
                    li.append(localStorage[i])
                    ul.append(li)
                }
            } 

            var formborrar=document.getElementById("formularioborrar")
            formborrar.addEventListener('submit',function(){
                var cursoborrar= document.getElementById("contborrar").value;
                if(cursoborrar.length>=1){
                    localStorage.removeItem(cursoborrar);
                }
            }) 