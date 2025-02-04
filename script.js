const objs = [
    {
        "nome": "Rafaelle", 
        "idade": 24,
        "esta_trabalhando":false,
        "hobbies":["Editar", "jogar roblox", "Ler"],
        "detalhes_profissao":{
            "profissao": "Jogadora de roblox",
            "empresa": null
        }
    },
    {
        "nome": "Rodrigo", 
        "idade": 27,
        "esta_trabalhando":false,
        "hobbies":["Editar", "Animes", "Ler"],
        "detalhes_profissao":{
            "profissao": null,
            "empresa": null
        }
    }
]

//json
//converter objeto para json
const jsonData = JSON.stringify(objs)

alert(jsonData)
alert(typeof jsonData)


//converter json para objeto

const objData = JSON.parse(jsonData)
alert(objData)

objData.map((pessoa) => {
  alert(pessoa.nome)
})