const filmes = [
    "Adão Negro",
    "Top Gun Maverick",
    "Wakanda Forever",
    "Avatar",
    "One Piece Red",
];

const retornarFilme = (idFilme) => {
    if (filmes[idFilme]){
        return filmes[idFilme];
    }
    return `Filme com o id ${idFilme} não encontrado`;
}

module.exports = {
    filmes,
    retornarFilme
};

