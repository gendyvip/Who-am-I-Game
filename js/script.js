var fly = confirm("Do you fly?")
if (fly) {
    var wild = confirm("Are you wild?")

    wild ? document.writeln('<img src="../images/eagle.png" alt="Eagle" width="200"><h3>Eagle</3>') : document.writeln('<img src="../images/parrot.png" alt="Parrot" width="200" ><h3>Parrot</h3>')
}
else {
    var undersea = confirm("Do you live undersea?")
    if (undersea) {
        var wild = confirm("Are you wild?")
        wild ? document.writeln('<img src="../images/shark.png" alt="Shark" width="200"><h3>Shark</h3>') : document.writeln('<img src="../images/dolphin.png" alt="Dolphin" width="200"><h3>Dolphin</3>')
    }
    else {
        var wild = confirm("Are you wild?")
        wild ? document.writeln('<img src="../images/lion.png" alt="Lion" width="200"><h3>Lion</h3>') : document.writeln('<img src="../images/cat.png" alt="Cat" width="200" ><h3>Cat</h3>')
    }
}


