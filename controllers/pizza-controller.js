// const { Pizza } = require('../models');
// const { db } = require('../models/Pizza');

// const pizzaController = {
//     // the functions will go in here as methods
//     //to get all pizzas
//     getAllPizza(req, res) {
//         Pizza.find({})
//         .then(dbPizzaData => res.json(dbPizzaData))
//         .catch(err => {
//             console.log(err);
//         });
//     },
//     //get one pizz by id
//     getPizzaById({ params}, res) {
//         Pizza.findOne({_id: params.id})
//         .then(dbPizzaData => {
//             //if no pizza is found, send 404
//             if (!dbPizzaData) {
//                 res.status(404).json({message: 'No pizza found with this id!'});
//                 return;
//             }
//             res.json(dbPizzaData);
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(400).json(err);
//         });
//     },
//     //createPizza Time to create the method for handling POST /api/pizzas to add a pizza to the database. With this .createPizza() method, we destructure the body out of the Express.js req object because we don't need to interface with any of the other data it provides.
//     createPizza({ body }, res) {
//         Pizza.create(body)
//         .then(dbPizzaData => res.json(dbPizzaData))
//         .catch(err => res.status(400).json(err));
//     },

//     // With this .findOneAndUpdate() method, Mongoose finds a single document we want to update, t
//     // hen updates it and returns the updated document. If we don't set that third parameter, { new: true }, it will return the original document. 
//     // By setting the parameter to true, we're instructing Mongoose to return the new version of the document.

//     //update pizza by id Now let's add the method for updating a pizza when we make a request to PUT /api/pizzas/:id.
//     updatePizza({ params, body}, res) {
//         Pizza.findOneAndUpdate({ _id: params.id}, body, { new: true})
//         .then(dbPizzaData => {
//             if (!dbPizzaData) {
//                 res.status(404).json({message: 'No pizza found with this id!'});
//                 return;
//             }
//             res.json(dbPizzaData);
//         })
//         .catch(err => res.status(400).json(err));
//     },
//     //Lastly, let's create the method to delete a pizza from the database when we make a request to DELETE /api/pizzas/:id. 
//     //delete pizza
//     deletePizza({ params }, res) {
//         Pizza.findOneAndDelete({ _id: params.id})
//         .then(dbPizzaData => {
//             if(!dbPizzaData) {
//                 ResizeObserverSize.status(404).json({message: 'No pizza found with this id!'});
//                 return;
//             }
//             res.json(dbPizzaData);
//         })
//         .catch(err => res.status(400).json (err));
//     }
// };

// module.exports = pizzaController;


const { Pizza } = require('../models');

const pizzaController = {
  // get all pizzas
  getAllPizza(req, res) {
    Pizza.find({})
      .then(dbPizzaData => res.json(dbPizzaData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // get one pizza by id
  getPizzaById({ params }, res) {
    Pizza.findOne({ _id: params.id })
      .then(dbPizzaData => res.json(dbPizzaData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // createPizza
  createPizza({ body }, res) {
    Pizza.create(body)
      .then(dbPizzaData => res.json(dbPizzaData))
      .catch(err => res.json(err));
  },

  // update pizza by id
  updatePizza({ params, body }, res) {
    Pizza.findOneAndUpdate({ _id: params.id }, body, { new: true })
      .then(dbPizzaData => {
        if (!dbPizzaData) {
          res.status(404).json({ message: 'No pizza found with this id!' });
          return;
        }
        res.json(dbPizzaData);
      })
      .catch(err => res.status(400).json(err));
  },

  // delete pizza
  deletePizza({ params }, res) {
    Pizza.findOneAndDelete({ _id: params.id })
      .then(dbPizzaData => {
        if (!dbPizzaData) {
          res.status(404).json({ message: 'No pizza found with this id!' });
          return;
        }
        res.json(dbPizzaData);
      })
      .catch(err => res.status(400).json(err));
  }
};

module.exports = pizzaController;