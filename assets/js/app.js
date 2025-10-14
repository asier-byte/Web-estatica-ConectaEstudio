$(function() {
  // Función para mostrar solo la sección seleccionada
  function showSection(sectionId) {
    // Oculta todas las secciones
    $('.spa-section').hide();
    // Muestra la sección que queremos
    $('#' + sectionId).show();

    // Actualiza "active" en el navbar
    $('.navbar-nav .nav-link').removeClass('active');
    $('.navbar-nav .nav-link[data-section="' + sectionId + '"]').addClass('active');

    // Subir al top
    window.scrollTo(0, 0);
  }

  // Click en navbar
  $('.navbar-nav .nav-link').on('click', function(e) {
    e.preventDefault();
    const section = $(this).attr('data-section');
    showSection(section);
  });

  // Click en tarjetas del menú
  $('.menu-link').on('click', function(e) {
    e.preventDefault();
    const section = $(this).attr('data-section');
    showSection(section);
  });

  // Mostrar inicio por defecto
  showSection('inicio');
});



// Código para las cards en la sección #inicio
$(document).ready(function() {
  // Ocultamos los textos solo de las cards dentro de #inicio
  $('#inicio .card-body p.card-text').hide();

  // Cuando se clickea una card dentro de #inicio
  $('#inicio .card').click(function() {
    // Cerramos todas las demás cards de #inicio
    $('#inicio .card-body p.card-text').not($(this).find('p.card-text')).slideUp();

    // Abrimos o cerramos la card clickeada
    $(this).find('p.card-text').slideToggle();
  });
});








// FILTRO DE ASIGNATURAS EN MENÚ
$('.filtro-btn').click(function() {
    let asignatura = $(this).data('section');

    // Oculta todas las sub-secciones de asignaturas
    $('#menu .spa-section').hide();

    // Muestra solo la asignatura seleccionada
    $('#' + asignatura).show();
});

// NAVEGACIÓN DEL MENÚ PRINCIPAL
$('.nav-link').click(function(e) {
    e.preventDefault();
    let section = $(this).data('section');

    // Oculta todas las secciones SPA
    $('.spa-section').hide();

    // Muestra la sección seleccionada
    $('#' + section).show();
});




$(document).ready(function() {
  $('#asignaturaSelect').on('change', function() {
    var selected = $(this).val();
    
    // Ocultar todas las secciones de tutores
    $('#math, #ingles, #fyq, #humanidades').hide();
    
    // Mostrar la sección seleccionada
    if(selected) {
      $('#' + selected).show();
    }
  });
});

