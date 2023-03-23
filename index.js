function newImage(url,leftPx,bottomPx){
    let object =  document.createElement('img')
    object.src = url;
    object.style.position = 'fixed'
    object.style.left = leftPx + 'Px'
    object.style.bottom = bottomPx + 'Px'
    document.body.append(object)
    return object
}

function newItem(url,leftPx,Px) {
    let object = newImage(url, leftPx, bottomPx)

    object.addEventListener('dblclick',() =>{
        object.remove()
    })
}
newImage('assets/green-character.gif', 100, 100)
newImage('assets/tree.png',200, 300)
newImage('assets/pillar.png', 350,100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/crate.png', 150, 200)
newImage('assests/well.png', 500, 425)

newItem('assets/sword.png',500,405)
newItem('assets/sheild.png', 165, 185)
newItem('asset/staff.png', 600, 100)



    
