--------------------------------------------- how will we control this code  --------------------------------------------



---->this code is for running fronted runs ...first you have to open a new terminal and go inside as "cd shoppyglobe"
                                                     -----> "cd fronted"
                                                     -----> "cd vite-project"
                                                     ----->  npm run dev


-----> to start the server ,fist we have to go to the  create a another terminal .after that we have to write inside terminal 
   ------> "cd shoppyglobe"
   ------> "cd server"
   ------> npm start

login------>username   =  kumarajit002
          password     =  12345

----->open ThunderClient  and create a new request by clicking the "New" buton ,then selecting "Request"

1... to add a new product  to a Users Array ,we first need to click on "POST" .after that we need to call "localhost:5000/api/items/add"
  example{
              
        "name":"cloth",
       "price":"56",
       "img": "image link add",
       "description":"add descripton"
  }


2...to show the entire data in array ,first a call to be "get" ,after then we have to call "localhost:5000/api/items/all_items"

4...to view data one at a time from array we need to call "get" and then call "localhost:5000/api/items/get_item/id"

5... >to register a user details  ,we first need to click on "POST" .after that we need to call "localhost:5000/api/user/register"

     example...{
               "firstname":"ajit",
               "surname":"kumar",
               "username":"kumarajit002",
               "email":"ajit1997@gmail.com",
               "password":"12345",
               "confirm_password":"12345"
                }
6-----> to login a user,  we first need to click on "post" after that we need to call "localhost:5000/api/user/login"
    expample....{
                    "username":"kumarajit002",
                    "password":"12345"
                }             