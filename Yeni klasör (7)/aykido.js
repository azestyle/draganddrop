let dragbox= document.querySelectorAll('.dragbox');
let dropbox= document.querySelector('.dropbox');

let newa={};

dragbox.forEach(item=>item.ondragstart=function(){
newa=item;


});


dropbox.ondragover = function(event){
    event.preventDefault();
}



dropbox.ondrop= function(){
this.append(newa);
}

