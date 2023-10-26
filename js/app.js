// Initialization

var grid = document.querySelector('.msnry-grid');

var msnry = new Masonry( grid, {
    columnWidth: '.msnry-grid-sizer',
    gutter: '.msnry-gutter-sizer',
    itemSelector: '.msnry-grid-item',
    percentPosition: true
})

imagesLoaded( grid ).on( 'progress', function() {
    // layout Masonry after each image loads
    msnry.layout();
});
