* **Accidents**: They're going to forget to addComponent so many times

* **Environment**: Need to explain how to have two execution windows (one for deployment, one for creating components)

* **Docs**: Changing the components constructor requires updating the tests; I don't know if there's an intended syntax for non-nullary constructors, but the simplest solution seems to be to provide default arguments such that you can always call the constructor with test data.

* **Convenience**: Can we setup a "watch" mode for development, instead of just tests? Students are going to forget to reload, and I'm lazy.
	- Update: Ah, I believe it does update, just not for CSS changes.

* **Docs**: BindValue can only be attached to string values, I believe. The types of values that can be bound should be explicitly stated in the docs somehow.

* **Errors**: I was doing a fairly large refactoring and managed to trigger an error such that the error appeared in the console, but nowhere else. "Uncaught Error: can not find HTML element with id: name". Pretty sure it's just what happens when we forget to create a binding on the HTML side. But that means we either need to show them developer console (not a bad thing), or make this error get thrown at a different level. There's a small headache with students not looking at all the possible error locations.

* **Inheritance**: What is the preferred way to subclass components? How should I setup the constructor to get the HTML/CSS from either the child or the import?

* **Binding**: You can't bind to a list of strings, right? So if we want to have a list of strings, we need to define a component to hold that data instead.

* **HTML**: I believe that Radio buttons don't work correctly, or perhaps there's some more subtle way to set them up. But my naive approach led to them each being separated out.

* **Attributes**: How do I bind HTML attributes, e.g., the "disabled" attribute? Aria attributes?

* **Binding**: It'd be nice to be able to bind certain styles to booleans, like "display".