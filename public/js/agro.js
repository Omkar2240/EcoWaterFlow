const cropData = {
    rice: {
        climaticConditions: ['Tropical Wet', 'Subtropical Humid'],
        soilTypes: ['Alluvial', 'Peaty and Marshy'],
        regions: ['Punjab', 'Haryana', 'Uttar Pradesh', 'Bihar', 'West Bengal', 'Assam', 'Odisha', 'Kerala'],
        waterUsagePerAcre: 1800000 // Liters/year
    },
    wheat: {
        climaticConditions: ['Temperate', 'Subtropical'],
        soilTypes: ['Loamy', 'Clayey'],
        regions: ['Punjab', 'Haryana', 'Uttar Pradesh', 'Madhya Pradesh', 'Rajasthan'],
        waterUsagePerAcre: 1200000 // Liters/year
    },
    maize: {
        climaticConditions: ['Subtropical', 'Tropical'],
        soilTypes: ['Sandy', 'Loamy'],
        regions: ['Karnataka', 'Maharashtra', 'Andhra Pradesh', 'Tamil Nadu'],
        waterUsagePerAcre: 900000 // Liters/year
    },
    sugarcane: {
        climaticConditions: ['Tropical', 'Subtropical'],
        soilTypes: ['Alluvial', 'Clayey'],
        regions: ['Uttar Pradesh', 'Maharashtra', 'Karnataka', 'Tamil Nadu'],
        waterUsagePerAcre: 2500000 // Liters/year
    },
    cotton: {
        climaticConditions: ['Arid', 'Semi-Arid'],
        soilTypes: ['Black', 'Sandy'],
        regions: ['Maharashtra', 'Gujarat', 'Madhya Pradesh', 'Telangana'],
        waterUsagePerAcre: 850000 // Liters/year
    }
};

const cropSelect = document.getElementById('crop');
const climaticConditionSelect = document.getElementById('climatic-condition');
const soilTypeSelect = document.getElementById('soil-type');
const regionSelect = document.getElementById('region');

cropSelect.addEventListener('change', () => {
    const selectedCrop = cropSelect.value;

    if (selectedCrop && cropData[selectedCrop]) {
        const { climaticConditions, soilTypes, regions } = cropData[selectedCrop];

        climaticConditionSelect.innerHTML = '<option value="">-- Select Climatic Condition --</option>';
        climaticConditions.forEach(condition => {
            const option = document.createElement('option');
            option.value = condition.toLowerCase().replace(/ /g, '-');
            option.textContent = condition;
            climaticConditionSelect.appendChild(option);
        });

        soilTypeSelect.innerHTML = '<option value="">-- Select Soil Type --</option>';
        soilTypes.forEach(type => {
            const option = document.createElement('option');
            option.value = type.toLowerCase().replace(/ /g, '-');
            option.textContent = type;
            soilTypeSelect.appendChild(option);
        });

        regionSelect.innerHTML = '<option value="">-- Select Region --</option>';
        regions.forEach(region => {
            const option = document.createElement('option');
            option.value = region.toLowerCase().replace(/ /g, '-');
            option.textContent = region;
            regionSelect.appendChild(option);
        });
    }
});

document.getElementById('calculate-btn').addEventListener('click', () => {
    const selectedCrop = cropSelect.value;
    const selectedClimaticCondition = climaticConditionSelect.value;
    const selectedSoilType = soilTypeSelect.value;
    const selectedRegion = regionSelect.value;
    const acres = parseFloat(document.getElementById('acres').value);

    if (!selectedCrop || !selectedClimaticCondition || !selectedSoilType || !selectedRegion || !acres || acres <= 0) {
        alert('Please select all fields.');
        return;
    }

    const waterUsagePerYear = cropData[selectedCrop].waterUsagePerAcre * acres;
    const waterUsagePerDay = waterUsagePerYear / 365;
    const waterUsagePerWeek = waterUsagePerDay * 7;
    const waterUsagePerMonth = waterUsagePerYear / 12;

    document.getElementById('water-consumption').textContent = `Total Water Consumed BY Crop Anually: ${waterUsagePerYear.toLocaleString()} liters.`;
    document.getElementById('daily-water').textContent = `Daily Water Consumed BY Crop: ${waterUsagePerDay.toLocaleString()} liters.`;
    document.getElementById('weekly-water').textContent = `Weekly Water Consumed BY Crop: ${waterUsagePerWeek.toLocaleString()} liters.`;
    document.getElementById('monthly-water').textContent = `Monthly Water Consumed BY Crop: ${waterUsagePerMonth.toLocaleString()} liters.`;

    const solutions = [
        'Implement Alternate Wetting and Drying (AWD) techniques.',
        'Use efficient irrigation methods like drip or sprinkler irrigation.',
        'Adopt rainwater harvesting systems to supplement irrigation.',
        'Choose drought-resistant crop varieties.'
    ];

    const solutionList = document.getElementById('solution-list');
    solutionList.innerHTML = '';
    solutions.forEach(solution => {
        const listItem = document.createElement('li');
        listItem.textContent = solution;
        solutionList.appendChild(listItem);
    });

    document.getElementById('results').style.display = 'block';
})