let arrayLang = {
  'es': {
    'trans': '🇬🇹',
    'home': 'inicio',
    'about': 'sobre',
    'gallery': 'galería',
    'contact': 'contacto',
    'all': 'Todos',
    'box': 'Diseños Cajas',
    'book': 'Diseños Cuadernos',
    'bookle': 'Diseños Folletos',
    'calendar': 'Diseños Calendarios',
    'card': 'Diseños Tarjetas',
    'label': 'Diseños Etiquetas',
    'magazine': 'Diseños Revistas',
    'document': 'Diseños Documentos',
    'num': 'Num. Telefono',
    'eml': 'Correo',
    'nws': 'redes sociales',
    'bxh0': 'caja hedelix',
    'bxh1': 'caja hedelix',
    'bxhp': 'caja hepatab-550',
    'bxb': 'caja baxter',
    'bxc': 'caja cafe condesa',
    'bxp': 'caja phartek niños',
    'rec': 'recibo pharmakon',
    'afc': 'afiche king express',
    'facd': 'factura doanbo',
    'facm': 'facura las margaritas',
    'hjm': 'hoja membretada esinsa',
    'etb': 'etiqueta baxter',
    'eth': 'etiqueta hedelix',
    'pgc': 'pegatina chocoleit',
    'tja': 'tarjeta presentación',
    'cld': 'calendario mannol',
    'msg': 'La información ha sido enviada exitosamente!!!'
  },
  'en': {
    'trans': '🇺🇸',
    'home': 'home',
    'about': 'about',
    'gallery': 'gallery',
    'contact': 'contact',
    'all': 'All Designs',
    'box': 'Boxs Designs',
    'book': 'Books Designs',
    'bookle': 'Booklet Designs',
    'calendar': 'Calendar Designs',
    'card': 'Card Designs',
    'label': 'Label Designs',
    'magazine': 'Magazine Designs',
    'document': 'Document Designs',
    'num': 'phone number',
    'eml': 'email',
    'nws': 'social media',
    'bxh0': 'hedelix box',
    'bxh1': 'hedelix box',
    'bxhp': 'hepatab-550 box',
    'bxb': 'baxter box',
    'bxc': 'condesa coffee box',
    'bxp': "children's phartek box",
    'rec': 'pharmakon receipt',
    'afc': 'king express poster',
    'facd': 'doanbo invoice',
    'facm': 'las margaritas invoice',
    'hjm': 'esinsa letterhead',
    'etb': 'baxter label',
    'eth': 'hedelix label',
    'pgc': 'chocoleit sticker',
    'tja': 'business card',
    'cld': 'mannol calendar',
    'msg': 'The information has been successfully sent!!!'
  }
};

$(function(){
  $('.translate').click(function(){
    let idES = $('[id="es"]');
    let idEN = $('[id="en"]');
    let title = $('[id="title"]');
    let titulo = $('[id="titulo"]');
    let phre = $('[id="phrase"]');
    let frse = $('[id="frase"]');
    let res = $('[id="res"]');
    let cvm = $('[id="cvm"]');
    let about = $('[id="abm"]');
    let sobre = $('[id="sbm"]');
    let gally = $('[id="gly"]');
    let galli = $('[id="gli"]');
    let contact = $('[id="ctt"]');
    let contacto = $('[id="cto"]');
    let eml = $('[id="eml"]');
    let cro = $('[id="cro"]');
    let bke = $('[id="bke"]');
    let cue = $('[id="cue"]');
    let bki = $('[id="bki"]');
    let cui = $('[id="cui"]');
    let bke1 = $('[id="bke1"]');
    let cue1 = $('[id="cue1"]');
    let bki1 = $('[id="bki1"]');
    let cui1 = $('[id="cui1"]');
    let bke2 = $('[id="bke2"]');
    let cue2 = $('[id="cue2"]');
    let bki2 = $('[id="bki2"]');
    let cui2 = $('[id="cui2"]');
    let bke3 = $('[id="bke3"]');
    let cue3 = $('[id="cue3"]');
    let bki3 = $('[id="bki3"]');
    let cui3 = $('[id="cui3"]');
    let ble = $('[id="ble"]');
    let fle = $('[id="fle"]');
    let bli = $('[id="bli"]');
    let fli = $('[id="fli"]');
    let tpye = $('[id="tpye"]');
    let tpe = $('[id="tpe"]');
    let tpyi = $('[id="tpyi"]');
    let tpi = $('[id="tpi"]');
    let mze = $('[id="mze"]');
    let rve = $('[id="rve"]');
    let mzi = $('[id="mzi"]');
    let rvi = $('[id="rvi"]');
    let all = $('[id="all"]');
    let todos = $('[id="todos"]');
    let box = $('[id="box"]');
    let caja = $('[id="caja"]');
    let book = $('[id="book"]');
    let libro = $('[id="libro"]');
    let booklet = $('[id="booklet"]');
    let folleto = $('[id="folleto"]');
    let calendar = $('[id="calendar"]');
    let calendario = $('[id="calendario"]');
    let card = $('[id="card"]');
    let tarjeta = $('[id="tarjeta"]');
    let label = $('[id="label"]');
    let etiqueta = $('[id="etiqueta"]');
    let magazine = $('[id="magazine"]');
    let revista = $('[id="revista"]');
    let doct = $('[id="document"]');
    let docto = $('[id="documento"]');
    let foot = $('[id="foot"]');
    let pie = $('[id="pie"]');
    let summary = $('[id="summary"]');
    let resumen = $('[id="resumen"]');

    let lang = $(this).attr('id');

    $('#title').html('<span class="txt anim-text-flow">diseñador gráfico</span>');
    $('#titulo').html('<span class="txt anim-text-flow">graphic designer</span>');
    $('#phrase').html("“El diseño gráfico no es lo que ves, sino lo que debes hacer que otras personas vean”<br/>(Edgar Degas)");
    $('#frase').html("“Graphic design isn' t what you see, but what you should make other people see”<br/>(Edgar Degas)");
    $('#res').html('curriculum <i class="fas fa-file-download"></i>');
    $('#cvm').html('resumen <i class="fas fa-file-download"></i>');
    $('#eml').html('Enviame un em@il <i class="fas fa-envelope-open-text"></i>');
    $('#cro').html('Send me em@il <i class="fas fa-envelope-open-text"></i>');
    $('#bke').html('cuaderno inde<br><p>(parte externa)</p>');
    $('#cue').html('inde book<br><p>(external page)</p>');
    $('#bki').html('cuaderno inde<br><p>(parte interna)</p>');
    $('#cui').html('inde book<br><p>(internal page)</p>');
    $('#bke1').html('cuaderno inde<br><p>(parte externa)</p>');
    $('#cue1').html('inde book<br><p>(external page)</p>');
    $('#bki1').html('cuaderno inde<br><p>(parte externa)</p>');
    $('#cui1').html('inde book<br><p>(external page)</p>');
    $('#bke2').html('cuaderno inde<br><p>(parte externa)</p>');
    $('#cue2').html('inde book<br><p>(external page)</p>');
    $('#bki2').html('cuaderno inde<br><p>(parte externa)</p>');
    $('#cui2').html('inde book<br><p>(external page)</p>');
    $('#bke3').html('cuaderno inde<br><p>(parte externa)</p>');
    $('#cue3').html('inde book<br><p>(external page)</p>');
    $('#bki3').html('cuaderno inde<br><p>(parte externa)</p>');
    $('#cui3').html('inde book<br><p>(external page)</p>');
    $('#ble').html('folleto baclogerd<br><p>(parte externa)</p>');
    $('#fle').html('baclogerd booklet<br><p>(external page)</p>');
    $('#bli').html('folleto baclogerd<br><p>(parte interna)</p>');
    $('#fli').html('baclogerd booklet<br><p>(internal page)</p>');
    $('#tpye').html('triptico mapreisa<br><p>(parte externa)</p>');
    $('#tpe').html('mapreisa triptych<p>(external page)</p>');
    $('#tpyi').html('triptico mapreisa<br><p>(parte interna)</p>');
    $('#tpi').html('mapreisa triptych<p>(internal page)</p>');
    $('#mze').html('revista tecun<p>(parte externa)</p>');
    $('#rve').html('tecun magazine<p>(external page)</p>');
    $('#mzi').html('revista tecun<p>(parte interna)</p>');
    $('#rvi').html('tecun magazine<p>(internal page)</p>');
    $('#abm').html('sobre <span>mí</span');
    $('#sbm').html('about <span>me</span');
    $('#gly').html('mi <span>galería</span>');
    $('#gli').html('my <span>gallery</span>');
    $('#ctt').html('contacta<span>me</span>');
    $('#cto').html('contact <span>me</span>');

    $('#all').html('<span>Todos</span>');
    $('#todos').html('<span>All Designs</span>');
    $('#box').html('<span>Diseños Cajas</span>');
    $('#caja').html('<span>Boxs Designs</span>');
    $('#book').html('<span>Diseños Cuadernos</span>');
    $('#libro').html('<span>Books Designs</span>');
    $('#booklet').html('<span>Diseños Folletos</span>');
    $('#folleto').html('<span>Booklet Designs</span>');
    $('#calendar').html('<span>Diseños Calendarios</span>');
    $('#calendario').html('<span>Calendar Designs</span>');
    $('#card').html('<span>Diseños Tarjetas</span>');
    $('#tarjeta').html('<span>Card Designs</span>');
    $('#label').html('<span>Diseños Etiquetas</span>');
    $('#etiqueta').html('<span>Label Designs</span>');
    $('#magazine').html('<span>Diseños Revistas</span>');
    $('#revista').html('<span>Magazine Designs</span>');
    $('#document').html('<span>Diseños Documentos</span>');
    $('#documento').html('<span>Document Designs</span>');

    $('#foot').html('<p>copyright &copy; empresa de diseño gráfico personal <span id="date"></span>. todos los derechos reservados</p>');
    $('#pie').html('<p>copyright &copy; personal graphic design company <span id="date"></span>. all rights reserved</p>');

    $('#summary').html('<h3>Resumen...</h3><p>Tras años de experiencia, he tomado la decisión de reorientar mi carrera profesional con el ánimo de continuar aprendiendo y, también, aportar toda mi experiencia adquirida. Considero que el cambio es un signo de capacidad de superación y, por ello, creo que siempre sería capaz de aportar valor a los trabajos de que realice para mis clientes.<br><br> Mi objetivo principal es desarrollarme profesionalmente y evolucionar en mi sector, de modo que busco oportunidades que me permitan hacerlo, al tiempo que trataré de alinearme completamente con los objetivos de los clientes.</p>');
    $('#resumen').html('<h3>Summary...</h3><p>After years of experience, I have made the decision to reorient my professional career with the aim of continuing to learn and, also, contribute all my experience acquired. I consider change to be a sign of ability to overcome and, therefore, I think I would always be able to add value to the work I do for my clients.<br><br> My main objective is to develop professionally and evolve in my sector, so I look for opportunities that allow me to do so, while trying to align myself completely with the objectives of customers.</p>');

    $.each(idES, (indice, id1) => $(id1).attr('id', "en"));
    $.each(idEN, (indice, id2) => $(id2).attr('id', "es"));
    $.each(title, (indice, idtxt) => $(idtxt).attr('id',"titulo"));
    $.each(titulo, (indice, idtxts) => $(idtxts).attr('id',"title"));
    $.each(phre, (indice, idphr) => $(idphr).attr('id',"frase"));
    $.each(frse, (indice, idfrs) => $(idfrs).attr('id',"phrase"));
    $.each(about, (indice, idab) => $(idab).attr('id',"sbm"));
    $.each(sobre, (indice, idsb) => $(idsb).attr('id',"abm"));
    $.each(gally, (indice, idgy) => $(idgy).attr('id',"gli"));
    $.each(galli, (indice, idgi) => $(idgi).attr('id',"gly"));
    $.each(contact, (indice, idct) => $(idct).attr('id',"cto"));
    $.each(contacto, (indice, idcto) => $(idcto).attr('id',"ctt"));
    $.each(res, (indice, idrs) => $(idrs).attr('id',"cvm"));
    $.each(cvm, (indice, idcv) => $(idcv).attr('id',"res"));
    $.each(eml, (indice, ideml) => $(ideml).attr('id',"cro"));
    $.each(cro, (indice, idcro) => $(idcro).attr('id',"eml"));
    $.each(bke, (indice, idbke) => $(idbke).attr('id',"cue"));
    $.each(cue, (indice, idcue) => $(idcue).attr('id',"bke"));
    $.each(bki, (indice, idbki) => $(idbki).attr('id',"cui"));
    $.each(cui, (indice, idcui) => $(idcui).attr('id',"bki"));
    $.each(bke1, (indice, idbke1) => $(idbke1).attr('id',"cue1"));
    $.each(cue1, (indice, idcue1) => $(idcue1).attr('id',"bke1"));
    $.each(bki1, (indice, idbki1) => $(idbki1).attr('id',"cui1"));
    $.each(cui1, (indice, idcui1) => $(idcui1).attr('id',"bki1"));
    $.each(bke2, (indice, idbke2) => $(idbke2).attr('id',"cue2"));
    $.each(cue2, (indice, idcue2) => $(idcue2).attr('id',"bke2"));
    $.each(bki2, (indice, idbki2) => $(idbki2).attr('id',"cui2"));
    $.each(cui2, (indice, idcui2) => $(idcui2).attr('id',"bki2"));
    $.each(bke3, (indice, idbke3) => $(idbke3).attr('id',"cue3"));
    $.each(cue3, (indice, idcue3) => $(idcue3).attr('id',"bke3"));
    $.each(bki3, (indice, idbki3) => $(idbki3).attr('id',"cui3"));
    $.each(cui3, (indice, idcui3) => $(idcui3).attr('id',"bki3"));
    $.each(ble, (indice, idble) => $(idble).attr('id',"fle"));
    $.each(fle, (indice, idfle) => $(idfle).attr('id',"ble"));
    $.each(bli, (indice, idbli) => $(idbli).attr('id',"fli"));
    $.each(fli, (indice, idfli) => $(idfli).attr('id',"bli"));
    $.each(tpye, (indice, idtpye) => $(idtpye).attr('id',"tpe"));
    $.each(tpe, (indice, idtpe) => $(idtpe).attr('id',"tpye"));
    $.each(tpyi, (indice, idtpyi) => $(idtpyi).attr('id',"tpi"));
    $.each(tpi, (indice, idtpi) => $(idtpi).attr('id',"tpyi"));
    $.each(mze, (indice, idmze) => $(idmze).attr('id',"rve"));
    $.each(rve, (indice, idrve) => $(idrve).attr('id',"mze"));
    $.each(mzi, (indice, idmzi) => $(idmzi).attr('id',"rvi"));
    $.each(rvi, (indice, idrvi) => $(idrvi).attr('id',"mzi"));
    $.each(all, (indice, idall) => $(idall).attr('id',"todos"));
    $.each(todos, (indice, idtdo) => $(idtdo).attr('id',"all"));
    $.each(box, (indice, idbox) => $(idbox).attr('id',"caja"));
    $.each(caja, (indice, idcaja) => $(idcaja).attr('id',"box"));
    $.each(book, (indice, idbk) => $(idbk).attr('id',"libro"));
    $.each(libro, (indice, idlb) => $(idlb).attr('id',"book"));
    $.each(booklet, (indice, idbke) => $(idbke).attr('id',"folleto"));
    $.each(folleto, (indice, idfto) => $(idfto).attr('id',"booklet"));
    $.each(calendar, (indice, idclr) => $(idclr).attr('id',"calendario"));
    $.each(calendario, (indice, idclro) => $(idclro).attr('id',"calendar"));
    $.each(card, (indice, idcrd) => $(idcrd).attr('id',"tarjeta"));
    $.each(tarjeta, (indice, idtjt) => $(idtjt).attr('id',"card"));
    $.each(label, (indice, idlbl) => $(idlbl).attr('id',"etiqueta"));
    $.each(etiqueta, (indice, ideqt) => $(ideqt).attr('id',"label"));
    $.each(magazine, (indice, idmgn) => $(idmgn).attr('id',"revista"));
    $.each(revista, (indice, idrvt) => $(idrvt).attr('id',"magazine"));
    $.each(doct, (indice, iddoc) => $(iddoc).attr('id',"documento"));
    $.each(docto, (indice, iddoct) => $(iddoct).attr('id',"document"));
    $.each(foot, (indice, idft) => $(idft).attr('id',"pie"));
    $.each(pie, (indice, idpie) => $(idpie).attr('id',"foot"));
    $.each(summary, (indice, idsmy) => $(idsmy).attr('id',"resumen"));
    $.each(resumen, (indice, idrsn) => $(idrsn).attr('id',"summary"));
    
    $('.lang').each(function(index,element){
      $(this).text(arrayLang[lang][$(this).attr('key')]);

      const date = document.getElementById('date');
      date.innerHTML = new Date().getFullYear();
    });
  });
});

const btn = document.querySelector('.translate');
const input = document.querySelector('#nombre');
const input1 = document.querySelector('#correo');
const input2 = document.querySelector('#asunto');
const input3 = document.querySelector('#comentario');

const translateSpanish = btn.addEventListener('click', (e) => {
    input.setAttribute('placeholder', 'Nombre...');
    input1.setAttribute('placeholder', 'Correo...');
    input2.setAttribute('placeholder', 'Asunto...');
    input3.setAttribute('placeholder', 'Escribe tu mensaje...');
});

