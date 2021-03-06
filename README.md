# emis-incident-type

[![Build Status](https://travis-ci.org/CodeTanzania/emis-incident-type.svg?branch=develop)](https://travis-ci.org/CodeTanzania/emis-incident-type)
[![Dependencies Status](https://david-dm.org/CodeTanzania/emis-incident-type/status.svg?style=flat-square)](https://david-dm.org/CodeTanzania/emis-incident-type)
[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/CodeTanzania/emis-incident-type/tree/develop)

A representation of an entity which classify emergency(or disaster) from the most generalised(nature and family) to the most specific (main event and peril).

[Demo](https://emis-incident-type.herokuapp.com/v1/incidenttypes)

## Domain Model

![EMIS Incident Type Domain Model](https://raw.githubusercontent.com/CodeTanzania/emis-incident-type/develop/specifications/incidenttype.model.png)

## Requirements

- [NodeJS v8.11.1+](https://nodejs.org)
- [Npm v5.6.0+](https://www.npmjs.com/)
- [MongoDB v3.4.10+](https://www.mongodb.com/)
- [Mongoose v5.1.2+](https://github.com/Automattic/mongoose)

## Installation

```sh
npm install @codetanzania/emis-incident-type --save
```

## Usage

```js
const { app } = require('@codetanzania/emis-incident-type');
app.start((error) => { ... });
```

## Demo
- [View Demo](https://emis-incident-type.herokuapp.com/v1/incidenttypes)
- [View apidoc](https://codetanzania.github.io/emis-incident-type/)


## Testing

- Clone this repository

- Install all development dependencies

```sh
npm install
```

- Run example

```sh
npm run dev
```

- Then run test

```sh
npm test
```

## Contribute

It will be nice, if you open an issue first so that we can know what is going on, then, fork this repo and push in your ideas. Do not forget to add a bit of test(s) of what value you adding.


## References
- [Disaster](https://en.wikipedia.org/wiki/Disaster)
- [UNISDR - Terminology on Disaster Risk Reduction](https://www.unisdr.org/we/inform/terminology)
- [EM-DAT - Glossary](https://www.emdat.be/Glossary)
- [IRDR Peril Classification and Hazard Glossary](http://www.irdrinternational.org/wp-content/uploads/2014/04/IRDR_DATA-Project-Report-No.-1.pdf)
- [Disaster Category Classification and Peril Terminology for Operational Purposes](http://cred.be/sites/default/files/DisCatClass_264.pdf)
- [Disaster category classification and peril terminology for operational purposes](http://cred.be/sites/default/files/DisCatClass_264.pdf)
- [EM-DAT Guidelines](https://www.emdat.be/guidelines)
- [Glide Number](http://www.glidenumber.net/glide/public/about.jsp)

## Licence

The MIT License (MIT)

Copyright (c) 2018 CodeTanzania & Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
