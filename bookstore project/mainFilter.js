activateClicks();
createTable();


function createTable() {

    var myTable = document.getElementById("table");

    var members = data.results[0].members;

    myTable.innerHTML = "";

    members.forEach(function (everyElement) {

        var myRow = document.createElement("tr");

        var name = document.createElement("td");
        var party = document.createElement("td");
        var state = document.createElement("td");
        //        myRow.append(name, party, state);
        //        
        //        name.innerHTML = everyElement.first_name;
        //        party.innerHTML = everyElement.party;
        //        state.innerHTML = everyElement.state;
        //        INSTEAD OF APPENDING ----->

        myRow.insertCell().innerHTML = everyElement.first_name;
        myRow.insertCell().innerHTML = everyElement.party;
        myRow.insertCell().innerHTML = everyElement.state;




        if (canISeeTheMember(everyElement)) {
            myTable.append(myRow);

        }
    });

}

function activateClicks() {
    document.getElementById("rep").onclick = createTable;
    document.getElementById("dem").onclick = createTable;
    document.getElementById("selector").onchange = createTable;
}

function canISeeTheMember(everyElement) {


    var partyValue = false;
    var stateValue = false;
    var arrayCbx = [];

    var nameValue = false;

    if (document.getElementById("rep").checked) {
        arrayCbx.push("R");
    }
    if (document.getElementById("dem").checked) {
        arrayCbx.push("D");
    }

    
    //1st
    if (arrayCbx.includes(everyElement.party)) {
        partyValue = true;
    }

    
    //2nd
    if(document.getElementById("selector").value == everyElement.state || document.getElementById("selector").value == "all" ){
        stateValue = true;
    }
    
    //3rd
    if(everyElement.first_name.length > 6){
        nameValue = true;
    }


    

    return partyValue && stateValue && nameValue;







}
