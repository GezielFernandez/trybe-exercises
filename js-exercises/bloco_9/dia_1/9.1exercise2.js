// Agora, dado o código abaixo, qual a ordem de finalização de execução das linhas comentadas? 

const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
  `${name} is ${value} ${measurementUnit} apart from the Sun`;

const mars = {
  name: "Mars",
  distanceFromSun: {
    value: 227900000,
    measurementUnit: "kilometers",
  },
};

const venus = {
  name: "Venus",
  distanceFromSun: {
    value: 108200000,
    measurementUnit: "kilometers",
  },
};

const jupiter = {
  name: "Jupiter",
  distanceFromSun: {
    value: 778500000,
    measurementUnit: "kilometers",
  },
};

console.log(planetDistanceFromSun(mars)); // A
setTimeout(() => console.log(planetDistanceFromSun(venus)), 3000); // B
setTimeout(() => console.log(planetDistanceFromSun(jupiter)), 2000); // C

// The A option does not have any delay, so it's gonna print first, then we've got a 2000 miliseconds delay on C option, and 3000 miliseconds delay on B option, whereby C is gonna execute before B. Summing up, the execute order will be: A, C, B.