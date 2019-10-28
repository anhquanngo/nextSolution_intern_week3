const animals = [
    {
        "name": "cat",
        "size": "small",
        "weight": 5
    },
    {
        "name": "dog",
        "size": "small",
        "weight": 10
    },
    {
        "name": "lion",
        "size": "medium",
        "weight": 150
    },
    {
        "name": "elephant",
        "size": "big",
        "weight": 5000
    }
]
function name_animals(  ) {
    var animal_names = [];

    for (let i = 0; i < animals.length; i++) {
        animal_names.push(animals[i].name);
        // console.log(animals[i].name);
    }

    var animal_names = animals.map((animal, index, animals) => {
        console.log("animal name: " + animal.name);
        return animal.name;
    })
}

function animal_smalls() {
    var small_animals = [];

    for (let i = 0; i < animals.length; i ++) { 
        if (animals[i].size === "small") {
            small_animals.push(animals[i])
        }
    }

    var small_animals = animals.filter((animal) => {
        console.log("animal size: " + animal.size)
        return animal.size === "small"
    })
}

function total_weights() {
    var total_weight = 0;

    for (let i = 0; i < animals.length; i++) {
        total_weight += animals[i].weight;
        // console.log("total weight: " + total_weight)
    }

    var total_weight = animals.reduce((weight, animal, index, animals) => {
    return weight += animal.weight
    }, 0);
    console.log ("total_weight = "+total_weight)   
}

function max_weight() {
    var maxx_weight = animals[0].weight;
    for (let i = 0; i < animals.length; i++) {
        if(maxx_weight < animals[i].weight)
            {
                maxx_weight = animals[i].weight;
            }
    }
    console.log(maxx_weight);
    let maxx2_weight = animals.reduce((weight, animal, index, animals) => {
        if (weight < animal.weight){
            weight = animal.weight;
        }
        return weight;
    }, animals[0].weight)
    console.log("MAX weight: "+maxx2_weight)
}

function min_weight() {
    let minn2_weight = animals.reduce((weight, animal, index, animals) => {
        if (weight > animal.weight){
            weight = animal.weight;
        }
        return weight;
    }, animals[0].weight)
    console.log("MIN weight: "+ minn2_weight)
}
function main() {
    name_animals();
    animal_smalls();
    total_weights();
    max_weight();
    min_weight();
}

main();