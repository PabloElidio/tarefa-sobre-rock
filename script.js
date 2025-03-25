document.addEventListener('DOMContentLoaded',function  () {
const aumentaFonteBoatao = document.getElementById ('aumentar-fonte');
const diminuirFonteBoatao = document.getElementById ('diminuir-fonte');

var tamanhoAtualFonte = 1;
aumentaFonteBoatao.addEventListener('click',function () {
    tamanhoAtualFonte += 0.1; 
    document.body.style.foatSize =   `${tamanhoAtualFonte}rem`;

});


diminuirFonteBoatao.addEventListener('click',function () {
    tamanhoAtualFonte += 0.1; 
    document.body.style.foatSize =   `${tamanhoAtualFonte}rem`;

});


})

