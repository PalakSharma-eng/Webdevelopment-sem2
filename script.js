function startCountdown() {
    let num = parseInt(document.getElementById("numberInput").value);
    let result = document.getElementById("result");

    if (isNaN(num) || num <= 0) {
        result.innerHTML = "Enter a valid number";
        return;
    }

    let i = num;

    let interval = setInterval(() => {
        result.innerHTML = i;
        i--;

        if (i === 0) {
            clearInterval(interval);
        }
    }, 1000); 
}