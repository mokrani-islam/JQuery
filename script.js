$(document).ready(function() {
    $('#monFormulaire').submit(function(event) {
      event.preventDefault();
      var Nom = $('#Nom').val();
      var Prenom = $('#Prenom').val();
      var Note1 = parseFloat($('#Note1').val());
      var Note2 = parseFloat($('#Note2').val());
      var average = (Note1 + Note2) / 2;
  
      $('#result').html('<p> la Moyenne des notes de ' + Nom + ' ' + Prenom + ': ' + average.toFixed(2) + '</p>');
    });
  });
