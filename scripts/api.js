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
    return fetch(`${BASE_URL}/items`, {
      method: 'POST',
      header: new Headers({'Content-Type' : 'application/json'}),
      body: newItem
    });
  };

  return {getItems, createItem};
}());