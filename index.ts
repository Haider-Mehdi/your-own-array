let favouriteTransportation: Array<[transport: string, brand: string]> = []

favouriteTransportation.push(["Motorbike", "Suzuki"])
favouriteTransportation.push(["Car", "Honda"])
favouriteTransportation.push(["Truck", "GMC"])

favouriteTransportation.forEach(([transport, brand]) =>
{console.log(`I would like to own a ${brand} ${transport}. `)}

)

export{};