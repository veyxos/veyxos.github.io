/* global ready */
ready(() => {
  let scrolled = window.pageYOffset
  window.onscroll = function () {
    scrolled = window.pageYOffset
    document.getElementById('whoami').style.backgroundPosition = 'center calc(100% + ' + (scrolled * 0.5) + 'px)'
  }

  let contactForm = ['contactText', 'contactName', 'contactMail']
  for (let i = 0; i < contactForm.length; i++) {
    let e = document.getElementById(contactForm[i])
    e.addEventListener('change', () => {
      if (e.value === '' | e.value === null) {
        e.classList.remove('nonempty')
      } else {
        e.classList.add('nonempty')
      }
    })
  }
})
