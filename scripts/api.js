'use strict';

const api = (function(){
  let BASE_URL = 'https://thinkful-list-api.herokuapp.com/jesse';

  const getItems = function(){
    return fetch(`${BASE_URL}/items`)
      .catch(e => console.log(e.message));
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
    })
      .catch(e => console.log(e.message));
  };

  const updateItem = function(id, updateData){ 
    return fetch(`${BASE_URL}/items/${id}`, { 
      method: 'PATCH', 
      headers: new Headers({'Content-Type' : 'application/json'}), 
      body: JSON.stringify(updateData)
    })
      .catch(e => console.log(e.message)); 
  };

  const deleteItem = function(id){
    return fetch(`${BASE_URL}/items/${id}`, {
      method: 'DELETE',
      headers: new Headers({'Content-Type' : 'application/json'})
    })
      .catch(e => console.log(e.message));
  };
  
  function listApiFetch(...args) {
    let error;
    return fetch(...args)
      .then(res => {
        if (!res.ok) {
          // Valid HTTP response but non-2xx status - let's create an error!
          error = { code: res.status };
        }
   
        // In either case, parse the JSON stream:
        return res.json();
      })
   
      .then(data => {
        // If error was flagged, reject the Promise with the error object
        if (error) {
          error.message = data.message;
          return Promise.reject(error);
        }
   
        // Otherwise give back the data as resolved Promise
        return data;
      });
  }


  return {getItems, createItem, updateItem, deleteItem, listApiFetch};
}());