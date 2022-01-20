
function newImage(imgFile, left, bottom) {
let gameObject = document.createElement('img');
gameObject.src = imgFile;
gameObject.style.position = 'fixed';
gameObject.style.left =left;
gameObject.style.bottom = bottom;
document.body.append(gameObject);
return gameObject;

}


function newItem(imgFile, left, bottom) {
    let gameObject = newImage(imgFile, left, bottom);
    
    gameObject.addEventListener('dblclick', () => {
        gameObject.remove()
    });
    
}



newImage ("assets/green-character.gif", "100px" , "100px");
newImage ("assets/pine-tree.png" , "450px", "200px");
newImage ("assets/tree.png" , "200px" , "300px"); 
newImage ("assets/pillar.png" , "350px" , "100px");
newImage ("assets/crate.png" , "150px" , "200px");
newImage ("assets/well.png" , "500px" , "425px");

newItem("assets/sword.png" , "500px" , "405px");
newItem("assets/sheild.png", "165px", "185px" );
newItem("assets/staff.png" , "600px" , "100px");



  



