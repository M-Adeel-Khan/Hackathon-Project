var toggleButton = document.getElementById('Skill_Button');
var skillsDiv = document.getElementById('Skill_Div');
toggleButton.addEventListener('click', function () {
    if (skillsDiv.style.display === 'none') {
        skillsDiv.style.display = 'Block';
    }
    else {
        skillsDiv.style.display = 'none';
    }
    ;
});
