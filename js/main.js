// localStorage in JS

//localStorage.setItem("ism","Ibo");
//localStorage.setItem("familiyasi","Olimjonov");
//localStorage.setItem("yoshi","18 yoshda");
//localStorage["ism"] = "Sabo";
//localStorage["familiyasi"] = "Komiljonova";
//localStorage["yoshi"] = "17 yoshda";
//localStorage.removeItem("ism");
//localStorage.removeItem("familiyasi");
//localStorage.removeItem("yoshi");
//localStorage.clear();
//let uningIsmi = localStorage.getItem("ism");
//let uningFamiliyasi = localStorage.getItem("familiyasi");
//let uningYoshi = localStorage.getItem("yoshi");
//console.log(uningIsmi,uningFamiliyasi,uningYoshi);

// https request in JS 

//let sorov = new XMLHttpRequest();
//sorov.open("get","https://getty.uz/serverdan/malumot/olish");
//sorov.send();
//sorov.onload = function(){
//    console.log(sorov.responseText)
// }

// JSON in JS

//let jsFile = {ism: "Robert", yoshi: 17};           // JS Object
//let jsonFile = '{"ism": "Jozef", "yoshi": 21}';    // JSON
//console.log(JSON.stringify(jsFile));
//console.log(JSON.parse(jsonFile));

//let sorov = new XMLHttpRequest();
//sorov.open("get","jsonfiel.json");
//sorov.send();
//sorov.onload = function(){
//    console.log(JSON.parse(sorov.responseText));
//}


// indexOf in JS (matn ichidan index raqamini topish)
//let matn = "sen gapir men esa sen bilan yozib boramiz";
//let birinchiSenIndeksi = matn.indexOf("sen");
//console.log(matn.indexOf("sen",birinchiSenIndeksi+1));

// replace in JS (matn ichidagi so'zlarni almashtirish)

let matn = "Salom hammaga! salom berdim hammaga.salom"

//console.log(matn.replace(/salom|berdim|hammaga/gi,"alik"));

let yangiMatn = matn.replace(/salom|hammaga/gi,function(soz){
    if(soz == "Slom" || soz == "salom"){
        return "alik"
    }else if(soz == "hammaga"){
        return "barchaga"
    }
});
console.log(yangiMatn);
