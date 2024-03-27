* **Accidents**: They're going to forget to call addComponent so many times

* **Environment**: Need to explain how to have two execution windows (one for deployment, one for creating components) in their VS Code terminal

* **Docs**: Changing the components constructor requires updating the tests; I don't know if there's an intended syntax for non-nullary constructors, but the simplest solution seems to be to provide default arguments such that you can always call the constructor with test data. Should probably explain this more aggressively in the tutorial.

* **Convenience**: Can we setup a "watch" mode for development, instead of just tests? Students are going to forget to reload, and I'm lazy. LATER UPDATE: Ah, I believe it does update, just not for CSS changes?

* **Docs**: BindValue can only be attached to string values, I believe. The types of values that can be bound should be explicitly stated in the docs somehow.

* **Errors**: I was doing a fairly large refactoring and managed to trigger an error such that the error appeared in the console, but nowhere else. "Uncaught Error: can not find HTML element with id: name". Pretty sure it's just what happens when we forget to create a binding on the HTML side. But that means we either need to show them developer console (not a bad thing), or make this error get thrown at a different level. There's a small headache with students not looking at all the possible error locations.

* **Inheritance**: What is the preferred way to subclass components? How should I setup the constructor to get the HTML/CSS from either the child or the import? I ended up doing something a little strange using the question mark (?) operator to have the parent optionally take in html/css.

* **Binding**: You can't bind to a list of strings, right? So if we want to have a list of strings, we need to define a component to hold that data instead. A little inconvenient, but not impossible with the rest of the model.

* **HTML**: I believe that Radio buttons don't work correctly, or perhaps there's some more subtle way to set them up. But my naive approach led to them each being separate from each other. I believe this is something that just happens because of the shadow DOM?

* **Attributes**: How do I bind HTML attributes, e.g., the "disabled" attribute? Aria attributes?

* **Binding**: It'd be nice to be able to bind certain styles to booleans, like "display". Perhaps there's a way with Pipes, haven't tried that stuff yet.

* **Events**: The "next" method's name is a little unintuitive to me. I would sooner use a word like "fire" or "activate" or something a bit more active. I imagine it comes down a lot to how we introduce this to students. "Trigger" perhaps?

* **Visibility**: React has a cool utility that let's you visualize the current state of the app. I know this is hooked up to VS Code's debugger, but is there a way to passively check the state easily from the console dev tools? Maybe a top-level global function I could call to dump the current state? This would help debugging quite a bit, I think.

* **Wiring**: The wiring mechanism is a little easy to mess up. Forgetting to actually call the wiring functions from your constructor, for example. I recognize that we probably can't do better than `subscribe`, but I do wish we could attach things a bit more easily. I spent a fair few minutes trying to think of a way to do this with a decorator, but didn't like what I came up with. This mechanism works fine, I think we just have to make it a fairly big deal when we teach it or students WILL be confused.