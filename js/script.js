const persegiSisi = document.getElementById("persegi_sisi");
const persegiResult = document.getElementById("persegi_result");
const persegiPanjangP = document.getElementById("persegi_panjang_p");
const persegiPanjangL = document.getElementById("persegi_panjang_l");
const persegiPanjangResult = document.getElementById("persegi_panjang_result");
const buttonHitung = document.getElementById("button_hitung");
const buttonCancel = document.getElementById("button_reset");


function resetForms() {
    persegiSisi.value = '';
    persegiResult.innerText = '';
    persegiPanjangP.value = '';
    persegiPanjangL.value = '';
    persegiPanjangResult.innerText = '';
    buttonHitung.classList.add("disabled");
}

function validateInteger(input) {
    const integerRegex = /^[1-9]\d*$/;
    return integerRegex.test(input);
}

function hitungKelilingPersegi() {
    persegiResult.innerHTML = `Keliling: ${persegiSisi.value*4} Luas: ${persegiSisi.value*persegiSisi.value}`;
}

function hitungKelilingPersegiPanjang() {
    persegiPanjangResult.innerHTML = `Keliling: ${(parseInt(persegiPanjangP.value)+parseInt(persegiPanjangL.value))*2} Luas: ${persegiPanjangP.value*persegiPanjangL.value}`;
}

buttonCancel.addEventListener('click', event => {
    resetForms();
})

buttonHitung.addEventListener('click', event => {
    hitungKelilingPersegi();
    hitungKelilingPersegiPanjang();
})

persegiSisi.addEventListener('input', event => {
    var inputValue = persegiSisi.value.trim();
    if (validateInteger(inputValue)) {
        buttonHitung.classList.remove("disabled");
    } else {
        buttonHitung.classList.add("disabled");
    }
})

function validatePersegiPanjang() {
    var panjangValue = persegiPanjangP.value.trim();
    var lebarValue = persegiPanjangL.value.trim();
    if (validateInteger(panjangValue) && validateInteger(lebarValue)) {
        buttonHitung.classList.remove("disabled");
    } else {
        buttonHitung.classList.add("disabled");
    }
}

persegiPanjangP.addEventListener('input', event => {
    validatePersegiPanjang();
})

persegiPanjangL.addEventListener('input', event => {
    validatePersegiPanjang();
})

document.querySelectorAll('.tab').forEach(item => {
    item.addEventListener('click', event => {
        let tab_name = item.getAttribute('data-tab-name');
        let tab_content = item.getAttribute('data-tab-content');

        document.querySelectorAll('.tab').forEach(_i => {
            _i.classList.remove('active');
        })

        item.classList.add('active');
        document.getElementById(tab_content).querySelector('.tab-title').innerText = item.innerText;

        
        document.querySelectorAll('.tab-item').forEach(_i => {
            _i.classList.remove('active');
        })
        
        document.querySelector(`.tab-item[data-tab-name="${tab_name}"]`).classList.add('active');

        resetForms();
    })
})
