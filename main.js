const form = document.getElementById('contact-form');
const names = [];
const phones = [];
let lines = '';

form.addEventListener('submit',function(e) {
    e.preventDefault();
    
    CreateProfile();
    
});

function CreateProfile() {
    const insertName = document.getElementById('insert-name');
    const insertPhone = document.getElementById('insert-phone');

    if (names.includes(insertName.value)) {
        alert('Nome já existe');
      } else if (phones.includes(parseInt(insertPhone.value))) {
        alert('Número de telefone já foi cadastrado');
      } else {
        names.push(insertName.value);
        phones.push(parseInt(insertPhone.value));
    
        let line = '<tr>';
        line += `<td>${insertName.value}</td>`;
        line += `<td>${insertPhone.value}</td>`;
        line += '</tr>';
    
        lines += line;
    
        const bodyTable = document.querySelector('tbody');
        bodyTable.innerHTML = lines;
      }
    
    insertName.value = '';
    insertPhone.value = '';

};
