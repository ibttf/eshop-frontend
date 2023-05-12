# EShop
An online web application to emulate an ecommerce platform using a React frontend, Ruby on Rails backend, a postgreSQL datbase, and the fakestoreapi.

[![Video Walkthrough](https://www.youtube.com/watch?v=vokFeylkhL0&ab_channel=RoyLee](https://youtu.be/FgC_omMOSJc)
## Table of Contents

- [General Info](#general-information)
- [GitHub Repo](#github-repo)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Setup](#setup)
- [Server Start](#server-start)
- [Usage](#usage)


## GitHub Repo

- [Frontend](https://github.com/roylee0912/ekart-frontend)
-[Backend] (https://github.com/roylee0912/ekart-backend)

## Technologies Used

- Ruby 2.7.4
- Rails 6.1.3
- Active Model Serializers 0.10.12
- NodeJS (v16), and npm
- Postgresql 1.1
- bcrypt 3.1.7
- React 17.0.2
- React-Router-Dom 5.3.3

See Environment Setup below for instructions on installing these tools if you
don't already have them.

## Environment Setup

### Clone repository

**clone** the frontend project repository from github: [https://github.com/roylee0912/eshop-frontend](https://github.com/roylee0912/eshop-frontend)

```console
$ git clone https://github.com/roylee0912/eshop-frontend
```

### Install the Latest Ruby Version

Verify which version of Ruby you're running by entering this in the terminal:

```sh
ruby -v
```

Make sure that the Ruby version you're running is listed in the [supported
runtimes][] by Heroku. At the time of writing, supported versions are 2.6.8,
2.7.4, or 3.0.2. Our recommendation is 2.7.4, but make sure to check the site
for the latest supported versions.

If it's not, you can use `rvm` to install a newer version of Ruby:

```sh
rvm install 2.7.4 --default
```

You should also install the latest versions of `bundler` and `rails`:

```sh
gem install bundler
gem install rails
```

[supported runtimes]: https://devcenter.heroku.com/articles/ruby-support#supported-runtimes

### Install NodeJS

Verify you are running a recent version of Node with:

```sh
node -v
```

If your Node version is not 16.x.x, install it and set it as the current and
default version with:

```sh
nvm install 16
nvm use 16
nvm alias default 16
```

You can also update your npm version with:

```sh
npm i -g npm
```

### Application Install

When you're ready to start building your project, run:

```sh
bundle install
rails db:create
npm install --prefix client
```
### Clone repository

**clone** the backend project repository from github: [https://github.com/roylee0912/eshop-backend](https://github.com/roylee0912/eshop-backend)

```console
$ cd ..
$ git clone https://github.com/roylee0912/eshop-frontend
```

## Server Start

You can use the following commands to run the application:

- `rails db:migrate`: migrate the database
- `rails s`: run the backend on [http://localhost:3000](http://localhost:3000)
- `npm start --prefix client`: run the frontend on
  [http://localhost:4000](http://localhost:4000)

### Backend Shutdown

It should be possible to shutdown the server using [CTRL-C]. If that fails, follow these steps:

- `lsof -i tcp:9292`
  response:
  COMMAND PID USER ....
  ruby 1234 root ....
- `kill -9 1234`

## Usage

<div style="width:400px ; height:400px">



</div>

1. [`Login`] with your username & password. If this is your first time, create a user profile [`Sign Up`]
![image](![Screenshot 2023-05-12 at 5 48 45 PM](https://github.com/roylee0912/eshop-frontend/assets/60560932/5ef60949-6665-43b1-8649-91606e7828d3)
)

2. Redirect to the Homepage, where you can start viewing different items separated by various headings.
![Screenshot 2023-05-12 at 5 50 06 PM](https://github.com/roylee0912/eshop-frontend/assets/60560932/cdcfc126-f115-41a1-9a93-a6ec034f82a6)
![Screenshot 2023-05-12 at 5 50 54 PM](https://github.com/roylee0912/eshop-frontend/assets/60560932/f0f29b8f-7650-4d5d-9dd2-d9ffdf0013c2)
![Screenshot 2023-05-12 at 5 51 00 PM](https://github.com/roylee0912/eshop-frontend/assets/60560932/166059b1-e632-4bbf-ab18-16612e5aea70)


3. Click an item to see the [`Item`] page, where you can find the reviews for the item and have the option to add it to your cart.
![Screenshot 2023-05-12 at 5 51 00 PM](https://github.com/roylee0912/eshop-frontend/assets/60560932/8e590194-47f8-4bfb-b82c-153b49ed1e42)


4. Click "Add a Review" to turn on the review modal and add your own review if you're logged in.
![Screenshot 2023-05-12 at 5 58 19 PM](https://github.com/roylee0912/eshop-frontend/assets/60560932/92c673e2-2e60-4193-9683-5b5b3c456470)

5. Add an item to your cart to be redirected to the [`Cart`] page, where you'll have the option to add more of said item or remove it from your cart.
![Screenshot 2023-05-12 at 5 59 23 PM](https://github.com/roylee0912/eshop-frontend/assets/60560932/e84d52e6-6a50-482f-be6c-3b4589ddfdc3)


6. Go to [`Signout`] to sign out of your account and get redirected back to the homepage.

