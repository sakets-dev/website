const words = ["saket sharma"];
const element = document.getElementById("phrase");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let i = 0;

const writeloop1 = async () => {
    await sleep(1000); // Add a 2-second delay before starting to type

    if (i < words.length) {
        let word = words[i];

        for (let j = 0; j < word.length; j++) {
            element.innerText = word.substring(0, j + 1);
            await sleep(100);
        }
    }
}

writeloop1();
