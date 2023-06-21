export const post1Content = `
[Angular 16](https://blog.angular.io/angular-v16-is-here-4d7a28ec680d) has deprecated Karma and introduced Jest in experimental mode. Does that mean we currently have no stable testing framework? Should we switch to Jest? What's wrong with Karma in the first place?

In this article, I want to answer these and more questions.

First, let's take a look at the pre-Angular 16 situation. I will cover the differences between Jest and Jasmine and explain the role of Karma. Then we'll dive into Jest and discuss why the current community-based solutions could be more optimal. Finally, we'll look into the future and see what Angular brings to the table.

## Angular Testing Landscape

Roughly speaking, we use two different types of frameworks to test our Angular applications: one for unit/component tests and another for E2E testing. We use frameworks like Cypress, Playwright, or some Webdriver derivatives like Selenium or WebDriverIO for the latter.

When it comes to component testing, there are some overlaps because Cypress also supports it.

For the unit/component tests, we use Jasmine or Jest. The official support of the Angular CLI has always been Jasmine. If we wanted to switch to Jest, we usually went with Nx or used the builder from just-jeb/angular-builders.


![Common Testing Framework in Angular](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8zritm446q4dxghcnn7k.png)

## Jest or Jasmine?

In Angular, Jasmine always comes together with Karma. Karma serves as a vehicle for Jasmine, which embeds the tests in the browser. The browser context has the advantage that the tests have access to the Web API and everything else a browser offers. On the other hand, the browser adds some overhead.

Jest offers an alternative. We can find the origins of Jest at Facebook. They forked Jasmine and improved it in terms of performance.

Instead of a browser, Jest uses jsdom, an emulator providing a DOM with parts of the Web API that allows us to select and interact with the DOM itself. Due to the emulator, the overhead is much smaller compared to a real browser. On the other side, we have limited functionality available. For example, we cannot play music via the audio tag or store something in local storage. In most cases, though, that's different from what we want to do in tests.

Additional "power features" are built-in parallelisation and an excellent watch mode. The watch mode only executes tests that are affected by the current changes. If we had 10,000 tests, but our recent changes affect only 10 of them, Jest runs only them.

These features made Jest the dominating testing framework, not just in Angular but more or less in the whole JavaScript land.

![Download Statistics](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/qh4dgdnkos1wfh6no4sf.png)

## Jest's weakness: ES Modules

Unfortunately, in the last few years, we saw some strange error messages like "import is not defined" and experienced a considerable drop in performance.

It turned out that Jest's integration into Angular was not on the same level as Jasmine's. Jest needs to do the compilation on its own. So it gets the source code of our tests and compiles it down to JavaScript in the case of Angular.

The Angular compiler, which runs on top of the TypeScript compiler, is responsible for that. It knows about all the metadata and what that means for the final code.

How does it work in Jest? The secret sauce is the [jest-angular-preset](https://github.com/thymikee/jest-preset-angular) project. It holds all the logic, and the [Nx](https://nx.dev/) and [just-jeb/angular-builders](https://github.com/just-jeb/angular-builders) depend on it.

![Angular Testing: Before v16](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/qhitf92e33mkavqxofxq.png)

Unfortunately, jest-angular-preset doesn't fix all issues regarding the Jest build process. 

Entering ECMAScript Modules or ESM. It is the official standard for loading JavaScript files and, in a way, the successor to CommonJS (CJS). Many third-party libraries jumped onto the ESM train and exclusively published in that format. Angular especially pushed their libraries to produce ESM format only.

Jest was caught flat-footed. It only understood the old CJS. Compiling our test and application code down to CJS wasn't much of an issue for Jest. The problem lies within the node_modules directory, especially in Angular and its libraries, which are not in CJS anymore.

Jest had to transpile this massive amount of code from ESM to CJS. That significantly slowed down Jest. So it shouldn't be surprising that Jasmine - where Angular is responsible for the build - suddenly outperformed Jest.

Additionally, it also turned out that just one person is responsible for Jest's development. Facebook/Meta last contributed code a few years ago. So Simen Bekkhen had to keep Jest together all alone. And if things were not already bad enough, he got frustrated with the standardisation process of ESM and [took some time off](https://github.com/jestjs/jest/pull/11529#issuecomment-1027091448).

Let's move forward to today. Jest is now part of the OpenSource Foundation and has many contributors. Simen is working on an [ESM support for Jest](https://github.com/jestjs/jest/issues/9430). It is still experimental, but the Angular community plugins use it already by default.

The situation is much better. Nevertheless, there are still some chances of falling into a performance trap. Tomas Trajan dedicated a whole [article](https://angularexperts.io/blog/total-guide-to-jest-esm-and-angular) to that problem.

## Experimental Jest Mode in the Angular CLI

Let's come to the present. We see that Jest is recovering, catching up to its old form…and suddenly, the Angular team steps in.

The Angular Developer survey showed that there is room for improvement in testing. So, looking at the testing landscape, the Angular team decided to support Jest officially.

At the moment, this is in experimental mode. We can try it out, but we shouldn't expect too much. The experimental mode is not on the same level as the developer preview we've seen in Angular 14 for Standalone Components. We should see it more as a proof of concept.

The official Jest integration will not go the path of Nx & Co. Jest will no longer be responsible for the build. Angular takes over.

That means Jest gets a bunch of *.mjs files. There is no need to traverse through node_modules, transpiling, etc. Instead, Jest can start with the execution right away.

And that's not all of it. For example, Angular uses the brand-new esbuild instead of webpack. Esbuild is said to outperform Webpack in some situations by [50-100x times](https://esbuild.github.io/faq/#benchmark-details). It has also proven itself multiple times. For example, Vitest and Vite use it internally. They are both known for their performance, which they get from esbuild.

So we can say that the current status of testing in Angular looks like this:

![Angular Testing: v16](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/39tb4st87llo9f39yl5z.png)

## Switching over to Jest

Here is how you can try it out.

- Open your \`angular.json\` and replace the builder in \`test\`, which should have the value \`@angular-devkit/build-angular:karma\` to \`@angular-devkit/build-angular:jest\`.
- Install the necessary dependencies via \`npm install -D jest @types/jest jest-environment-jsdom\`.
- Locate the \`tsconfig.spec.json\` and replace the value \`jasmine\` in the property \`types\` with \`jest\`.

Now just execute \`npx ng test\`. You should see that the Angular builder created a test-out folder in dist, which your test files with mjs as the file extension. This is the location where Jest runs.

You don't want to use it in production yet. Jest's watch mode is unavailable, your IDE will not run the tests, and you cannot customise Jest via a jest.config.ts.

## Jasmine and ModernWeb

What about the deprecation of Karma? Karma's task is to start a browser and embed the Jasmine tests. So the deprecation of Karma doesn't mean that Jasmine is deprecated.

Furthermore, in Angular 16, Karma is still fully functional. So your existing tests will still work as they used to.

In a future release, Angular will replace Karma with the web-test-runner from [ModernWeb](https://modern-web.dev/). That future release might already be Angular 17. ModernWeb is a modern community project that embeds tests into a browser.

The switch from Karma to ModernWeb might even go unnoticed. There should be nothing left for us to do. But let's see if it really turns out that way ;)

The more interesting question is why?

Karma has been there since Angular 1 (AngularJs). Misko Hevery, also known as the "father of Angular", was the co-author, and Karma was more or less exclusively for Angular.

Quite some time has passed since AngularJs and the ecosystem evolved. With community projects like web-test-runner, there is no need for the Angular team anymore to stick to Karma.

The predictable future of testing Angular would therefore provide a combination of Jasmine/WebTestRunner (ModernWeb) and Jest.


![Angular Testing: After v16](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6x5nib38d9p9yljr37qz.png)

## Summary

In 2023, Angular made huge steps forwards with Signals and Hydration. In terms of testing, Angular is picking up speed as well. It will integrate Jest so that Angular provides the entire build, and Jest just needs to execute those tests. In the current community solutions, Jest also had to build it, which caused some problems in the past.

Jasmine will stay a support testing framework. However, it will get modernised in the way that the web-test-runner and not Karma provides the Browser context.

Good things are happening in Angular wherever we look!

You can find a Github repository containing all possible variations in Angular 16.

{% embed https://github.com/rainerhahnekamp/angular-testing-status %}

If you are interesting in more content about testing, you might want to join one of our upcoming testing workshops:

🇩🇪 German Workshops: 

{% embed https://www.angulararchitects.io/schulungen/professional-angular-testing/ %}

🇺🇸 English Workshops:

{% embed https://www.angulararchitects.io/en/angular-workshops/professional-angular-testing-workshop/ %}`
