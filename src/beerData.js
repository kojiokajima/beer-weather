const beerData = {
    // - 15,  16 - 35, 36 - 55, 56 - 75, 76 -
    cold: { // Poter, Smoke Poter, Barrel-Aged Beer, Stout, Imperial Stout, Oatmeal Stout
        sunny: [
            // ['1772 Porter', 'Brown Porter', '4.6%', 26, 'coldsunny1'],
            ['1772 Porter', 'Brown Porter', '4.6%',  ' ★ ★', 'beer3', 'A traditional style English Porter. Light in body and abv. Created for the porters of the time to enjoy during and after daily duties. Not to be confused with the more robust American porter.'],
            // ['9lb Porter', 'Brown Porter', '4.6%', 26, 'coldsunny3'],
            ['9lb Porter', 'Brown Porter', '4.6%', ' ★ ★', 'beer3', "Brewed for our friends at the 9 Pound Hammer here in Georgetown, this is an exceptionally flavorful medium bodied porter. We use tons of Chocolate, Munich, and Roasted Malt, then blend it with Centennial and Northern Brewer hops to create what we'd like to call Roasted Chocolaty Goodness. Mmm.. porter. Buy it by the pint at the Nine Pound Hammer or come on in to our retail shop for growlers to go!"],
            // ['Bonnie St. Nan Cherry Smoked Porter', 'Smoke Porter', '5.4%', 19, 'coldcloudy5'],
            ['Bonnie St. Nan Cherry Smoked Porter', 'Smoke Porter', '5.4%', ' ★ ★', 'beer4', 'Black and yet light in consistency. Back ground hits of real cherry and smoked malt meld with the roasty overtones to form a delightful drinking experience.'],
            // ['Coles Smoked Porter', 'Smoke Porter', '5.5%', 31, 'coldcloudy1'], 
            ['Coles Smoked Porter', 'Smoke Porter', '5.5%', ' ★ ★', 'beer4', 'Light but still porter.'], 
            // ['Alien Porter', 'Brown Porter', '5.7%', 45, 'coldsunny2'],
            ['Alien Porter', 'Brown Porter', '5.7%', ' ★ ★ ★', 'beer3', 'A summer porter brewed with an experimental hop from Hop Head Farms and inspired by the -230C nights on the surface of Planet X.'],
        ],
        cloudy: [
            // ['"Tractor Beam" Oatmeal Stout', 'Oatmeal Stout', '5.8%', 30, 'coldrainy3'], 
            ['"Tractor Beam" Oatmeal Stout', 'Oatmeal Stout', '5.8%', '★ ★', 'beer4', 'No Description Provided'], 
            // ["48er's Porter", 'Brown Porter', '5.9%', 31, 'coldsunny5'],
            ["48er's Porter", 'Brown Porter', '5.9%', '★ ★', 'beer3', 'Flavor/Balance: Named after a group of Germans who settled in the greater Boerne area in the 1840’s. This is a robust Porter w/ bits of English and American style. Notes of chocolate, coffee, and toffee. Finishes sweeter than our other beers. Just in time for Fall!'],
            // ['4.5 out of 7', 'Oatmeal Stout', '6%', 25, 'coldrainy4'], 
            ['4.5 out of 7', 'Oatmeal Stout', '6%', '★ ★', 'beer4', 'A full-bodied oatmeal milk stout that starts off with a mild roasty flavor and smoothly transitions into sweet, cream and luscious.'], 
            // ['(512) Pecan Porter', 'Brown Porter', '6.8%', 30, 'coldsunny4'],
            ['(512) Pecan Porter', 'Brown Porter', '6.8%', '★ ★', 'beer3', "Nearly black in color, (512) Pecan Porter is made with Organic US 2-row and Crystal malts along with Baird's Chocolate and Black malts. Its full body and malty sweetness are balanced with subtle pecan aroma and flavor from locally grown pecans. Yet another true Austin original!"],
            // ["Anatevka", 'British Imperial Stout', '6.8%', 49, 'coldsunny5'],
            ["Anatevka", 'British Imperial Stout', '6.8%', '★ ★ ★', 'beer4', 'Jet black richness smoothed with flaked barley & complementary hops.'],
        ],
        rainy: [
            // ['10 Ton', 'Oatmeal Stout', '7%', 30, 'coldrainy1'], 
            ['10 Ton', 'Oatmeal Stout', '7%', '★ ★', 'beer4', 'The Industrial Revolution that forged Dayton, O was built on the backs of many. Where sweat, dirt, and pride were part of the everyday diet.'], 
            // ['Barrel-Aged Imperial Smoked Porter', 'Smoke Porter', '8.5%', 50, 'coldcloudy2'],
            ['Barrel-Aged Imperial Smoked Porter', 'Smoke Porter', '8.5%', '★ ★ ★', 'beer4', 'Bold and robust with rich chocolate and coffee aromas, a subtle smoky flavor and a sweet finish. Aged in bourbon barrels.'],
            // ['Colossal Two', 'Smoke Porter', '9%', 50, 'coldcloudy4'],
            ['Colossal Two', 'Smoke Porter', '9%', '★ ★ ★', 'beer4', 'This Porter is a stronger, smoked version of our flagship Porter. It is dark brown, almost black in color, and has a smoky, roasted aroma and smooth, rich, complex smoke and chocolate flavors.'],
            // ['Big Ass Barrel Lapsang Tea Porter', 'Smoke Porter', '10.2%', 24.5, 'coldcloudy3'],
            ['Big Ass Barrel Lapsang Tea Porter', 'Smoke Porter', '10.2%', '★ ★', 'beer4', 'Imperial robust porter with pine smoked Lapsang Souchon tea leaves'],
            // ["2X Most Stuffed", 'American Imperial Stout', '12%', 40, 'coldsunny5'],
            ["2X Most Stuffed", 'American Imperial Stout', '12%', '★ ★ ★', 'beer4', 'Thick, rich and excessively decadent, this beer aims to bring back childhood. Stuffed with an obscene 800 oreo cookies per barrel. Mic drop!'],
        ]
    },

    moderate: { // IPA, Kolsh, Dubel, Hazy IPA, Red Ale, Amber Ale
        sunny: [
            
            // ["8 Second Kölsch", 'Kölsch', '5%', 15, 'moderatemoderate'],
            ["8 Second Kölsch", 'Kölsch', '5%', '★', 'beer1', 'Head Brewer Christian Koch fell in love with this style of beer while visiting Cologne, Germany. Our 8 Second Kölsch is brewed to be a true representation of this easy drinking crisp ale.'],
            // ["1055 Kolsch", 'Kölsch', '5%', 25, 'moderatemoderate'],
            ["1055 Kolsch", 'Kölsch', '5%', '★ ★', 'beer1', '1055 Kolsch is our collaboration with the local fire union benefiting burn related charities. This is our third release with the fire union and first in cans.'],
            // ["A Kolsch Day in Helles", 'Kölsch', '5.4%', 19, 'moderatemoderate'],
            ["A Kolsch Day in Helles", 'Kölsch', '5.4%', '★ ★', 'beer1', 'Ale meets lager with a cherry on top! A malt driven German ale combined with a lager brewing style and English yeast results in this bright, light and easy beer with a hint of cherry.'],
            // ["Ash Cloud Amber", 'American Amber Lager', '5.5%', 20, 'moderatemoderate'],
            ["Ash Cloud Amber", 'American Amber Lager', '5.5%', '★ ★', 'beer1', 'Ash Cloud Amber is an American style amber ale that is coppery brown in color with some reddish hues.'],
            // ['1/2 Shot IPA', 'American IPA', '6.25%', 70, 'moderatemoderate'],
            ['1/2 Shot IPA', 'American IPA', '6.25%', '★ ★ ★ ★', 'beer2', 'Half of the robust grain bill that is found in the Shot Tower DIPA. 4 Different hops giving it lots of citrus floral notes'],
        ],
        cloudy: [
            // ["America's Gold", 'Kölsch', '4.6%', 21, 'moderatemoderate'],
            // ["1980 Kolsch", 'Kölsch', '5.25%', 22, 'moderatemoderate'],
            // ["Absent Landlord", 'Kölsch', '5.3%', 18, 'moderatemoderate'],
            // ["67 Alaska", 'Kölsch', '5.5%', 21, 'moderatemoderate'],
            
            // ['10 @ 2 Hazy', 'American IPA', '6.3%', 41, 'moderatemoderate'],
            ['10 @ 2 Hazy', 'American IPA', '6.3%', '★ ★ ★', 'beer2', 'No Description Provided'],
            // ['"Zeppelin" IPA', 'American IPA', '6.5%', 75, 'moderatemoderate'],
            ['"Zeppelin" IPA', 'American IPA', '6.5%', '★ ★ ★ ★', 'beer2', 'American style India Pale Ale with a punchy hop finish'],
            // ['32958', 'Juicy or Hazy IPA', '6.7%', 61, 'moderatemoderate'],
            ['32958', 'Juicy or Hazy IPA', '6.7%', '★ ★ ★ ★', 'beer2', 'Hazy IPA with late addition Citra and Mosaic hops.'],
            // ['2-Headed Monster N.E. IPA', 'Juicy or Hazy IPA', '6.8%', 50, 'moderatemoderate'],
            ['2-Headed Monster N.E. IPA', 'Juicy or Hazy IPA', '6.8%', '★ ★ ★', 'beer2', `Brewed w/ a monstrous amount of Strata & Amarillo, this hazy IPA was brewed exclusively for the comedy duo Cory 'n Chad "The Smash Bothers"!`],
            // ['Abandonment Issues', 'Juicy or Hazy IPA', '6.8%', 70, 'moderatemoderate'],
            ['Abandonment Issues', 'Juicy or Hazy IPA', '6.8%', '★ ★ ★ ★', 'beer2', 'Juicy IPA loaded with Citra and Idaho 7 hops.'],
        ],
        rainy: [
            // ["Amber Lager", 'American Amber Lager', '5.03%', 20, 'moderatemoderate'],
            // ["1865 Amber", 'American Amber Lager', '4.8%', 32.2, 'moderatemoderate'],
            // ["Bestside Lager", 'American Amber Lager', '4.9%', 20, 'moderatemoderate'],
            
            // ['1-800-Tropics', 'American IPA', '6.9%', 50, 'moderatemoderate'],
            ['1-800-Tropics', 'American IPA', '6.9%', '★ ★ ★', 'beer2', 'NE IPA w/ Galaxy and Nelson Hops'],
            // ['(512) IPA', 'American IPA', '7%', 65, 'moderatemoderate'],
            ['(512) IPA', 'American IPA', '7%', '★ ★ ★ ★', 'beer2', '(512) India Pale Ale is a big, aggressively dry-hopped American IPA with smooth bitterness (~65 IBU) balanced by medium maltiness.'],
            // ["3rd Time's a Charm", 'Juicy or Hazy IPA', '7.2%', 40, 'moderatemoderate'],
            ["3rd Time's a Charm", 'Juicy or Hazy IPA', '7.2%', '★ ★ ★', 'beer2', 'Tropical & bright, a very enjoyable and juicy IPA.'],
            // ['Bad Axe IPA', 'English IPA', '7.6%', 76, 'moderatemoderate'],
            ['Bad Axe IPA', 'English IPA', '7.6%', '★ ★ ★ ★ ★', 'beer2', 'The original ‘pale’ ale of England, created with more hops to stabilize the beer while being exported to India (hence the name) and later adopted for domestic consumption.'],
            // ['7 Mile Point', 'English IPA', '7.7%', 77, 'moderatemoderate'],
            ['7 Mile Point', 'English IPA', '7.7%', '★ ★ ★ ★ ★', 'beer2', 'This is a standup double of an IPA. Subtle grapefruit rind in the nose followed up with piney and citrus hop flavors.'],
        ]
    },

    warm: { // Gose, Pilsner, Sour Ale, Wheat, Session IPA, Blonde IPA
        sunny: [
            // ['6th Borough Pilsner', 'American Pilsener', '3%', 35, 'wormwormwormworm'],
            ['6th Borough Pilsner', 'American Pilsener', '3%', '★ ★', 'beer1', 'The 6th borough may just be a state of mind, but we live here, and this beer was brewed here. Bright, crisp and hoppy, this beer will bring you back to the “burbs” with each sip.'],
            // ['Beach Plum Gose', 'Contemporary Gose', '4.1%', 3, 'wormwormwormworm'],
            ['Beach Plum Gose', 'Contemporary Gose', '4.1%', '★', 'beer1', 'Beach Plum Gose is our Blue Point twist on a traditional German sour ale. We brew this kettle sour with beach plums indigenous to the shores of Long Island for a unique tartness and add North Atlantic seaweed and locally cultivated sea salt for a savory finish. This Gose stays true to its style’s German roots and its brewers’ Long Island roots - so it’s a little salty yet approachable, just like us.'],
            // ['All Star Session IPA', 'Session IPA', '4.2%', 45, 'wormwormwormworm'],
            ['All Star Session IPA', 'Session IPA', '4.2%', '★ ★', 'beer2', "Characteristically over the top exhibition of hops in a beer that's imposing but sessionable in the extreme."],
            // ['3-2-1 Gose With Peaches', 'Contemporary Gose', '4.2%', 3, 'wormwormwormworm'],
            ['3-2-1 Gose With Peaches', 'Contemporary Gose', '4.2%', '★', 'beer1', 'We took our base gose style and added 100 lbs of pureed peaches from Butlers Orchard at the end of fermentation.'],
            // ['Black Lager', 'American Dark Lager', '4.5%', 31, 'wormwormwormworm'],
            ['Black Lager', 'American Dark Lager', '4.5%', '★ ★', 'beer1', 'No Description Provided'],
        ],
        cloudy: [
            // ['6th Anniversary Session IPA', 'Session IPA', '4.5%', 50, 'wormwormwormworm'],
            ['6th Anniversary Session IPA', 'Session IPA', '4.5%', '★ ★ ★', 'beer2', 'No Description Provided'],
            // ['A Little Hoppy', 'Session IPA', '4.6%', 65, 'wormwormwormworm'],
            ['A Little Hoppy', 'Session IPA', '4.6%', '★ ★ ★ ★', 'beer2', 'A sessionable beer for hopheads and commoners alike. The lemon citrusy hop profile is noticeable but pleasant, thanks to loads of whirlpool and dry hop additions.'],
            // ['Basil & Cranberry', 'Contemporary Gose', '4.7%', 12, 'wormwormwormworm'],
            ['Basil & Cranberry', 'Contemporary Gose', '4.7%', '★', 'beer1', 'We reward our adventurous kettle sour drinkers with this surprisingly satisfying combination.'],
            // ['Alluvium Pilsner', 'German Pilsener', '5%', 45, 'wormwormwormworm'],
            ['Alluvium Pilsner', 'German Pilsener', '5%', '★ ★ ★', 'beer1', 'After a full-day of brewing beer, a pilsner is the go-to beer for most on our team.'],
            // ['1872 Lager', 'American Pilsener', '5.1%', 33, 'wormwormwormworm'],
            ['1872 Lager', 'American Pilsener', '5.1%', '★ ★', 'beer1', 'Pre-Prohibition Lagers were first brewed by German immigrants during the Mid-1800s, with brewing expertise and yeast brought with them from the old country.'],
        ],
        rainy: [
            // ['Blacklist', 'American Dark Lager', '5.3%', 24, 'wormwormwormworm'],
            ['Blacklist', 'American Dark Lager', '5.3%', '★ ★', 'beer2', 'No Description Provided'],
            // ['Artisan Lager', 'American Premium Lager', '5.5%', 23, 'wormwormwormworm'],
            ['Artisan Lager', 'American Premium Lager', '5.5%', '★ ★', 'beer1', 'A vienna style lager'],
            // ['Ants on a Lager', 'Vienna Lager', '5.9%', 15, 'wormwormwormworm'],
            ['Ants on a Lager', 'Vienna Lager', '5.9%', '★', 'beer1', 'Ants on a Lager is a Vienna style Lager brewed with peanut butter, raisins, and hand-juiced celery.'],
            // ['Austrian Dreams', 'Vienna Lager', '6.1%', 23, 'wormwormwormworm'],
            ['Austrian Dreams', 'Vienna Lager', '6.1%', '★ ★', 'beer1', 'No Description Provided'],
            // ['Autumn Ale', 'Vienna Lager', '6.5%', 27, 'wormwormwormworm'],
            ['Autumn Ale', 'Vienna Lager', '6.5%', '★ ★', 'beer1', 'Brewed for early-mid. autumn consumption, Autumn Ale takes its inspiration from the venerable traditions of German Oktoberfest and Vienna Marzen style of beers.'],
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