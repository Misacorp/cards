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
  $('.card').addClass('card--inactive');
})