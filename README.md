# numberInFull_BackEnd

This is an API project to return the number in full.

There are two end-points:

-> /us/:number

This will return the number in full in english.

![numberInFullUS365](https://user-images.githubusercontent.com/1830947/141046245-795dd962-4801-4bec-956d-0bb31f97c2d4.png)

-> /pt/:number

This will return the number in full in portuguese.




## Requirements

For development you will need Node.js and a node global package, Yarn, installed in your environment.

## Install

$ git clone https://github.com/ricbrands/numberInFull_BackEnd

$ cd numberInFull_BackEnd

$ yarn install

After cloning the project, in the project folder run a 'yarn install' command (or npm install, in case you don't use yarn).

## Running the project
$ yarn start

## TODO
Still missing to implement the tests and the validations (sanitization) of data.

- Test the maximum number allowed

- Test if the parameter is numeric
