---
title: Fizzbuzz in Swift
subtitle: Tuples!
draft: false
date: 2023-06-30
---

I'm deep in my Swift education (I opted to read the [Big Nerd Ranch book](https://bignerdranch.com/books/swift-programming-the-big-nerd-ranch-guide-3rd-edition/) before getting into SwiftUI exclusively) and I'm trying to get the fundamentals grasped quickly so I can start building something, but I couldn't help but share this tidbit.

FizzBuzz is maybe the most famous programming question, often used to see if a job applicant knows anything about programming (just having heard of FizzBuzz or not is a big tell!).  It traditionally uses if/else statements in a particular order to print a list of numbers from 1 to 100, with "Fizz" printed instead if the number is divisible by 3, "Buzz" if it's divisible by 5, and "FizzBuzz" if it's divisible by both.  Here's how you do it in Swift the usual way:

```swift
for i in 1...100 {
    if i % 3 == 0 && i % 5 == 0 {
        print("fizzbuzz")
    } else if i % 3 == 0 {
        print("fizz")
    } else if i % 5 == 0 {
        print("buzz")
    } else {
        print(i)
    }
}
```

But there's a more fun way!  Swift makes big use of tuples, a data structure that carries two values side by side, and they are so deeply embedded in the language that you can pattern match with switch statements.  Check this out:

```swift
for i in 1...100 {
    switch (i % 3, i % 5) {
    case (0, 0):
        print("FizzBuzz")
    case (0, _):
        print("Fizz")
    case (_, 0):
        print("Buzz")
    default:
        print(i)
    }
}
```

I feel like I'm going to have to snap my brain to get used to this kind of thinking (the same way I did when learning higher-order functions in JavaScript), but I can imagine that there's lots of ways to get some elegant control flow with these tools!