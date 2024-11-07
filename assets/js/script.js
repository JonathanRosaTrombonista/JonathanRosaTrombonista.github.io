
const items = [
    {
        id: 0,
        nome: 'Bocal Denis Wick 4AL',
        img: 'assets/img/loja/img.png',
        quantidade:0
    },
    {
        id: 1,
        nome: 'Bocal Thein B',
        img: 'assets/img/loja/img.png',
        quantidade:0
    },
    {
        id: 1,
        nome: 'Trombone tenor',
        img: 'assets/img/loja/img.png',
        quantidade:0
    },
]

    function inicializarLoja () {
        var containerProdutos = document.getElementById('produtos');
        items.map((val)=>{
            console.log(val.nome);
        })
    }


