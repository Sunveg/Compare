var i = 0;
function getData(name) {
    fetch('PL.json').then(function(response) {
        return response.json();
    }).then(function(data) {
        //var name = "Sergio Aguero";
        
        for( i = 0; i<data.length;i++) {
            if(data[i].Player == name)
            {
                document.getElementById('name').textContent = name;
                document.getElementById('goals').textContent = "Goals  " + data[i].Gls;
                document.getElementById('assists').textContent = "Assists  " + data[i].Ast;
                document.getElementById('app').textContent = "Appearances  " + data[i].MP;
            }
        }

    })
    .catch(function(error) {
        console.log('OH! something went wrong');
        document.getElementById('err').textContent = "Oops! Check Internet connection and try again!";
        document.getElementById('err2').textContent = "Or the data is being updated. Try again after some time :)";
    })
}

function getData2(name) {
    fetch('PL.json').then(function(response) {
        return response.json();
    }).then(function(data) {
        //var name = "Sergio Aguero";
        
        for( i = 0; i<data.length;i++) {
            if(data[i].Player == name)
            {
                document.getElementById('name2').textContent = name;
                document.getElementById('goals2').textContent = "Goals  " + data[i].Gls;
                document.getElementById('assists2').textContent = "Assists  " + data[i].Ast;
                document.getElementById('app2').textContent = "Appearances  " + data[i].MP;
            }
        }

    })
    .catch(function(error) {
        console.log('OH! something went wrong');
        document.getElementById('err').textContent = "Oops! Check Internet connection and try again!";
        document.getElementById('err2').textContent = "Or the data is being updated. Try again after some time :)";
    })
}

function test()
        {
            var userInput = document.getElementById("myInput").value;
            getData(userInput);
            var userInput2 = document.getElementById("myInput2").value;
            getData2(userInput2);
        }


function filter_names() {

    fetch('PL.json').then(function(response) {
        return response.json();
    }).then(function(data) {
        var datalist = document.getElementById("myUL");
    
        for (var i = 0, len = data.length; i < len; i++) {
            var item;
            var opt = document.createElement("option");
            var pl_name = data[i].Player;
            var team_name = data[i].Squad;
            var text = document.createTextNode(team_name);
            opt.value=pl_name;
            opt.appendChild(text);
            datalist.appendChild(opt);
        }   
    })
}

function selected_player(element) {
    player = element;
    console.log(player);
}

filter_names();


//getData("Sergio Aguero")