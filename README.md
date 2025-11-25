## This is a basic rest api operations with `firebase` used as database . 

### Features:

- Add items using `POST` method .
- To get or display tasks using `GET` method .
- Remove item by using `DELETE` method .
- Update the particular or entire field using `PUT` method .


### Set up and Installation : 

#### Cloning :

- To run this operations in your local system , clone or paste the below url in your local terminal :

```bash 
    git clone https://github.com/Bojanapu-Poojitha/todo-app-backend.git
```

#### To install dependencies :

```bash
   npm install
```

#### To running this :

```bash
    npx tsc

    node dist/App.js
```

### Tech Stack :

- Node js
- Typescript
  
### Implement a unit testing by using library :

- The library used for unit testing is : `supertest` .
- The service layers all are mocked using `jest.mock()`
- It follows the test coverage ,which is greater than 90% . 
