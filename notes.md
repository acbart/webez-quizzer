* **Accidents**: They're going to forget to addComponent so many times

* **Environment**: Need to explain how to have two execution windows (one for deployment, one for creating components)

* **Docs**: Changing the components constructor requires updating the tests; I don't know if there's an intended syntax for non-nullary constructors, but the simplest solution seems to be to provide default arguments such that you can always call the constructor with test data.

* **Convenience**: Can we setup a "watch" mode for development, instead of just tests? Students are going to forget to reload, and I'm lazy.

* **Docs**: BindValue can only be attached to string values, I believe. The types of values that can be bound should be explicitly stated in the docs somehow.