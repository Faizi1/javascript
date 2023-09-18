# Js Concepts Information

## Use Strcit:
- The "use strict" directive was new in ECMAScript version 5.

- It is not a statement, but a literal expression, ignored by earlier versions of JavaScript.

- The purpose of "use strict" is to indicate that the code should be executed in "strict mode".

- With strict mode, you can not, for example, use undeclared variables.

- All modern browsers support "use strict" except Internet Explorer 9 and lower:

``` 
   "use strict"
    x = 3.14;       // This will cause an error because x is not declared 
```

## Different btw var, let and const in js:
- `var` is function-scoped or globally scoped.
- `let` and `const` are block-scoped.

- `var` is hoisted and initialized with `undefined`.
- `let` and `const` are hoisted but not initialized (temporal dead zone).

- `var` can be reassigned and updated.
- `let` can be reassigned but not redeclared in the same scope.
- `const` cannot be reassigned or redeclared in the same scope.

- Variables declared with `var` at the global scope become properties of the global object.
- Variables declared with `let` and `const` at the global scope do not become properties of the global object.
