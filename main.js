// 1. creating js file (done)
// 2. make color lightblue for all the h2 tagged elements.

const allHeadngTwo = document.getElementsByTagName('h2');

for (const headingTwo of allHeadngTwo) {
    headingTwo.style.color = 'lightblue';
}

// 3. make background color tomato of the backpack part.

const backpackId = document.getElementById('backpack');
backpackId.classList.remove('bg-success');
backpackId.style.backgroundColor = 'tomato';

// 4. make all the cards border radius 30px (as 'card' is a bootstraps built-in class, so class name is given 'card-demo')

const cardDemo = document.getElementsByClassName('card-demo');

for (const card of cardDemo) {
    card.classList.remove('rounded-3');
    card.style.borderRadius = '30px';
}

// 5. make a function that returns console.log('something') and add it to any button

function clickMe() {
    console.log('you just clicked the submit button');
}

// 6. make the button in card got clicked hidden 

const allButton = document.querySelectorAll('.card-demo button');
for (const button of allButton) {
    button.addEventListener('click', function (event) {
        // event.target.parentNode.removeChild(event.target); // this doesn't look good
        event.target.style.visibility = 'hidden';
    });
}

// 7. make submit button disabled unless there is 'email' in input field

const inputEmail = document.getElementById('input-email');
const submitButton = document.getElementById('submit-button');

inputEmail.addEventListener('keyup', function () {

    if (inputEmail.value === 'email') {
        submitButton.removeAttribute('disabled');
    }
    else {
        submitButton.setAttribute('disabled', true);
    }
})

// 8. change the image when mouse is entered

const allImages = document.querySelectorAll('.card-demo img');

for (const image of allImages) {
    let mainSrc;
    image.addEventListener('mouseenter', function (event) {
        mainSrc = event.target.src;
        if (mainSrc.includes('bags')) {
            if (event.target.src.includes('images/bags/bag-1.png')) {
                event.target.src = 'images/bags/bag-2.png';
            }
            else if (event.target.src.includes('images/bags/bag-2.png')) {
                event.target.src = 'images/bags/bag-3.png';
            }
            else if (event.target.src.includes('images/bags/bag-3.png')) {
                event.target.src = 'images/bags/bag-1.png';
            };
        }
        else if (mainSrc.includes('shoes')) {
            if (event.target.src.includes('images/shoes/shoe-1.png')) {
                event.target.src = 'images/shoes/shoe-2.png';
            }
            else if (event.target.src.includes('images/shoes/shoe-2.png')) {
                event.target.src = 'images/shoes/shoe-3.png';
            }
            else if (event.target.src.includes('images/shoes/shoe-3.png')) {
                event.target.src = 'images/shoes/shoe-1.png';
            };
        }
    });
    image.addEventListener('mouseleave', function (event) {
        event.target.src = mainSrc;
    });
}

// 9. change color when double clicked in the empty space of 'let's stay in touch part'

const subscription = document.getElementById('subscription');
const propagation = document.getElementById('propagate');
const propagates = propagation.childNodes /*childNodes/children*/;
let mainColor = true;

for (const propagate of propagates) {
    propagate.addEventListener('dblclick', function (event) {
        event.stopPropagation();
    });
}

subscription.addEventListener('dblclick', function () {
    if(mainColor){
        subscription.style.backgroundColor = '#DCEAE8';
        mainColor = false;
    }
    else {
        subscription.style.backgroundColor = '#FCEAE8';
        mainColor = true;
    }
})