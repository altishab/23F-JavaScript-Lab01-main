// VARIABLE DECLARATIONS

/* STEP 1: */
var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

/* STEP 3: */
var storyText = 'It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.'

/* STEP 4: */
var insertX = ['Donald Trunp', 'Jackie Chan', 'Santa Claus'];
var insertY = ['Area 51', 'Death Valley', 'Aruba'];
var insertZ = ['spontaneously combusted', 'rapidly sublimated', 'evaporated instantly'];

// FUNCTIONS

/* STEP 2: have a look at the following function - if you call this function and pass it an array, it will return one of the elements of that array randomly */
function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

/* STEP 6: Review the partially complete result() function below */
function result() {
    /* STEP 7: */
    var newStory = storyText;
    /* STEP 8: */
    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);

    /* STEP 9: */
    newStory = newStory.replace(':insertx:', xItem);
    newStory = newStory.replace(':inserty:', yItem);
    newStory = newStory.replace(':insertz:', zItem);
    newStory = newStory.replace(':insertx:', xItem);

    /* STEP 10: */
    if(customName.value !== '') {
        newStory = newStory.replace('Bob', customName.value);
    }
    /* STEP 11: */
    if (document.getElementById("metric").checked) {
        /* STEP 11a: */
        var weight = Math.round(300 * 0.453592) + 'kg';
        /* STEP 11b: */
        newStory = newStory.replace('300 pounds', weight);
        /* STEP 12a */
        var temperature = Math.round((94 - 32) * (5/9)) + 'celsius';
        /* STEP 12b: */
        newStory = newStory.replace('94 fahrenheit', temperature);
    }
    /* STEP 13: */
    story.textContent = newStory;
    /* The following line makes the paragraph visible */
    story.style.visibility = "visible";
}

// EVENT LISTENERS
/* STEP 5: */
randomize.addEventListener("click", result);
// This lab based on the excellent assessment challenge at https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Silly_story_generator
