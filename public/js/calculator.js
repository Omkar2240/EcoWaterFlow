const domesticBtn = document.getElementById("domestic-btn");
        const domesticCalculator = document.getElementById("domestic-calculator");

        domesticBtn.addEventListener("click", () => {
            domesticCalculator.style.display = "block";
        });

        document.getElementById("calculate-domestic").addEventListener("click", function () {
            const shower = parseInt(document.getElementById("shower").value) || 0;
            const flush = parseInt(document.getElementById("flush").value) || 0;
            const dishes = parseInt(document.getElementById("dishes").value) || 0;
            const clothes = parseInt(document.getElementById("clothes").value) || 0;
            const people = parseInt(document.getElementById("people").value) || 1;

            // Calculations
            const showerWater = (shower / 5) * 75;
            const flushWater = flush * 5;
            const dishesWater = dishes * 0.25;
            const clothesWater = clothes * 1;

            const totalWaterPerPerson = showerWater + flushWater + dishesWater + clothesWater;
            const totalWater = totalWaterPerPerson * people;

            const summaryElement = document.getElementById("domestic-summary");

            if (people === 1) {
                summaryElement.innerText = `Water used by 1 person is approximately ${totalWater.toFixed(2)} liters per day.`;
            } else {
                summaryElement.innerText = `A family of ${people} people uses approximately ${totalWater.toFixed(2)} liters of water per day.`;
            }

            document.getElementById("domestic-results").style.display = "block";
        });