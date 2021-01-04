// 1. Вывести в консоль числа от 1 до n, где n - это произвольное целое число большее 1.
// function logNumbers(from, to) {
//     for(let i = from; i <= to; i++) {
//         console.log(i)
//     }
// }
// let numb1 = +prompt('Введите первое число','1');// 4. В первых трех задачах добавить пользователю возможность ввести значения переменных.
// let numb2 = +prompt('Введите второе число',''); 
// logNumbers(numb1, numb2)

// 2. Вывести в консоль простые числа от 1 до n.
// function isSimple(n) {
//     for (let d=2; d<n; d++) {
//         if (n % d === 0) {
//             return false;
//         }
//     }
//     console.log(n)
//     return true;
    
// }

// function getSimpleNumbers() {
//     const from = +prompt('Enter from: ', 1);
//     const to = +prompt('Enter to: ', 20);
//     const result = [];

//     let i = from;

//     while (i <= to) {
//         if (isSimple(i)) {
//             result.push(i);
//         }

//         i++;
//     }

//     return result;
// }

// console.log( getSimpleNumbers(12, 18) );
// // console.log(isSimple(5));


// 3. Вывести в консоль числа кратные k, в диапазоне от 1 до n.
function getMultiplesNumbers() {
    const from = +prompt('Enter from: ', 1);
    const to = +prompt('Enter to: ', 20);
    const k = +prompt('Enter k: ', 5);
    const result = [];
    for (let i = from; i <= to; i++) {
        if (i % k == 0) {
            result.push(i)
        }
    }
    return result
}
console.log(getMultiplesNumbers())


// 5. Выводить в консоль простые числа от 1 до n до тех пор, пока пользователь не скажет хватить.
// function logNumbers(from, to) {
//     for(let i = from; i <= to; i++) {
//         console.log(i)
//          if (confirm('Хватит?', '')) break;
//     }   
// }
// let numb1 = +prompt('Введите первое число','1');
// let numb2 = +prompt('Введите второе число', ''); 
// logNumbers(numb1, numb2)





