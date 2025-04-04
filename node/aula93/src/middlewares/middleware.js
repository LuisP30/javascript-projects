module.exports = (req, res, next) => {
    console.log('Middleware global')
    res.locals.umaVariavelLocal = 'este é o valor da variável'
    next()
}