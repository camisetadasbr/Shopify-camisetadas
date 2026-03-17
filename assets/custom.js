/**
 * Include your custom JavaScript here.
 *
 * We also offer some hooks so you can plug your own logic. For instance, if you want to be notified when the variant
 * changes on product page, you can attach a listener to the document:
 *
 * document.addEventListener('variant:changed', function(event) {
 *   var variant = event.detail.variant; // Gives you access to the whole variant details
 * });
 *
 * You can also add a listener whenever a product is added to the cart:
 *
 * document.addEventListener('product:added', function(event) {
 *   var variant = event.detail.variant; // Get the variant that was added
 *   var quantity = event.detail.quantity; // Get the quantity that was added
 * });
 *
 * If you are an app developer and requires the theme to re-render the mini-cart, you can trigger your own event. If
 * you are adding a product, you need to trigger the "product:added" event, and make sure that you pass the quantity
 * that was added so the theme can properly update the quantity:
 *
 * document.documentElement.dispatchEvent(new CustomEvent('product:added', {
 *   bubbles: true,
 *   detail: {
 *     quantity: 1
 *   }
 * }));
 *
 * If you just want to force refresh the mini-cart without adding a specific product, you can trigger the event
 * "cart:refresh" in a similar way (in that case, passing the quantity is not necessary):
 *
 * document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
 *   bubbles: true
 * }));
 */

// Ocultar links do AliHunter se existirem
var k=(new Date).getTime(),b=setInterval(function(){if(3845<(new Date).getTime()-k)clearInterval(b);else{var e=document.querySelectorAll('a[href=\'https://beta.alihunter.io\']');for(e.length<1&&(e=document.querySelectorAll('a[href=\'https://alihunter.io\']'));0<e.length;)e[0].style.display='none'}},769);

if (window.matchMedia("(max-width: 768px)").matches) {
  	window.onscroll = function() {
      var pageOffset = document.documentElement.scrollTop || document.body.scrollTop,
          btn = document.getElementById('scrollToTop');
      if (btn) btn.style.display = pageOffset > 1200 ? 'block' : 'none';
	}
} 

function parcelamento() {
  var preco = $('.product-form__info-item .price--highlight').text().split('                  ')[0].replace('R$ ','').replace(',', '.').trim()
  var compare = $('.product-form__info-item .price--compare').text().replace('R$ ', '').replace(',','.')
  var compare = parseFloat(compare)
  var precompare = (compare - preco).toFixed(2).replace('.', ',')
  $('.product-label.product-label--on-sale span').text('R$ '+ precompare)
  var porcent = ((compare - preco) * 100 / compare).toFixed(2).split('.')[0]
  $('.price--highlight .product-label.product-label--on-sale').append('-' + porcent + '%')    
  var preco = parseFloat(preco);
  var calculo = ((preco + 0) * 1.1979) / 12;
  var calculo = calculo.toFixed(2).replace('.', ',');
  var calculo = ('R$ ' + calculo);
  $('.parcelamento').html('<span>em até 12x de <b>' + calculo + '</b></span>');
}


$(".block-swatch__radio").change(function () {
  setTimeout(function () { parcelamento(); }, 150);
});