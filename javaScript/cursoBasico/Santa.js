/* Te ha llegado una carta ✉️ con todos los regalos que debes preparar. El tema es que es una cadena de texto 
y es muy difícil de leer 😱. ¡Menos mal que han puesto cada regalo separado por espacio! (aunque ten cuidado,
   porque al ser niños, igual han colado más espacios de la cuenta)

Encima nos hemos dado cuenta que algunas palabras vienen con un _ delante de la palabra, por ejemplo
 _playstation, que significa que está tachado y no se tiene que contar.

Transforma el texto a un objeto que contenga el nombre de cada regalo y las veces que aparece. Por ejemplo,
 si tenemos el texto:
 */
function listGifts(letter) {
    const arrayLetter = letter.split(" ");
    var cont = 0;
    var regalos = [];
    function regalo(cosa,cantidad){
        this.cosa = cantidad;
    };
    for (i=0; i < arrayLetter.length; i++){
        for(j=0; j < arrayLetter.length; j++){
            if(arrayLetter[i]==arrayLetter[j]){
                cont ++;
            };
        };
        regalos.push(new regalo (arrayLetter[i], cont));
        cont = 0;
    };
return regalos;
};

const carta = 'bici coche balón _playstation bici coche peluche'
console.log(listGifts(carta))

////////////////////////////////////////////////////////
function listGifts(letter) {
    const arrayLetter = letter.split(" ");
    let arrayEsteSi = [];
    for (let i = 0 ; i < arrayLetter.length ; i++){
      if (arrayLetter[i] != '' && arrayLetter[i][0] != '_' ){
          arrayEsteSi.push(arrayLetter[i])
      }
    }
    const objectGift = {};
    arrayEsteSi.map((element) => {
      if (objectGift[element]) {
        objectGift[element] += 1;
      } else {
        objectGift[element] = 1;
      }
    });
    console.log(objectGift);
    return objectGift;
  }
  listGifts("bici coche balón _playstation bici    coche peluche");