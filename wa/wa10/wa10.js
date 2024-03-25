
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

/*2. RAW TEXT STRINGS

It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.

Willy the Goblin
Big Daddy
Father Christmas

the soup kitchen
Disneyland
the White House

spontaneously combusted
melted into a puddle on the sidewalk
turned into a slug and crawled away
*/
const storyText = 'The world was ripe with adventure and treasure so :insertx: and Pete took to the seas. They traveled across the seas until they reached :inserty:. Here they found the adventure they had seeked, then :insertx: :insertz:. Pete continued to sail across the sea, the final treasure of Pete and :insertx: weighed in at 2000 pounds (and strangely it was also noted that it was 94 fahrenheit on the day their voyage set sail).';
const insertX = ['Atlas the Pirate', 'Illvana', 'Quinn the Cowboy'];
const insertY = ['the Soros Isles', 'the Last Bastion', 'the Wastes'];
const insertZ = ['saw god and ascended', 'was reduced to ash', 'lived a life of adventure and excitement'];

// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION 


randomize.addEventListener('click', result);

function result() {

    let newStory = storyText;
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    newStory = newStory.replaceAll(':insertx:', xItem).replace(':inserty:', yItem).replace(':insertz:', zItem);

    if(customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replaceAll('Pete', name);

    }


    if(document.getElementById("uk").checked) {
        const weight = Math.round(2000/14) + ' stones ';
        const temperature =  Math.round((94 - 32)*(5/9)) + ' centigrade ';

        newStory = newStory.replace('2000 pounds', weight);
        newStory = newStory.replace('94 fahrenheit', temperature);

    }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}