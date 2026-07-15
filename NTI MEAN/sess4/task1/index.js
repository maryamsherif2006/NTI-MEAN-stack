var categorieCountries = {};

for (var i = 0; i < data.length; i++) {
    var u = data[i];

    if (!categorieCountries[u.city]) {
        categorieCountries[u.city] = [];
    }

    categorieCountries[u.city].push(u);
}

console.log(categorieCountries);