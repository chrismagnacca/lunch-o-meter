## Lunch-O-Meter

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



## Upcomming Additions
