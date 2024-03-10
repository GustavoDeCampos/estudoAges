"use strict";
var diasDaSemana;
(function (diasDaSemana) {
    diasDaSemana[diasDaSemana["domingo"] = 0] = "domingo";
    diasDaSemana[diasDaSemana["segunda"] = 1] = "segunda";
    diasDaSemana[diasDaSemana["terca"] = 2] = "terca";
    diasDaSemana[diasDaSemana["quarta"] = 3] = "quarta";
    diasDaSemana[diasDaSemana["quinta"] = 4] = "quinta";
    diasDaSemana[diasDaSemana["sexta"] = 5] = "sexta";
    diasDaSemana[diasDaSemana["sabado"] = 6] = "sabado";
})(diasDaSemana || (diasDaSemana = {}));
console.log(diasDaSemana.domingo);
console.log(diasDaSemana[1]);
const d = new Date();
console.log(d.getDay());
console.log(diasDaSemana[d.getDay()]);
var cores;
(function (cores) {
    cores["branco"] = "#fff";
    cores["preto"] = "#000";
    cores["vermelho"] = "#f00";
    cores["verde"] = "#0f0";
    cores["azul"] = "#00f";
})(cores || (cores = {}));
console.log(cores.branco);
