const Database = require('./db');
const saveOrphanage = require('./saveOrphanage')

Database.then(async db => {

    // const dados = {
    //     lat: "-27.2222254",
    //     lng: "-49.6449585",
    //     name: "Lar das meninos",
    //     about:"Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    //     whatsapp: "9888885",
    //     images: [
    //         "https://images.unsplash.com/photo-1595295410103-402cb7cb0254?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

    //         "https://images.unsplash.com/photo-1585338927000-1c787b17eb5e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
    //     ].toString(),
    //     instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    //     opening_hours: "Horário de visitas das 8h até 18h",
    //     open_on_weekends: "0"
    // }

    //inserir dados na tabela
    //  await saveOrphanage(db, dados)
    
    //consultar dados na tabela
    const selectOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectOrphanages)

//     const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
//     console.log(orphanage)

//     //deletar dado da tabela
//     await db.run('DELETE FROM orphanages WHERE id ="4"')
})
