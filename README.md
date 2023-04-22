# Variables 🗃️

There are a lot of situations while programming that we as developers need to store a piece of code to back at then later or manipulate through the process. In those cases, we use a variable or constant.

We can create a variable with the type of number, string, date, text, null, undefined and boolean.

The '🟰' is used to assign a value to the variable.

It is common to start a variable with lower case letter and the body following the camel case sense.

## Types

- Let 🗽
When the value assigned will be changed later in the code.
Set that value as mutable.

let name;
let message = '';
let x = 1, y = 2;

It is possible to create 2 variables at the same time.

- Const 🤐
When we need to protect the value inside, in other words, is not supposed to change.
The information is immutable.

## String 📝

It is the type of variable that has letters inside and is involved with quotation marks.

### String Template

Ways to insert a variable inside a message of text
We should use crasis, $ symbol and {}

`const age = 19;`
`console.log('I am ${age} years old. ');`

## Number 🔢

Every time we need to store a value to calculate or that is a count.

### Math 🧮

Some symbols are used to calculate numbers and they are: + - * /

Type of result NaN is when it is not a number, the result is not real.
Examples: 0/0.

`0/2 = 0;`
`2/0 = Infinity;`

`+=` --> add a new value and sum with the previous stored.
`-+` --> Subtract the current value from the previous one.

`%` --> Show the rest of a division.

`++x` --> first it returns and then make the sum
`x++` --> make the sum and then returns

`Math .sqrt()`
Used to calculate a square root.

`Math.pow()`
Used to calculate potency which has 2 arguments. The first one is the big number (base) and the second is the small one (exponent).

`Math .round()`
When we have a value that has numbers after the '.' we use this method so that the number stays with just the digits before the '.'.

### Extra knowledge

- `cd`
command used to navigate through the folders that exist in the pc.
.. = go back to the previous folder.
nameOfFolder = go into the specific folder.

- `node name-of-folder.js`
make the code inside the folder work and print if necessary.

- `ls`
shows all the folders that exist in the folder that the terminal started.

- `{}`
scope is the area where the code exists.
variables that are created inside just exist inside of themselves and the ones that are created outside can be accessed inside.

- **concatenation**
When we try to sum a number and a string, the computer is going to understand what is needed to put the values together beside each other.

! square root of -1 does not exist so it returns a NaN.

#### To get input through the terminal

<https://www.npmjs.com/package/prompt-sync>

#### References

<https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math>
<https://developer.mozilla.org/pt-BR/docs/Web/API/window/prompt>
