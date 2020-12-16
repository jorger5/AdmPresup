export function formatFechas(x) {
    const day = x.slice(9,10);
    const month = x.slice(5,7);
    const year = x.slice(0,4);
    return day+" / "+month+" / "+year;
}


// este es el formato que da la DB:
// 1975-08-19T23:15:30.000Z
// (0,4)-(5,7)-(9,10)