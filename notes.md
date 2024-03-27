* **Accidents**: They're going to forget to addComponent so many times

* **Environment**: Need to explain how to have two execution windows (one for deployment, one for creating components)

* **Docs**: Changing the components constructor requires updating the tests; I don't know if there's an intended syntax for non-nullary constructors, but the simplest solution seems to be to provide default arguments such that you can always call the constructor with test data.

* **Convenience**: Can we setup a "watch" mode for development, instead of just tests? Students are going to forget to reload, and I'm lazy.

* **Docs**: BindValue can only be attached to string values, I believe. The types of values that can be bound should be explicitly stated in the docs somehow.

* **Errors**: I was doing a fairly large refactoring and managed to trigger an error such that the error appeared in the console, but nowhere else. "Uncaught Error: can not find HTML element with id: name". Pretty sure it's just what happens when we forget to create a binding on the HTML side. But that means we either need to show them developer console (not a bad thing), or make this error get thrown at a different level. There's a small headache with students not looking at all the possible error locations.