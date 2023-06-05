document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');
    var aside = document.querySelector('aside');
    var errorDiv = aside.querySelector('.error');
    var datoFormSpans = aside.querySelectorAll('.datoForm');
    var bienvenidaP = document.getElementById('cartelBienvenido');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Reiniciar mensajes de error
        errorDiv.textContent = '';
        datoFormSpans.forEach(function(span) {
            span.textContent = '';
        });
        
        // Validar nombre
        var nombreInput = document.getElementById('nombre');
        if (nombreInput.value.trim() === '') {
            errorDiv.textContent = 'Por favor, ingresa tu nombre completo.';
            aside.style.display = 'block';
            bienvenidaP.style.display = 'none';
            return;
        }
        
        // Validar correo
        var emailInput = document.getElementById('email');
        if (emailInput.value.trim() === '') {
            errorDiv.textContent = 'Por favor, ingresa tu correo electrónico.';
            aside.style.display = 'block';
            bienvenidaP.style.display = 'none';
            return;
        } else if (!emailInput.value.includes('@')) {
            errorDiv.textContent = 'Por favor, ingresa un correo electrónico válido.';
            aside.style.display = 'block';
            bienvenidaP.style.display = 'none';
            return;
        }
        
        // Validar género
        var generoInputs = document.querySelectorAll('input[name="genero"]');
        var generoSelected = false;
        var genero = '';
        
        for (var i = 0; i < generoInputs.length; i++) {
            if (generoInputs[i].checked) {
                generoSelected = true;
                genero = generoInputs[i].value;
                break;
            }
        }
        
        if (!generoSelected) {
            errorDiv.textContent = 'Por favor, selecciona tu género.';
            aside.style.display = 'block';
            bienvenidaP.style.display = 'none';
            return;
        }
        
        // Validar edad
        var edadInput = document.getElementsByName('edad')[0];
        var edad = parseInt(edadInput.value);
        if (isNaN(edad) || edad < 0 || edad > 99) {
            errorDiv.textContent = 'Por favor, ingresa una edad válida.';
            aside.style.display = 'block';
            bienvenidaP.style.display = 'none';
            return;
        }
        
        // Mostrar mensaje de éxito
        
        aside.style.display="block";
        bienvenidaP.style.display = 'block';
        datoFormSpans[0].textContent = '!'+nombreInput.value;
        datoFormSpans[1].textContent = edad;
        datoFormSpans[3].textContent = emailInput.value;
        
        var generoSpan = Array.from(datoFormSpans).find(function(span) {
            return span.id === 'genero';
          });
      
          if (generoSpan) {
            var generoTexto = genero === 'Masculino' ? 'masculino' : 'femenino';
            generoSpan.textContent = generoTexto;
          }
        });
      });
