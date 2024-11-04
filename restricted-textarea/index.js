const main = document.getElementById('main')
const textarea = document.getElementById('type')
const count = document.getElementById('char-count')

textarea.addEventListener('input', function() {
  let current_length = textarea.value.length
  
  count.textContent = current_length+' / 250'

  if(current_length >= 250){
    main.classList.add('limit')
  }else{
    main.classList.remove('limit')
  }
})