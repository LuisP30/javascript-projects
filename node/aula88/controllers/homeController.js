exports.paginaInicial = (req, res) => {
    res.send(`
        <form action="/" method="post">
            Nome: <input type="text" name="nome" /> 
            <input type="submit" /> 
        </form>`)
}

exports.reqPost = (req, res) => {
    res.send('Ei, sou sua nova rota de post')
}