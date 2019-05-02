export const swapArrayElements = function (arr, indexA, indexB) {
    var temp = arr[indexA];
    arr[indexA] = arr[indexB];
    arr[indexB] = temp;
};

export const swapValuesInArray = function (arr, indexA, indexB) {
    var temp = arr[indexA].Value;
    arr[indexA].Value = arr[indexB].Value;
    arr[indexB].Value = temp;
};

export const CompareAllValuesOfArray = function (arrayIncorrecto, arrayCorrecto) {
    var resultado = true;
    var indice = 0;
    var incorrectoId = [];
    for (;indice < arrayCorrecto.length;indice++) {
        if (arrayCorrecto[indice].Value[0].Id != arrayIncorrecto[indice].Value[0].Id) {
            incorrectoId.push(arrayIncorrecto[indice].Value[0].Id);
            resultado = false;
        }
    }
    return incorrectoId;
};