const oTitle = 400;

const matrix = document.getElementById("matrix");
const context = matrix.getContext("2d");
matrix.height = oTitle * 2;
// matrix.height= '100px';
matrix.width = window.innerWidth;
let drop = [];
const font_size = 16;
const columns = matrix.width / font_size;
for (let i = 0; i < columns; i++)
    drop[i] = 1;

function drawMatrix() {

    context.fillStyle = "rgba(0, 0, 0, 0.1)";
    context.fillRect(0, 0, matrix.width, matrix.height);

    context.fillStyle = "green";
    context.font="20px Verdana";

    context.fillText('黑客帝国',matrix.width/2-40,matrix.height/3);
    context.font="14px Arial";

    for (let i = 0; i < columns; i++) {
        context.fillText(Math.floor(Math.random() * 2), i * font_size, drop[i] * font_size);
        /*get 0 and 1*/
        if (drop[i] * font_size > (matrix.height * 2 / 3) && Math.random() > 0.85)/*reset*/
            drop[i] = 0;
        drop[i]++;
    }
}

setInterval(drawMatrix, 80);

