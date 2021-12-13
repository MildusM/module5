





















//  // Canvas 

//  let canvas = document.querySelector('#canvas');
//  let ctx = canvas.getContext('2d');

//  ctx.canvas.width = (window.innerWidth - 20);
//  ctx.canvas.height = (window.innerHeight - 20);

//  ctx.fillStyle = 'white';
//  ctx.fillRect(0, 0, canvas.width, canvas.height);

//  // Shapes

//  // // fillRect
//  // ctx.fillStyle = 'red';
//  // ctx.fillRect(50, 50, 150, 100);

//  // ctx.fillStyle = 'blue';
//  // ctx.fillRect(300, 50, 150, 100);

//  // // strokeRect
//  // ctx.strokeStyle = 'green';
//  // ctx.lineWidth = 5;
//  // ctx.strokeRect(100, 200, 150, 100);

//  // // clearReact
//  // ctx.clearRect(55, 55, 140, 90);

//  // // fillText
//  // ctx.fillStyle = 'purple';
//  // ctx.font = '30px Arial';
//  // ctx.fillText('Hello World', 400, 50);

//  // // strokeText
//  // ctx.lineWidth = 1;
//  // ctx.strokeStyle = 'orange';
//  // ctx.strokeText('Hello World', 400, 100);


//  // Paths

//  // // Triangle
//  // ctx.beginPath();
//  // ctx.moveTo(50, 50);

//  // ctx.lineTo(150, 50);

//  // ctx.lineTo(100, 200);

//  // // ctx.lineTo(50, 50);
//  // ctx.closePath();

//  // ctx.fillStyle = 'coral';
//  // ctx.fill();
//  // // ctx.stroke();


//  // ctx.beginPath();
//  // ctx.moveTo(200, 50);

//  // ctx.lineTo(150, 200);

//  // ctx.lineTo(250, 200);

//  // ctx.closePath();

//  // ctx.stroke();


//  // // Rectangle
//  // ctx.beginPath();
//  // ctx.rect(300, 50, 150, 100);
//  // ctx.fillStyle = 'teal';
//  // ctx.fill();

//  // Arc (circles)

//  // const centerX = canvas.width/2;
//  // const centerY = canvas.height/2;

//  // ctx.beginPath();
 
//  // // Draw head
//  // ctx.arc(centerX, centerY, 200, 0, Math.PI * 2);

//  // // Move to Mouth
//  // ctx.moveTo(centerX + 100, centerY);

//  // // Draw Mouth
//  // ctx.arc(centerX, centerY, 100, 0, Math.PI, false);

//  // // Move to Left Eye
//  // ctx.moveTo(centerX - 60, centerY - 80);

//  // // Draw Left Eye
//  // ctx.arc(centerX - 80, centerY - 80, 20, 0, Math.PI * 2);

//  // // Move To Right Eye
//  // ctx.moveTo(centerX + 100, centerY - 80);

//  // // Draw Right Eye
//  // ctx.arc(centerX + 80, centerY - 80, 20, 0 , Math.PI * 2);

//  // ctx.stroke();


//  // Animation 1

// //  const circle = {
// //      x: 200,
// //      y: 200,
// //      size: 30,
// //      dx: 5,
// //      dy: 4
// //  }

// //  function drawCircle(){
// //      ctx.beginPath();
// //      ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2);
// //      ctx.fillStyle = 'purple';
// //      ctx.fill();
// //  }

// //  function update(){
// //      ctx.clearRect(0, 0, canvas.width, canvas.height);

// //      drawCircle();

// //      // change position
// //      circle.x += circle.dx;
// //      circle.y += circle.dy;

// //      // detect sidewalls
// //      if(circle.x + circle.size > canvas.width || circle.x - circle.size < 0){
// //          circle.dx *= -1; 
// //          // circle.dy *= -1; 
// //      }

// //      // detect top and bottom walls
// //      if(circle.y + circle.size > canvas.height || circle.y - circle.size < 0){
// //          circle.dy *= -1;
// //      }

// //      requestAnimationFrame(update);
// //  }

// //  update();




// //  Project

// class NodeGenerator{
//     constructor(id, xPos, yPos, radius){
//         this.id = id;
//         // this.name =
//         this.exits = [];
//         this.xPos = xPos;
//         this.yPos = yPos;
//         this.radius = radius;
//         this.color = 'orange';
//     }
//     id(){
//         // this.id++;
//         return this.id;
//     }
//     name(){
//         return this.name;
//     }
//     exits(){
        
//     }
//     nodeName(){
//         // this.name = 
//         return this.name;
//     }
//     printNodeId(){
//         console.log(this.id);
//     }
//     printNode(){
//         console.log(`Id: ${this.id} \n Exits: ${this.exits} `);
//         ctx.beginPath();
//         ctx.arc(this.xPos, this.yPos, this.radius, 0, Math.PI * 2);
//         ctx.strokeStyle = 'black';
//         ctx.fillStyle = this.color;
//         ctx.fill();
//         ctx.stroke();
//         ctx.strokeText(this.id, this.xPos, this.yPos);
//         ctx.closePath();

//         // ctx.rect(0,0,70,70);
//         // ctx.rect(70,0,70,70);
//         // ctx.rect(140,0,70,70);
//         // ctx.rect(1190,0,70,70);
//         // ctx.stroke();
        
        
//         // return `Name: ${this.name} \n Id: ${this.id} \n Exits: ${this.exits}`;
//     }
//     clicked(color){
//         this.color = color;
//     }
// }


// class WorldGenerator{
//     constructor(world, numOfNodes){
//         this.numOfNodes = numOfNodes;
//         this.rooms = [];
//         this.pos = 25;

//         // ___________________________Circular World Start________________________________________________

//         if(this.numOfNodes < 1){
//             return;
//         }

//         if(world == 'circular'){

//             // let y = 50;
//             // let x;
//             // let u = 0;

//             // if(this.numOfNodes < 1){
//             //     return;
//             // }
            
//             // for(let i = 0; i < this.numOfNodes; i++){

//             //     if(x > (ctx.canvas.width - 80)){
//             //         u = (i);
//             //         y = y + 70; 
//             //         x = (70*(1+i-u));
//             //     }

//             //     x = (70*(1+i-u));

//             // Mittpunkt av canvas (kvadratisk)
//             let yCenter;
//             let xCenter;
//             let mRadius;

//             if(canvas.width < canvas.height){
//                 yCenter = Math.round(canvas.height/2);
//                 xCenter = Math.round(canvas.width/2);
//                 // yCenter = Math.round((((canvas.height - canvas.width)/2) + (canvas.width/2))*0.9);
//                 // xCenter = Math.round(((canvas.width/2)*0.9) + (canvas.width/2)*0.1);
//                 mRadius = Math.round((canvas.width/2)*0.9);
//                 // console.log(yCenter + ' ' + xCenter);
//             }
//             else if(canvas.width == canvas.height){
//                 yCenter = (Math.round(canvas.height * 0.9))/2;
//                 xCenter = (Math.round(canvas.width * 0.9))/2;
//                 mRadius = Math.round((canvas.width/2)*0.9);
//             }
//             else{
//                 xCenter = Math.round(canvas.width/2);
//                 yCenter = Math.round(canvas.height/2);
//                 // xCenter = Math.round((((canvas.width - canvas.height)/2) + (canvas.height/2))*0.9);
//                 // yCenter = Math.round((canvas.height/2)*0.9);
//                 mRadius = Math.round((canvas.height/2)*0.9);
//             }
            
//             let perimeter = Math.round(2*3.14*mRadius);
//             let place = Math.round(perimeter/numOfNodes);
//             console.log('Place: ' + place);
//             console.log('Perimeter: ' + perimeter);
//             console.log('mRadius: ' + mRadius);
//             console.log('yCenter: ' + yCenter);
//             console.log('xCenter: ' + xCenter);


//             let y = yCenter + mRadius * Math.sin(0);
//             let x = xCenter + mRadius * Math.cos(0);

//             if(this.numOfNodes < 1){
//                 return;
//             }

//             // ctx.arc(xCenter, yCenter, mRadius, 0, Math.PI * 2);
//             ctx.stroke();
            
//             for(let i = 0; i < this.numOfNodes; i++){

//                 // if(x > (ctx.canvas.width - 80)){
//                 //     u = (i);
//                 //     y = y + 70; 
//                 //     x = (70*(1+i-u));
//                 // }

//                 // x = (70*(1+i-u));

//                 y = yCenter + mRadius * Math.sin(i * 2 * Math.PI / numOfNodes); 
//                 x = xCenter + mRadius * Math.cos(i * 2 * Math.PI / numOfNodes);
                
//             // for(let i = 0; i <= numberOfSides; i++){
//                 // ctx.lineTo(xCenter + mRadius * Math.cos(i * 2 * Math.PI / numOfNodes), yCenter + mRadius * Math.sin(i * 2 * Math.PI / numOfNodes));
//             // }
          

//                 let temp = new NodeGenerator(i, x, y, 25);

//                 // x = xCenter + (Math.sqrt((place**2) - (((mRadius + yCenter)/3))**2))
//                 // y = yCenter + (Math.sqrt((mRadius**2) - (mRadius**2)));
//                 // y = (yCenter - mRadius) + ((2*mRadius)/(numOfNodes/2));

//                 if(i == 0){
//                     temp.exits = [i+1];
//                     temp.exits[temp.exits.length] = (this.numOfNodes - 1);
//                 }
//                 if(i == (this.numOfNodes -1)){
//                     temp.exits = [i-1];
//                     temp.exits[temp.exits.length] = (0);
//                 }
//                 if(i > 0 && i < (this.numOfNodes - 1)){
//                     temp.exits = [(i-1), (i+1)];
//                 }
                
//                 this.rooms[i] = temp;

//             }
            
//             let lagra = [];
//             let dublett = false;
//             // --Loop through all nodes
//             for(let i = 0; i < this.numOfNodes; i++){
//                 // console.log('NumOfNodes: ' + this.numOfNodes);
//                 lagra[lagra.length] = (this.rooms[i].id);
//                 // console.log(lagra);
//                 // console.log(this.rooms[this.rooms[0].exits[0]].xPos);
//                 for(let j = 0; j < this.rooms[i].exits.length; j++){
//                     // console.log(this.rooms[i].exits.length);
//                     for(let k = 0; k < lagra.length; k++){
//                         // console.log(lagra.length);
//                         if(lagra[k] == this.rooms[i].exits[j]){
//                             k = lagra.length;
//                             dublett = true;
//                             // console.log(true);
//                         }
//                     }
//                     if(dublett == true){
//                         dublett = false;
//                     }
//                     else{
//                         ctx.beginPath();
//                         ctx.moveTo(this.rooms[i].xPos, this.rooms[i].yPos);
//                         console.log('----------------');
//                         console.log(this.rooms[i].xPos, this.rooms[i].yPos);
//                         console.log(this.rooms[this.rooms[i].exits[j]].xPos, this.rooms[this.rooms[i].exits[j]].yPos);
//                         ctx.lineTo(this.rooms[this.rooms[i].exits[j]].xPos, this.rooms[this.rooms[i].exits[j]].yPos);
//                         ctx.stroke();
//                         ctx.closePath();
//                         dublett = false;
//                     }

//                 }
//             }

//         }
        
//         // ___________________________Circular World End________________________________________________

//     }
//     printWorld(){
//         // console.log(`Name: ${this.name}`);
//         // console.log('nodes');
//         // console.log(this.rooms);
//         for(let i = 0; i < this.rooms.length; i++){
//             this.rooms[i].printNode();
//         }
//     }

// }

// let test = new WorldGenerator('circular', 10);
// test.printWorld();
// // console.log(test.rooms[1]);
// // console.log(Math.sqrt(200));

// ctx.canvas.addEventListener('click', function(event){
//     // console.log('event');
//     // console.log(event);
//     // console.log(event.layerX + ' ' + event.layerY);

//     clickOnNode(event.layerX, event.layerY);
// });

// // ctx.canvas.addEventListener('mousedown', function(event){

// //     console.log('mousedown');
// //     mouseUp(event.layerX, event.layerY
// //     // moveNode(event.layerX, event.layerY);
// // });

// // function mouseUp(dmx, dmy){
// //     ctx.canvas.addEventListener('mousemove', function(event){
        
// //         console.log('mousemove');
// //         moveNode(dmx, dmy, event.layerX, event.layerY);
// //     });
// // }




// // function moveNode(dmx, dmy, umx, umy){

// //     console.log('dmx: ' + dmx + ' dmy: ' + dmy + ' umx: ' + umx + ' umy: ' + umy);

// //     for(let i = 0; i < test.numOfNodes; i++){
// //         let katet1 = (test.rooms[i].xPos - dmx);
// //         let katet2 = (test.rooms[i].yPos - dmy);
// //         let hypotenusan = Math.sqrt((katet1**2) + (katet2**2));
// //         console.log('katet1: ' + katet1 + ' Katet2: ' + katet2 + ' hypotenusan: ' + hypotenusan);
// //         if(hypotenusan > test.rooms[i].radius){
// //             // Not inside a circle
// //         }
// //         else{
// //             // Inside a circle
// //             // alert('CLICKED CIRCLE ' + test.rooms[i].id);
// //             test.rooms[i].xPos = umx;
// //             test.rooms[i].yPos = umy;
// //             test.printWorld();
// //         }
// //         // let distance = 
// //         // if()
        
// //         // alert(test.id);
// //     }

// // }

// let clickedNodes = [];
// let qClicked = 0;

// function clickOnNode(mx, my){
    
//     for(let i = 0; i < test.numOfNodes; i++){
//         let katet1 = (test.rooms[i].xPos - mx);
//         let katet2 = (test.rooms[i].yPos - my);
//         let hypotenusan = Math.sqrt((katet1**2) + (katet2**2));
//         // console.log('katet1: ' + katet1 + ' Katet2: ' + katet2 + ' hypotenusan: ' + hypotenusan);
//         if(hypotenusan > test.rooms[i].radius){
//             // Not inside a circle
//         }
//         else{
//             // Inside a circle
//             console.log('Clicked: ' + clickedNodes + ' qClicked: ' + qClicked);
//             // alert('CLICKED CIRCLE ' + test.rooms[i].id);
//             test.rooms[i].clicked('red');
//             // console.log(test.rooms[i].color);
//             // alert(test.rooms[i].color);
//             test.printWorld();


//             clickedNodes[clickedNodes.length] = (test.rooms[i].id);
//             // alert(clickedNodes);
//             qClicked++;
//             let double = false;
//             // alert(qClicked);
//             if(qClicked == 2){
// // -------------------------MÅSTE FIXAS DETTA FUNGERAR BARA PÅ ENA HÅLLET!!___________________________------
//                 for(let i = 0; i < test.rooms[clickedNodes[0]].exits.length; i++){
//                     if(test.rooms[clickedNodes[0]].exits[i] == clickedNodes[1]){
//                         // Delete path
//                         double = true;
//                         test.rooms[clickedNodes[0]].exits[i] = '';
                        
//                     }
//                     else if(test.rooms[clickedNodes[1]].exits[i] == clickedNodes[0]){
//                         test.rooms[clickedNodes[1]].exits[i] = '';
//                     }
//                 }
//                 // alert('true');
//                 if(double == false){
//                     qClicked = 0;
//                 for(let j = 0; j < clickedNodes.length; j++){
//                     test.rooms[clickedNodes[j]].clicked('orange');
//                     if(j == 0){
//                         test.rooms[clickedNodes[j]].exits[test.rooms[clickedNodes[j]].exits.length] = (clickedNodes[1]);
//                     }
//                     else{
//                         test.rooms[clickedNodes[j]].exits[test.rooms[clickedNodes[j]].exits.length] = (clickedNodes[0]);
//                     }
                    
//                     // alert(test.rooms[clickedNodes[j]]);
//                     // test.printWorld();
//                 }
//                 // test.printWorld();
//                 console.log(clickedNodes[0]);
//                 ctx.beginPath();
//                 ctx.moveTo(test.rooms[clickedNodes[0]].xPos, test.rooms[clickedNodes[0]].yPos);
//                 ctx.lineTo(test.rooms[clickedNodes[1]].xPos, test.rooms[clickedNodes[1]].yPos);
//                 ctx.strokeStyle = 'black';
//                 ctx.stroke();
//                 ctx.closePath();
//                 qClicked = 0;
//                 clickedNodes = [];
//                 test.printWorld();

//                 }
//                 else{
//                     qClicked = 0;
//                     for(let j = 0; j < clickedNodes.length; j++){
//                         test.rooms[clickedNodes[j]].clicked('orange');
//                         // if(j == 0){
//                         //     test.rooms[clickedNodes[j]].exits[test.rooms[clickedNodes[j]].exits.length] = (clickedNodes[1]);
//                         // }
//                         // else{
//                         //     test.rooms[clickedNodes[j]].exits[test.rooms[clickedNodes[j]].exits.length] = (clickedNodes[0]);
//                         // }
                        
//                         // alert(test.rooms[clickedNodes[j]]);
//                         // test.printWorld();
//                     }
//                     ctx.beginPath();
//                     ctx.moveTo(test.rooms[clickedNodes[0]].xPos, test.rooms[clickedNodes[0]].yPos);
//                     ctx.lineTo(test.rooms[clickedNodes[1]].xPos, test.rooms[clickedNodes[1]].yPos);
//                     ctx.strokeStyle = 'white';
//                     ctx.lineWidth = 3;
//                     ctx.stroke();
//                     ctx.closePath();
//                     qClicked = 0;
//                     clickedNodes = [];
//                     ctx.lineWidth = 1;
//                     test.printWorld();
                    
//                 }
    
//                 double = false;
                
//             }

            
            
//         }
//         // let distance = 
//         // if()
        
//         // alert(test.id);
//     }
// } 

// window.addEventListener('resize', function(){
//     ctx.canvas.width = (window.innerWidth - 20);
//     ctx.canvas.height = (window.innerHeight - 20);
//     test.printWorld();
// });

// ctx.beginPath();
// ctx.moveTo(test.rooms[2].xPos, test.rooms[2].yPos);
// ctx.lineTo(test.rooms[6].xPos, test.rooms[6].yPos);
// ctx.strokeStyle = 'white';
// ctx.stroke();
// ctx.closePath();
// test.printWorld();

// // moveNode();

// // let test = new NodeGenerator(1, 50, 50, 25);
// // test.printNode();

// // let test2 = new NodeGenerator(2, 200, 50, 25);
// // test2.printNode();





//  // Animation 2 - Character

//  const image = document.querySelector('source');

//  const player = {
//      w: 50,
//      h: 70,
//      x: 20,
//      y: 200,
//      speed: 5,
//      dx: 0,
//      dy: 0
//  };

//  function drawPlayer(){
    
//  }

 








//  // ctx.beginPath();
//  // ctx.strokeStyle = 'red';
//  // ctx.arc(100, 75, 50, 0, 2 *Math.PI);
//  // ctx.stroke();
//  // ctx.fill();
//  // ctx.fillRect(25,25,100,100)

//  // ctx.fillRect(25, 25, 100, 100);
//  // ctx.clearRect(45, 45, 60, 60);

 





//  // Edit page

//  let editRadio = document.querySelector('#edit');
//  let saveDiv = document.querySelector('#save');
 
//  window.addEventListener('click', function(){
//      if(editRadio == document.activeElement){
//          saveDiv.innerHTML = `<button style="position: absolute; right: 20px;" class="btn-gradient btn-generate mt-3">Save</button>`;
//      }
//      else{
//          saveDiv.innerHTML = ``;
//      }
//  });




// // Load page

// function selected() {
//     let order = document.querySelector('#orderByWorld').value;
//     window.location.href = `/load/${order}`;
// }