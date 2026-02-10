const PI = 3.1415;
const G = 6.6743*(10**(-11));

function calcOrbitTime() {
    let r = Number(document.getElementById("inputRadius").value);
    let M = Number(document.getElementById("inputMass").value);

    let orbitTime = ((4*(PI**2)*(r**3))/G*M)**(1/2);

    let output = `The volume of the sphere is ${orbitTime}.`;

    document.getElementById("orbitTimeResult").innerText = output;
}