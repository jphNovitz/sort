const numbers = [];
for (let i = 0; i < 10; i++) {
    let n = Math.floor(Math.random() * 1000) + 1
    numbers.push(n)
}
console.log(numbers)

const container = document.querySelector('#container')

for (let i = 0; i < numbers.length; i++) {
    let div = document.createElement("SPAN")
    div.innerText = numbers[i]
    div.classList.add('item')
    div.dataset.number = numbers[i]
    container.appendChild(div)

// container.appendChild('<div>'+ numbers[i]+'</div>')
}

// var divs = container.querySelectorAll('.item')

function go() {
    var divs = container.querySelectorAll('.item')
    var flag = false;
    var index = 0;
    console.log(flag);
    b();

    function a() {
        return new Promise(resolve => {

            setTimeout(() => {
                if (index < divs.length - 1) {
                    let current = parseInt(divs[index].dataset.number)
                    let next = parseInt(divs[index + 1].dataset.number)
                    if (current > next) {
                        flag = true
                        divs[index].style.color= 'red'
                        divs[index + 1].style.color= 'green'
                        container.insertBefore(divs[index + 1], divs[index])
                        divs = container.querySelectorAll('.item')
                    }else {
                        divs[index].style.color= 'black'
                        divs[index + 1].style.color= 'black'
                    }

                    b();
                }
                index++;
                resolve(index);
            }, 2000);

        });
    }

    async function b() {

        index = await a();

        if (index === divs.length - 1) {
            if (flag === true) {
                flag = false
                index = 0
            }
            b();
        }
        console.log('flag: ' + flag);

    }

}

go();
// let a = parseInt(divs[i].dataset.number)
// let b = parseInt(divs[i + 1].dataset.number)
// if (a > b) {
//     flag = true
//
//     container.insertBefore(divs[i + 1], divs[i])
//     divs = container.querySelectorAll('.item')
// }

