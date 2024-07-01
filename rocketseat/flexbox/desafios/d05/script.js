function carregarData() {
    let agora = new Date().getTime()
    let p = document.getElementsByTagName(p)[0]
    p.innerHTML = agora.toString()
}