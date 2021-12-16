// Edit page
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

let variable = (node_data_info[0]['node_exits']).split(',');

// console.log(node_data_info[1]['node_exits']);
// console.log(world_data_info['rectangle_y']);
// console.log(variable);

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
        console.log(this.exits);
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
        // if(this.numOfNodes < 1){
        //     return;
        // }

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

                let variable = (node_data_info[i]['node_exits']).split(',');
                for(let j = 0; j < variable.length; j++){
                    temp.exits[temp.exits.length] = variable[j];
                }
                
                // Lagrar noden i världen.
                this.rooms[i] = temp;

            }

        }
        
        // _____________________________Circular World End______________________________________________
        // ___________________________Rectangular World Start___________________________________________

        if(world == 'rectangular'){
            // Mittpunkt av canvas (kvadratisk)
            let yCenter;
            let xCenter;
            let mRadius;
            let yLength = world_data_info['rectangle_y'];

            console.log('yLength: ' + yLength);

            // Radien får inte vara större än canvas.width
            if(canvas.width < canvas.height){
                yCenter = Math.round(canvas.height/2);
                xCenter = Math.round(canvas.width/2);
                mRadius = Math.round((canvas.width/2)*0.9);
            }
            // Radien får inte vara större än canvas.height
            else if(canvas.width == canvas.height){
                yCenter = (Math.round(canvas.height * 0.9))/2;
                xCenter = (Math.round(canvas.width * 0.9))/2;
                mRadius = Math.round((canvas.width/2)*0.9);
            }
            // -...canvas.height och canvas.width är lika stora, denna if satsen är egentligen onödig
            else{
                xCenter = Math.round(canvas.width/2);
                yCenter = Math.round(canvas.height/2);
                mRadius = Math.round((canvas.height/2)*0.9);
            }

            // Startkoordinater för rektangel
            let y = 50;
            let x = 50;

            let row = 0;
            let rad = 0;
            let start = 0;

            ctx.stroke();
            
            for(let i = 0; i < this.numOfNodes; i++){

                
                if(i == row){
                    console.log('Ny rad');
                    row = row + yLength;
                    rad++;
                    console.log('Row: ' + row);
                    console.log('Rad: ' + rad);
                    start = 0;
                }
                y = (rad * 70);
                x = (xCenter) + (100 * start); 
                start++;

                // Noden skapas, och får id, nya x- och y-koordinater, radien för noden är ett statiskt värde
                let temp = new NodeGenerator(i, x, y, 25);

                let variable = (node_data_info[i]['node_exits']).split(',');
                for(let j = 0; j < variable.length; j++){
                    temp.exits[temp.exits.length] = variable[j];
                }
                
                // Lagrar noden i världen.
                this.rooms[i] = temp;

                

            }
        }

        // ___________________________Rectangular World End___________________________________________
        // _____________________________Branch World Start____________________________________________

        if(world == 'branch'){
            // Mittpunkt av canvas (kvadratisk)
            let yCenter;
            let xCenter;
            let mRadius;
            let start = world_data_info['branch_init_range'];
            let factor = world_data_info['branch_factor'];

            console.log('yLength: ' + start);

            // Radien får inte vara större än canvas.width
            if(canvas.width < canvas.height){
                yCenter = Math.round(canvas.height/2);
                xCenter = Math.round(canvas.width/2);
                mRadius = Math.round((canvas.width/2)*0.9);
            }
            // Radien får inte vara större än canvas.height
            else if(canvas.width == canvas.height){
                yCenter = (Math.round(canvas.height * 0.9))/2;
                xCenter = (Math.round(canvas.width * 0.9))/2;
                mRadius = Math.round((canvas.width/2)*0.9);
            }
            // -...canvas.height och canvas.width är lika stora, denna if satsen är egentligen onödig
            else{
                xCenter = Math.round(canvas.width/2);
                yCenter = Math.round(canvas.height/2);
                mRadius = Math.round((canvas.height/2)*0.9);
            }

            // Startkoordinater för branch
            let y = 50;
            let x = 50;
            let restart = 0;

            ctx.stroke();

            
            for(let i = 0; i < this.numOfNodes; i++){

                if(i == start){
                    start = Math.round(start + (start*factor));
                    y = y + 100;
                    restart = 0;
                }
                
                // y = 50;
                x = (70 * restart) + 50;

                restart++;
                // Noden skapas, och får id, nya x- och y-koordinater, radien för noden är ett statiskt värde
                let temp = new NodeGenerator(i, x, y, 25);

                let variable = (node_data_info[i]['node_exits']).split(',');
                for(let j = 0; j < variable.length; j++){
                    temp.exits[temp.exits.length] = variable[j];
                }
                
                // Lagrar noden i världen.
                this.rooms[i] = temp;

                

            }

            

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
                        // console.log('----------------');
                        // console.log(this.rooms[i].xPos, this.rooms[i].yPos);
                        // console.log(this.rooms[this.rooms[i].exits[j]].xPos, this.rooms[this.rooms[i].exits[j]].yPos);
                        ctx.lineTo(this.rooms[this.rooms[i].exits[j]].xPos, this.rooms[this.rooms[i].exits[j]].yPos);
                        ctx.stroke();
                        ctx.closePath();
                        dublett = false;
                    }

                }
            }




        // ______________________________Branch World End_____________________________________________

    }
    printWorld(){
        for(let i = 0; i < this.rooms.length; i++){
            this.rooms[i].printNode();
        }
    }

}

let test = new WorldGenerator(world_data_info['world_type'], (node_number[0]['COUNT(*)']));
test.printWorld();

window.addEventListener('resize', function(){
    ctx.canvas.width = (window.innerWidth - 20);
    ctx.canvas.height = (window.innerHeight - 20);
    test.printWorld();
});


// Edit

let editRadio = document.querySelector('#edit');
let pathFindRadio = document.querySelector('#pathfind');
let saveDiv = document.querySelector('#save');
let edit = false;
let pathFind = false;

let saveBtn = document.querySelector('.btn-save');
let save = [];

let save_id = [];


window.addEventListener('click', function(){
    if(editRadio == document.activeElement){
        if(editRadio.checked == true){
            saveBtn.disabled = false;
            edit = true;
        }  
        // saveDiv.innerHTML = `<button onclick="saveExits()" style="position: absolute; right: 20px;" class="btn-gradient btn-generate mt-3">Save</button>`;
        
    }
    
    else if(editRadio !== document.activeElement){
        // saveDiv.innerHTML = ``;
         
        saveBtn.disabled = true;
        if(editRadio.checked == true){
            saveBtn.disabled = false;
        } 
        edit = false;
    }

    // Edit

    if(edit == true){
    
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
                if(hypotenusan > test.rooms[i].radius){
                    // Not inside a circle
                }
                else{
                    // Inside a circle
                    test.rooms[i].clicked('red');
                    test.printWorld();
        
                    clickedNodes[clickedNodes.length] = (test.rooms[i].id);
                    qClicked++;
                    let double = false;
                    if(qClicked == 2){
                        // Checks if we should remove a path
                        for(let a = 0; a < test.rooms[clickedNodes[0]].exits.length; a++){
                            if(test.rooms[clickedNodes[0]].exits[a] == clickedNodes[1]){
                                // If true, it means there already is a path -> Delete path
                                double = true;
                                test.rooms[clickedNodes[0]].exits.splice(a, 1);  
                                for(let j = 0; j < test.rooms[clickedNodes[1]].exits.length; j++){
                                    if(test.rooms[clickedNodes[1]].exits[j] == clickedNodes[0]){
                                        test.rooms[clickedNodes[1]].exits.splice(j, 1); 
                                    }
                                }      
                            }
                            else if(test.rooms[clickedNodes[1]].exits[a] == clickedNodes[0]){
                                // If true, it means there already is a path -> Delete path
                                double = true;
                                test.rooms[clickedNodes[0]].exits.splice(a, 1); 
                                for(let j = 0; j < test.rooms[clickedNodes[1]].exits.length; j++){
                                    if(test.rooms[clickedNodes[1]].exits[j] == clickedNodes[0]){
                                        test.rooms[clickedNodes[1]].exits.splice(j, 1); 
                                    }
                                }      
                            }
                        }
                        // If the path does not exits -> make a path
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
                            }
                            // Draw the path (line)
                            console.log(clickedNodes[0]);
                            ctx.beginPath();
                            ctx.moveTo(test.rooms[clickedNodes[0]].xPos, test.rooms[clickedNodes[0]].yPos);
                            ctx.lineTo(test.rooms[clickedNodes[1]].xPos, test.rooms[clickedNodes[1]].yPos);
                            ctx.strokeStyle = 'black';
                            ctx.stroke();
                            ctx.closePath();
                            qClicked = 0;
                            console.log('inte tom: ' + clickedNodes);
                            clickedNodes = [];
                            console.log('tom: ' + clickedNodes);
                            test.printWorld();
                        }
                        else{
                            // If the path already exits -> delete the path
                            qClicked = 0;
                            for(let j = 0; j < clickedNodes.length; j++){
                                test.rooms[clickedNodes[j]].clicked('orange');
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
    }
});

function saveExits(){
    // Update database
    for(let i = 0; i < test.numOfNodes; i++){
        save[i] = [...test.rooms[i].exits ];
        save_id[i] = [test.rooms[i].id]
        
    }
    for(let i = 0; i < save.length; i++){
        document.querySelector('#saveInfo').value += '.';
        document.querySelector('#saveInfo').value += save[i];

        document.querySelector('#saveInfoId').value += save_id[i];

        // document.querySelector('#saveInfo').value += '.';
    }
    // console.log('Value: ' + document.querySelector('#saveInfo').value);
    // // document.querySelector('#saveInfo').value = save;
    // console.log('Value: ' + document.querySelector('#saveInfo').value);
    // console.log(save);
        
    
}

let way = [];
window.addEventListener('click', function(){
    if(pathFindRadio == document.activeElement){
        pathFind = true;
    }
    else{
        pathFind = false;
    }

    if(pathFind == true){
        // Look for a path
            let array1 = [];
            let lagra = [];
            let hold = true;
            let kast = [];
            let bla = false;
            let double = 0;
            let clicked = [];

            // If canvas is clicked
            ctx.canvas.addEventListener('click', function(event){
                nodeClicked(event.layerX, event.layerY);
            });

            function nodeClicked(mx,my){

            for(let i = 0; i < test.numOfNodes; i++){
                let katet1 = (test.rooms[i].xPos - mx);
                let katet2 = (test.rooms[i].yPos - my);
                let hypotenusan = Math.sqrt((katet1**2) + (katet2**2));
                if(hypotenusan > test.rooms[i].radius){
                    // Not inside a circle
                }
                // Inside a circle
                else{
                    double++;
                    clicked[clicked.length] = i;
                    if(double == 2) {
                        double=0;
                        start = clicked[0];
                        goal = clicked[1];

                        array1.push([start]);
                        while(hold == true){
                            let temp = array1[0];
                            // For every exit
                            for(let a = 0; a < (test.rooms[temp[temp.length - 1]].exits.length); a++){

                                // If duplicates
                                for(let f = 0; f < temp.length; f++){
                                    // console.log(test.rooms[temp[temp.length - 1]].exits[a] + ' this');
                                    // console.log(temp[f] + ' temp');
                                    if(temp[f] == (test.rooms[temp[temp.length - 1]].exits[a])){
                                        // console.log('Duplicates');
                                        kast = (test.rooms[temp[temp.length - 1]].exits[a]);
                                        bla = true;
                                    }
                                }

                                if(bla == false){
                                    lagra[lagra.length] = ([...array1[0], test.rooms[temp[temp.length - 1]].exits[a]]);
                                }
                                bla = false;
                                // console.log(lagra);

                                // If goal
                                if(test.rooms[temp[temp.length - 1]].exits[a] == goal){
                                    way[way.length] = ([...array1[0], test.rooms[temp[temp.length - 1]].exits[a]]);
                                    lagra.pop();
                                }
                            }

                            for(let c = 0; c < (lagra.length); c++){
                                array1.push([...lagra[c]]);
                            }

                            for(let b = 0; b < (array1.length); b++){
                                array1[b] = array1[(b+1)];
                            }
                            array1.pop();
                            lagra = [];

                            if(array1.length == 0){
                                hold = false;
                            }
                            
                            
                        }
                        // Display buttons to show path
                        let pathFindSum = document.querySelector('#pathFindSum');
                            if(way.length >= 1) {
                                pathFindSum.innerHTML=`<button class="btn btn-dark" onclick="pathFindColor(0)" style="background:linear-gradient(to right, #B983FF, #94B3FD); border-radius:50%; border:none; padding: 15px 5px; margin-left: 2%;">Path 1</button>`;
                                if(way.length >= 2){
                                    pathFindSum.innerHTML+=`<button class="btn btn-dark" onclick="pathFindColor(1)" style="background:linear-gradient(to right, #B983FF, #94B3FD); border-radius:50%; border:none; padding: 15px 5px; margin: 1% 2%">Path 2</button>`;
                                    if(way.length >= 3){
                                        pathFindSum.innerHTML+=`<button class="btn btn-dark" onclick="pathFindColor(2)" style="background:linear-gradient(to right, #B983FF, #94B3FD); border-radius:50%; border:none; padding: 15px 5px;">Path 3</button>`;
                                    }
                                }
                            }
                        
                        console.log(way[0]);
                        console.log(way[1]);
                        console.log(way[2]);
                        clicked = [];
                    }
                }
            }
        }
            

    }



});

// Show path
let path = 0;
function pathFindColor(x) {                     
    for(let i=0; i<(way[path].length-1); i++){
        // "Hide" path line
        ctx.beginPath();
        ctx.moveTo(test.rooms[way[path][i]].xPos, test.rooms[way[path][i]].yPos);
        ctx.lineTo(test.rooms[way[path][i+1]].xPos, test.rooms[way[path][i+1]].yPos);
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 3;
        ctx.stroke();
        ctx.closePath();
        // Draw original path
        ctx.beginPath();
        ctx.moveTo(test.rooms[way[path][i]].xPos, test.rooms[way[path][i]].yPos);
        ctx.lineTo(test.rooms[way[path][i+1]].xPos, test.rooms[way[path][i+1]].yPos);
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.closePath();
        ctx.lineWidth = 1;
        test.printWorld();
    }
    for(let i=0; i<(way[x].length-1); i++){
        // Draw path line
        ctx.beginPath();
        ctx.moveTo(test.rooms[way[x][i]].xPos, test.rooms[way[x][i]].yPos);
        ctx.lineTo(test.rooms[way[x][i+1]].xPos, test.rooms[way[x][i+1]].yPos);
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 3;
        ctx.stroke();
        ctx.closePath();
        ctx.lineWidth = 1;
        test.printWorld();
    }
    path=x;
}