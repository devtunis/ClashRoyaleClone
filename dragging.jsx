 
card.interactive = true;
card.buttonMode = true;

 
card.on('pointerdown', (e) => {
    card.data = e.data;  
    card.dragging = true;
});
 
card.on('pointermove', () => {
    if(card.dragging){
        const newPosition = card.data.getLocalPosition(card.parent);
        card.x = newPosition.x;
        card.y = newPosition.y;
    }
});
 
card.on('pointerup', () => {
    card.dragging = false;
    card.data = null;
});

card.on('pointerupoutside', () => {
    card.dragging = false;
    card.data = null;
});
https://www.youtube.com/watch?v=yob_-5KSl2g
// start with this one
