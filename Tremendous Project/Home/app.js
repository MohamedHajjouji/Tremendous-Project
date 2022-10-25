function darkMode(){
    
    if( document.getElementById('darkButton').textContent == 'Dark Mode'){
        document.getElementById('darkButton').textContent = 'Light Mode';
        document.getElementById('body').style.backgroundColor = 'black';
        document.getElementById('body').style.color = 'white';
        document.getElementById('darkButton').style.backgroundColor = 'black';
        
        
    }
    else{
        document.getElementById('darkButton').textContent = 'Dark Mode';
        document.getElementById('body').style.backgroundColor = 'white';
        document.getElementById('body').style.color = 'black'
        document.getElementById('darkButton').style.backgroundColor = 'white';
    }

}


para = document.getElementById('storypa');
var firstPage ="I \n\
am well aware that my name is ridiculous. It was not ridiculous \n \
before I took this job four years ago. I’m a maid at the Regency  \n \
Grand Hotel, and my name is Molly. Molly Maid. A joke. Before I took the \n \
job, Molly was just a name, given to me by my estranged mother, who left \n \
me so long ago that I have no memory of her, just a few photos and the \n \
stories Gran has told me. Gran said my mother thought Molly was a cute \n \
name for a girl, that it conjured apple cheeks and pigtails, neither of which I \n \
have, as it turns out. I’ve got simple, dark hair that I maintain in a sharp, \n \
neat bob. I part my hair in the middle—the exact middle. I comb it flat and \n \
straight. I like things simple and neat."
let secondPage = ("I have pointed cheekbones and pale skin that people sometimes marvelat, and I don’t know why. I’m as white as the sheets that I take off and puton, take off and put on, all day long in the twenty-plus rooms that I make up for the esteemed guests at the Regency Grand, a five-star boutique hotel that prides itself on “sophisticated elegance and proper decorum for the modern age.”Never in my life did I think I’d hold such a lofty position in a grand hotel. I know others think differently, that a maid is a lowly nobody. I know we’re all supposed to aspire to become doctors and lawyers and rich realestate tycoons. But not me. I’m so thankful for my job that I pinch myself every day.")

let thirdPage = (" I really do. Especially now, without Gran. Without her, home isn’t home. It’s as though all the color has been drained from the apartment we shared. But the moment I enter the Regency Grand, the world turns Technicolor bright. As I place a hand on the shining brass railing and walk up the scarlet steps that lead to the hotel’s majestic portico, I’m Dorothy entering Oz. I push through the gleaming revolving doors and I see my true self reflected in the glass—my dark hair and pale complexion are omnipresent, but a blush returns to my cheeks, my raison d’être restored once more. Once I’m through the doors, I often pause to take in the grandeur of the lobby. It never tarnishes. It never grows drab ")

let pageCounter = 1;
function flipNext(){
    
    pageCounter++;
    document.getElementById("num").textContent = pageCounter + "/20";
    if(pageCounter == 2) {
        document.getElementById("storypa").textContent = secondPage;
    }
    else if(pageCounter == 3) {
        document.getElementById("storypa").textContent = thirdPage;
    }
    if(pageCounter == 20){
        pageCounter --;
    }
}

    





function flipPrevious(){
    
    pageCounter --;
    document.getElementById("num").textContent = pageCounter + "/20";
    if(pageCounter == 1){
        document.getElementById("storypa").textContent = firstPage;
        pageCounter > 0;
    }
    if(pageCounter == 2) {
        document.getElementById("storypa").textContent = secondPage;
    }
    if(pageCounter == 3) {
        document.getElementById("storypa").textContent = thirdPage;
    
    } 
    if(pageCounter == 1){
        pageCounter = 2;
    }


   
}
