### Description

This repo demonstrates a bug where private members are available on the component instance when using the `dist-custom-elements` output target

#### Background

Components from output targets should only expose members using `@Prop`, `@Method` decorators, but `dist-custom-elements` does not encapsulate as expected.

One workaround is to use `#` to truly make private fields and methods, but we're not sure at this point if it'll introduce any issues when it comes to Stencil builds.

### Steps

#### Working (`dist`) ✅

1. run `npm run working`
1. look at the console
1. notice how an error is thrown because the private method is not available on the instance. 

#### Not working (`dist-custom-elements`) ❌

1. run `npm run not-working`
1. look at the console
1. notice how an error is NOT thrown and the log message from the private function is visible because the private method is available on the instance.
