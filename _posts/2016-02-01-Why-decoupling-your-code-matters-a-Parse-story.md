---
layout: post
title: Why decoupling your code matters - a Parse story
categories:
  - architecture
  - development
  - parse
authors: zmarkan
---

_A <del>told you so moment</del> cautionary tale for a time of a <del>great galactic turmoil</del> beloved service shutting down_

You may have heard it on the internets, Parse and Facebook recently [announced that Parse will be shutting down in 2017](http://blog.parse.com/announcements/moving-on/). I know a bunch of mobile developers who will now have to rewrite their apps to use a different backend, migrate their databases and generally have lots of work to do. But this work, although it can't be avoided completely, can at least be reduced to a minimum. May this post help you with that.

# The backstory

First, to put things in a context, I'll shine a light of what Parse actually is. It's what you can call a Backend as a service (BaaS) provider. It's an all-in-one solution that allows you to store objects in the cloud (and locally), send notifications, perform tracking and similar things. You just download and include an SDK, configure the app on their website and start building an app with a working backend in a matter of minutes. Sure, you tell me. I use amazon/firebase/some other solution, that could never happen to me. Now if your apps don't rely on it, you're obviously not impacted. But in reality, Facebook could easily be Google and Parse could easily be Firebase, or some other company/technology combination, so it's an area where we're all vulnerable in some way.

It can be a scary place. Unless we architect our apps to be independent of a backend, [hexagonal style](http://alistair.cockburn.us/Hexagonal+architecture).

# Tight coupling example

Parse docs are littered with simple to write, quick to run examples that let you get building fast. I don't blame them, they get the job done. On the flip side, your code ends up calling their static classes everywhere.

In Android, that starts when you initialise it in you Application class, or in iOS that would be in your AppDelegate. Also, whenever you're persisting or looking up some data, there is a static method you can call to get a bunch of ParseObjects your views can easily consume. Directly, obvs.

Now suppose you've decided to switch to Firebase to replace Parse. In addition to migrating your data, you will need to <del>refactor</del> rewrite your Application class and a truckload of view logic - all of that just to release an update to your app to keep the wheels rolling.
This can easily take a few days, maybe weeks, precious time when you could be releasing features, drinking, or providing actual value in some other way.

# Decoupling for the win

Now, imagine that instead of passing ParseObjects to your views, you passed a custom class that makes sense to your app's business domain. Something boring for example, like `Person` or `Account`. Instead of fetching your data from Parse you'd use a `BackendAdapter`, just an interface. You'd implement all the Parse interaction in a concrete `ParseBackendAdapter`.

Switching a backend provider in this case is much easier, as all we need to do is create a `FirebaseBackendAdapter` where we put all the calls to our new Firebase backend provider.

Boom, instead of replacing tens, hundreds of classes, you need to replace just a few.

It's easy, do it for the kittens, or because you're lazy, or because it makes fucking sense.
