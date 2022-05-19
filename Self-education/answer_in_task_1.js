//1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со
//степени 1
{for(let i = 1; i<=10; i++){
    console.log(Math.pow(2, i))}}
//1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2
{const degree = function(a){
    console.log(Math.pow(2,a))}
degree(100)
}
/*2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :),
 во второй :):) и так далее
Пример в консоли:
:)
:):)
:):):)
:):):):)
:):):):):) */
{let a=":)"
for(let i=0; i<5; i++){
    console.log(a)
    a=a+":)"}}
/* 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль
(как в условии смайлик), а также количество строк для вывода 
e.g. function printSmile(stroka, numberOfRows) */
{function printSmile(stroka, numberOfRows){
    let a = stroka;
    let i = 0;
    for(i=0; i<numberOfRows; i++){
        console.log(a);
        a=a+stroka
    }
}
printSmile(":D",5)}
/*3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, 
сколько в слове гласных, и сколько согласных букв.
e.g. function getWordStructure(word)
В консоли: 
Слово (word) состоит из  (число) гласных и (число) согласных букв
*/function getWordStructure(word){
    let vowel =0;
    let consonants = 0;
    let alphavit = "ёуеыаоэяию";
    word = word.replace(/[^а-яё]/gi, '');
    for(let i=0; i<word.length; i++){
        if(alphavit.indexOf(word[i].toLowerCase())!==-1) {
            vowel +=1
    }
    else{consonants +=1 }}
        console.log("Слово",word,"состоит из",vowel, "гласных и",consonants,"согласных букв")}
getWordStructure("П - а");
/*4**. Написать функцию, которая проверяет, является ли слово палиндромом
e.g. function isPalindrom(word)*/
function isPalindrom(word){
    word = word.replace(/[^а-яё]/gi, '').toLowerCase();
    if(word==word.split("").reverse().join("")){
        console.log("Это палиндром")
    } else {console.log("Это не палиндром, попробуйте снова")}
}
isPalindrom("А роза упала на лапу азора")