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
$(document).ready(function() {
  $('.filtro-btn').click(function() {
    let asignatura = $(this).data('section');

    // Oculta todas las sub-secciones de asignaturas
    $('#menu .spa-section').hide();

    // Muestra solo la asignatura seleccionada
    $('#' + asignatura).show();
  });
});

// NAVEGACIÓN DEL MENÚ PRINCIPAL
$(document).ready(function() {
  $('.nav-link').click(function(e) {
    e.preventDefault();
    let section = $(this).data('section');

    // Oculta todas las secciones SPA
    $('.spa-section').hide();

    // Muestra la sección seleccionada
    $('#' + section).show();
  });
});

// FILTRO DE ASIGNATURAS POR SELECT
$(document).ready(function() {
  $('#asignaturaSelect').on('change', function() {
    var selected = $(this).val();

    // Ocultar todas las secciones de tutores
    $('#math, #ingles, #fyq, #humanidades').hide();

    // Mostrar la sección seleccionada
    if (selected) {
      $('#' + selected).show();
    }
  });
});

// Interactividad solo para las cards del Proceso de Postulación
$(document).ready(function() {
  // Ocultar inicialmente todos los contenidos de las cards
  $("#postulacion-cards .card-body").hide();

  // Al hacer clic en el encabezado de una card
  $("#postulacion-cards .card-header").on("click", function() {
    // Cerrar todas las demás card-body
    $("#postulacion-cards .card-body").slideUp();
    $("#postulacion-cards .toggle-icon").text("▼");

    // Si la card clicada estaba cerrada, abrirla
    const body = $(this).next(".card-body");
    if (!body.is(":visible")) {
      body.slideDown();
      $(this).find(".toggle-icon").text("▲");
    }
  });
});

// Validación del formulario de contacto
$(document).ready(function() {
  $("#form-tutor").on("submit", function(e) {
    e.preventDefault(); // evitar envío real del formulario

    const email = $("#inputEmail3").val().trim();
    const name = $("#inputName").val().trim();
    const password = $("#inputPassword3").val().trim();
    const experience = $("#inputExperience").val().trim();

    // Expresión regular básica para validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validación básica
    if (name === "" || password === "" || experience === "") {
      alert("Por favor, completa todos los campos requeridos.");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Por favor, introduce un correo electrónico válido.");
      return;
    }

    // Si todo está correcto, mostrar modal
    const modal = new bootstrap.Modal(document.getElementById("thankYouModal"));
    modal.show();

    // Limpiar el formulario tras unos segundos
    setTimeout(() => {
      $("#form-tutor")[0].reset();
    }, 1000);
  });
});