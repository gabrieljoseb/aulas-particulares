const actualWindow = location.pathname
const headers = document.querySelectorAll('.links a')

for (let header of headers) {
    if (actualWindow.includes(header.getAttribute('href')))
        header.classList.add('active')
}