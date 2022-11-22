function openModal(modalName){
    let modal = document.getElementById(modalName);

    if (typeof modal == 'undefined' || modal === null)
        return;

        modal.style.display = 'Block';
}

function closeModal(modalName){
    let modal = document.getElementById(modalName);

    if (typeof modal == 'undefined' || modal === null)
        return;

        modal.style.display = 'none';
}
document.getElementById("close-modal-1").click();
document.getElementById("closeSaoJose").click();
document.getElementById("closeSouzaMudancas").click();