# Payhere fundraising starter

A funraising website, built using [Gatsby](https://www.gatsbyjs.org), [Paynere](https://payhere.co) and [Sanity.io](https://www.sanity.io/). It allows you to easily create a nice, mobile-optimised website and collect one-off and recurring donations for your charity or funraising event.

[Live demo](https://fundraising.now.sh/)

### Example screenshot

![Funraising example](./fundraiser-example.png)

### Prefer fully managed?

If you don’t have the technical know-how, or would prefer that we do the heavy lifting for you, [contact us](mailto:hello@payhere.co) and we’ll set everything up, tweak the colours and images to match your brand, and give you a content management system to update your content whenever you want. *We’ll charge you for the domain name (if you don’t already have one) and a small monthly fee for the setup and hosting.*

## Getting started

If you want to use this template and are familiar with Gatsby you can start a new project using the following command:

```sh
$ gatsby new fundraising-starter https://github.com/payherepayments/payhere-starter-fundraising
$ cd fundraising-starter
$ yarn develop
```

That’s it, you can now edit the content in `./siteConfig.js` and you’ll be off to the races.

## Payment setup

You will need to signup for a free* [Payhere account](https://app.payhere.co/signups/new?plan=starter). Once you are setup you’ll want to create two plans:

1. Create a plan, select the Donation plan type and give it a helpful name. Choose the donation type 'One-off'.
2. Create a second plan, select the Donation plan type and give it a helpful name. This time, choosing the donation type 'Recurring' and the billing interval set to 'Month'.

Once you have your plans, copy the links to these plans and update the values inside the `./siteConfig.js` file. This will launch your plans when your visitors choose to donate.

*\*We take a small fee for each transaction, [view our pricing](https://payhere.co/pricing/) for more info.*

## CMS setup

We use [sanity.io](https://www.sanity.io/) for the content management system. We have the sanity project fully configured and ready to go.

```sh
# Install sanity.io command line tools
$ npm install -g @sanity/cli
```

From within the `cms/` folder you will want to initialise a new sanity project tied to your account that you login and make changes with. When prompted `Would you like to reconfigure` select `Y` and create a new sanity project, choosing to use the default dataset configuration.

```sh
$ cd cms
# Initialize sanity project
$ sanity init
# Deploy graphql endpoint (required for gatsby-source-sanity)
$ sanity graphql deploy
# Deploy your CMS to <project-name>.sanity.studio
$ sanity deploy
```

Once you have deployed your sanity site, you’ll need the api projectId, you can find it inside of `./cms/sanity.json`, take this value and update the `./siteConfig.js` file with your sanity project ID, this will start fetching CMS content from your own sanity CMS.

## Deploy

You can deploy to pretty much any host, however for the fastest speeds we recommend Netlify, now.sh or any static site optimised hosting that you are familiar with.

### Netlify

We recommend deploying using [netlify](https://www.netlify.com/), it's got a very generous free tier and serves your site at blazing speeds on their global CDN. You’ll want to push your site up to GitHub, then sign in to netlify and add a new site, it will auto-detect the build command and public folder and update every time you push up changes. For more info, check out their [excellent docs](https://docs.netlify.com/#get-started).

### Now.sh

You can also deploy effortlessly to [Now](https://zeit.co/home) with a single command (once your signed up).

```sh
# Make sure it’s installed first
$ npm i -g now

# And deploy or re-deploy changes
$ now --prod
```

## Help, feedback or bugs

Please feel free to [open an issue](/payherepayments/payhere-starter-fundraising/issues/new) asking questions or reporting problems. Any pull requests would be massively appreciated!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
