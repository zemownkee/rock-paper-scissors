
//return ID of clicked element
function getPlayerChoice() {
const targets = document.querySelectorAll('.choice');
targets.forEach((target) => target.addEventListener('click', () =>{
    console.log(target.id);
}));
}
