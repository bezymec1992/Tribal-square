export default function () {
  window.onNuxtReady(() => {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = '/fonts/stylesheet.css'
      document.head.appendChild(link)
  })
}
