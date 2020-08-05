const tabMe = document.querySelector('#tabme')
const searchForm = document.querySelector('#searchForm')
const searchBox = document.querySelector('#searchBox')

const url = window.location.search
const params = new URLSearchParams(url)

function goo(str) {
    const cv = str.split('')
    if (cv[0] != '!') window.location.replace('https://duckduckgo.com/?q=!g ' + str)
    else window.location.replace('https://duckduckgo.com/?q=' + str)
}

searchForm.onsubmit = (e) => {
    e.preventDefault()

    const sv = searchBox.value
    goo(sv)
}

if (params.has('q')) goo(params.get('q'))
