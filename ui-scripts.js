
//get player choice and store in variable
function getPlayerChoice() {
const targets = document.querySelectorAll('.choice');
targets.forEach((target) => target.addEventListener('click', () =>{
    return(target.id);
}));
}

