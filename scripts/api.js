'use strict';

const api = (function(){
  let BASE_URL = 'https://thinkful-list-api.herokuapp.com/jesse';

  const getItems = function(){
    return fetch(`${BASE_URL}/items`);
    // return Promise.resolve('A successful response!');
  };

  const createItem = function(name){
    let newItem = JSON.stringify({
      name,
    });
    console.log(newItem);
    return fetch(`${BASE_URL}/items`, {
      method: 'POST',
      headers: new Headers({'Content-Type' : 'application/json'}),
      body: newItem
    });
  };

  const updateItem = function(id, updateData){ 
    return fetch(`${BASE_URL}/items/${id}`, { 
      method: 'PATCH', 
      headers: new Headers({'Content-Type' : 'application/json'}), 
      body: JSON.stringify(updateData)
    }); 
  };

  const deleteItem = function(id){
    return fetch(`${BASE_URL}/items/${id}`, {
      method: 'DELETE',
      headers: new Headers({'Content-Type' : 'application/json'})
    });
  };


  return {getItems, createItem, updateItem, deleteItem};
}());