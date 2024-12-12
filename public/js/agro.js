const waterConsumptionData = {
    Punjab: {
        Rice: { Alluvial: 12000000 },
        Wheat: { Alluvial: 5500000 },
    },
    Haryana: {
        Rice: { Alluvial: 12000000 },
        Wheat: { Alluvial: 5500000 },
    },
    "Uttar Pradesh": {
        Rice: { Alluvial: 12000000 },
        Wheat: { Alluvial: 5500000 },
        Sugarcane: {Alluvial:20000000},
    },
    Maharashtra: {
        Wheat: {Black: 5500000 },
        Jowar: {Black:4000000},
        Rice: { Black: 12000000 },
    },
    "West Bengal": {
        Rice: { Alluvial: 9000000 },
    },
    "Tamil Nadu": {
        Rice: { Red: 8500000, Alluvial: 8500000 },
        Millets: { Red: 4500000,  Alluvial: 5000000 },
    },
    Kerala: {
        Rice: { Laterite: 7500000 },
    },
    "Andhra Pradesh": {
        Rice: { Red: 8500000 , Black:9000000 },
        Millets: { Red: 4000000,  Black: 4500000 },
    },
    "Madhya Pradesh": {
        Rice: { Black:9000000 },
        Wheat: {  Black: 6000000 },
    },
    Gujarat: {
        Rice: { Black: 8500000, Alluvial: 9000000 },
        Bajra: { Black:3000000 , Aluvial: 2000000},
    },
    Rajasthan: {
        Wheat: { Sandy: 4500000, Alluvial: 5000000 },
        Bajra: { Sandy : 8000000 , Alluvial : 2000000},
    },
    Assam: {
        Rice: { "Clayey Soil" : 7500000},
    },
    Chattisgarh: {
        Rice: { Black: 7000000, Laterite: 9000000 },
    },
    Odisha: {
        Rice: { Red: 7500000, Alluvial: 9000000 },
    },
    Karnataka: {
        Rice: { Red: 8000000, Laterite: 7000000 },
        Ragi : {Red:3000000 , Laterite : 4000000},
    },
};

function calculateWaterConsumption() {
    const state = document.getElementById("state").value;
    const grain = document.getElementById("grain").value;
    const soil = document.getElementById("soil").value;
    const area = parseFloat(document.getElementById("area").value);

    if (!area || area <= 0) {
        document.getElementById("result").innerText = "Please enter a valid area.";
        return;
    }

    const stateData = waterConsumptionData[state];
    if (!stateData || !stateData[grain] || !stateData[grain][soil]) {
        document.getElementById("result").innerText = "Data not available for the selected combination.";
        return;
    }

    const waterPerAcre = stateData[grain][soil];
    const totalWater = waterPerAcre * area;

    document.getElementById("result").innerText = `Total water consumption for ${area} acre(s) of ${grain} in ${state} (${soil} soil): ${totalWater.toLocaleString()} liters.`;
}