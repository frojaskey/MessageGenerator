function generateMessage(){
    const p1 = Math.floor(Math.random() * 3);
    const p2 = Math.floor(Math.random() * 3);
    const p3 = Math.floor(Math.random() * 3);

    const messages = [
        ['Hello','Welcome','Hola'],
        ['man','woman','hombre'],
        ['salta','corre','sonrie']
    ];

    return `${messages[0][p1]} ${messages[1][p2]} ${messages[2][p3]}`;
}

console.log(generateMessage());