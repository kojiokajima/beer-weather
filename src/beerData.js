const beerData = {
    // - 15,  16 - 35, 36 - 55, 56 - 75, 76 -
    cold: { // Poter, Smoke Poter, Barrel-Aged Beer, Stout, Imperial Stout, Oatmeal Stout
        sunny: [
            // ['1772 Porter', 'Brown Porter', '4.6%', 26, 'coldsunny1'],
            ['1772 Porter', 'Brown Porter', '4.6%',  ' ★ ★', 'A traditional style English Porter. Light in body and abv. Created for the porters of the time to enjoy during and after daily duties. Not to be confused with the more robust American porter.'],
            // ['9lb Porter', 'Brown Porter', '4.6%', 26, 'coldsunny3'],
            ['9lb Porter', 'Brown Porter', '4.6%', ' ★ ★', "Brewed for our friends at the 9 Pound Hammer here in Georgetown, this is an exceptionally flavorful medium bodied porter. We use tons of Chocolate, Munich, and Roasted Malt, then blend it with Centennial and Northern Brewer hops to create what we'd like to call Roasted Chocolaty Goodness. Mmm.. porter. Buy it by the pint at the Nine Pound Hammer or come on in to our retail shop for growlers to go!"],
            // ['Bonnie St. Nan Cherry Smoked Porter', 'Smoke Porter', '5.4%', 19, 'coldcloudy5'],
            ['Bonnie St. Nan Cherry Smoked Porter', 'Smoke Porter', '5.4%', ' ★ ★', 'Black and yet light in consistency. Back ground hits of real cherry and smoked malt meld with the roasty overtones to form a delightful drinking experience.'],
            // ['Coles Smoked Porter', 'Smoke Porter', '5.5%', 31, 'coldcloudy1'], 
            ['Coles Smoked Porter', 'Smoke Porter', '5.5%', ' ★ ★', 'Light but still porter.'], 
            // ['Alien Porter', 'Brown Porter', '5.7%', 45, 'coldsunny2'],
            ['Alien Porter', 'Brown Porter', '5.7%', ' ★ ★ ★', 'coldsunny2'],
        ],
        cloudy: [
            // ['"Tractor Beam" Oatmeal Stout', 'Oatmeal Stout', '5.8%', 30, 'coldrainy3'], 
            ['"Tractor Beam" Oatmeal Stout', 'Oatmeal Stout', '5.8%', '★ ★', 'coldrainy3'], 
            // ["48er's Porter", 'Brown Porter', '5.9%', 31, 'coldsunny5'],
            ["48er's Porter", 'Brown Porter', '5.9%', '★ ★', 'coldsunny5'],
            // ['4.5 out of 7', 'Oatmeal Stout', '6%', 25, 'coldrainy4'], 
            ['4.5 out of 7', 'Oatmeal Stout', '6%', '★ ★', 'coldrainy4'], 
            // ['(512) Pecan Porter', 'Brown Porter', '6.8%', 30, 'coldsunny4'],
            ['(512) Pecan Porter', 'Brown Porter', '6.8%', '★ ★', 'coldsunny4'],
            // ["Anatevka", 'British Imperial Stout', '6.8%', 49, 'coldsunny5'],
            ["Anatevka", 'British Imperial Stout', '6.8%', '★ ★ ★', 'coldsunny5'],
        ],
        rainy: [
            // ['10 Ton', 'Oatmeal Stout', '7%', 30, 'coldrainy1'], 
            ['10 Ton', 'Oatmeal Stout', '7%', '★ ★', 'coldrainy1'], 
            // ['Barrel-Aged Imperial Smoked Porter', 'Smoke Porter', '8.5%', 50, 'coldcloudy2'],
            ['Barrel-Aged Imperial Smoked Porter', 'Smoke Porter', '8.5%', '★ ★ ★', 'coldcloudy2'],
            // ['Colossal Two', 'Smoke Porter', '9%', 50, 'coldcloudy4'],
            ['Colossal Two', 'Smoke Porter', '9%', '★ ★ ★', 'coldcloudy4'],
            // ['Big Ass Barrel Lapsang Tea Porter', 'Smoke Porter', '10.2%', 24.5, 'coldcloudy3'],
            ['Big Ass Barrel Lapsang Tea Porter', 'Smoke Porter', '10.2%', '★ ★', 'coldcloudy3'],
            // ["2X Most Stuffed", 'American Imperial Stout', '12%', 40, 'coldsunny5'],
            ["2X Most Stuffed", 'American Imperial Stout', '12%', '★ ★ ★', 'coldsunny5'],
        ]
    },

    moderate: { // IPA, Kolsh, Dubel, Hazy IPA, Red Ale, Amber Ale
        sunny: [
            
            // ["8 Second Kölsch", 'Kölsch', '5%', 15, 'moderatemoderate'],
            ["8 Second Kölsch", 'Kölsch', '5%', '★', 'moderatemoderate'],
            // ["1055 Kolsch", 'Kölsch', '5%', 25, 'moderatemoderate'],
            ["1055 Kolsch", 'Kölsch', '5%', '★ ★', 'moderatemoderate'],
            // ["A Kolsch Day in Helles", 'Kölsch', '5.4%', 19, 'moderatemoderate'],
            ["A Kolsch Day in Helles", 'Kölsch', '5.4%', '★ ★', 'moderatemoderate'],
            // ["Ash Cloud Amber", 'American Amber Lager', '5.5%', 20, 'moderatemoderate'],
            ["Ash Cloud Amber", 'American Amber Lager', '5.5%', '★ ★', 'moderatemoderate'],
            // ['1/2 Shot IPA', 'American IPA', '6.25%', 70, 'moderatemoderate'],
            ['1/2 Shot IPA', 'American IPA', '6.25%', '★ ★ ★ ★', 'moderatemoderate'],
        ],
        cloudy: [
            // ["America's Gold", 'Kölsch', '4.6%', 21, 'moderatemoderate'],
            // ["1980 Kolsch", 'Kölsch', '5.25%', 22, 'moderatemoderate'],
            // ["Absent Landlord", 'Kölsch', '5.3%', 18, 'moderatemoderate'],
            // ["67 Alaska", 'Kölsch', '5.5%', 21, 'moderatemoderate'],
            
            // ['10 @ 2 Hazy', 'American IPA', '6.3%', 41, 'moderatemoderate'],
            ['10 @ 2 Hazy', 'American IPA', '6.3%', '★ ★ ★', 'moderatemoderate'],
            // ['"Zeppelin" IPA', 'American IPA', '6.5%', 75, 'moderatemoderate'],
            ['"Zeppelin" IPA', 'American IPA', '6.5%', '★ ★ ★ ★', 'moderatemoderate'],
            // ['32958', 'Juicy or Hazy IPA', '6.7%', 61, 'moderatemoderate'],
            ['32958', 'Juicy or Hazy IPA', '6.7%', '★ ★ ★ ★', 'moderatemoderate'],
            // ['2-Headed Monster N.E. IPA', 'Juicy or Hazy IPA', '6.8%', 50, 'moderatemoderate'],
            ['2-Headed Monster N.E. IPA', 'Juicy or Hazy IPA', '6.8%', '★ ★ ★', 'moderatemoderate'],
            // ['Abandonment Issues', 'Juicy or Hazy IPA', '6.8%', 70, 'moderatemoderate'],
            ['Abandonment Issues', 'Juicy or Hazy IPA', '6.8%', '★ ★ ★ ★', 'moderatemoderate'],
        ],
        rainy: [
            // ["Amber Lager", 'American Amber Lager', '5.03%', 20, 'moderatemoderate'],
            // ["1865 Amber", 'American Amber Lager', '4.8%', 32.2, 'moderatemoderate'],
            // ["Bestside Lager", 'American Amber Lager', '4.9%', 20, 'moderatemoderate'],
            
            // ['1-800-Tropics', 'American IPA', '6.9%', 50, 'moderatemoderate'],
            ['1-800-Tropics', 'American IPA', '6.9%', '★ ★ ★', 'moderatemoderate'],
            // ['(512) IPA', 'American IPA', '7%', 65, 'moderatemoderate'],
            ['(512) IPA', 'American IPA', '7%', '★ ★ ★ ★', 'moderatemoderate'],
            // ["3rd Time's a Charm", 'Juicy or Hazy IPA', '7.2%', 40, 'moderatemoderate'],
            ["3rd Time's a Charm", 'Juicy or Hazy IPA', '7.2%', '★ ★ ★', 'moderatemoderate'],
            // ['Bad Axe IPA', 'English IPA', '7.6%', 76, 'moderatemoderate'],
            ['Bad Axe IPA', 'English IPA', '7.6%', '★ ★ ★ ★ ★', 'moderatemoderate'],
            // ['7 Mile Point', 'English IPA', '7.7%', 77, 'moderatemoderate'],
            ['7 Mile Point', 'English IPA', '7.7%', '★ ★ ★ ★ ★', 'moderatemoderate'],
        ]
    },

    warm: { // Gose, Pilsner, Sour Ale, Wheat, Session IPA, Blonde IPA
        sunny: [
            // ['6th Borough Pilsner', 'American Pilsener', '3%', 35, 'wormwormwormworm'],
            ['6th Borough Pilsner', 'American Pilsener', '3%', '★ ★', 'The 6th borough may just be a state of mind, but we live here, and this beer was brewed here. Bright, crisp and hoppy, this beer will bring you back to the “burbs” with each sip.'],
            // ['Beach Plum Gose', 'Contemporary Gose', '4.1%', 3, 'wormwormwormworm'],
            ['Beach Plum Gose', 'Contemporary Gose', '4.1%', '★', 'Beach Plum Gose is our Blue Point twist on a traditional German sour ale. We brew this kettle sour with beach plums indigenous to the shores of Long Island for a unique tartness and add North Atlantic seaweed and locally cultivated sea salt for a savory finish. This Gose stays true to its style’s German roots and its brewers’ Long Island roots - so it’s a little salty yet approachable, just like us.'],
            // ['All Star Session IPA', 'Session IPA', '4.2%', 45, 'wormwormwormworm'],
            ['All Star Session IPA', 'Session IPA', '4.2%', '★ ★', 'wormwormwormworm'],
            // ['3-2-1 Gose With Peaches', 'Contemporary Gose', '4.2%', 3, 'wormwormwormworm'],
            ['3-2-1 Gose With Peaches', 'Contemporary Gose', '4.2%', '★', 'wormwormwormworm'],
            // ['Black Lager', 'American Dark Lager', '4.5%', 31, 'wormwormwormworm'],
            ['Black Lager', 'American Dark Lager', '4.5%', '★ ★', 'wormwormwormworm'],
        ],
        cloudy: [
            // ['6th Anniversary Session IPA', 'Session IPA', '4.5%', 50, 'wormwormwormworm'],
            ['6th Anniversary Session IPA', 'Session IPA', '4.5%', '★ ★ ★', 'wormwormwormworm'],
            // ['A Little Hoppy', 'Session IPA', '4.6%', 65, 'wormwormwormworm'],
            ['A Little Hoppy', 'Session IPA', '4.6%', '★ ★ ★ ★', 'wormwormwormworm'],
            // ['Basil & Cranberry', 'Contemporary Gose', '4.7%', 12, 'wormwormwormworm'],
            ['Basil & Cranberry', 'Contemporary Gose', '4.7%', '★', 'wormwormwormworm'],
            // ['Alluvium Pilsner', 'German Pilsener', '5%', 45, 'wormwormwormworm'],
            ['Alluvium Pilsner', 'German Pilsener', '5%', '★ ★ ★', 'wormwormwormworm'],
            // ['1872 Lager', 'American Pilsener', '5.1%', 33, 'wormwormwormworm'],
            ['1872 Lager', 'American Pilsener', '5.1%', '★ ★', 'wormwormwormworm'],
        ],
        rainy: [
            // ['Blacklist', 'American Dark Lager', '5.3%', 24, 'wormwormwormworm'],
            ['Blacklist', 'American Dark Lager', '5.3%', '★ ★', 'wormwormwormworm'],
            // ['Artisan Lager', 'American Premium Lager', '5.5%', 23, 'wormwormwormworm'],
            ['Artisan Lager', 'American Premium Lager', '5.5%', '★ ★', 'wormwormwormworm'],
            // ['Ants on a Lager', 'Vienna Lager', '5.9%', 15, 'wormwormwormworm'],
            ['Ants on a Lager', 'Vienna Lager', '5.9%', '★', 'wormwormwormworm'],
            // ['Austrian Dreams', 'Vienna Lager', '6.1%', 23, 'wormwormwormworm'],
            ['Austrian Dreams', 'Vienna Lager', '6.1%', '★ ★', 'wormwormwormworm'],
            // ['Autumn Ale', 'Vienna Lager', '6.5%', 27, 'wormwormwormworm'],
            ['Autumn Ale', 'Vienna Lager', '6.5%', '★ ★', 'wormwormwormworm'],
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