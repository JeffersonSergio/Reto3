function traerInformacionClientes() {
    $.ajax({
        url: "http://localhost:8080/api/Client/all",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            pintarRespuestaClientes(respuesta);
        }
    });
}

function pintarRespuestaClientes(respuesta) {

    let myTable = "<table>";
    for (i = 0; i < respuesta.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + respuesta[i].email + "</td>";
        myTable += "<td>" + respuesta[i].password + "</td>";
        myTable += "<td>" + respuesta[i].name + "</td>";
        myTable += "<td>" + respuesta[i].age + "</td>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultado3").html(myTable);
}

function guardarInformacionClientes() {
    let var4 = {
        email: $("#CLemail").val(),
        password: $("#CLpassword").val(),
        name: $("#CLname").val(),
        age: $("#CLage").val(),
    };

    $.ajax({
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var4),

        url: "http://localhost:8080/api/Client/save",


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