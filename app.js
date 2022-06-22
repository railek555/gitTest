// function polindrom (str) {
//     // нижний регистр
//     str = str.toLowerCase();
//     // строку в массив
//     let str2 = str.split('') // разбивают строку на отдельные части
//     str2 = str2.reverse(); // зеркалит
//     str2 = str2.join(''); // склеивает
//
//     if (str == str2) return true;
//     else return false;
//
//     return str2;
// }
// console.log(polindrom('abba'))
//
// or

const polindrom = (str) => {
    str = str.toLowerCase();
    return str == str.split('').reverse().join('');
}

console.log(polindrom('abbsa'))