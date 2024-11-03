document.addEventListener('DOMContentLoaded', function () {
  if(!localStorage.getItem('cookie')){
    document.getElementById('cookie-box').style.display = 'flex'
  }
})

document.getElementById('cookie-accept').addEventListener('click', function() {
  localStorage.setItem('cookie', true)
  document.getElementById('cookie-box').style.display = 'none'
})

document.getElementById('cookie-close').addEventListener('click', function() {
  document.getElementById('cookie-box').style.display = 'none'
})