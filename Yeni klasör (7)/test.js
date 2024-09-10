let dragbox= document.querySelectorAll('.dragbox')
let dropbox= document.querySelector('.dropbox')

let obj={}
dragbox.forEach(dragboxes => dragboxes.ondragstart=function(){
    obj=this
    console.log('ondragstart')
})

dropbox.ondragover= function(event){
    event.preventDefault()
    console.log("ondragover")
}

dropbox.ondrop=function(){
    this.append(obj)
    console.log('ondrop');
    
}



// dragbox.forEach(dragboxes => dragboxes.ondragstart=function(el){
//   el.dataTransfer.setData('id',this.getAttribute('id'));
// })

// dropbox.ondragover= function(event){
//     event.preventDefault()
//     console.log("ondragover")
// }

// dropbox.ondrop=function(el){
//    let dropElement= el.dataTransfer.getData('id')
//    console.log(dropElement);
//    let getBox= document.getElementById(dropElement)
//   this.append(getBox);
//   } 
    








