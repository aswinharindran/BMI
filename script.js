document.getElementById('bmiForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value) / 100; // convert height to meters
    let bmi = weight / (height * height);
    let category;
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
        category = 'Normal weight';
    } else if (bmi >= 25 && bmi < 30) {
        category = 'Overweight';
    } else {
        category = 'Obese';
    }

    let resultWindow = window.open('', '_blank');
        let resultHtml = `
        <html>
        <head>
            <title>BMI Result</title>
            <link rel="stylesheet" href="styles.css">
            <style>
                body {
                    font-family: Arial, sans-serif;
                    padding: 20px;
                }
                .result-container {
                    color:  #ffffff;
                    background-color: #ffffff00;
                    padding: 20px;
                    box-shadow: 0px 5px 25px 0px #000000a5;
                    border: 2px solid #000000;
                    border-radius: 8px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    text-align: center;
                }
                .result-text {
                    font-size: 20px;
                    font-weight: bold;
                    margin-bottom: 10px;
                }
                .result-image {
                    max-width: 100%;
                    margin-top: 10px;
                }
            </style>
        </head>
        <body>
            <div class="result-container">
                <p class="result-text">Your BMI is ${bmi.toFixed(1)} - ${category}</p>
            </div>
        </body>
        </html>
    `;
    resultWindow.document.write(resultHtml);
});


