document.getElementById("calculate-btn").addEventListener("click", function () {
    const crop = document.getElementById("crop").value;
    const acres = parseFloat(document.getElementById("acres").value) || 1;
    const irrigationMethod = document.getElementById("irrigation-method").value;

    // Crop water consumption (in liters/acre/year)
    const waterData = {
        rice: 1800000,
        cotton: 700000,
        millets: 500000,
        groundnut: 600000,
        sugarcane: 1800000,
        pulses: 400000,
        tea: 1000000,
        coffee: 1200000,
        cashew: 700000,
        barley: 500000,
    };

    const irrigationEfficiency = {
        flood: 0.50, // 50% efficiency (50% water wasted)
        sprinkler: 0.70, // 70% efficiency (30% water wasted)
        drip: 0.90, // 90% efficiency (10% water wasted)
    };

    const waterUsagePerAcre = waterData[crop] || 0;
    const efficiency = irrigationEfficiency[irrigationMethod] || 0;

    // Calculations
    const totalConsumption = waterUsagePerAcre * acres;
    const waterWasted = totalConsumption * (1 - efficiency);

    // Display results
    document.getElementById("water-consumption").innerText = `Total Water Consumption: ${totalConsumption.toLocaleString()} liters/year`;
    document.getElementById("water-wasted").innerText = `Water Wasted: ${waterWasted.toLocaleString()} liters/year`;

    // Solutions
    const solutions = getSuggestions(crop, irrigationMethod);
    const solutionList = document.getElementById("solution-list");
    solutionList.innerHTML = "";
    solutions.forEach((solution) => {
        const li = document.createElement("li");
        li.textContent = solution;
        solutionList.appendChild(li);
    });

    // Show results
    document.getElementById("results").style.display = "block";
});

function getSuggestions(crop, irrigationMethod) {
    const generalSuggestions = [
        "Implement drip or sprinkler irrigation where possible.",
        "Rainwater harvesting to reduce dependency on other sources.",
        "Regularly maintain irrigation systems to prevent leaks.",
    ];

    const specificSuggestions = {
        rice: ["Use Alternate Wetting and Drying (AWD) method.", "Avoid continuous flooding."],
        cotton: ["Adopt mulching techniques.", "Use precision irrigation systems."],
        sugarcane: ["Sprinkler systems to minimize wastage.", "Soil moisture sensors for better water management."],
    };

    const methodSuggestions = {
        flood: ["Reduce water depth during irrigation.", "Level the field to ensure uniform water distribution."],
        sprinkler: ["Optimize sprinkler placement for uniform coverage.", "Use low-pressure sprinklers."],
        drip: ["Ensure proper filtration to prevent clogging.", "Check emitters regularly for consistent flow."],
    };

    const cropSuggestions = specificSuggestions[crop] || [];
    const irrigationSuggestions = methodSuggestions[irrigationMethod] || [];

    return [...generalSuggestions, ...cropSuggestions, ...irrigationSuggestions];
}
