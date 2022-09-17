let bodyId = document.getElementById('bodyAll');
let theme = document.getElementById('ranger');

function trocar(){
    let valor = theme.value;
    if (valor == 1){
        bodyId.classList.add('theme-001');
        bodyId.classList.remove('theme-002');
        bodyId.classList.remove('theme-003');
    } else if (valor == 2){
        bodyId.classList.add('theme-002');
        bodyId.classList.remove('theme-001');
        bodyId.classList.remove('theme-003');
    } else if (valor == 3){
        bodyId.classList.add('theme-003');
        bodyId.classList.remove('theme-001');
        bodyId.classList.remove('theme-002');
    }
}