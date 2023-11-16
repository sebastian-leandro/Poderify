export function Direction(index) {
    switch(index) {
        case 0:
            return 'left';
        case 1:
            return 'right';
        case 2:
            return 'up';
        default:
            return 'down'; 
    }
}