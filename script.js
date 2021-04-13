'use strict';

document.addEventListener('DOMContentLoaded', (event) => {
  // adding head content
  const headTitle = 'Homework #12: OOP';
  const metaArray = ['Content-Type', 'text/html; charset=UTF-8', 'X-UA-Compatible', 'IE=edge', 'viewport', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'];

  const headTitleTag = `<title>${headTitle}</title>`;
  const headMetaTag1 = `<meta http-equiv=${metaArray[0]} content=${metaArray[1]} />`;
  const headMetaTag2 = `<meta http-equiv=${metaArray[2]} content=${metaArray[3]} />`;
  const headMetaTag3 = `<meta name=${metaArray[4]} content=${metaArray[5]} />`;

  document.head.innerHTML = headTitleTag + headMetaTag1 + headMetaTag2 + headMetaTag3;

  setup();
});

function setup(){
  const data = {
    animals: {
      dogs:{
        breed1:{
          dog1: {
            name: 'bob',
            age: 5,
            price: 50
          },
          dog2: {
            name: 'bill',
            age: 4,
            price: 100
          }
        },
        breed2:{
          dog1: {
            name: 'ray',
            age: 1,
            price: 150
          },
          dog2: {
            name: 'lilly',
            age: 4,
            price: 400
          }
        }
      },
      cats:{
        breed1:{
          cat1: {
            name: 'max',
            age: 3,
            price: 150
          },
          cat2: {
            name: 'beans',
            age: 1,
            price: 600
          }
        }
      },
      kids:{
        // ...
      },
      sale:{
        // ...
      }
    }
  };

  // [inheritance] Use Object prototype to iterate through object
  if (!Object.prototype.forEach) {
  	Object.defineProperty(Object.prototype, 'forEach', {
  		value: function (callback, thisArg) {
  			if (this == null) {
  				throw new TypeError('Not an object');
  			}
  			thisArg = thisArg || window;
  			for (var key in this) {
  				if (this.hasOwnProperty(key)) {
  					callback.call(thisArg, this[key], key, this);
  				}
  			}
  		}
  	});
  }

  const animal = (selection) => {
    const detailsName = Object.keys(selection);
    const detailsValue = Object.values(selection);
    const detailsEntries = Object.entries(selection);

    const obj = data.animals
    [selection.category.toLowerCase()];

    if (obj && Object.keys(obj).length !== 0 && obj.constructor === Object) {
      const range = data.animals
      [selection.category.toLowerCase()]
      [selection.type.toLowerCase()];

      return range
    }
    // [polymorph] return string if object is empty
    return 'No animals available.'
  }

  // [encapsulation] Get user selection and place in an object
  const userSelection = {
    category: 'cats',
    type: 'breed1'
  }

  // check user selection against database
  const cats = animal(userSelection);

  // will either return object or string
  if (typeof cats === 'string') {
    console.log(animal);
  } else {
    // display all animals matching
    cats.forEach(function (item, key) {
      console.log(item);
    });
  }

}
