# Getting Started

With npm installed just run:

```
npm install
```

To run:

```
npm start
```

To run tests:

```
npm test
```

# General Info

* This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
    * Some files have not been touched in the implementation.
* The following external modules have been used:
    * ```lodash```:
        * A bit overkill just to get the ```groupBy``` function.
    * ```react-numeric-input```:
        * ```NumericInput``` component (not sure I would have used this in a real app).
* The components have been put in the ```components``` folder:
    * ```ErrorMsg```: Displays an error message.
    * ```TriangleInfo```: Displays info about a triangle.
    * No real tests as I have no real experience testing React components (also quite fleeting how/what to test when it comes to UI tests).
* The triangle calculations are in the ```models``` folder:
    * In a real app there would probably be a lot more operations on triangles so a class would be a better solution.
    * A function ```isTriangle``` to test if the sides make up a triangle and that all input lengths are valid.
    * A function ```triangleType``` that returns the type of the triangle.
    * An enum ```TriangleType``` to avoid fragile comparisons.
    * Basic unit tests. Valid for current triangle definition but ```Number.MAX_VALUE``` is not useful for more general triangle operations.
* The ```App```:
    * Combines the different sub components.
    * The UI is currently limited to integers but this could be easily changed by modifying the propertis on ```NumericInput```.
    * The table solution is not a nice one as it does not scale wit different window sizes:
        * Should probably look into ```bootstrap.css``` or build a more general React component for the layout.
    * There is a warning regarding old ```PropTypes``` use in this file (maybe due to ```NumericInput```).