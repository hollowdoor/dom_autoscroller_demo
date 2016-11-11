var drake = dragula([document.querySelector('#list'), document.querySelector('#hlist')]);
var scroll = autoScroll([
        document.querySelector('#list-container'),
        document.querySelector('#container2')
    ],{
    margin: 20,
    autoScroll: function(){
        return this.down && drake.dragging;
    }
});
