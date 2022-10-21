
Besty is an Etsy clone, and like Etsy, it is an ecommerce site which will make small business owners be able to sell their products.

# Live Link

[Besty Live Link](https://besty-2022.herokuapp.com/)

# Technologies Used
- React
- Redux
- JavaScript
- Ruby on Rails
- Postgres
- Amazon S3
- HTML
- SCSS
- Heroku

# Code Higlights

Add to cart:

I was having trouble to keep track of users shopping cart, and in order to implement this feature, users need to sign in to be able to add to cart.
I created two different "add to cart" button which looks the same but works differently, button#1 will work as sign in button which will lead to sign in page, button#2 will direct users to shopping cart. When user click on add to cart button, my codes would check if there is a sessionuser which is a logged in user, if there is no one sign in, then my wesite would render button#1, otherwise it will render button#2.

Add cart items:

When users click on plus/minus button in shopping page, and add items to cart, it will create a cart in backend, which makes items retain in shopping cart.
The shopping cart items quantities would automaticlly update due to users' changes. When different users login, the cart items would show differently based their carts, and the shopping carts would be empty if users logout. 

Login/signup Modal:

Login and Signup pages are modal, there is a register button on login modal, if user click on it, it will switch to signup modal. In login form, if user enters incorrect infomation or empty input, the input would become red and show error messages, in signup form, different errors would show up based on different error situations.


# Future goals

- Search function.
- Users be able to like a product or a store.
- Users profile page with liked products and stores.
- Post/ Edit/ Delete a review.
- Upload/Edit/ Delete products.
- Navagation to prodcuts by category.
