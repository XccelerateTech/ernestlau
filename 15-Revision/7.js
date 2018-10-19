var restaurants = [
    {name: "Ollies", group: "Castelo Concepts"},
    {name: "Wagyu", group: "Castelo Concepts"},
    {name: "Zaks", group: "Castelo Concepts"},
    {name: "Black Salt", group: "Black Sheep"},
    {name: "Salt and Barrel", group: "Black Sheep"}
]

var result = restaurants.filter(function(restaurant) {
    return restaurant.group === "Castelo Concepts";
});

var nameonly = result.map(function(n) {
    return n.name;
});

console.log(nameonly);