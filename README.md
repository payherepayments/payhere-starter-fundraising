# Payhere fundraising starter

A fundraising website, built using [Gatsby](https://www.gatsbyjs.org), [Payhere](https://payhere.co) and [Sanity.io](https://www.sanity.io/). It allows you to easily create a nice, mobile-optimised website and collect one-off and recurring donations for your charity or fundraising event.

[Live demo](https://fundraising.now.sh/)

### Example screenshot

![Fundraising example](./fundraiser-example.png)

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

1. Create a plan, select the **Donation** option and give it a helpful name. Choose the **One-off** type.
2. Create a second plan, selecting **Donation** again, this time choosing the **Recurring** type and set billing interval to **Month**.

Once you have your plans, copy the links to these plans and update the values inside `./siteConfig.js`.

*\*We take a small fee for each transaction, [view our pricing](https://payhere.co/pricing/) for more info.*

## CMS setup

We use [sanity.io](https://www.sanity.io/) for the content management system. We have sanity studio configured and ready to go, you just need to set it up within your sanity account following the steps below.

```sh
# Make sure you have the sanity.io command line tools installed
$ npm install -g @sanity/cli
```

From within the `cms/` folder you want to initialise a new sanity project tied to your account. When prompted `Would you like to reconfigure` select `Y` and create a new sanity project, choosing to use the default dataset configuration.

```sh
$ cd cms
# Initialize sanity project
$ sanity init
# Deploy graphql endpoint (required for gatsby-source-sanity)
$ sanity graphql deploy
# Deploy your CMS to <project-name>.sanity.studio
$ sanity deploy
```

Once you have deployed your sanity studio, you’ll need the api projectId, you can find it inside of `./cms/sanity.json`, take this value and update the `./siteConfig.js` file with your sanity project ID, this will start fetching CMS content from your own sanity CMS.

## Deploy

You can deploy to any host however, for the fastest speeds we recommend Netlify, Zeit Now or any other static-site hosting that you are familiar with.

### Netlify

If you are unsure, we recommend deploying using [netlify](https://www.netlify.com/). It has a generous free tier and serves your site at blazing speeds on a global CDN.

To get started:
1. Publish this project to GitHub
2. Sign up/sign in to netlify and add a new site
3. You will be guided through the process of selecing your GitHub project
4. Netlify will auto-detect the build command and public folder for Gatsby
5. Done, your site should now be on Netlify and update every time you push changes

For more info, check out Netlify’s [excellent docs](https://docs.netlify.com/#get-started).

### Zeit Now

You can also deploy effortlessly to [Now](https://zeit.co/home) with a single command.

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
