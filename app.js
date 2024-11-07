const express = require('express');
const path = require('path');
const app = express();
const pokemonRoutes = require('./routes/pokemonRoutes');
const treinadorRoutes = require('./routes/treinadorRoutes');

// Configurando EJS como engine de visualização
app.set('view engine', 'ejs');

// Definindo o diretório onde estão os arquivos .ejs
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/', pokemonRoutes);
app.use('/', treinadorRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
