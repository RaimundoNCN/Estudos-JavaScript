window.alert('No alerta a seguir adicione um nome.');
var nome = window.prompt('Nome tem limite de 22 caracteres!');

if(nome.length > 22){

    document.write('Erro! Numeros de caracteres invalido!\n');
    document.write(`Caracteres: ${nome.length}`);

} else document.write(`Nome: ${nome}, Caracteres: ${nome.length}`);
