console.log('Welcome!!')

function showTab(event, id) {
  let nav_links = document.querySelectorAll('.nav-card > li')
  nav_links.forEach(link => link.classList.remove('active'))

  let card_bodies = document.querySelectorAll('.card-body')
  card_bodies.forEach(body => body.classList.remove('active'))

  let card_body_id = 'card-body-'+id
  document.getElementById(card_body_id).classList.add('active')
  event.currentTarget.classList.add('active')
}