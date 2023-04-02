const form = document.getElementById('contact-form');
let lines = '';

form.addEventListener('submit',function(e) {
    e.preventDefault();
    
    CreateProfile();
    
});


function CreateProfile() {
    const insertName = document.getElementById('insert-name');
    const insertPhone = document.getElementById('insert-phone');

    let line = '<tr>';
    line += `<td>${insertName.value}</td>`;
    line += `<td>${insertPhone.value}</td>`;
    line += '</tr>';

    lines += line;

    const bodyTable = document.querySelector('tbody');
    bodyTable.innerHTML = lines;
    
    insertName.value = '';
    insertPhone.value = '';
}