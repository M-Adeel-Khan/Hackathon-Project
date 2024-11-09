const toggleButton = document.getElementById('Skill_Button') as HTMLButtonElement;
const skillsDiv = document.getElementById('Skill_Div') as HTMLDivElement;


toggleButton.addEventListener('click', ()=> {
    if (skillsDiv.style.display === 'none') {
       skillsDiv.style.display = 'Block'        
    }
     else {
        skillsDiv.style.display = 'none'
    };
});