const beerData = {
    cold: {
        sunny: [
            ['1772 Porter', 'Brown Porter', '4.6%', 26, 'coldsunny1'], // --> beerData.cold.sunny[0]
            ['1772 Porter', 'Brown Porter', '4.6%', 26, 'coldsunny2'], // --> beerData.cold.sunny[1]
            ['1772 Porter', 'Brown Porter', '4.6%', 26, 'coldsunny3'], 
        ],
        cloudy: [
            ['1772 Porter', 'Brown Porter', '4.6%', 26, 'coldcloudy1'], 
            ['1772 Porter', 'Brown Porter', '4.6%', 26, 'coldcloudy2'], 
            ['1772 Porter', 'Brown Porter', '4.6%', 26, 'coldcloudy3'], 
        ],
        rainy: [
            ['1772 Porter', 'Brown Porter', '4.6%', 26, 'coldrainy1'], 
            ['1772 Porter', 'Brown Porter', '4.6%', 26, 'coldrainy2'], 
            ['1772 Porter', 'Brown Porter', '4.6%', 26, 'coldrainy3'], 
        ]

    },

    // coldModerate: {
    //     sunny: [
    //         // ...beerData.cold.sunny,
    //         // ...beerData.moderate.sunny,
    //         ['Billy Bock', 'Bock', '6.7%', 23, 'coldModerate'], // --> beerData.moderate.sunny[0]
    //         ['Billy Bock', 'Bock', '6.7%', 23, 'coldModerate'], // --> beerData.moderate.sunny[1]
    //         ['Billy Bock', 'Bock', '6.7%', 23, 'coldModerate'],
    //     ],
    //     cloudy: [
    //         // ...beerData.cold.cloudy,
    //         // ...beerData.moderate.cloudy,
    //         ['Billy Bock', 'Bock', '6.7%', 23, 'coldModerate'],
    //         ['Billy Bock', 'Bock', '6.7%', 23, 'coldModerate'],
    //         ['Billy Bock', 'Bock', '6.7%', 23, 'coldModerate'],
    //     ],
    //     rainy: [
    //         // ...beerData.cold.rainy,
    //         // ...beerData.moderate.rainy,
    //         ['Billy Bock', 'Bock', '6.7%', 23, 'coldModerate'],
    //         ['Billy Bock', 'Bock', '6.7%', 23, 'coldModerate'],
    //         ['Billy Bock', 'Bock', '6.7%', 23, 'coldModerate'],
    //     ]
    // },

    moderate: {
        sunny: [
            ['Alferd Packer Killer Kölsch', 'Kölsch', '5.1%', 25, 'moderatemoderate'], // --> beerData.moderate.sunny[0]
            ['Alferd Packer Killer Kölsch', 'Kölsch', '5.1%', 25, 'moderatemoderate'], // --> beerData.moderate.sunny[1]
            ['Alferd Packer Killer Kölsch', 'Kölsch', '5.1%', 25, 'moderatemoderate'],
        ],
        cloudy: [
            ['Alferd Packer Killer Kölsch', 'Kölsch', '5.1%', 25, 'moderatemoderate'],
            ['Alferd Packer Killer Kölsch', 'Kölsch', '5.1%', 25, 'moderatemoderate'],
            ['Alferd Packer Killer Kölsch', 'Kölsch', '5.1%', 25, 'moderatemoderate'],
        ],
        rainy: [
            ['Alferd Packer Killer Kölsch', 'Kölsch', '5.1%', 25, 'moderatemoderate'],
            ['Alferd Packer Killer Kölsch', 'Kölsch', '5.1%', 25, 'moderatemoderate'],
            ['Alferd Packer Killer Kölsch', 'Kölsch', '5.1%', 25, 'moderatemoderate'],
        ]
    },
    
    // moderateWarm: {
    //     sunny: [
    //         // ...beerData.moderate.sunny,
    //         // ...beerData.warm.sunny,
    //         ['Barn Phantom Gose with Mango', 'Gose', '4%', 10, 'wormwormwormworm'], // --> beerData.warm.sunny[0]
    //         ['Barn Phantom Gose with Mango', 'Gose', '4%', 10, 'wormwormwormworm'], // --> beerData.warm.sunny[1]
    //         ['Barn Phantom Gose with Mango', 'Gose', '4%', 10, 'wormwormwormworm'],
    //     ],
    //     cloudy: [
    //         // ...beerData.moderate.cloud,
    //         // ...beerData.warm.cloud,
    //         ['Barn Phantom Gose with Mango', 'Gose', '4%', 10, 'wormwormwormworm'],
    //         ['Barn Phantom Gose with Mango', 'Gose', '4%', 10, 'wormwormwormworm'],
    //         ['Barn Phantom Gose with Mango', 'Gose', '4%', 10, 'wormwormwormworm'],
    //     ],
    //     rainy: [
    //         // ...beerData.moderate.rainy,
    //         // ...beerData.warm.rainy,
    //         ['Barn Phantom Gose with Mango', 'Gose', '4%', 10, 'wormwormwormworm'],
    //         ['Barn Phantom Gose with Mango', 'Gose', '4%', 10, 'wormwormwormworm'],
    //         ['Barn Phantom Gose with Mango', 'Gose', '4%', 10, 'wormwormwormworm'],
    //     ]
    // },

    warm: {
        sunny: [
            ['Barn Phantom Gose with Mango', 'Gose', '4%', 10, 'wormwormwormworm'], // --> beerData.warm.sunny[0]
            ['Barn Phantom Gose with Mango', 'Gose', '4%', 10, 'wormwormwormworm'], // --> beerData.warm.sunny[1]
            ['Barn Phantom Gose with Mango', 'Gose', '4%', 10, 'wormwormwormworm'],
        ],
        cloudy: [
            ['Barn Phantom Gose with Mango', 'Gose', '4%', 10, 'wormwormwormworm'],
            ['Barn Phantom Gose with Mango', 'Gose', '4%', 10, 'wormwormwormworm'],
            ['Barn Phantom Gose with Mango', 'Gose', '4%', 10, 'wormwormwormworm'],
        ],
        rainy: [
            ['Barn Phantom Gose with Mango', 'Gose', '4%', 10, 'wormwormwormworm'],
            ['Barn Phantom Gose with Mango', 'Gose', '4%', 10, 'wormwormwormworm'],
            ['Barn Phantom Gose with Mango', 'Gose', '4%', 10, 'wormwormwormworm'],
        ]
    }
}

beerData.coldModerate = {
    sunny: [...beerData.cold.sunny, ...beerData.moderate.sunny],
    cloudy: [...beerData.cold.cloudy, ...beerData.moderate.cloudy],
    rainy: [...beerData.cold.rainy, ...beerData.moderate.rainy],
}
beerData.moderateWarm = {
    sunny: [...beerData.moderate.sunny, ...beerData.warm.sunny],
    cloudy: [...beerData.moderate.cloudy, ...beerData.warm.cloudy],
    rainy: [...beerData.moderate.rainy, ...beerData.warm.rainy],
}

export default beerData