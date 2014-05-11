## Lunch-O-Mete(o)r

Built With & On
* [MeteorJS](https://www.meteor.com)
* [MongoDB](http://www.mongodb.org)
* [HighCharts](http://www.highcharts.com/)

Meteor Packages
* [IronRouter](https://atmospherejs.com/package/iron-router)

***

## Project Structure

```
lunch-o-meter/
├── client             # <- client specific libraries
│   ├── config         # <- client specific configuration (Router.configure({...}), etc)
│   ├── helpers        # <- handlebars & meteor helpers
│   ├── lib            # <- client specific libraries
│   ├── routes         # <- controller/route definitions & mappings
│   ├── startup        # <- client startup setup (Meteor.isClient is assumed by convention)
│   ├── stylesheets    # <- css files for the handlebars views
│   ├── subscriptions  # <- client subscriptions to meteor publications
│   └── views          # <- templates & javascript for a single page
|
├── collections        # <- defintions of collections and methods on them
|
├── packages           # <- meteor packages used for the project
|
├── public             # <- public assets & images
│   ├── fonts          # <- font glyphicons
│   ├── javascripts    # <- external libraries (jQuery, Bootstrap, Highcharts, etc)
│   └── stylesheets    # <- external stylesheets (Bootstrap, etc)
|
├── server             # <- server specific libraries
│   ├── publications   # <- meteor publish defintions
│   └── startup        # <- server startup setup (Meteor.isServer is assumed by convention)

```

## Setup

Install Meteor if it is not already been installed.

```
$ curl https://install.meteor.com | /bin/sh
```

Install Meteorite if it is not already installed.
```
$ npm install -g meteorite
```

Run the project using Meteorite, port 3000 will be the default port unless otherwise specified by the -p flag.
```
$ mrt
Stand back while Meteorite does its thing

Done installing smart packages

Ok, everything's ready. Here comes Meteor!

[[[[[ ~/Projects/JavaScript/lunch-o-meter ]]]]]

=> Started proxy.
=> Started MongoDB.
=> Started your app
```
## Usage

First, you will need to add some ideas!
<p align="center">
<img align="center" src="https://raw.githubusercontent.com/chrismagnacca/lunch-o-meter/master/README/no-options-input.png" alt="No Options Provided!">
</p>

Type in a new option, hit Enter, and voilà.
<p align="center">
<img align="center" src="https://raw.githubusercontent.com/chrismagnacca/lunch-o-meter/master/README/1-option-added.png" alt="Single Option Added">
</p>

Add as many options as you would like and upvote/downvote!
<p align="center">
<img align="center" src="https://raw.githubusercontent.com/chrismagnacca/lunch-o-meter/master/README/1-lunch-option-voted.png" alt="2 Options & Votes">
</p>

## FAQ

Q: What problem does this really solve?
<br>
A: Have you ever tried figuring out where to go for lunch with a large group of people?

## Upcomming Additions
In no particular order:

1. Add OAuth for Twitter API 1.1 Integration
2. Limit Votes per User
3. Store the Top Result by Day


## Contributing
To contribute,

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Added some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
