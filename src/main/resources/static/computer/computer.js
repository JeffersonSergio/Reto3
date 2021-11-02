function traerInformacionComputer() {
    $.ajax({
        url: "http://localhost:8080/api/Computer/all",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            informacionComputer(respuesta);
        }
    });
}

function informacionComputer(respuesta) {

    let myTable = "<table>";
    for (i = 0; i < respuesta.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + respuesta[i].name + "</td>";
        myTable += "<td>" + respuesta[i].brand + "</td>";
        myTable += "<td>" + respuesta[i].year + "</td>";
        myTable += "<td>" + respuesta[i].description + "</td>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultado").html(myTable);
}

function guardarinformacionComputer() {
    let var3 = {
        name: $("#Bname").val(),
        brand: $("#Bbrand").val(),
        year: $("#Byear").val(),
        description: $("#Bdescription").val(),
    };

    $.ajax({
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var3),

        url: "http://localhost:8080/api/Computer/save",


        success: function (response) {
            console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()

        },

        error: function (jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se guardo correctamente");


        }
    });

}