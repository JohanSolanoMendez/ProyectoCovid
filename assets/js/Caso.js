function alerta(){
    
    swal({
        title: "Quiere agregar el Equipo?",
        text: "",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("se agrego equipo", {
            icon: "success",
          });
        } 
      });
}
function alertaAceptarProcedimiento(){
    swal({
        title: "Esta seguro que agregar el Procedimiento?",
        text: "",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("se agrego el procedimiento", {
            icon: "success",
          });
        } 
      });
}

var ModalAgregarSintoma = new bootstrap.Modal(document.getElementById('modalAgregarSintoma'));
function mostrarModalAgregarSintoma(){
  ModalAgregarSintoma.show();}

  var modalEditarUsuario = new bootstrap.Modal(document.getElementById('modalEditarPaciente'));

function mostrarModalEditarUsuario(){
  modalEditarUsuario.show();}

function llenarDatos(){
  var Buscador = document.getElementById('Buscador');
  var contenidoResultado = document.querySelector('#card-body-boleta');

  var nombre = document.getElementById('nombre');
  var edad = document.getElementById('edad');
  var fecha = document.getElementById('fecha');
  var cedulaP = document.getElementById('cedula');
  var provincia = document.getElementById('provincia');
  var fechanacimiento = document.getElementById('fechanacimiento');
  var email = document.getElementById('email');
  var celular = document.getElementById('celular');
  var etapaVida = document.getElementById('etapaVida');

  // Crear una instancia del objeto Date
  var fechaActual = new Date();

  // Obtener el mes, el día y el año de la fecha actual
  var mes = fechaActual.getMonth() + 1; // Los meses comienzan desde 0, por lo que se suma 1
  var dia = fechaActual.getDate();
  var año = fechaActual.getFullYear();

  // Formatear la fecha en el formato deseado (por ejemplo, MM/DD/YYYY)
  var fechaFormateada = mes + '/' + dia + '/' + año;

  Buscador.addEventListener('input', function(e) {
      e.preventDefault();
    
     var cedula = document.getElementById('Buscador').value;

     fetch("http://SistemaCovid-19.somee.com/Paciente/" + cedula)
     .then(response => response.json())
     .then((json) => {

         console.log(json);
         nombre.textContent = json.nombreCompleto;
         edad.textContent = json.edad;
         fecha.textContent = fechaFormateada;
         cedulaP.textContent = json.cedula;
         provincia.textContent = json.provincia;
         email.textContent = json.email;
         celular.textContent = json.numeroTelefono;
         etapaVida.textContent = json.etapaVida;
     })
     .catch(error => {
         console.log('Error:', error);
     });
  });
};