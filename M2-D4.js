
const Username = document.querySelector('#name')
const list = document.querySelectorAll('.list-group')[0]
  


function addnames(){
    const newListItem =  document.createElement ('li')
    newListItem.innerHTML = Username.value
    list.appendChild(newListItem)
    Username.value =' '
     }
     addnames()

     function assignteams(){
      
        let names_group = document.querySelectorAll('.list-group li');
        let randomenamesindex = Math.floor(Math.random()*names_group.length)
        let team = names_group[randomenamesindex].innerText
        

        return team


      

     }
     assignteams()



