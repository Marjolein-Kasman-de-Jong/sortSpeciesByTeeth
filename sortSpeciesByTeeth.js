// ---------------------------------------------------------------------------
// Codecademy Front-End Engineer Career Path - Challenge: sortSpeciesByTeeth()
// ---------------------------------------------------------------------------

// Initiates input array

const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];

// Sorts array items in ascending order based on number of teeth

function sortSpeciesByTeeth(array) {
    return array.sort((a, b) => a.numTeeth - b.numTeeth);
}

// Logs sorted array to console

console.log(sortSpeciesByTeeth(speciesArray))


