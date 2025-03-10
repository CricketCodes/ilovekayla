function goToPage(page) {
    window.location.href = page;
}

// Timers
function getTimeDiff(date, isPast) {
    const now = new Date();

    // If the anniversary date has passed, set it to next year
    if (!isPast && date < now) {
        date.setFullYear(date.getFullYear() + 1);
    }

    let diff = isPast ? now - date : date - now;

    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    diff -= years * 1000 * 60 * 60 * 24 * 365;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

    // Check if it's the anniversary today
    if (!isPast && days === 0 && hours === 0) {
        return "ANNIVERSARY TODAY!";
    }

    let result = "";
    if (years > 0) {
        result += `${years} year${years > 1 ? 's' : ''}, `;
    }

    result += `${days} day${days > 1 ? 's' : ''}, ${hours} hour${hours > 1 ? 's' : ''}`;

    return result;
}

function updateTimers() {
    const now = new Date();
    const anniversary = new Date(now.getFullYear(), 2, 4); // March 4th
    const startDate = new Date('2024-03-02T00:00:00');

    const anniversaryTimer = document.getElementById('anniversary-timer');
    const relationshipTimer = document.getElementById('relationship-timer');

    if (anniversaryTimer) {
        anniversaryTimer.innerText = getTimeDiff(anniversary, false);
    }

    if (relationshipTimer) {
        relationshipTimer.innerText = getTimeDiff(startDate, true);
    }
}

// Run immediately and update every second
updateTimers();
setInterval(updateTimers, 1000);

const memories = [
    {
        text: "This was most definitely my favorite date I've ever been on with you. For me, it is the start of everything, the start of the great relationship that we had. Your pink sweater is an outfit that I find to be my favorite and it is soley because of this. I remember coming home from this date and thinking to myself that about how beautiful of a girl you are and how wonderful I am to have a girlfriend like you. I loved getting to know you, even if it was a bit awkward for the first time. One of the things I laugh about most for this date is the dilemma we gave the waiter when trying to pay. Whenever I think of us, I think of this first. There has not been point where I thought about the past with you and neglected this memory. This is something that I will forever remember. ",
        images: ["Year_1_Images/Date1-1.jpg", "Year_1_Images/Date1-2.jpg"]
    },
    {
        text: "I don't really remember much about this hangout we had with the rest of the friend group. However, what I do remember is walking down to Moge Tee and holding your hand the entire walk there. I remember taking all these funny photos of you and talking with you. It was a really fun day to be with you.",
        images: ["Year_1_Images/button2-1.jpg", "Year_1_Images/button2-2.jpg", "Year_1_Images/button2-3.jpg"]
    },
    {
        text: "I remember this day very well. It was a very fun presentation and it was also fun to pass the prizes out. I got to spend basically an entire school day with you which was pretty fun. I loved when you leaned your head on me, even if Ciaravino, the presenter, and stinky Mr. Brown didn't.",
        images: ["Year_1_Images/button3-1.jpg", "Year_1_Images/button3-2.jpg", "Year_1_Images/button3-3.jpg", "Year_1_Images/button3-4.jpg"]
    },
    {
        text: "This was my first birthday I ever celebrated with you. Going to be honest, almost all of my birthdays before were kind of boring since there was a likely chance my parents were arguing the day of. I will never forget your playlist that you gave to me the day before to help me calm down from my parent's arguing. AND TODAY WAS THE DAY YOU KISSED MEEEE!!!! I was so excited inside that I literally could not react to what was happening. Like literally the prettiest girl in the world just kissed me. I DID NOT KNOW WHAT TO DOOOOOOO... I hated seeing you leave, but I knew that meant I got to open your gifts. And to say the least, I was stunned. I LOVE THE LEGO plane you got me, I felt like a kid building it. I had to resist the urge to build it before opening the other gifts. I still have it starting at me on my desk to this day and I enjoy walking past it every time.",
        images: ["Year_1_Images/button4-1.jpg", "Year_1_Images/button4-2.jpg", "Year_1_Images/button4-3.jpg"]
    },
    {
        text: "This was the very first time I ever went to six flags. I was so excited that I got to experience this new first with you. I remember the long bus ride there and our conversations and funny filtered photos we took on both the way back and to the park. I remember getting rained on and having to hide in the bathrooms (in separate ones lol). We didn't go on much rides but the ones we did were very fun like thet twisty elephant one and the bumper karts. It was very fun getting to spend the entire day with you outside of school.",
        images: ["Year_1_Images/button5-1.jpg", "Year_1_Images/button5-2.jpg", "Year_1_Images/button5-3.jpg"]
    },
    {
        text: "This date was our first ever movie together. I loved watching Garfield, it was something that a pretty big part of my childhood and I'm happy I got to share it with you. You already know physical affection is my type of thing, so every time you leaned your head on me or hugged me really made my day and melted by heart. But most importantly, I got to spend such a long time with you. I wish it lasted longer though, I would've loved to just be in your company for the rest of the day. I'm also happy I got to give you a chance to taste the best restaurant ever, Chick-Fil-A. It was literally unbelieavble to me that you've never had it before. I can't wait until we get to watch anohter movie together!",
        images: ["Year_1_Images/button6-1.jpg", "Year_1_Images/button6-2.jpg", "Year_1_Images/button6-3.jpg", "Year_1_Images/button6-4.jpg"]
    },
    {
        text: "This was the first time I've ever been to Keyport and explored, even despite the close proximity of it. I'm so excited that I got to explore the town with you. I don't have much photos of this time, but I remember walking and taking photos. You were so hesistant to take this one loll but you were not hesistant to take the photos of me. But but you are a meanie butt head and never sent them to me! But anyway, I think the image slideshow looks so much better with images of you. You were so pretty on this day. Our waks up and down the boardwlk as we held hands, enjoyued eachothers presence, or simply had conversatiosn are something that I still think about a lot. I don't think I've ever driven past Keyport and not thought of you. That zesty photo of me with the ice cream is something that does haunt me though. I think you should delete it!!",
        images: ["Year_1_Images/7-1.jpg", "Year_1_Images/7-2.jpg"]
    },
    {
        text: "Second time at Keyport, but this time I had a horrendous haircut. I actually don't know if I had a bad haircut the last time, but I don't have any photos to check sooooo. But anyway, I remember how hesistant you weree to take the first photo, even though I thought you were absolutely pretty in that. Theres something about you in pink that just sets everything off in my head. I think it is one of the best colors that you could wear. Anyway, I remember you hating on my chicken tenders while you got your pasta, which I found pretty funny. I honestly don't think I've ever seen you in shorts until that date so that was something new. My favorite part of Keyport honestly is being in a public place that feels so private. There is a lot of activity around us, but when we want we can sink into our own world and just enjoy each other's presence. I loved doing this up and down the boardwalk or even walking into the restaurants. Which by the way I remember picking a restaurant was pretty hard because both of us were quite indecisive!! This was also the birth of that horrendous photo with that sign, which I think you should delete!!!!",
        images: ["Year_1_Images/button7-1.jpg", "Year_1_Images/button7-2.jpg"]
    },
    {
        text: "This was probably the longest time we've ever been together in one day. Regardless of the fact I got yelled at, I was honored to celebrate your birthday. Much like the Garfield movie, I loved every time you leaned your head on me or hugged me while watching the movies. Going to MJs was very nice, you really picked a great restaurant with a pretty view. Howveer, that view was never as pretty as you were. YOU WERE ABSOLUTELY STUNNING THAT DAY. I mean you always are, but still, that day you were extra extra stunningggggg. My favorite part of that day however was most definitely the beach. It was so crowded, but we also had the ability to sink into our own worlds. I remember being on a towel and staring into each other. It's the tiny, intimate moments like these that I love thinking about most. I get to admire not only beautiful woman you are, but the characteristics you uniquely hold that make you such a wonderful person. I wish we got to see the fireworks, I don't really know what was happening with that, but it would've been cool. ",
        images: ["Year_1_Images/button9-1.jpg", "Year_1_Images/button9-2.jpg", "Year_1_Images/button9-3.jpg", "Year_1_Images/button9-4.jpg"]
    },
    {
        text: "Despite not seeing the fireworks on your birthday, we got to see a ton today! I was so happy to have you over, especially since it was the first time you've ever been to my house. You got to meet my grandparents, who didn't really know what you looked like. I vividly remember after you left my grandmother telling me that my girlfriend was very beautiful. My grandfater fell asleep as usual though. I remember the sparklers you brought out, which my mom would've definitely yelled at me for if it wasn't to my dad. In general, I wasn't sure if this meet up was going to happen because of the events from your birthday, but I'm really happy it did. I hope that we get to do the same for this Independence Day. ",
        images: ["Year_1_Images/button10-1.jpg", "Year_1_Images/button10-2.jpg"]
    },
    {
        text: "This was our first time I ever went to the mall with you and without my family. And I'm going to be honest, I enjoy going with you to the mall so much more. Following you around and seeing you search and give you opinons about each clothing items was so funny and so cute to watch. I learned a lot about your fashion sense (even if I don't really understand it still). I enjoyed teasing you about random clothing items that you should've tried on. I enjoyed getting matching mango boba tea and also being able to sit down and eat Chick-Fil-A with you. It seems pretty basic, but I love eating with you. I get the chance to sit across from you and admire the woman I love. It's also one of the many reasons I loved our photo op on those chairs. I got to step aside from the shopping and truly admire the person you are.",
        images: ["Year_1_Images/button11-1.jpg", "Year_1_Images/button11-2.jpg", "Year_1_Images/button11-3.jpg"]
    },
    {
        text: "This was originally supposed to be a date to Keansburg, but I'm so happy we went here instead. I remember it being a very hot day so hence that photo with you and the water bottle, which I find very cute. But most importantly, you got me out of my comfort zone and got me to go on that spinny glider ride. I was honestly really sacred, even if I didn't want to admit it. But I'm so glad I went on it with you, it honestly was not really that bad. I loved feeling the G-Forces act on me and also being by your side. The way you laughed and checked in on me to make sure I was doing alright was so cute, and I could never forget that face. You also made me not get Chick-Fil-A which was also good because I got some very good pizza instead!! OH and I remember that one lady asking if you were my girlfriend and saying that I should try to win you something, quickly followed by her son letting out remarks of disapproval to her. Looking back, I probably should've taken her up on the offer. One thing I did feel bad about was getting kicked out of the ride because I was leaning on the fence. However, I am happy that we were able to go on it at least once. My favorite part though was our moments where we'd be on the ferris wheel. I remember that time you gave a girl a lollipop and honestly it was so kind, it became attractive. I've always loved your kindess towards others and this was just another display of that.",
        images: ["Year_1_Images/button12-1.jpg", "Year_1_Images/button12-2.jpg"]
    },
    {
        text: "This was a very impromptu hangout, but I'm glad we did it. I originally wasn't supposed to go anywhere but you were having a rough day so I tried every effort to bargin with my mother. I enjoyed going around and picking apples with you. O hope that I made you feel a lot better. I wish that it could've lasted longer, but unfortunately I had to go to my hospital volunteering call :(",
        images: ["Year_1_Images/button13-1.jpg", "Year_1_Images/button13-2.jpg"]
    },
    {
        text: "This is one of the photos I find really weird to look at if I'm being hoenst. So much is happening here. My lips are so pink, I have a bow around my neck, and my hair is still really really short. However, it was definitely one of my favorite dates we've went on. Celebrating this milestone gave me hope that we'd make it far in our relationship. I remember thinking to myself that these 6 months have been the happiest I've ever felt, and it was all due to you. I loved walking down to Starbucks as it meant that I got to have your hand in mine as we walked down the streets my mother though I'd die on. I'm so happy you decided to build the lego flowers together, it was just so significant and changed the way I view LEGO forever. I can never think of a set without thinking about this day. ALSO I wanted to kiss you so badly, you were so kissable that day but I chickend out, which I really wish I didn't. When I opened all your gifts I was so stunned. All of those are still integrated into my daily life today, and from that point almost everything I could do in a day has some remnant or reference to you. It really was a monumental day in our relationship.",
        images: ["Year_1_Images/button14-1.jpg"]
    },
    {
        text: "Another one of our trips to Keyport that showed me so much more about the town. I never knew what that pub looked like, but everytime I pass by it I think of you. One of the things I remember is sitting on that pier that they had there. I would never have been able to do that with my mother present, I actually don't even know if she knows we were there. But regardless, I loved sitting there and admiring the sunset. The lighting was so good and it allowed for some nice photos. My hair was still horrendously short through, but you looked absolutely stunning. I deeply regret leaving your a moment, I should've stayed with you the entire time. However, I'm glad that we were able to squeeze just a bit more time together. Talking on the pier and going through all your vacations was so fun to listen to. The way you talk and tell stories just makes me feel so warm and you are so cute doing it. I really hope you never stop telling me stories like that. The food we had at that pub was quite questionable (the goat cheese made the bathroom my new room) but I just really enjoyed being able to eat with you.",
        images: ["Year_1_Images/button15-1.jpg", "Year_1_Images/button15-2.jpg"]
    },
    {
        text: "We've been to the library so many times, however this photo was something that caught me off guard. There was something about this photo that set it apart from the other one's we've taken together. I think we went here to study for the SAT and do the summer work, so I'm really grateful for the paper you provided when I was lacking it. Come to think of it, library dates are some of the dates that I cherish the most. It is fun and comforting to have your company while studying, it makes me so much more productive. I also enjoy the moments we are done studying and have thetime to mess around. I love having the memory of this on my phone so I can think back to this every time I open it up.",
        images: ["Year_1_Images/button16-1.jpg", "Year_1_Images/button16-2.jpg"]
    },
    {
        text: "This was probably the farthest we've ever been on a date, but it was definitely one of my favorites. We did so much from the minigames to the minigolf and it was so fun seeing you do all of them. I still have that engraved penny that we made, and I still take it out to look at it sometimes. However, I met my #1 enemy, Elmer. He's literally going to steal you one day. He already lives in your room, which is something I can't do ugh. One of my favorite memories from this is the way you wrapped around my arm and walked. It was so warming inside to be hugged by you like that. This was also the first time I went on a zipline and I'm so excited I got to do it. As I recount through these memories, I realize how much you've gotten me to try and how much you've pushed me out of my comfort zone. I'm so happy and grateful that you've done that. You've allowed me to experience life like I never had before.",
        images: ["Year_1_Images/17-1.jpg", "Year_1_Images/17-2.jpg"]
    },
    {
        text: "This date was also kind of a weird one. We had a bit of a disagreement the day before after you went out with the rest of the friend group and overheard some things. But that aside, I felt like this was a very nice way to recoup the joys of our relationship. This photo also sticks out to me, the way you were posing is so cute. I loved seeing your competitiveness and the way you'd make fun of me sometimes. I did plan this very badly and it ended up being a short date which I am regretful for, however I'm happy that we got to hang out regardless.",
        images: ["Year_1_Images/18-1.jpg", "Year_1_Images/18-2.jpg"]
    },
    {
        text: "This was the first Halloween where I went Trick-or-Treating after a long while of not doing so. I enjoyed having basically the entire day with you as we went to the farms (which sadly a lot of the rides were closed), your house, and then trick-or-treating. Creating that pumpkin was something that was really fun. I haven't done that in a while and everytime I see it at your house it just makes me so happy inside. When I saw you in both versions of your costume, you were absolutely stunning. You were drop dead gorgeous and it hit me like a train how pretty you were. Like the other times where I was able to just walk around with yu, I really really loved this moment and exploring a town that I've never really been to. There was also funny moments like you hitting my butt with your basket which was pretty funny. This is definetly up there on my list of favorite dates.",
        images: ["Year_1_Images/19-1.jpg", "Year_1_Images/19-2.jpg", "Year_1_Images/19-3.jpg"]
    },
    {
        text: "Another one of our Keyport dates but this one stood out. I got to finally taste your favorite item at Panera. I must say that you do have good food choice, even if you dislike the world of seafood. This date was so enjoyable because we got to build legos that we'd each take home individually. The BMW car that we built still stares at me every morning on the TV stand when I wake up and its something that I take some time to admire before getting up. I wish it wasn't as windy but it made for some funny moments and times where we'd have to search for pieces.",
        images: ["Year_1_Images/20-1.jpg", "Year_1_Images/20-2.jpg"]
    },
    {
        text: "This was also an out of the ordinary library date. We spent a lot of the time walking around the town which was pretty cool, I love walking around places with you. I remember us going out to eat and then walking in the wrong direction, which was totally my fault. You were really cold lol so I[m sorry that I made you stand in the cold for very long. One good thing though is you came out with a donut!! As we walked down to the pizza place for some warmth we'd take some really cute photos. There is honestly just something about the way you pose that I find really cute. As we got to the pizza place, we found out your donut was a bit burnt but the rest of it didn't taste too bad. On the way bacl, it was much more colder so I gave you my jacket and then I was cold but I didn't want to admit it. The funniest thing I remember from this was me trying to pick you up. As I was coming home I immediately thought that my hands were in a bad place so I went to apologize. You weren't very clear so to this day I don't know if they were!!",
        images: ["Year_1_Images/21-1.jpg", "Year_1_Images/21-2.jpg", "Year_1_Images/21-3.jpg"]
    },
    {
        text: "This was definitely the highlight of my year. There was just so much happiness, joy, and excitement and I could feel it in all our texts and interactions. You looked so pretty during all the photos you send me and some of my favorites come from this time as well. Secret Santa was definitely a highlight of my holiday season. When I found out you were my secret santa I was absolutely flabbergasted. THE AIRPLANE BOOK IS PROBABLY ONE OF THE GREATEST GIFTS I'VE EVER RECIEVED IN MY ENTIRE LIFE. I STILL READ THROUGH IT TO THIS DAY. I loved the moments where we were able to be close to each other on the couch or in other places. I remember you trying on your navy sweater and thinking to myself how pretty you were and how I'm so lucky to have you.",
        images: ["Year_1_Images/22-1.jpg", "Year_1_Images/22-2.jpg", "Year_1_Images/22-3.jpg"]
    },
    {
        text: "This was another one of my personal favorite dates. Science is something that I'm very passionate about and I was so happy to explore that a bit more with you. I remember going through all the exhibits from the train one to the fish one and seeing all the details and creatures. Your digital camera made every moment much more exciting as I knew the memories we made would be forever stored in it. I really enjoyed walking around and seeing all these new attractions. However, what I enjoyed most of all is when you allowed me to be a nerd and explain things that I probably explained in a very bad way. One the funniest things from this was when we both went into that tornado simulator. It was fun seeing you react to winds that had speeds around 70 MPH. Another funny thing was that very smug worker who gave you the food. Something just seemed really off about him. That planet show was so pretty, however I sat there thinking that my universe is sitting right next to me and is 1000000000000000000000000000000x prettier than anything on screen. I really really enjoyed this day with you and I think we should definitely do more science related dates!!",
        images: ["Year_1_Images/25-1.jpg", "Year_1_Images/25-2.jpg", "Year_1_Images/25-3.jpg", "Year_1_Images/25-4.jpg", "Year_1_Images/25-5.jpg", "Year_1_Images/25-6.jpg"]
    },
    {
        text: "This was also a nice birthday celebration where I got to spend a lot of time with you. I remember watching the movie and being in your company, which I've said million times over that I really really enjoy it. However, I really enjoyed those car moments the most. It felt like everyone else didn't exist and that it was just you and me in that car. It is definitely one of the videos that I look at over and over again when I'm sad or I miss you. One of the most memorable things though was the scurry to find your black jacket which we didn't find in the end. You were so worried and I wish I could've comforted you a bit more. But overall, aside from the birthday celebrations, this was a very nice way to spend a lot of time with you.",
        images: ["Year_1_Images/24-1.jpg", "Year_1_Images/24-2.jpg", "Year_1_Images/24-3.jpg", "Year_1_Images/24-4.jpg", "Year_1_Images/24-5.jpg"]
    },
    {
        text: "Danny's birthday honestly is really all a blur to me. Most of it was consumed with fear of getting yelled at by my mother. I did really enjoy hanigng out with you in his room and stuff while messing around with the other friends. I remember separating from the group to go into ROSS to shop for clothing which was pretty fun. There's just something about the way you shop for clothing that is really fun to watch. My favorite memory from this though remains the drawings and words you gave to me when I was scared shitless that I was going to get killed when I reached home. This only solidified how much you cared for me. I go back to that drawing every so often to remember that I have people in life that care for me and that my mother most likely won't kill me.",
        images: ["Year_1_Images/23-1.jpg", "Year_1_Images/23-2.jpg", "Year_1_Images/23-3.jpg.jpg"]
    },
    {
        text: "This was a pretty standard library visit, however I remember distinctly filming a video here. What I found really cute about this time was the way you bit my finger. It caught me so off guard but damn it really made me feel warm inside. Its defintely one of the cutest things you still do today which is really really funny. This video holds a special place in my heart and I watch it so often.",
        images: ["Year_1_Images/26-1.jpg", "Year_1_Images/26-2.jpg"]
    },
    {
        text: "H-MART is such a crowded and eventful place. I never knew what it was until you took me to it and I'm so grateful that you did. The drive there was very fun when I was interacting with you and you parents. I will never forget the food I got there which was interesting to say the least. I was so concerned that I got squid when I got mushrooms instead. I found it really funny that I was called a picky eater by your mother, although I can't really disagree with her. I've just never had that type of food in my life before. I loved taking the photos in the booth so much. I literally stare at them all day whenever I get the chance since it is in the back of my phone. It is just another token of our relationship that I will always hold close to me. I also felt really bad about that fake smiski so I decided to get you a new one and those naked boy stickers. I hope you enjoy them (although I still think the naked boy stickers are weird for modelling the parts!!).",
        images: ["Year_1_Images/27-1.jpg", "Year_1_Images/27-2.jpg", "Year_1_Images/27-3.jpg"]
    },
    {
        text: "This mall date was also something that stood out a lot. We spent most of our time painting plates at Color Me Mine. This was something that you've wanted to do forever so I'm happy that we finally got the chance to do it. Seeing you paint was so fun because you have this specific face when your very focused on something. Your lips get narrower and wider as you pull them in and your face gets more concentrated. It's honestly really cute. However, what I love most about this date is that I can now use a plate daily and be reminded of the joys in our relationship. I really love my Elmer plate (even though I'm stil jealous of him) and eating the smores on them when Valentine's day came was really warming to me.",
        images: ["Year_1_Images/28-1.jpg", "Year_1_Images/28-2.jpg", "Year_1_Images/28-3.jpg"]
    },
    {
        text: "This is also up there on my list of favorite dates. I basically got to spend the entire day with you. When we first left school I got to hang out at your house. I remember the shock on your face when you actually saw the flowers and the way we took a million photos with them. I still love looking through these photos today. Then we hugged a bit your bed. I really enjoy when we do that beacuse I get to deeply admire the girl I love, which is one of my favorite activites. You have so much qualities to admire such as your dedication, your intelligence, your comforting skills, your ability to love, and your draw-droppping looks. The drive to the restaurant with your dad was also fun as we got to take a ton of cute photos. THAT ONE PHOTO WITH THE GLASSES AND THE TAPE is forever etched into my mind. There is just something about that photo that I cannot pinpoint. These photos continued into dinner time and it was such a highlight of the day. I genuinely love going through these photos so much. When I opened my gift at your house I was stunned. The moving card you made me is something I use oftently whenever I miss you. I loved the way the s'mores tasted and the care you put into making those candy flowers. I still have the flower sticks and bear in my room to be remninded of such an important milestone where we both felt so happy.",
        images: ["Year_1_Images/29-1.jpg", "Year_1_Images/29-2.jpg", "Year_1_Images/29-3.jpg", "Year_1_Images/29-4.jpg", "Year_1_Images/29-5.jpg", "Year_1_Images/29-6.jpg", "Year_1_Images/29-7.jpg", "Year_1_Images/29-8.jpg"]
    },
    {
        text: "This anniversary has been such a rollercoaster of emotions. There was so much new information dropping that I felt like my entire world was collapsing. However, as we talked through text and worked it out, I got more relieved each time. I honestly don't think we could've had a better one year. From the moment I went to your room I could feel all my worry vanish away. The only thing that mattered was that I was with you. We showed each other our gifts and I was so stunned with what you made me. I fully did not expect anything because of the timeframe you told me you lost feelings, but I'm so happy that I got something. There is nothing more priceless than a gift that recounts all our greatest memories. I walked by that picture frame so many times today and each time I paused and admired how far we came. I've scrolled through the memory book time and time again as well as the photos we took on that day and I could not believe how much you've changed. You genuinely have become so much prettier, but you've also changed a lot as a person. Over the past year I've gotten to see you become a bit more confident in your academic abilities, drink a ton more water, and take on challenges that you thought you couldn't handle. I am forever proud of you and I love you so so much. Going to dinner was like being hit by a nostalgia train. The minute I walked in the door all the memories of the first date hit me so hard. It felt like a reset to our relationship and I think it played a large role in helping us get through that conflict we had. When we went back to your house, YOU GAVE ME THE CUTEST HUG EVER. The way you ran to give me a hug immediately after closing the door was probably the cutest thing I've ever seen you do. I love the moments where it was just you and me and we were able to spend all that time in each other's arms. I came home from that date being free from all my worries. I'm so grateful for this past year with you and I really look forward to the next one.",
        images: ["Year_1_Images/30-1.jpg", "Year_1_Images/30-2.jpg"]
    }
];

let currentSlide = 0;

function openModal(index) {
    const modal = document.getElementById("memory-modal");
    const memoryText = document.getElementById("memory-text");
    const slidesContainer = document.querySelector(".carousel");

    slidesContainer.innerHTML = '';

    memoryText.innerText = memories[index].text;

    memories[index].images.forEach((imageSrc) => {
        const img = document.createElement("img");
        img.src = imageSrc;
        img.className = "slide";
        slidesContainer.appendChild(img);
    });

    slidesContainer.innerHTML += `
        <button class="prev" onclick="prevSlide()">&#10094;</button>
        <button class="next" onclick="nextSlide()">&#10095;</button>
    `;

    currentSlide = 0;
    showSlide(currentSlide);
    modal.style.display = "block";
}

function closeModal() {
    document.getElementById("memory-modal").style.display = "none";
}

function showSlide(index) {
    const slides = document.querySelectorAll(".slide");
    if (index >= slides.length) currentSlide = 0;
    if (index < 0) currentSlide = slides.length - 1;

    slides.forEach((slide, i) => {
        slide.style.display = i === currentSlide ? "block" : "none";
    });
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide--;
    showSlide(currentSlide);
}