//função: inicializar servidor em nodejs

const app = require('./src/app');
const PORT = process.env.PORT; //3030,3333,6060,6666,8080,8000

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
});
