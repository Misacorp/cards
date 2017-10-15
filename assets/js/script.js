const stack = [];
const opened = [];

$(document).on('click', '.card--active', (e) => {
  let closest = $(e.target).closest('.card--active');
  $(closest).removeClass('card--active');
  $(closest).addClass('card--inactive');
});

$(document).on('click', '.card--inactive', (e) => {
  let closest = $(e.target).closest('.card--inactive');
  $(closest).removeClass('card--inactive');
  $(closest).addClass('card--active');
});



$(document).ready(() => {
  // Populate card stack with random cards.
  populateCardStack(3);
});



$(document).on('click', '.card-back', (e) => {
  // Draw a card
  let draw = drawCard(stack);
  console.log(draw);
  // Create DOM element from card
  createCard(draw.card);

  // Remove 'draw' element if stack is empty
  if(draw.remaining < 1) {
    let trigger = $(e.target).closest('.card-back');
    $(trigger).hide();
  }


});



function Card(name, text, faction) {
  this.name = (typeof name !== 'undefined') ? name : 'Unnamed card';
  this.text = (typeof text !== 'undefined') ? text : '';
  this.faction = (typeof faction !== 'undefined') ? faction : 'light-gray';

  let json = {
    name: this.name,
    text: this.text,
    faction: this.faction
  }

  console.log(json);

  return json;
}



// Creates a DOM element from a JSON card object
function createCard(obj) {
  // Create base card
  let card = $(`<div class="card ${obj.faction}-1"></div>`);
  $(card).append($(`<div class="card--clip card--clip-1 ${obj.faction}-2"></div>`));
  $(card).append($(`<div class="card--clip card--clip-2 ${obj.faction}-3"></div>`));

  // Create card content 
  let card_content = $(`<div class="card--content"></div>`);
  $(card_content).append(`<h2 class="card--title">${obj.name}</h2>`);
  $(card_content).append(`<p>${obj.text}</p>`)

  // Append content to card
  $(card).append($(card_content));

  // Append card to DOM
  $('.card-container').append($(card));
}



// Draw a card from a given stack if is not empty.
function drawCard(stack) {
  if(stack.length > 0) {
    return {
      card: stack.pop(),
      remaining: stack.length
    }
  }
  else {
    return false;
  }
}



function populateCardStack(size) {
  if(!size) size = 5;
  for(let i = 0; i < size; i++) {
    let name = chance.name();
    let text = chance.sentence();
    let faction = 'orange';
    if(chance.bool()) {
      faction = 'blue';
    }

    let card = new Card(name, text, faction);
    stack.push(card);
  }

  console.log(stack);
}