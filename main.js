const inp_function = document.querySelector('#inp_funcion');
const inp_xl = document.querySelector('#inp_xl');
const inp_xu = document.querySelector('#inp_xu');
const inp_e = document.querySelector('#inp_e');
const list_result = document.querySelector("#listResult")
const btn_resolver = document.querySelector('#btn_resolver');

btn_resolver.onclick = (e) => {
    const transform = inp_function.value.replaceAll('x', 3)
    list_result.innerHTML = ''
    metodoDeBusqueda(inp_function.value, +inp_xl.value, +inp_xu.value, +inp_e.value);
}

// const e = 0.1;
function metodoDeBusqueda(mathfunction, xl, xu, e) {
    let i = 0;
    let a = 0;
    let b = 0;
    let x1 = 0;
    let x2 = 0;
   
    while (true) {
        i++;
        a = +(0.618 * (xu - xl)).toFixed(4);
        b = +(0.618 * a).toFixed(4);

        x1 = +(xl + a).toFixed(4);
        x2 = +(xl + b).toFixed(4);

        
        let f1 = math.evaluate(mathfunction.replaceAll('x', x1)).toFixed(4)
        let f2 = math.evaluate(mathfunction.replaceAll('x', x2)).toFixed(4)
        let caso = f2 > f1 ? 1 : 2;

        let restaX = +Math.abs(x2 - x1).toFixed(4)

        const li = document.createElement('li')
        li.classList.add('pb-5')
        li.innerHTML = `
            <h2 class="text-xl">Iteración ${i} </h2>
            <p><b class="text-emerald-800">a</b> = 0.618 * (${xu} - ${xl}) => <b class="text-emerald-800">${a} </b> </p>
            <p><b class="text-indigo-950">b</b> = 0.618 * (${a}) => <b class="text-indigo-950" >${b} </b> </p>
            <p><b class="text-pink-950"> x1</b> = ${xl} + <span class="text-emerald-800">${a}</span> => <b class="text-pink-950	">${x1} </b> </p>
            <p><b class="text-yellow-900"> x2</b> = ${xl} + <span class="text-indigo-950">${b}</span> => <b class="text-yellow-900	">${x2} </b> </p>
            <p>f(x1) = ${mathfunction.replaceAll('x', x1)} => <b>${f1} </b> </p>
            <p>f(x2) = ${mathfunction.replaceAll('x', x2)} => <b>${f2} </b> </p>
            <p>caso: #${caso === 1 ? "1, porque f2 > f1. Entonces xl ="+ xl +",  y xu = "+  +x1.toFixed(4): '2, porque f2 < f1. Entonces xl = '+ +x1.toFixed(4)+ 'y xu ='+ xu }</b> </p>

            <p>Restar x2 - x1: ${x2} - ${x1} = ${restaX} ${restaX < e ? ', ¡El búcle se detiene!' : ', El bucle continua  '}</p>
        `
        list_result.append(li)
    
        if (caso == 1) {
            xu = +x1.toFixed(4);
        } else {
            xl = +x2.toFixed(4);
        }
        // console.log({x1, x2, f1, f2, caso});
        // if (i == 100) break;
        if (restaX < e) {
            break;
        }
       
    }

    
}
