# OOP structure


## What is object oriented programming ?

Object-oriented programming is a programming paradigm based on the concept of "objects", which can contain data and code: data in the form of fields, and code, in the form of procedures.

Falls under 4 concepts:

1. Encapsulation: Objects contain both the data and the methods that affect that data.
The binding of properties with functions in class is known as encapsulation.
Benefits: Modularity for easier troubleshooting. Reduce complexity and increase reusability.

2. Inheritance: Inherit properties and methods from another object.
Benefits: Reuse of code through inheritance. Eliminates redundant code.

3. Abstraction: Hide the details and complexity. Only show the essentials.
Benefits: Reduce complexity and isolate impact of changes.

4. Polymorphism:  allows methods to behave differently depending of the type of object. Multiple ways of doing things. Overriding (change mechanism of function) and overloading (change argument used to perform something).
Benefits: Flexibility through polymorphism. Refactor switch/case statements.

![alt text](https://github.com/mcsgdigital/Pirple_Homework12_OOP/blob/8e0e45e0d39eaffd8b80989521805ee13219dddd/homework12_oop.png?raw=true)

<br /><br />
### Describe the application flow from the user's point of view.

OOP would be of benefits because one object would represent a category, inside another object would hold the item details like name, age, likes, ... and within this, the Object class would have its owns data. These objects could be reused, stripped down to only needed data. Also easier to find bugs as we can localise where the error is, independently affecting another object.

### What is the application's purpose, and how would people use it?
Say we have an app for a recruitment agency.
Purpose would be to view a list of people matching a certain criteria. People would select a category then a person and view his details. They could also create an account using a common template.

### What information would they enter, and what would be received?
For a registration they would enter their details which would save it into a generic object.
Which in turn will have its own properties that could be used for other purposes like search.
If they are looking for people, they would enter words in an input which will be used to fetch a list.
