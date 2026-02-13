function convertTemperature() {
            const tempInput = document.getElementById('temperature');
            const error = document.getElementById('error');
            const result = document.getElementById('result');
            const selectedUnit = document.querySelector('input[name="unit"]:checked').value;
            
            // Get and validate input
            const temp = parseFloat(tempInput.value);
            
            // Validation
            if (tempInput.value.trim() === '' || isNaN(temp)) {
                error.classList.add('show');
                result.textContent = 'Please enter a valid temperature';
                result.style.color = '#e74c3c';
                return;
            }
            
            error.classList.remove('show');
            result.style.color = '#667eea';
            
            let resultText = '';
            
            // Conversion logic
            if (selectedUnit === 'celsius') {
                const fahrenheit = (temp * 9/5) + 32;
                const kelvin = temp + 273.15;
                resultText = `${temp}°C = ${fahrenheit.toFixed(2)}°F = ${kelvin.toFixed(2)}K`;
            } else if (selectedUnit === 'fahrenheit') {
                const celsius = (temp - 32) * 5/9;
                const kelvin = celsius + 273.15;
                resultText = `${temp}°F = ${celsius.toFixed(2)}°C = ${kelvin.toFixed(2)}K`;
            } else if (selectedUnit === 'kelvin') {
                const celsius = temp - 273.15;
                const fahrenheit = (celsius * 9/5) + 32;
                resultText = `${temp}K = ${celsius.toFixed(2)}°C = ${fahrenheit.toFixed(2)}°F`;
            }
            
            result.textContent = resultText;
        }
        
        // Allow Enter key to trigger conversion
        document.getElementById('temperature').addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                convertTemperature();
            }
        });
        
        // Clear error on input
        document.getElementById('temperature').addEventListener('input', function() {
            document.getElementById('error').classList.remove('show');
        });