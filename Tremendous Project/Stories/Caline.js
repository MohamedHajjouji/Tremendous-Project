function darkMode() {
    if (document.getElementById('darkButton').textContent == 'Dark Mode') {
        document.getElementById('darkButton').textContent = 'Light Mode';
        document.getElementById('body').style.backgroundColor = 'black';
        document.getElementById('body').style.color = 'white';
        document.getElementById('darkButton').style.backgroundColor = 'black';
        document.getElementById('storypa').style.opacity = 0.8;
       
    } else {
        document.getElementById('darkButton').textContent = 'Dark Mode';
        document.getElementById('body').style.backgroundColor = 'white';
        document.getElementById('body').style.color = 'black';
        document.getElementById('darkButton').style.backgroundColor = 'white';
        document.getElementById('storypa').style.opacity = 1;
    }
}

const elNum = document.getElementById('num');
const elStorypa = document.getElementById('storypa');

const pages = [
    `THE sun was just far enough in the west to send inviting shadows. In the centre of a small field, and in the shade of a haystack which was there, a girl lay sleeping. She had slept long and soundly, when something awoke her as suddenly as if it had been a blow. She opened her eyes and stared a moment up in the cloudless sky. She yawned and stretched her long brown legs and arms, lazily. Then she arose, never minding the bits of straw that clung to her black hair, to her red bodice, and the blue cotonade skirt that did not reach her naked ankles. The log cabin in which she dwelt with her parents was just outside the enclosure in which she had been sleeping. Beyond was a small clearing that did duty as a cotton field. All else was `,
    `dense wood, except the long stretch that curved round the brow of the hill, and in which glittered the steel rails of the Texas and Pacific road. When Caline emerged from the shadow she saw a long train of passenger coaches standing in view, where they must have stopped abruptly. It was that sudden stopping which had awakened her; for such a thing had not happened before within her recollection, and she looked stupid, at first, with astonishment. There seemed to be something wrong with the engine; and some of the passengers who dismounted went forward to investigate the trouble. Others came strolling along in the direction of the cabin, where Caline stood under an old gnarled mulberry tree, staring. Her father had halted his mule`,
    `at the end of the cotton row, and stood staring also, leaning upon his plow. There were ladies in the party. They walked awkwardly in their high-heeled boots over the rough, uneven ground, and held up their skirts mincingly. They twirled parasols over their shoulders, and laughed immoderately at the funny things which their masculine companions were saying. They tried to talk to Caline, but could not understand the French patois with which she answered them. One of the men - a pleasant-faced youngster - drew a sketch book from his pocket and began to make a picture of the girl. She stayed motionless, her hands behind her, and her wide eyes fixed earnestly upon him. Before he had finished there was a summons from the train; and all`,
    ` went scampering hurriedly away. The engine screeched, it sent a few lazy puffs into the still air, and in another moment or two had vanished, bearing its human cargo with it. Caline could not feel the same after that. She looked with new and strange interest upon the trains of cars that passed so swiftly back and forth across her vision, each day; and wondered whence these people came, and whither they were going. Her mother and father could not tell her, except to say that they came from "loin là bas," and were going "Djieu sait é où." One day she walked miles down the track to talk with the old flagman, who stayed down there by the big water tank. Yes, he knew. Those people came from the great cities in the north, and were going`,
    `o the city in the south. He knew all about the city; it was a grand place. He had lived there once. His sister lived there now; and she would be glad enough to have so fine a girl as Caline to help her cook and scrub, and tend the babies. And he thought Caline might earn as much as five dollars a month, in the city. So she went; in a new cotonade, and her Sunday shoes; with a sacredly guarded scrawl that the flagman sent to his sister. The woman lived in a tiny, stuccoed house, with green blinds, and three wooden steps leading down to the banquette. There seemed to be hundreds like it along the street. Over the house tops loomed the tall masts of ships, and the hum of the French market could be heard on a still morning. Caline`,
    `was at first bewildered. She had to readjust all her preconceptions to fit the reality of it. The flagman's sister was a kind and gentle task-mistress. At the end of a week or two she wanted to know how the girl liked it all. Caline liked it very well, for it was pleasant, on Sunday afternoons, to stroll with the children under the great, solemn sugar sheds; or to sit upon the compressed cotton bales, watching the stately steamers, the graceful boats, and noisy little tugs that plied the waters of the Mississippi. And it filled her with agreeable excitement to go to the French market, where the handsome Gascon butchers were eager to present their compliments and little Sunday bouquets to the pretty Acadian girl; and to throw`,
    `fistfuls of lagniappe into her basket. When the woman asked her again after another week if she were still pleased, she was not so sure. And again when she questioned Caline the girl turned away, and went to sit behind the big, yellow cistern, to cry unobserved. For she knew now that it was not the great city and its crowds of people she had so eagerly sought; but the pleasant-faced boy, who had made her picture that day under the mulberry tree.`
];

let pageCounter = 0;

function flipNext() {
    if (pageCounter < pages.length - 1) {
        pageCounter++;
        elNum.textContent = `${pageCounter + 1}/${pages.length}`; // add 1 to show page number starting at 1 instead of 0

        const currentPage = pages[pageCounter];
        elStorypa.textContent = currentPage;
    }

    // if (pageCounter == 2) {
    //     document.getElementById('storypa').textContent = secondPage;
    // } else if (pageCounter == 3) {
    //     document.getElementById('storypa').textContent = thirdPage;
    // } else if (pageCounter == 4) {
    //     document.getElementById('storypa').textContent = forthPage;
    // } else if (pageCounter == 5) {
    //     document.getElementById('storypa').textContent = fifthPage;
    // } else if (pageCounter == 6) {
    //     document.getElementById('storypa').textContent = sixthPage;
    // } else if (pageCounter == 7) {
    //     document.getElementById('storypa').textContent = seventhPage;
    // } else if (pageCounter == 8) {
    //     document.getElementById('storypa').textContent = _8thPage;
    // } else if (pageCounter == 9) {
    //     document.getElementById('storypa').textContent = _9thPage;
    // } else if (pageCounter == 10) {
    //     document.getElementById('storypa').textContent = _10thPage;
    // } else if (pageCounter == 11) {
    //     document.getElementById('storypa').textContent = _11thPage;
    // } else if (pageCounter == 12) {
    //     document.getElementById('storypa').textContent = _12thPage;
    // } else if (pageCounter == 13) {
    //     document.getElementById('storypa').textContent = _13thPage;
    // } else if (pageCounter == 14) {
    //     document.getElementById('storypa').textContent = _14thPage;
    // }
}

function flipPrevious() {
    if (pageCounter > 0) {
        pageCounter--;
        elNum.textContent = `${pageCounter + 1}/${pages.length}`; // add 1 to show page number starting at 1 instead of 0

        const currentPage = pages[pageCounter];
        elStorypa.textContent = currentPage;
    }

    // if (pageCounter == 2) {
    //     document.getElementById('storypa').textContent = secondPage;
    // } else if (pageCounter == 3) {
    //     document.getElementById('storypa').textContent = thirdPage;
    // } else if (pageCounter == 4) {
    //     pageCounter--;
    //     document.getElementById('storypa').textContent = forthPage;
    // } else if (pageCounter == 5) {
    //     document.getElementById('storypa').textContent = fifthPage;
    // } else if (pageCounter == 6) {
    //     document.getElementById('storypa').textContent = sixthPage;
    // } else if (pageCounter == 7) {
    //     document.getElementById('storypa').textContent = seventhPage;
    // } else if (pageCounter == 8) {
    //     document.getElementById('storypa').textContent = _8thPage;
    // } else if (pageCounter == 9) {
    //     document.getElementById('storypa').textContent = _9thPage;
    // } else if (pageCounter == 10) {
    //     document.getElementById('storypa').textContent = _10thPage;
    // } else if (pageCounter == 11) {
    //     document.getElementById('storypa').textContent = _11thPage;
    // } else if (pageCounter == 12) {
    //     document.getElementById('storypa').textContent = _12thPage;
    // } else if (pageCounter == 13) {
    //     document.getElementById('storypa').textContent = _13thPage;
    // } else if (pageCounter == 14) {
    //     document.getElementById('storypa').textContent = _14thPage;
    // }
}

elNum.textContent = `1/${pages.length}`;
elStorypa.textContent = pages[0];
