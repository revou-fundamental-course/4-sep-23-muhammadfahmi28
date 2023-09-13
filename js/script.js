
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
    })
})
