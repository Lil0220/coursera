const breakfastMenu = ['Pancakes- $12', 'Eggs Benedict -$22.99', 'Oatmeal -$21.99', 'Frittata -$15'];

let breakfast = '';
breakfastMenu.forEach((item, index) => {
    breakfast += `<p>Item ${index + 1}: ${item}</p>`;
});
document.getElementById('breakfastMenuItems').innerHTML = breakfast;