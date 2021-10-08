const $seccion = document.querySelector('#secciones');  //tomo el select del HTML
const $FAQ = document.querySelector('#FAQ');  //donde escribire la salida

$seccion.addEventListener('change', (e) => {
  let catPregunta = e.target.value; //tomo el valor que esta seleccionado, se escucha al cambiar
  switch (catPregunta) {            //ingreso las preguntas con sus etiquetas HTML
    case 'comprador':
      $FAQ.innerHTML = `<div class="row my-2">
<div class="col-xl-4">
  <div class="border bg-dark">
    <h4 class="tituloDeSubeccion">Preguntas de comprador (<span id="numPreguntas">4</span>)</h4>
  </div>
</div>
<div class="col-xl-8">
  <div class="border bg-light rounded">
    <p class="pregunta">¿Esta es una pregunta?</p>
    <p class="respuesta">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt laboriosam ratione error magnam id quos, iste architecto accusamus corrupti excepturi optio beatae sed in repellendus dolores blanditiis voluptatem maxime est.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, expedita numquam iusto repellat quam veritatis delectus perferendis praesentium animi blanditiis totam, rerum debitis ipsa est aspernatur obcaecati illo dolorem officia?</p>
  </div>
</div>
</div>
<div class="row my-2">
<div class="col-xl-4">
  <div class="border bg-light rounded">
    <p class="pregunta">¿Esta es una pregunta?</p>
    <p class="respuesta">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt laboriosam ratione error magnam id quos, iste architecto accusamus corrupti excepturi optio beatae sed in repellendus dolores blanditiis voluptatem maxime est.</p>
  </div>
</div>
<div class="col-xl-4">
  <div class="border bg-light rounded">
    <p class="pregunta">¿Esta es una pregunta?</p>
    <p class="respuesta">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt laboriosam ratione error magnam id quos, iste architecto accusamus corrupti excepturi optio beatae sed in repellendus dolores blanditiis voluptatem maxime est.</p>
  </div>
</div>
<div class="col-xl-4">
  <div class="border bg-light rounded">
    <p class="pregunta">¿Esta es una pregunta?</p>
    <p class="respuesta">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt laboriosam ratione error magnam id quos, iste architecto accusamus corrupti excepturi optio beatae sed in repellendus dolores blanditiis voluptatem maxime est.</p>
  </div>
</div>
                        </div>`;
      break;
    case 'vendedor':
      $FAQ.innerHTML = `<div class="row my-2">
  <div class="col-xl-4">
    <div class="border bg-dark">
      <h4 class="tituloDeSubeccion">Preguntas de vendedor (<span id="numPreguntas">4</span>)</h4>
    </div>
  </div>
  <div class="col-xl-8">
    <div class="border bg-light rounded">
      <p class="pregunta">¿Esta es una pregunta?</p>
      <p class="respuesta">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt laboriosam ratione error magnam id quos, iste architecto accusamus corrupti excepturi optio beatae sed in repellendus dolores blanditiis voluptatem maxime est.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, expedita numquam iusto repellat quam veritatis delectus perferendis praesentium animi blanditiis totam, rerum debitis ipsa est aspernatur obcaecati illo dolorem officia?</p>
    </div>
  </div>
  </div>
  <div class="row my-2">
  <div class="col-xl-4">
    <div class="border bg-light rounded">
      <p class="pregunta">¿Esta es una pregunta?</p>
      <p class="respuesta">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt laboriosam ratione error magnam id quos, iste architecto accusamus corrupti excepturi optio beatae sed in repellendus dolores blanditiis voluptatem maxime est.</p>
    </div>
  </div>
  <div class="col-xl-4">
    <div class="border bg-light rounded">
      <p class="pregunta">¿Esta es una pregunta?</p>
      <p class="respuesta">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt laboriosam ratione error magnam id quos, iste architecto accusamus corrupti excepturi optio beatae sed in repellendus dolores blanditiis voluptatem maxime est.</p>
    </div>
  </div>
  <div class="col-xl-4">
    <div class="border bg-light rounded">
      <p class="pregunta">¿Esta es una pregunta?</p>
      <p class="respuesta">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt laboriosam ratione error magnam id quos, iste architecto accusamus corrupti excepturi optio beatae sed in repellendus dolores blanditiis voluptatem maxime est.</p>
    </div>
  </div>
                        </div>`;
      break;
    case 'productos':
      $FAQ.innerHTML = `<div class="row my-2">
    <div class="col-xl-4">
      <div class="border bg-dark">
        <h4 class="tituloDeSubeccion">Preguntas de productos (<span id="numPreguntas">4</span>)</h4>
      </div>
    </div>
    <div class="col-xl-8">
      <div class="border bg-light rounded">
        <p class="pregunta">¿Esta es una pregunta?</p>
        <p class="respuesta">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt laboriosam ratione error magnam id quos, iste architecto accusamus corrupti excepturi optio beatae sed in repellendus dolores blanditiis voluptatem maxime est.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, expedita numquam iusto repellat quam veritatis delectus perferendis praesentium animi blanditiis totam, rerum debitis ipsa est aspernatur obcaecati illo dolorem officia?</p>
      </div>
    </div>
    </div>
    <div class="row my-2">
    <div class="col-xl-4">
      <div class="border bg-light rounded">
        <p class="pregunta">¿Esta es una pregunta?</p>
        <p class="respuesta">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt laboriosam ratione error magnam id quos, iste architecto accusamus corrupti excepturi optio beatae sed in repellendus dolores blanditiis voluptatem maxime est.</p>
      </div>
    </div>
    <div class="col-xl-4">
      <div class="border bg-light rounded">
        <p class="pregunta">¿Esta es una pregunta?</p>
        <p class="respuesta">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt laboriosam ratione error magnam id quos, iste architecto accusamus corrupti excepturi optio beatae sed in repellendus dolores blanditiis voluptatem maxime est.</p>
      </div>
    </div>
    <div class="col-xl-4">
      <div class="border bg-light rounded">
        <p class="pregunta">¿Esta es una pregunta?</p>
        <p class="respuesta">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt laboriosam ratione error magnam id quos, iste architecto accusamus corrupti excepturi optio beatae sed in repellendus dolores blanditiis voluptatem maxime est.</p>
      </div>
    </div>
                          </div>`;
      break;
    case 'envios':
        $FAQ.innerHTML = `<div class="row my-2">
    <div class="col-xl-4">
      <div class="border bg-dark">
        <h4 class="tituloDeSubeccion">Preguntas de envios (<span id="numPreguntas">4</span>)</h4>
      </div>
    </div>
    <div class="col-xl-8">
      <div class="border bg-light rounded">
        <p class="pregunta">¿Esta es una pregunta?</p>
        <p class="respuesta">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt laboriosam ratione error magnam id quos, iste architecto accusamus corrupti excepturi optio beatae sed in repellendus dolores blanditiis voluptatem maxime est.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, expedita numquam iusto repellat quam veritatis delectus perferendis praesentium animi blanditiis totam, rerum debitis ipsa est aspernatur obcaecati illo dolorem officia?</p>
      </div>
    </div>
    </div>
    <div class="row my-2">
    <div class="col-xl-4">
      <div class="border bg-light rounded">
        <p class="pregunta">¿Esta es una pregunta?</p>
        <p class="respuesta">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt laboriosam ratione error magnam id quos, iste architecto accusamus corrupti excepturi optio beatae sed in repellendus dolores blanditiis voluptatem maxime est.</p>
      </div>
    </div>
    <div class="col-xl-4">
      <div class="border bg-light rounded">
        <p class="pregunta">¿Esta es una pregunta?</p>
        <p class="respuesta">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt laboriosam ratione error magnam id quos, iste architecto accusamus corrupti excepturi optio beatae sed in repellendus dolores blanditiis voluptatem maxime est.</p>
      </div>
    </div>
    <div class="col-xl-4">
      <div class="border bg-light rounded">
        <p class="pregunta">¿Esta es una pregunta?</p>
        <p class="respuesta">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt laboriosam ratione error magnam id quos, iste architecto accusamus corrupti excepturi optio beatae sed in repellendus dolores blanditiis voluptatem maxime est.</p>
      </div>
    </div>
                          </div>`;
        break;

        //si da tiempo para agregar preguntas cada entrada sera una variable diferente a la cual ir agregando rows y columnas con la estructura como en el ejercicio de las tarjetas de colores
    default:
      $FAQ.innerHTML = ""; //se limpia al no seleccionar una de las opciones
      break;
  }
});


