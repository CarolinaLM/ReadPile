// Menu
$(document).ready(function () {
    let $menu = $('#menuIcon');
    let $links = $('.nav');

    $menu.on('click', function () {
        $menu.toggleClass('fa-times'); // Alterna a aparência do ícone
        $links.toggleClass('open');
    });

    $(window).on('scroll', function () {
        $menu.removeClass('fa-times');
        $links.removeClass('open');
    });

    // Search icon
    let $searchIcon = $('.search i');
    let $searchInput = $('.search input');
    let $search = $('.search');

    function toggleSearch() {
        $search.toggleClass('active');
        if ($search.hasClass('active')) {
            $searchInput.focus();
        }
    }

    $searchIcon.on('click', function (event) {
        event.stopPropagation(); // Impede o clique de se propagar para o documento
        toggleSearch();
    });

    // Additional search icon in .button for smaller screens
    let $buttonSearchIcon = $('.button .search-icon');

    $buttonSearchIcon.on('click', function (event) {
        event.stopPropagation(); // Impede o clique de se propagar para o documento
        toggleSearch();
    });

    // Detectar cliques fora da barra de pesquisa e do ícone
    $(document).on('click', function (event) {
        if (!$(event.target).closest('.search').length) {
            $search.removeClass('active');
        }
    });

    // Impede que a barra de pesquisa feche ao clicar dentro dela
    $search.on('click', function (event) {
        event.stopPropagation();
    });
});


// Carousel usando Meterialize
$(document).ready(function () {
    $('.carousel').carousel();
});

function changeBg(bg, title) {
    const banner = document.querySelector('.banner');
    const contents = document.querySelectorAll('.content');
    banner.computedStyleMap.backgroundSize = 'cover';
    banner.computedStyleMap.backgroundPosition = 'center';

    contents.forEach(content => {
        content.classList.remove('active');
        if (content.classList.contains(title)) {
            content.classList.add('active');
        }
    }
    )
}