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

function collapseWorld(){
    
    if(collapseWorldTrue == false){
        collapseWorldTrue = true;
        world_info.style.margin = '1.5rem';
        world_info.innerHTML = `    <div class="row">
                                        <div class="col-lg-6">
                                            <h2>Description</h2>
                                            <p class="">${world_data_info['world_description']}</p>
                                        </div>
                                        <div class="col-lg-6">
                                            <h2>Worldinfo</h2>
                                            <p>Name: ${world_data_info['world_name']}</p>
                                            <p>Type: ${world_data_info['world_type']}</p>
                                            <p>Number of nodes: ${node_number[0]['COUNT(*)']}</p>
                                        </div>
                                    </div>`;
    }
    else{
        collapseWorldTrue = false;
        world_info.style.margin = '0px';
        world_info.innerHTML = ``;
    }
}

let variable = (node_data_info[1]['node_exits']).split(', ');

console.log(node_data_info[1]['node_exits']);
console.log(variable);

function collapseNode(){
    if(collapseNodeTrue == false){
        collapseNodeTrue = true;
        node_info.style.margin = '1.5rem';
        node_info.style.marginRight = '3rem';
        node_info.style.marginLeft = '3rem';
        node_info.innerHTML = `<div class="row" >
            <div class="col-lg-4">
                <p >Name: </p>
            </div>
            <div class="col-lg-4">
                <p>Id: </p>
            </div>
            <div class="col-lg-4">
                <p>Exits:</p>
            </div>
        </div>`;
        for(let i = 0; i < (node_number[0]['COUNT(*)']); i++){

        
        node_info.innerHTML += `

        <div class="row" style="font-weight: 300;">
            <div class="col-lg-4">
                <p>${node_data_info[i]['node_name']}</p>
            </div>
            <div class="col-lg-4">
                <p>${node_data_info[i]['id']}</p>
            </div>
            <div class="col-lg-4">
                <p>${node_data_info[i]['node_exits']}</p>
            </div>
        </div>`;
    }}
    else{
        collapseNodeTrue = false;
        node_info.style.margin = '0px';
        node_info.innerHTML = ``;
    }
}

 // Canvas 

let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');

ctx.canvas.width = (window.innerWidth - 20);
ctx.canvas.height = (window.innerHeight - 20);

ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas.width, canvas.height);

class NodeGenerator{
    constructor(id, xPos, yPos, radius){
        this.id = id;
        // this.name =
        this.exits = [];
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
        this.color = 'orange';
    }
    id(){
        // this.id++;
        return this.id;
    }
    name(){
        return this.name;
    }
    exits(){
        
    }
    nodeName(){
        // this.name = 
        return this.name;
    }
    printNodeId(){
        console.log(this.id);
    }
    printNode(){
        console.log(`Id: ${this.id} \n Exits: ${this.exits} `);
        ctx.beginPath();
        ctx.arc(this.xPos, this.yPos, this.radius, 0, Math.PI * 2);
        ctx.strokeStyle = 'black';
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.stroke();
        ctx.strokeText(this.id, this.xPos, this.yPos);
        ctx.closePath();
        
        // return `Name: ${this.name} \n Id: ${this.id} \n Exits: ${this.exits}`;
    }
    clicked(color){
        this.color = color;
    }
}


class WorldGenerator{
    constructor(world, numOfNodes){
        this.numOfNodes = numOfNodes;
        this.rooms = [];
        this.pos = 25;

        // ___________________________Circular World Start________________________________________________

        // Om antalet nodes är mindre än 0, så finns det inget att visa
        if(this.numOfNodes < 1){
            return;
        }

        if(world == 'circular'){

            // Mittpunkt av canvas (kvadratisk)
            let yCenter;
            let xCenter;
            let mRadius;

            // För att få en cirkel ska mittpunkten vara i mitten, men radien får inte vara större än canvas.width
            if(canvas.width < canvas.height){
                yCenter = Math.round(canvas.height/2);
                xCenter = Math.round(canvas.width/2);
                mRadius = Math.round((canvas.width/2)*0.9);
            }
            // För att få en cirkel ska mittpunkten vara i mitten, men radien får inte vara större än canvas.height
            else if(canvas.width == canvas.height){
                yCenter = (Math.round(canvas.height * 0.9))/2;
                xCenter = (Math.round(canvas.width * 0.9))/2;
                mRadius = Math.round((canvas.width/2)*0.9);
            }
            // För att få en cirkel ska mittpunkten vara i mitten, canvas.height och canvas.width är lika stora, denna if satsen är egentligen onödig
            else{
                xCenter = Math.round(canvas.width/2);
                yCenter = Math.round(canvas.height/2);
                mRadius = Math.round((canvas.height/2)*0.9);
            }

            // Startkoordinater för polygonet
            let y = yCenter + mRadius * Math.sin(0);
            let x = xCenter + mRadius * Math.cos(0);

            ctx.stroke();
            
            for(let i = 0; i < this.numOfNodes; i++){

                // Varje nod ska få nya koordinater i polygonet (polygonet skapas här)
                y = yCenter + mRadius * Math.sin(i * 2 * Math.PI / numOfNodes); 
                x = xCenter + mRadius * Math.cos(i * 2 * Math.PI / numOfNodes);

                // Noden skapas, och får id, nya x- och y-koordinater, radien för noden är ett statiskt värde
                let temp = new NodeGenerator(i, x, y, 25);

                // Om det är nod 1 (id=0)
                if(i == 0){
                    temp.exits = [i+1];
                    temp.exits[temp.exits.length] = (this.numOfNodes - 1);
                }
                // Om det är den sista noden 
                if(i == (this.numOfNodes -1)){
                    temp.exits = [i-1];
                    temp.exits[temp.exits.length] = (0);
                }
                // Om det är noderna mellan 0 och sista
                if(i > 0 && i < (this.numOfNodes - 1)){
                    temp.exits = [(i-1), (i+1)];
                }
                
                // Lagrar noden i världen.
                this.rooms[i] = temp;

            }
            
            let lagra = [];
            let dublett = false;
            // --Loop through all nodes, funktion: skapa synliga paths mellan de olika noderna
            for(let i = 0; i < this.numOfNodes; i++){

                // Lagrar i (id för noden)
                lagra[lagra.length] = (this.rooms[i].id);

                for(let j = 0; j < this.rooms[i].exits.length; j++){
                    // Loopar genom alla exits för den nuvarande noden

                    for(let k = 0; k < lagra.length; k++){
                        // Loopar genom hela lagra

                        if(lagra[k] == this.rooms[i].exits[j]){
                            // Om lagra innehåller en siffra (id av nod) som körs i loopen så kommer en dubbel path köras (vilket denna if-satsen förhindrar)

                            k = lagra.length;
                            dublett = true;
                        }
                    }
                    if(dublett == true){
                        // Om dublett = true, så ska det inte skapas någon linje mellan två noder.

                        dublett = false;
                    }
                    else{
                        // Om dublett = false, så ska en linje ritas ut

                        ctx.beginPath();
                        ctx.moveTo(this.rooms[i].xPos, this.rooms[i].yPos);
                        console.log('----------------');
                        console.log(this.rooms[i].xPos, this.rooms[i].yPos);
                        console.log(this.rooms[this.rooms[i].exits[j]].xPos, this.rooms[this.rooms[i].exits[j]].yPos);
                        ctx.lineTo(this.rooms[this.rooms[i].exits[j]].xPos, this.rooms[this.rooms[i].exits[j]].yPos);
                        ctx.stroke();
                        ctx.closePath();
                        dublett = false;
                    }

                }
            }

        }
        
        // ___________________________Circular World End________________________________________________

    }
    printWorld(){
        for(let i = 0; i < this.rooms.length; i++){
            this.rooms[i].printNode();
        }
    }

}

let test = new WorldGenerator(world_data_info['world_type'], (node_number[0]['COUNT(*)']));
test.printWorld();


ctx.canvas.addEventListener('click', function(event){

    clickOnNode(event.layerX, event.layerY);
});

let clickedNodes = [];
let qClicked = 0;

function clickOnNode(mx, my){
    
    for(let i = 0; i < test.numOfNodes; i++){
        let katet1 = (test.rooms[i].xPos - mx);
        let katet2 = (test.rooms[i].yPos - my);
        let hypotenusan = Math.sqrt((katet1**2) + (katet2**2));
        // console.log('katet1: ' + katet1 + ' Katet2: ' + katet2 + ' hypotenusan: ' + hypotenusan);
        if(hypotenusan > test.rooms[i].radius){
            // Not inside a circle
        }
        else{
            // Inside a circle
            console.log('Clicked: ' + clickedNodes + ' qClicked: ' + qClicked);
            // alert('CLICKED CIRCLE ' + test.rooms[i].id);
            test.rooms[i].clicked('red');
            // console.log(test.rooms[i].color);
            // alert(test.rooms[i].color);
            test.printWorld();


            clickedNodes[clickedNodes.length] = (test.rooms[i].id);
            // alert(clickedNodes);
            qClicked++;
            let double = false;
            // alert(qClicked);
            if(qClicked == 2){
// -------------------------MÅSTE FIXAS DETTA FUNGERAR BARA PÅ ENA HÅLLET!!___________________________------
                for(let i = 0; i < test.rooms[clickedNodes[0]].exits.length; i++){
                    if(test.rooms[clickedNodes[0]].exits[i] == clickedNodes[1]){
                        // Delete path
                        double = true;
                        test.rooms[clickedNodes[0]].exits[i] = '';
                        
                    }
                    else if(test.rooms[clickedNodes[1]].exits[i] == clickedNodes[0]){
                        test.rooms[clickedNodes[1]].exits[i] = '';
                    }
                }
                // alert('true');
                if(double == false){
                    qClicked = 0;
                for(let j = 0; j < clickedNodes.length; j++){
                    test.rooms[clickedNodes[j]].clicked('orange');
                    if(j == 0){
                        test.rooms[clickedNodes[j]].exits[test.rooms[clickedNodes[j]].exits.length] = (clickedNodes[1]);
                    }
                    else{
                        test.rooms[clickedNodes[j]].exits[test.rooms[clickedNodes[j]].exits.length] = (clickedNodes[0]);
                    }
                    
                    // alert(test.rooms[clickedNodes[j]]);
                    // test.printWorld();
                }
                // test.printWorld();
                console.log(clickedNodes[0]);
                ctx.beginPath();
                ctx.moveTo(test.rooms[clickedNodes[0]].xPos, test.rooms[clickedNodes[0]].yPos);
                ctx.lineTo(test.rooms[clickedNodes[1]].xPos, test.rooms[clickedNodes[1]].yPos);
                ctx.strokeStyle = 'black';
                ctx.stroke();
                ctx.closePath();
                qClicked = 0;
                clickedNodes = [];
                test.printWorld();

                }
                else{
                    qClicked = 0;
                    for(let j = 0; j < clickedNodes.length; j++){
                        test.rooms[clickedNodes[j]].clicked('orange');
                        // if(j == 0){
                        //     test.rooms[clickedNodes[j]].exits[test.rooms[clickedNodes[j]].exits.length] = (clickedNodes[1]);
                        // }
                        // else{
                        //     test.rooms[clickedNodes[j]].exits[test.rooms[clickedNodes[j]].exits.length] = (clickedNodes[0]);
                        // }
                        
                        // alert(test.rooms[clickedNodes[j]]);
                        // test.printWorld();
                    }
                    ctx.beginPath();
                    ctx.moveTo(test.rooms[clickedNodes[0]].xPos, test.rooms[clickedNodes[0]].yPos);
                    ctx.lineTo(test.rooms[clickedNodes[1]].xPos, test.rooms[clickedNodes[1]].yPos);
                    ctx.strokeStyle = 'white';
                    ctx.lineWidth = 3;
                    ctx.stroke();
                    ctx.closePath();
                    qClicked = 0;
                    clickedNodes = [];
                    ctx.lineWidth = 1;
                    test.printWorld();
                    
                }
    
                double = false;
                
            }

            
            
        }

    }
} 

window.addEventListener('resize', function(){
    ctx.canvas.width = (window.innerWidth - 20);
    ctx.canvas.height = (window.innerHeight - 20);
    test.printWorld();
});
// Vit linje
// ctx.beginPath();
// ctx.moveTo(test.rooms[2].xPos, test.rooms[2].yPos);
// ctx.lineTo(test.rooms[6].xPos, test.rooms[6].yPos);
// ctx.strokeStyle = 'white';
// ctx.stroke();
// ctx.closePath();
// test.printWorld();



