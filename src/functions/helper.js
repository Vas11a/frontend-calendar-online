
// is long main message ? 
export function checkMainInfo(text) {
    let readyMainIfo = '';
    if (text.length > 24) {
    
        for (let a = 0; a < text.length; a++) {
            if (a === 21) {
                return readyMainIfo + '...';
            };
            readyMainIfo+=text[a];
        };
    } else{
        readyMainIfo = text;
        return readyMainIfo;
    };
};



