// ===== DATA =====
const libros = [
  { id: 100, titulo: "Aprende Hipnosis en 13 Lecciones", autor: "William W. Hewitt", precio: 0, estrellas: 5, categoria: "Psicología", cover: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=300&q=80", descripcion: "Aprende a hipnotizar, autohipnotizarte y realizar regresiones en el tiempo. Incluye técnicas para dejar de fumar, adelgazar y superar miedos. Una guía completa para principiantes y avanzados.", bestseller: true, pdf: "Aprende-hipnosis-en-13-lecciones.pdf" },
  { id: 101, titulo: "La Liberación del Alma", autor: "Michael A. Singer", precio: 0, estrellas: 5, categoria: "Espiritualidad", cover: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=300&q=80", descripcion: "Una exploración profunda del camino hacia la libertad interior y la liberación espiritual. Singer nos guía a través de la filosofía Advaita para soltar el ego y descubrir la conciencia pura que somos.", bestseller: true, pdf: "La_liberación_del_alma__Michael_A__Si_____Z-Library_.pdf" },
  { id: 1,  titulo: "El Arte de Vivir en Paz",      autor: "E. Tolle",     precio: 24.50, estrellas: 5, categoria: "Meditación",    cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&q=80",    descripcion: "Una guía profunda para encontrar la paz interior en medio del caos cotidiano. E. Tolle nos lleva a través de prácticas milenarias adaptadas al mundo moderno, ayudándonos a soltar el ego y abrazar el momento presente con total plenitud y conciencia.", bestseller: true },
  { id: 4,  titulo: "El Poder del Ahora",           autor: "E. Tolle",     precio: 21.90, estrellas: 5, categoria: "Meditación",    cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&q=80",    descripcion: "El libro que ha transformado millones de vidas en todo el mundo. Eckhart Tolle explica cómo liberarse del dolor emocional y la ansiedad viviendo plenamente en el momento presente, el único momento que realmente existe.", bestseller: true },
  { id: 5,  titulo: "Meditación Profunda",          autor: "A. Sharma",    precio: 18.50, estrellas: 4, categoria: "Meditación",    cover: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&q=80",    descripcion: "Técnicas probadas de meditación para reducir el estrés, mejorar la concentración y cultivar una mente más serena y equilibrada. Incluye ejercicios prácticos para principiantes y meditadores avanzados.", bestseller: false },
  { id: 9,  titulo: "Silencio Interior",            autor: "S. Nhat Hanh", precio: 17.80, estrellas: 5, categoria: "Meditación",    cover: "https://images.unsplash.com/photo-1502209766571-a4a67a94e7e3?w=300&q=80",    descripcion: "El maestro zen Thich Nhat Hanh nos enseña a cultivar el silencio en medio de la vida agitada. Con poemas y meditaciones guiadas, este libro transforma la manera en que nos relacionamos con nosotros mismos y con el mundo.", bestseller: false },
  { id: 10, titulo: "Respira y Vive",               autor: "W. Wim Hof",   precio: 20.00, estrellas: 4, categoria: "Meditación",    cover: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&q=80",    descripcion: "El método de respiración que está revolucionando el bienestar mundial. Aprende a controlar tu sistema nervioso, aumentar tu energía y fortalecer tu inmunidad a través de técnicas respiratorias ancestrales.", bestseller: false },
  { id: 2,  titulo: "Sabiduría Estoica",            autor: "M. Aurelio",   precio: 19.99, estrellas: 5, categoria: "Filosofía",     cover: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=300&q=80",    descripcion: "Las meditaciones del gran emperador Marco Aurelio recopiladas y comentadas para el lector contemporáneo. Un manual de vida basado en la fortaleza interior, la virtud y la aceptación de lo que no podemos cambiar.", bestseller: true },
  { id: 6,  titulo: "La Filosofía del Ser",         autor: "M. Aurelio",   precio: 22.75, estrellas: 5, categoria: "Filosofía",     cover: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=300&q=80",    descripcion: "Una exploración fascinante de las grandes preguntas de la existencia humana. Este libro nos guía a través del pensamiento estoico, platónico y budista para construir una filosofía de vida sólida y significativa.", bestseller: false },
  { id: 11, titulo: "El Camino del Sabio",          autor: "S. de Beauvoir",precio: 25.50, estrellas: 5, categoria: "Filosofía",    cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&q=80",    descripcion: "Un recorrido por la sabiduría de los grandes filósofos de la historia: Sócrates, Confucio, Epicteto y Spinoza. Una obra que invita a vivir con mayor coherencia, propósito y libertad auténtica.", bestseller: false },
  { id: 12, titulo: "Ética sin Dogmas",             autor: "B. Russell",   precio: 16.99, estrellas: 4, categoria: "Filosofía",     cover: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=300&q=80",    descripcion: "Bertrand Russell construye un sistema ético libre de religión y dogma, basado en la razón, la empatía y el respeto. Una lectura esencial para quienes buscan valores sólidos en el mundo contemporáneo.", bestseller: false },
  { id: 13, titulo: "Diálogos con el Alma",         autor: "C. G. Jung",   precio: 28.00, estrellas: 5, categoria: "Filosofía",     cover: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=300&q=80",    descripcion: "Inspirado en los escritos de Carl Jung, este libro explora el inconsciente colectivo, los arquetipos y el proceso de individuación. Un puente entre la psicología profunda y la filosofía del espíritu.", bestseller: true },
  { id: 3,  titulo: "El Viaje Interior",            autor: "T. Hansen",    precio: 26.00, estrellas: 5, categoria: "Superación",    cover: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=300&q=80",    descripcion: "Un extraordinario relato de autodescubrimiento a través de los paisajes del alma. T. Hansen nos invita a explorar nuestras creencias más profundas y a transformar los obstáculos en escalones hacia una vida más auténtica y plena.", bestseller: true },
  { id: 8,  titulo: "Supera tus Límites",           autor: "D. Carnegie",  precio: 23.40, estrellas: 5, categoria: "Superación",    cover: "https://images.unsplash.com/photo-1434030216411-0b793f4b6f74?w=300&q=80",    descripcion: "Dale Carnegie presenta su método definitivo para superar el miedo, desarrollar la confianza y alcanzar el máximo potencial personal y profesional. Un clásico actualizado con técnicas modernas de psicología positiva.", bestseller: false },
  { id: 14, titulo: "Hábitos Que Transforman",      autor: "J. Clear",     precio: 22.00, estrellas: 5, categoria: "Superación",    cover: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=300&q=80",    descripcion: "James Clear revela la ciencia detrás de los hábitos y cómo pequeños cambios del 1% pueden transformar radicalmente tu vida. Un sistema probado para construir buenos hábitos y romper los malos para siempre.", bestseller: true },
  { id: 15, titulo: "La Mente Inquebrantable",      autor: "V. Frankl",    precio: 19.50, estrellas: 5, categoria: "Superación",    cover: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=300&q=80",    descripcion: "Viktor Frankl, superviviente del Holocausto, comparte su teoría de la logoterapia: encontrar sentido en el sufrimiento. Una obra que enseña que siempre tenemos libertad para elegir nuestra actitud ante cualquier circunstancia.", bestseller: true },
  { id: 16, titulo: "Rompe Tus Cadenas",            autor: "R. Sharma",    precio: 17.99, estrellas: 4, categoria: "Superación",    cover: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&q=80",    descripcion: "Robin Sharma guía al lector en un proceso de transformación profunda: liberarse de las creencias limitantes, despertar el liderazgo interno y construir una vida de excelencia, propósito e impacto duradero.", bestseller: false },
  { id: 7,  titulo: "Mindfulness Diario",           autor: "T. Hansen",    precio: 15.99, estrellas: 4, categoria: "Mindfulness",   cover: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=300&q=80",    descripcion: "365 prácticas de atención plena para integrar en tu rutina diaria. Cada ejercicio está diseñado para que puedas cultivar la presencia y la gratitud en los pequeños momentos que componen nuestra vida.", bestseller: false },
  { id: 17, titulo: "Atención Plena",               autor: "J. Kabat-Zinn",precio: 21.00, estrellas: 5, categoria: "Mindfulness",   cover: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=300&q=80",    descripcion: "El fundador del programa MBSR explica cómo la atención plena puede sanar el cuerpo y la mente. Con ejercicios prácticos para cada situación de la vida cotidiana, este libro es la biblia del mindfulness moderno.", bestseller: true },
  { id: 18, titulo: "El Jardín de la Mente",        autor: "L. Rinpoche",  precio: 18.75, estrellas: 4, categoria: "Mindfulness",   cover: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=300&q=80",    descripcion: "Usando la metáfora del jardín, Lama Rinpoche enseña a cultivar pensamientos positivos, arrancar la negatividad y regar las semillas de la compasión. Una obra poética y práctica a la vez.", bestseller: false },
  { id: 19, titulo: "El Libro del Alma",            autor: "P. Coelho",    precio: 24.99, estrellas: 5, categoria: "Espiritualidad",cover: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=300&q=80",    descripcion: "Paulo Coelho reúne en esta obra las enseñanzas espirituales que han marcado su vida: de las tradiciones sufíes, budistas y chamánicas. Un libro de cabecera para quienes buscan lo sagrado en lo cotidiano.", bestseller: true },
  { id: 20, titulo: "Luz en la Oscuridad",          autor: "M. Williamson",precio: 20.50, estrellas: 4, categoria: "Espiritualidad",cover: "https://images.unsplash.com/photo-1507908708918-778587c9e563?w=300&q=80",    descripcion: "Marianne Williamson ofrece una perspectiva de amor incondicional como herramienta espiritual para sanar relaciones, superar el miedo y encontrar el propósito divino en cada experiencia de vida.", bestseller: false },
  { id: 21, titulo: "El Sendero Sagrado",           autor: "D. Chopra",    precio: 27.00, estrellas: 5, categoria: "Espiritualidad",cover: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=300&q=80",    descripcion: "Deepak Chopra integra la sabiduría védica con la física cuántica para revelar cómo el universo conspira a favor de nuestra evolución. Un mapa espiritual para navegar los grandes cambios de la vida.", bestseller: true },
  { id: 22, titulo: "La Psicología del Éxito",      autor: "C. Dweck",     precio: 23.90, estrellas: 5, categoria: "Psicología",    cover: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=300&q=80",    descripcion: "Carol Dweck, psicóloga de Stanford, explica la diferencia entre la mentalidad fija y la de crecimiento, y cómo esta última es la clave del éxito en todos los ámbitos de la vida. Un libro que cambia la forma de pensar.", bestseller: true },
  { id: 23, titulo: "Emociones Sin Cadenas",        autor: "B. Brown",     precio: 21.50, estrellas: 5, categoria: "Psicología",    cover: "https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?w=300&q=80",    descripcion: "Brené Brown explora el poder de la vulnerabilidad, la vergüenza y la empatía. Con investigación rigurosa y humor, enseña a construir conexiones auténticas y a vivir desde la valentía emocional.", bestseller: false },
  { id: 24, titulo: "Cerebro Zen",                  autor: "R. Hanson",    precio: 19.25, estrellas: 4, categoria: "Psicología",    cover: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=300&q=80",    descripcion: "Rick Hanson combina neurociencia y psicología budista para enseñarnos a cablear el cerebro hacia la felicidad. Aprende a absorber las experiencias positivas y a reducir el impacto del estrés en tu sistema nervioso.", bestseller: false },
  { id: 25, titulo: "El Monje que Vendió su Ferrari",autor: "R. Sharma",   precio: 18.99, estrellas: 5, categoria: "Biografías",    cover: "https://images.unsplash.com/photo-1492892132812-a00a8b245c45?w=300&q=80",    descripcion: "Julian Mantle, exitoso abogado que lo abandonó todo para buscar la sabiduría en el Himalaya. Una fábula inspiradora sobre el equilibrio entre el éxito material y la plenitud espiritual que ha conquistado a millones de lectores.", bestseller: true },
  { id: 26, titulo: "Siddhartha",                   autor: "H. Hesse",     precio: 14.50, estrellas: 5, categoria: "Biografías",    cover: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=300&q=80",    descripcion: "La obra maestra de Hermann Hesse sigue el viaje espiritual de Siddhartha, un joven brahmán que abandona su vida privilegiada en busca del significado más profundo de la existencia. Un clásico eterno.", bestseller: false },
  { id: 27, titulo: "Mi Experimento con la Verdad", autor: "M. Gandhi",    precio: 16.00, estrellas: 5, categoria: "Biografías",    cover: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=300&q=80",    descripcion: "La autobiografía del Mahatma Gandhi, uno de los grandes líderes espirituales y políticos del siglo XX. Un relato honesto, valiente y profundamente humano de una vida dedicada a la verdad y la no violencia.", bestseller: true }
];

let carrito = [];
let activeCategoryChip = null;

// ===== RENDER =====
function renderBooks(lista) {
  const grid = document.getElementById('books-grid');
  grid.innerHTML = '';

  if (lista.length === 0) {
    grid.innerHTML = '<p style="color:var(--text-light);grid-column:1/-1;text-align:center;padding:40px 0;font-size:0.9rem">No se encontraron libros con estos filtros.</p>';
    return;
  }

  lista.forEach(libro => {
    const card = document.createElement('div');
    card.className = 'book-card';
    card.dataset.id = libro.id;

    const stars = '★'.repeat(libro.estrellas) + '☆'.repeat(5 - libro.estrellas);

    card.innerHTML = `
      <div class="book-cover-wrap">
        <img class="book-cover" src="${libro.cover}" alt="${libro.titulo}" loading="lazy" />
        ${libro.bestseller ? '<span class="badge-bestseller">BESTSELLER</span>' : ''}
        <span class="badge-cat">${libro.categoria}</span>
      </div>
      <div class="book-info">
        <div class="book-title">${libro.titulo}</div>
        <div class="book-author">${libro.autor}</div>
        <div class="book-stars">${stars}</div>
        <div class="book-price">€${libro.precio.toFixed(2)}</div>
      </div>
      <div class="book-actions">
        ${libro.pdf ? '<a class="btn-carrito" href="' + libro.pdf + '" target="_blank" style="text-align:center;text-decoration:none;display:block">📖 LEER PDF GRATIS</a>' : '<button class="btn-carrito" onclick="addToCart(' + libro.id + ')">AÑADIR AL CARRITO</button>'}
        <button class="btn-saber" onclick="verLibro(${libro.id})">SABER MÁS</button>
      </div>
    `;

    grid.appendChild(card);
  });
}

// ===== FILTERS =====
function getActiveFilters() {
  const isMobile = window.innerWidth <= 640;

  const searchVal = (isMobile
    ? document.getElementById('search-input-mobile').value
    : document.getElementById('search-input').value
  ).toLowerCase().trim();

  let checkedTemas, checkedAutores;
  if (isMobile) {
    checkedTemas   = [...document.querySelectorAll('#filter-m-temas input:checked')].map(i => i.value);
    checkedAutores = [...document.querySelectorAll('#filter-m-autor input:checked')].map(i => i.value);
  } else {
    checkedTemas   = [...document.querySelectorAll('#filter-temas input:checked')].map(i => i.value);
    checkedAutores = [...document.querySelectorAll('#filter-autor input:checked')].map(i => i.value);
  }

  const minEl = isMobile ? document.getElementById('m-precio-min') : document.getElementById('precio-min');
  const maxEl = isMobile ? document.getElementById('m-precio-max') : document.getElementById('precio-max');
  const realMin = Math.min(parseFloat(minEl.value), parseFloat(maxEl.value));
  const realMax = Math.max(parseFloat(minEl.value), parseFloat(maxEl.value));

  return { searchVal, checkedTemas, checkedAutores, realMin, realMax };
}

function applyFilters() {
  const { searchVal, checkedTemas, checkedAutores, realMin, realMax } = getActiveFilters();
  const sort = document.getElementById('sort-select') ? document.getElementById('sort-select').value : 'default';

  let filtrados = libros.filter(l => {
    const matchSearch  = !searchVal || l.titulo.toLowerCase().includes(searchVal) || l.autor.toLowerCase().includes(searchVal);
    const matchTema    = checkedTemas.length === 0   || checkedTemas.includes(l.categoria);
    const matchAutor   = checkedAutores.length === 0 || checkedAutores.includes(l.autor);
    const matchPrice   = l.precio >= realMin && l.precio <= realMax;
    return matchSearch && matchTema && matchAutor && matchPrice;
  });

  // Sort
  if (sort === 'precio-asc')  filtrados.sort((a, b) => a.precio - b.precio);
  if (sort === 'precio-desc') filtrados.sort((a, b) => b.precio - a.precio);
  if (sort === 'titulo')      filtrados.sort((a, b) => a.titulo.localeCompare(b.titulo));
  if (sort === 'estrellas')   filtrados.sort((a, b) => b.estrellas - a.estrellas);

  renderBooks(filtrados);
  updateFilterDot(checkedTemas, checkedAutores, realMin, realMax, searchVal);
}

function updateFilterDot(temas, autores, min, max, search) {
  const hasFilter = temas.length > 0 || autores.length > 0 || min > 5 || max < 50 || search;
  const dot = document.getElementById('filter-dot');
  if (dot) dot.style.display = hasFilter ? 'inline-block' : 'none';
}

function syncSearch(input) {
  const other = input.id === 'search-input-mobile'
    ? document.getElementById('search-input')
    : document.getElementById('search-input-mobile');
  if (other) other.value = input.value;
  applyFilters();
}

function filterCategory(cat) {
  // Deselect if same chip tapped
  if (activeCategoryChip === cat) {
    activeCategoryChip = null;
    document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    clearFilters();
    return;
  }
  activeCategoryChip = cat;

  // Highlight chip
  document.querySelectorAll('.chip').forEach(c => {
    c.classList.toggle('active', c.textContent.includes(cat));
  });

  // Uncheck all category checkboxes in both sidebars
  document.querySelectorAll('#filter-temas input, #filter-m-temas input').forEach(i => i.checked = false);

  // Check the matching ones
  document.querySelectorAll(
    `#filter-temas input[value="${cat}"], #filter-m-temas input[value="${cat}"]`
  ).forEach(i => { i.checked = true; });

  // Open the filter content panels
  ['filter-temas', 'filter-m-temas'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.add('open');
  });

  applyFilters();
  document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function updatePriceRange() {
  const min = parseFloat(document.getElementById('precio-min').value);
  const max = parseFloat(document.getElementById('precio-max').value);
  document.getElementById('label-min').textContent  = '€' + Math.min(min, max).toFixed(2);
  document.getElementById('label-max').textContent  = '€' + Math.max(min, max).toFixed(2);
  applyFilters();
}

function updateMobilePriceRange() {
  const min = parseFloat(document.getElementById('m-precio-min').value);
  const max = parseFloat(document.getElementById('m-precio-max').value);
  document.getElementById('m-label-min').textContent = '€' + Math.min(min, max).toFixed(2);
  document.getElementById('m-label-max').textContent = '€' + Math.max(min, max).toFixed(2);
  applyFilters();
}

function toggleFilter(id) {
  const el = document.getElementById('filter-' + id);
  if (el) el.classList.toggle('open');
}

function clearFilters() {
  ['search-input', 'search-input-mobile'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  document.querySelectorAll('.filter-content input[type="checkbox"]').forEach(i => i.checked = false);
  ['precio-min', 'precio-max', 'm-precio-min', 'm-precio-max'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = id.includes('min') ? 5 : 50;
  });
  updatePriceRange();
  updateMobilePriceRange();
  activeCategoryChip = null;
  document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
  document.querySelector('.section-title').textContent = 'CATÁLOGO COMPLETO';
}

// ===== CART =====
function addToCart(id) {
  const libro = libros.find(l => l.id === id);
  if (!libro) return;

  const existing = carrito.find(i => i.id === id);
  if (existing) existing.qty++;
  else carrito.push({ ...libro, qty: 1 });

  updateCartUI();
  showToast(`"${libro.titulo}" añadido`);
  abrirCarrito();
}

function removeFromCart(id) {
  carrito = carrito.filter(i => i.id !== id);
  updateCartUI();
}

function changeQty(id, delta) {
  const item = carrito.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(id);
  else updateCartUI();
}

function updateCartUI() {
  const count = carrito.reduce((s, i) => s + i.qty, 0);

  // Navbar counter (desktop)
  const navCount = document.getElementById('carrito-count');
  if (navCount) navCount.textContent = count;

  // Navbar badge (mobile)
  const badge = document.getElementById('carrito-badge');
  const bnBadge = document.getElementById('bn-badge');
  [badge, bnBadge].forEach(el => {
    if (!el) return;
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  });

  const itemsEl   = document.getElementById('carrito-items');
  const footer    = document.getElementById('carrito-footer');
  if (!itemsEl) return;

  if (carrito.length === 0) {
    itemsEl.innerHTML = '<p class="carrito-vacio">Tu carrito está vacío.</p>';
    footer.style.display = 'none';
    return;
  }

  footer.style.display = 'block';

  itemsEl.innerHTML = carrito.map(item => `
    <div class="carrito-item">
      <img src="${item.cover}" alt="${item.titulo}" loading="lazy" />
      <div class="carrito-item-info">
        <strong>${item.titulo}</strong>
        <span>€${(item.precio * item.qty).toFixed(2)}</span>
        <div class="carrito-item-qty">
          <button onclick="changeQty(${item.id}, -1)" aria-label="Quitar uno">−</button>
          <span>${item.qty}</span>
          <button onclick="changeQty(${item.id}, 1)"  aria-label="Agregar uno">+</button>
        </div>
      </div>
      <button class="btn-remove-item" onclick="removeFromCart(${item.id})" aria-label="Eliminar">🗑</button>
    </div>
  `).join('');

  const total = carrito.reduce((s, i) => s + i.precio * i.qty, 0);
  document.getElementById('carrito-total').textContent = '€' + total.toFixed(2);
}

// ===== CART SHEET =====
function abrirCarrito() {
  cerrarTodo(false);
  document.getElementById('carrito-modal').classList.add('open');
  document.getElementById('sheet-overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
  setBnActive('bn-carrito');
}

function cerrarCarrito() {
  document.getElementById('carrito-modal').classList.remove('open');
  document.getElementById('sheet-overlay').classList.remove('active');
  document.body.style.overflow = '';
  setBnActive(null);
}

// ===== LIBRO SHEET =====
function verLibro(id) {
  const libro = libros.find(l => l.id === id);
  if (!libro) return;

  const stars = '★'.repeat(libro.estrellas) + '☆'.repeat(5 - libro.estrellas);

  document.getElementById('libro-modal-content').innerHTML = `
    <img class="libro-modal-cover" src="${libro.cover}" alt="${libro.titulo}" />
    <div class="libro-modal-details">
      <span class="categoria-tag">${libro.categoria}</span>
      <h2>${libro.titulo}</h2>
      <p class="autor">por <strong>${libro.autor}</strong></p>
      <div class="stars">${stars}</div>
      <div class="precio">€${libro.precio.toFixed(2)}</div>
      <p class="descripcion">${libro.descripcion}</p>
      <button class="btn-carrito" style="max-width:280px" onclick="addToCart(${libro.id}); cerrarLibro()">
        AÑADIR AL CARRITO
      </button>
    </div>
  `;

  cerrarTodo(false);
  document.getElementById('libro-modal').classList.add('open');
  document.getElementById('sheet-overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function cerrarLibro() {
  document.getElementById('libro-modal').classList.remove('open');
  document.getElementById('sheet-overlay').classList.remove('active');
  document.body.style.overflow = '';
}

// ===== FILTER SHEET (mobile) =====
function abrirFiltros() {
  cerrarTodo(false);
  document.getElementById('filter-sheet').classList.add('open');
  document.getElementById('sheet-overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
  setBnActive('bn-filtrar');
}

function cerrarFiltros() {
  document.getElementById('filter-sheet').classList.remove('open');
  document.getElementById('sheet-overlay').classList.remove('active');
  document.body.style.overflow = '';
  setBnActive(null);
}

function cerrarTodo(restoreScroll = true) {
  ['carrito-modal', 'libro-modal', 'filter-sheet'].forEach(id => {
    document.getElementById(id).classList.remove('open');
  });
  document.getElementById('sheet-overlay').classList.remove('active');
  if (restoreScroll) document.body.style.overflow = '';
}

// ===== MOBILE SEARCH =====
function toggleMobileSearch() {
  const bar = document.getElementById('mobile-search-bar');
  const isOpen = bar.classList.toggle('open');
  if (isOpen) {
    document.getElementById('search-input-mobile').focus();
    setBnActive('bn-buscar');
  } else {
    setBnActive(null);
  }
}

// ===== BOTTOM NAV ACTIVE =====
function setBnActive(activeId) {
  ['bn-inicio', 'bn-buscar', 'bn-filtrar', 'bn-carrito'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.toggle('active', id === activeId);
  });
  if (!activeId) document.getElementById('bn-inicio').classList.add('active');
}

// ===== NAVBAR LINKS =====
function goHome() {
  clearFilters();
  renderBooks(libros);
  document.querySelector('.section-title').textContent = 'CATÁLOGO COMPLETO';
  window.scrollTo({ top: 0, behavior: 'smooth' });
  setBnActive('bn-inicio');
}

function toggleMenu() {
  document.getElementById('navbar-links').classList.toggle('open');
}

// ===== NAVBAR EVENTS =====
document.getElementById('nav-bestsellers').addEventListener('click', e => {
  e.preventDefault();
  clearFilters();
  renderBooks(libros.filter(l => l.bestseller));
  document.querySelector('.section-title').textContent = 'BESTSELLERS';
  document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('nav-inicio').addEventListener('click', e => {
  e.preventDefault();
  goHome();
});

document.getElementById('footer-bestsellers').addEventListener('click', e => {
  e.preventDefault();
  clearFilters();
  renderBooks(libros.filter(l => l.bestseller));
  document.querySelector('.section-title').textContent = 'BESTSELLERS';
  document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('carrito-nav-btn').addEventListener('click', e => {
  e.preventDefault();
  abrirCarrito();
});

// ===== TOAST =====
let toastTimer;
function showToast(msg) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2500);
}

// ===== SWIPE TO CLOSE (sheets) =====
function addSwipeToClose(sheetId, closeFn) {
  const sheet = document.getElementById(sheetId);
  let startY = 0, currentY = 0, isDragging = false;

  sheet.addEventListener('touchstart', e => {
    startY = e.touches[0].clientY;
    isDragging = true;
  }, { passive: true });

  sheet.addEventListener('touchmove', e => {
    if (!isDragging) return;
    currentY = e.touches[0].clientY;
    const delta = currentY - startY;
    if (delta > 0) sheet.style.transform = `translateY(${delta}px)`;
  }, { passive: true });

  sheet.addEventListener('touchend', () => {
    isDragging = false;
    const delta = currentY - startY;
    sheet.style.transform = '';
    if (delta > 80) closeFn();
  }, { passive: true });
}

addSwipeToClose('carrito-modal', cerrarCarrito);
addSwipeToClose('libro-modal',   cerrarLibro);
addSwipeToClose('filter-sheet',  cerrarFiltros);

// ===== SUPABASE CONFIG =====
const SB_URL = localStorage.getItem('sb_url') || '';
const SB_KEY = localStorage.getItem('sb_key') || '';

async function cargarLibrosDesdeSupabase() {
  if (!SB_URL || !SB_KEY) {
    // Sin Supabase configurado, usar libros locales
    renderBooks(libros);
    updatePriceRange();
    updateMobilePriceRange();
    return;
  }
  try {
    const res = await fetch(`${SB_URL}/rest/v1/libros?select=*&order=created_at.desc`, {
      headers: {
        'apikey': SB_KEY,
        'Authorization': 'Bearer ' + SB_KEY
      }
    });
    const data = await res.json();
    if (Array.isArray(data) && data.length > 0) {
      // Normalizar campos de Supabase al formato local
      const librosDB = data.map(l => ({
        id: l.id,
        titulo: l.titulo,
        autor: l.autor,
        precio: parseFloat(l.precio) || 0,
        estrellas: l.estrellas || 5,
        categoria: l.categoria || 'Filosofía',
        cover: l.cover || 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&q=80',
        descripcion: l.descripcion || '',
        bestseller: l.bestseller || false,
        pdf: l.pdf_url || null
      }));
      // Combinar libros locales + Supabase (evitar duplicados por id)
      const idsDB = new Set(librosDB.map(l => l.id));
      const localesFiltrados = libros.filter(l => !idsDB.has(l.id));
      const todos = [...librosDB, ...localesFiltrados];
      renderBooks(todos);
      updatePriceRange();
      updateMobilePriceRange();
    } else {
      renderBooks(libros);
      updatePriceRange();
      updateMobilePriceRange();
    }
  } catch(e) {
    renderBooks(libros);
    updatePriceRange();
    updateMobilePriceRange();
  }
}

// ===== INIT =====
cargarLibrosDesdeSupabase();
