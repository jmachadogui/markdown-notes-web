function teste() {
    alert('teste')
}



function addNewElement(type) {
    const editor = document.getElementById('editor')
    const element = document.createElement(type)
    element.innerText = 'Element'
    editor.append(element)
}