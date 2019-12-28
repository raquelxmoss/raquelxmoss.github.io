---
slug: "/using-ruby-hash-fetch"
date: "2019-03-13T02:24:24+00:00"
title: "Using `Hash#fetch` in Ruby for better nil handling"
description: ""
categories: ["programming", "ruby"]
keywords: ["code"]
banner: ""
---

Pulling values out of a Hash in Ruby is simple with the `[]` method, but problems can occur when the value you’re looking up isn’t there. This can result in cumbersome nil checks, or our absolute favourite error  `Undefined method for nil:NilClass`. 

Let’s look at an example of a classifieds site that sorts its listings when displaying them for the user, and some of the ways we can use `Hash#fetch` to proactively handle those nils before they happen.

 Just a quick note on the code—these examples are moderately contrived and not necessarily how you’d solve these problems in production, but hey, at least they illustrate my points!



## Using Hash#fetch to set a default


```ruby
def index
  valid_sort_orders = {
  lowest_price: :asc,
  highest_price: :desc
  }

  sort_order = valid_sort_orders[listings_params[:sort]]

  @listings = Listing.order(price: sort_order)
end
```



We have a problem here—what if the `sort` parameter is not provided by the user, or they provide something that’s invalid? There’s many ways to handle this problem, for example, we could set a default with the `||` operator. This is a pretty common pattern, and a perfectly fine way to handle this case.



```ruby
def index
  valid_sort_orders = {
    lowest_price: :asc,
    highest_price: :desc
  }

  sort_order = valid_sort_orders[listings_params[:sort]] || :asc

  @listings = Listing.order(price: sort_order)
end
```



Personally, I prefer to use the `Hash#fetch` method for a slightly more elegant solution. With `Hash#fetch`, if a key is not found in a hash, we can provide a default key to look for, which is quite a nice way to handle our nil situation.



```ruby
def index
  valid_sort_orders = {
    lowest_price: :asc,
    highest_price: :desc
  }

  sort_order = valid_sort_orders.fetch(listings_params[:sort], :asc)

  @listings = Listing.order(price: sort_order)
end
```



Semantics alone aren’t a great reason to use this pattern though, so lets look at some more interesting examples where `Hash#fetch` can be used to proactively handle nils.



## Using `Hash#fetch` to set a falsey value

This pattern is useful when you want to accept falsey values from a caller, but default to a truthy value. Let’s look at an example. 

Here we want to be able to control with parameters whether to include a seller’s details in the response, with a default value of `true`.  It’s easy to accidentally do something like this:

```ruby
def index
  @include_seller_details = listings_params[:include_metadata] || true
  
    valid_sort_orders = {
    lowest_price: :asc,
    highest_price: :desc
  }

  sort_order = valid_sort_orders.fetch(listings_params[:sort], :asc)

  @listings = Listing.order(price: sort_order)
end
```

Which is not going to work correctly! Because if `listing_params[:include_metadata]` is a falsey value, this will evaluate to `true` anyway. It’s probably not disasterous, but it means that we’re going to be sending more information in the response than we want to, which is impolite at best and could be a security concern at worst.

One way to fix this would be to use `Hash#fetch`

```ruby
def index
  @include_seller_details = listing_params.fetch(:include_metadata, true)
  
  valid_sort_orders = {
    lowest_price: :asc,
    highest_price: :desc
  }

  sort_order = valid_sort_orders.fetch(listings_params[:sort], :asc)

  @listings = Listing.order(price: sort_order)
end
```

In this example, if there is any value at `:include_metadata`, including a falsey value, it will be set, which is exactly what we want.



## Run a block of code if you don’t find what you’re looking for

In the case where you don’t find what you’re looking for in a hash, returning a default value is nice, as we’ve seen. Sometimes, though, a simple value won’t do, and you might want to run a block of code as a fallback instead. `Hash#fetch` accepts a block to help you achieve this, which is pretty nifty!

In this example, if a user sends an invalid sort order to the API, we will record that in an analytics service. That will help us decide if we want to build that feature for our users next. If a lot of users are requesting to order Listings by `popular` or `new`, it’s handy for us to know that. So, we’ll report the value, then return the default.

```ruby
def index
  @include_seller_details = listing_params.fetch(:include_metadata, true)
  
  valid_sort_orders = {
    lowest_price: :asc,
    highest_price: :desc
  }

  sort_order = valid_sort_orders.fetch(listings_params[:sort]) do |value|
    Analytics.report("user requested to sort listings by #{value}")
    :asc
  end

  @listings = Listing.order(price: sort_order)
end
```



## Safer handling of environment variables with `Hash#fetch`

Poor handling of environment variables can make for some pretty disasterous outcomes (…ask me how I know). After being bitten more than once, I like to use `Hash#fetch` when retrieving environment variables.

This is especially important if you are using environment variables to feature flag releases, or if adding/removing environment variables is something that is handled separately to your normal code deploy process. 

code expecting an environment variable + a silent failure if it’s not there + failing to correctly set an environment variable = potentially very costly mistake

:upside_down_face:

```ruby
def index
  seasonal_discount = ENV["SEASONAL_DISCOUNT"]
  
  valid_sort_orders = {
    lowest_price: :asc,
    highest_price: :desc
  }

  sort_order = valid_sort_orders.fetch(listings_params[:sort], :asc)

  @listings = Listing.order(price: sort_order)
  
  if seasonal_discount
    @listings = @listings.map(&:apply_seasonal_discount)
  end
end
```



In this case, if someone fails to set the `SEASONAL_DISCOUNT` environment variable, we might fail to notice because nothing here is going to throw an error. Our customers will miss out on a good deal!

We can use `Hash#fetch` so that this fails noisily when no env var is found.

```ruby
def index
  seasonal_discount = ENV.fetch("SEASONAL_DISCOUNT")
  
  valid_sort_orders = {
    lowest_price: :asc,
    highest_price: :desc
  }

  sort_order = valid_sort_orders.fetch(listings_params[:sort], :asc)

  @listings = Listing.order(price: sort_order)
  
  if seasonal_discount
    @listings = @listings.map(&:apply_seasonal_discount)
  end
end
```

If no environment variable is found, this will fail noisily and your code probably won’t even deploy correctly. You could also choose to set a default if it makes more sense to do so, but there are often cases when a noisy failure is preferable.

### Those are some of my favourite uses for `Hash#fetch`. It's a really useful tool for any Rubyist, and I think it’s good to remember that `[]` is not the only way to retrieve values from a Hash. 
