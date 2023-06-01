const container = document.querySelector('.container');
const progress = document.querySelector('.progress');
const percentArr = [90, 50, 25, 75, 89, 21, 9, 15, 4, 29, 44, 94];

const generateLines = () =>{
    percentArr.forEach(element => {
        const elementTemp = element;
        html = `
        <div class='line-container'>
        <h1>${element}%</h1>
        `;
        
        const lines = 100;
        let rotate = 360 / lines;
        const rotateTemp = rotate;
        for (let index = 0; index < lines; index++) {
            const element = document.createElement('span')
            html += `
            <span style='transform: rotate(${rotate}deg) translate(-70px); ${index < elementTemp ? `animation: progress 1s linear ${index/50}s infinite alternate`: ''};'></span>
            `
            rotate += rotateTemp
        }
    
        html += `</div>`
        progress.innerHTML += html
    });
}

generateLines()