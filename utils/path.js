const path = require("path");

// a função a seguir irá fornecer sempre o caminho para o diretório
// raiz do projeto (e não do SO)
module.exports = path.dirname(require.main.filename);
