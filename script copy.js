var i = 0;

function fun() {
    document.getElementById('player1_img').style.visibility="hidden";
    document.getElementById('player2_img').style.visibility="hidden";
}
fun();

function fun2() {
    document.getElementById('player1_img').style.visibility="visible";
    document.getElementById('player2_img').style.visibility="visible";
}

function getData(name) {
    fetch('PL.json').then(function(response) {
        return response.json();
    }).then(function(data) {
        //var name = "Sergio Aguero";
        
        for( i = 0; i<data.length;i++) {
            if(data[i].Player == name)
            {
                var firstname = name.split(' ');
                var first = firstname[0];
                if(firstname.length>2) {
                    var last = firstname[firstname.length-1];
                }
                else{
                    var last = firstname[1];
                }
                document.getElementById('name').textContent = name;
                document.getElementById('team').textContent = data[i].Squad;
                document.getElementById('nationality').textContent = data[i].Nation;
                document.getElementById('goals').textContent = data[i].Gls;
                document.getElementById('assists').textContent = data[i].Ast;
                document.getElementById('app').textContent = data[i].MP;
                document.getElementById('age').textContent = data[i].Age;
                document.getElementById('pos').textContent = data[i].Pos;
                document.getElementById('starts').textContent = data[i].Starts;
                document.getElementById('mp').textContent = data[i].Min;
                img(first, data[i].Squad, name, last);
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
                var firstname = name.split(' ');
                var first = firstname[0];
                if(firstname.length>2) {
                    var last = firstname[firstname.length-1];
                }
                else{
                    var last = firstname[1];
                }
                var teamname = data[i].Squad.split(' ');
                teamname_first = teamname[0];
                document.getElementById('name2').textContent = name;
                document.getElementById('team2').textContent = data[i].Squad;
                document.getElementById('nationality2').textContent = data[i].Nation;
                document.getElementById('goals2').textContent = data[i].Gls;
                document.getElementById('assists2').textContent = data[i].Ast;
                document.getElementById('app2').textContent = data[i].MP;
                document.getElementById('age2').textContent = data[i].Age;
                document.getElementById('pos2').textContent = data[i].Pos;
                document.getElementById('starts2').textContent = data[i].Starts;
                document.getElementById('mp2').textContent = data[i].Min;
                img2(first, data[i].Squad, name, last, teamname_first);
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
            fun2();
            var userInput = document.getElementById("myInput").value;
            getData(userInput);
            var userInput2 = document.getElementById("myInput2").value;
            getData2(userInput2);
            document.getElementById("GOALS").textContent = 'GOALS';
            document.getElementById("ASSISTS").textContent = 'ASSISTS';
            document.getElementById("APPEARANCES").textContent = 'APPEARANCES';
            document.getElementById("AGE").textContent = 'AGE';
            document.getElementById("POSITION").textContent = 'POSITION';
            document.getElementById("STARTS").textContent = 'STARTS';
            document.getElementById("MP").textContent = 'MINUTES';
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

function img(name, team, fullname, lastname) {
    var y = 0;
    fetch('https://raw.githubusercontent.com/hendrasan/epl1920/master/epl1920stat.json').then(function(response) {
        return response.json();
    }).then(function(data) {
        console.log(data);
        for( i = 0; i<data.length;i++) {
            if((data[i].firstName == name && data[i].team == team) || data[i].name == fullname || data[i].lastName == lastname)
            {
                document.getElementById('player1_img').src = data[i].picture;
                y = 1;
            }
        }
        if(y == 0)
        {
            document.getElementById('player1_img').title = "Sorry, player photo not available";
            document.getElementById('player1_img').src = "unavailable.png";
        }
    })
}

function img2(name2, team2, fullname, lastname) {
    var y = 0;
    fetch('https://raw.githubusercontent.com/hendrasan/epl1920/master/epl1920stat.json').then(function(response) {
        return response.json();
    }).then(function(data) {
        console.log(data);
        for( i = 0; i<data.length;i++) {
            if((data[i].firstName == name2 && data[i].team == team2) || data[i].name == fullname || data[i].lastName == lastname)
            {
                document.getElementById('player2_img').src = data[i].picture;
                y = 1;
            }
        }
        if(y == 0)
        {
            document.getElementById('player2_img').title = "Sorry, player photo not available";
            document.getElementById('player2_img').src = "unavailable.png";
        }
    })
}

filter_names();

//getData("Sergio Aguero")