const beerData = {
    cold: { // Poter, Smoke Poter, Barrel-Aged Beer, Stout, Imperial Stout, Oatmeal Stout
        sunny: [
            ['1772 Porter', 'Brown Porter', '4.6%', 26, 'coldsunny1'], // --> beerData.cold.sunny[0]
            ['Alien Porter', 'Brown Porter', '5.7%', 45, 'coldsunny2'], // --> beerData.cold.sunny[1]
            ['9lb Porter', 'Brown Porter', '4.6%', 26, 'coldsunny3'],
            ['(512) Pecan Porter', 'Brown Porter', '6.8%', 30, 'coldsunny4'],
            ["48er's Porter", 'Brown Porter', '5.9%', 31, 'coldsunny5'],
        ],
        cloudy: [
            ['Coles Smoked Porter', 'Smoke Porter', '5.5%', 31, 'coldcloudy1'], 
            ['Barrel-Aged Imperial Smoked Porter', 'Smoke Porter', '8.5%', 50, 'coldcloudy2'],
            ['Big Ass Barrel Lapsang Tea Porter', 'Smoke Porter', '10.2%', 24.5, 'coldcloudy3'],
            ['Colossal Two', 'Smoke Porter', '9%', 50, 'coldcloudy4'],
            ['Bonnie St. Nan Cherry Smoked Porter', 'Smoke Porter', '5.4%', 19, 'coldcloudy5'],
        ],
        rainy: [
            ['10 Ton', 'Oatmeal Stout', '7%', 30, 'coldrainy1'], 
            ['20th Anniversary Encore Series: 12th Anniversary Bitter Chocolate Oatmeal Stout', 'Oatmeal Stout', '9.2%', 55, 'coldrainy2'], 
            ['"Tractor Beam" Oatmeal Stout', 'Oatmeal Stout', '5.8%', 30, 'coldrainy3'], 
            ['4.5 out of 7', 'Oatmeal Stout', '6%', 25, 'coldrainy4'], 
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

    moderate: { // IPA, Kolsh, Dubel, Hazy IPA, Red Ale, Amber Ale
        sunny: [
            ['(512) IPA', 'American IPA', '7%', 65, 'moderatemoderate'], // --> beerData.moderate.sunny[0]
            ['1-800-Tropics', 'American IPA', '6.9%', 50, 'moderatemoderate'], // --> beerData.moderate.sunny[1]
            ['10 @ 2 Hazy', 'American IPA', '6.3%', 41, 'moderatemoderate'],
            ['"Zeppelin" IPA', 'American IPA', '6.5%', 75, 'moderatemoderate'],
            ['1/2 Shot IPA', 'American IPA', '6.25%', 70, 'moderatemoderate'],
        ],
        cloudy: [
            ['7 Mile Point', 'English IPA', '7.7%', 77, 'moderatemoderate'],
            ['Bad Axe IPA', 'English IPA', '7.6%', 76, 'moderatemoderate'],
            ["America's Gold", 'Kölsch', '4.6%', 21, 'moderatemoderate'],
            ["1980 Kolsch", 'Kölsch', '5.25%', 22, 'moderatemoderate'],
            ["Absent Landlord", 'Kölsch', '5.3%', 18, 'moderatemoderate'],
            ["8 Second Kölsch", 'Kölsch', '5%', 15, 'moderatemoderate'],
            ["67 Alaska", 'Kölsch', '5.5%', 21, 'moderatemoderate'],
            ["A Kolsch Day in Helles", 'Kölsch', '5.4%', 19, 'moderatemoderate'],
            ["1055 Kolsch", 'Kölsch', '5%', 25, 'moderatemoderate'],

        ],
        rainy: [
            ['32958', 'Juicy or Hazy IPA', '6.7%', 61, 'moderatemoderate'],
            ['2-Headed Monster N.E. IPA', 'Juicy or Hazy IPA', '6.8%', 50, 'moderatemoderate'],
            ['Abandonment Issues', 'Juicy or Hazy IPA', '6.8%', 70, 'moderatemoderate'],
            ["3rd Time's a Charm", 'Juicy or Hazy IPA', '7.2%', 40, 'moderatemoderate'],

            ["Amber Lager", 'American Amber Lager', '5.03%', 20, 'moderatemoderate'],
            ["1865 Amber", 'American Amber Lager', '4.8%', 32.2, 'moderatemoderate'],
            ["Bestside Lager", 'American Amber Lager', '4.9%', 20, 'moderatemoderate'],
            ["Ash Cloud Amber", 'American Amber Lager', '5.5%', 20, 'moderatemoderate'],
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

    warm: { // Gose, Pilsner, Sour Ale, Wheat, Session IPA, Blonde IPA
        sunny: [
            ['3-2-1 Gose With Peaches', 'Contemporary Gose', '4.2%', 3, 'wormwormwormworm'], // --> beerData.warm.sunny[0]
            ['Basil & Cranberry', 'Contemporary Gose', '4.7%', 12, 'wormwormwormworm'], // --> beerData.warm.sunny[1]
            ['Beach Plum Gose', 'Contemporary Gose', '4.1%', 3, 'wormwormwormworm'],
        ],
        cloudy: [
            ['Alluvium Pilsner', 'German Pilsener', '5%', 45, 'wormwormwormworm'],
            ['6th Borough Pilsner', 'American Pilsener', '3%', 35, 'wormwormwormworm'],
            ['1872 Lager', 'American Pilsener', '5.1%', 33, 'wormwormwormworm'],
            ['Autumn Ale', 'Vienna Lager', '6.5%', 27, 'wormwormwormworm'],
            ['Ants on a Lager', 'Vienna Lager', '5.9%', 15, 'wormwormwormworm'],
            ['Austrian Dreams', 'Vienna Lager', '6.1%', 23, 'wormwormwormworm'],
        ],
        rainy: [
            ['Black Lager', 'American Dark Lager', '4.5%', 31, 'wormwormwormworm'],
            ['Blacklist', 'American Dark Lager', '5.3%', 24, 'wormwormwormworm'],
            ['Artisan Lager', 'American Premium Lager', '5.5%', 23, 'wormwormwormworm'],
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