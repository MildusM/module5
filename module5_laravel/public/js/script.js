// Textarea counter
let textarea = document.querySelector('#textarea');
let qLetters = document.querySelector('.q');

function textareaKeyDown(){
    qLetters.innerHTML = textarea.value.length;
}

// 

let worldNameInput = document.querySelector('.worldNameInput');


let select = document.querySelector('#options');
let btn_generate = document.querySelector('.btn-generate');
let type_values = document.querySelector('.type-values');

function selected(){
let selected = select.value;

if(selected == 'no_order'){
    return;
}   
else{
    // worldNameInput.disabled = true;
    // select.disabled = true;
    btn_generate.disabled = false;
    if(selected == 'rectangular'){
        type_values.innerHTML = `   <input required type="text" name="rectangle_x" placeholder="x..." class="input-s ml-1">
                                    <input required type="text" name="rectangle_y" placeholder="y..." class="input-s">`;
    }
    if(selected == 'circular'){
        type_values.innerHTML = `<input type="number" required name="circle_rooms" class="input" placeholder="Number of nodes...">`;
    }
    if(selected == 'branch'){
        type_values.innerHTML = `   <input type="text" class="input-s" required name="branch_factor" placeholder="Factor...">
                                    <input type="text" class="input-s" required name="branch_init_range" placeholder="Init range...">`;
    }
}

// alert(selected);
// window.location.href = `/store/${selected}`;
}





















 // Canvas 

 let canvas = document.querySelector('#canvas');
 let ctx = canvas.getContext('2d');

 ctx.canvas.width = (window.innerWidth - 20);
 ctx.canvas.height = (window.innerHeight - 20);

 // Shapes

 // // fillRect
 // ctx.fillStyle = 'red';
 // ctx.fillRect(50, 50, 150, 100);

 // ctx.fillStyle = 'blue';
 // ctx.fillRect(300, 50, 150, 100);

 // // strokeRect
 // ctx.strokeStyle = 'green';
 // ctx.lineWidth = 5;
 // ctx.strokeRect(100, 200, 150, 100);

 // // clearReact
 // ctx.clearRect(55, 55, 140, 90);

 // // fillText
 // ctx.fillStyle = 'purple';
 // ctx.font = '30px Arial';
 // ctx.fillText('Hello World', 400, 50);

 // // strokeText
 // ctx.lineWidth = 1;
 // ctx.strokeStyle = 'orange';
 // ctx.strokeText('Hello World', 400, 100);


 // Paths

 // // Triangle
 // ctx.beginPath();
 // ctx.moveTo(50, 50);

 // ctx.lineTo(150, 50);

 // ctx.lineTo(100, 200);

 // // ctx.lineTo(50, 50);
 // ctx.closePath();

 // ctx.fillStyle = 'coral';
 // ctx.fill();
 // // ctx.stroke();


 // ctx.beginPath();
 // ctx.moveTo(200, 50);

 // ctx.lineTo(150, 200);

 // ctx.lineTo(250, 200);

 // ctx.closePath();

 // ctx.stroke();


 // // Rectangle
 // ctx.beginPath();
 // ctx.rect(300, 50, 150, 100);
 // ctx.fillStyle = 'teal';
 // ctx.fill();

 // Arc (circles)

 // const centerX = canvas.width/2;
 // const centerY = canvas.height/2;

 // ctx.beginPath();
 
 // // Draw head
 // ctx.arc(centerX, centerY, 200, 0, Math.PI * 2);

 // // Move to Mouth
 // ctx.moveTo(centerX + 100, centerY);

 // // Draw Mouth
 // ctx.arc(centerX, centerY, 100, 0, Math.PI, false);

 // // Move to Left Eye
 // ctx.moveTo(centerX - 60, centerY - 80);

 // // Draw Left Eye
 // ctx.arc(centerX - 80, centerY - 80, 20, 0, Math.PI * 2);

 // // Move To Right Eye
 // ctx.moveTo(centerX + 100, centerY - 80);

 // // Draw Right Eye
 // ctx.arc(centerX + 80, centerY - 80, 20, 0 , Math.PI * 2);

 // ctx.stroke();


 // Animation 1

 const circle = {
     x: 200,
     y: 200,
     size: 30,
     dx: 5,
     dy: 4
 }

 function drawCircle(){
     ctx.beginPath();
     ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2);
     ctx.fillStyle = 'purple';
     ctx.fill();
 }

 function update(){
     ctx.clearRect(0, 0, canvas.width, canvas.height);

     drawCircle();

     // change position
     circle.x += circle.dx;
     circle.y += circle.dy;

     // detect sidewalls
     if(circle.x + circle.size > canvas.width || circle.x - circle.size < 0){
         circle.dx *= -1; 
         // circle.dy *= -1; 
     }

     // detect top and bottom walls
     if(circle.y + circle.size > canvas.height || circle.y - circle.size < 0){
         circle.dy *= -1;
     }

     requestAnimationFrame(update);
 }

 update();





 // Animation 2 - Character

 const image = document.querySelector('source');

 const player = {
     w: 50,
     h: 70,
     x: 20,
     y: 200,
     speed: 5,
     dx: 0,
     dy: 0
 };

 function drawPlayer(){

 }

 








 // ctx.beginPath();
 // ctx.strokeStyle = 'red';
 // ctx.arc(100, 75, 50, 0, 2 *Math.PI);
 // ctx.stroke();
 // ctx.fill();
 // ctx.fillRect(25,25,100,100)

 // ctx.fillRect(25, 25, 100, 100);
 // ctx.clearRect(45, 45, 60, 60);

 





 // Edit page

 let editRadio = document.querySelector('#edit');
 let saveDiv = document.querySelector('#save');
 
 window.addEventListener('click', function(){
     if(editRadio == document.activeElement){
         saveDiv.innerHTML = `<button style="position: absolute; right: 20px;" class="btn-gradient btn-generate mt-3">Save</button>`;
     }
     else{
         saveDiv.innerHTML = ``;
     }
 });




// Load page

function selected() {
    let order = document.querySelector('#orderByWorld').value;
    window.location.href = `/load/${order}`;
}