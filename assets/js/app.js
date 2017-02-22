// Functions
function ready (fn) {
  if (document.readyState !== 'loading') {
    fn()
  } else {
    document.addEventListener('DOMContentLoaded', fn)
  }
}

ready(() => {
  document.getElementById('mobileToggle').addEventListener('click', () => { document.body.classList.toggle('menu') })
})
