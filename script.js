function back(){
    window.history.back();
}

function filterGames(){
    var input = document.getElementById('searchInput');
    var filter = input.value.toLowerCase();
    var games = document.querySelectorAll('.game1');

    games.forEach(function(game1) {
        var gameName = game1.getAttribute('data-name').toLowerCase();
        if (gameName.includes(filter)){
            game1.classList.remove('hidden');
        } else {
            game1.classList.add('hidden');
        }
    });

}