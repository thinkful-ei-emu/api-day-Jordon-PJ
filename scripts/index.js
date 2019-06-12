'use strict';
/* global shoppingList, store, Item */
// eslint-disable-next-line no-unused-vars
$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();

  // api.getItems()
  //   .then(res => res.json())
  //   .then((items) => {
  //     items.forEach((item) => store.addItem(item));
  //     // console.log(store);
  //     shoppingList.render();

  api.getItems()
    .then(res => res.json())
    .then((items) => {
      const item = items[0];
      return api.updateItem(item.id, { name: 'foobar' });
    })
    .then(res => res.json())
    .then(() => console.log('updated!'));
});








store.items.push(Item.create('apples'));



// api.createItem('pears')
//   .then(res => res.json())
//   .then((newItem) => {
//     return api.getItems();
//   })
//   .then(res => res.json())
//   .then((items) => {
//     console.log(items);
//   });
// api.getItems()
//   .then(res => res.json())
//   .then(res => console.log(res));

// console.log(api.BASE_URL);

