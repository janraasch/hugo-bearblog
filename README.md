# Hugo ʕ•ᴥ•ʔ Bear Blog [![CI](https://github.com/janraasch/hugo-bearblog/actions/workflows/ci.yml/badge.svg)](https://github.com/janraasch/hugo-bearblog/actions/workflows/ci.yml)

🧸 A [Hugo](https://gohugo.io/)-theme based on [Bear Blog](https://bearblog.dev).

> Free, no-nonsense, super-fast blogging.

## Demo

For a current & working demo of this theme, please check out https://janraasch.github.io/hugo-bearblog/ 🎯.

## Screenshots

⬜️ [Light][light-screenshot]

⬛️ [Dark][dark-screenshot]

When the user's browser is running »dark mode«, the dark color scheme will be used automatically. The default is the light/white color scheme. Check out the [`style.html`](https://github.com/janraasch/hugo-bearblog/blob/master/layouts/partials/style.html)-file for the implementation.

## Installation

If you already have a Hugo site on your machine, you can simply add this theme via

```bash
git submodule add https://github.com/janraasch/hugo-bearblog.git themes/hugo-bearblog
```

Then, adjust the `hugo.toml` as detailed below.

For more information, read the official [setup guide][hugo-setup-guide] of Hugo.

## Adjust configuration / hugo.toml

Please check out the [hugo.toml](https://github.com/janraasch/hugo-bearblog/blob/master/exampleSite/hugo.toml) included in the [exampleSite](https://github.com/janraasch/hugo-bearblog/tree/master/exampleSite) of this theme.

## Content & structure

### Starting fresh

If you are starting fresh, simply copy over the contents of the `exampleSite`-directory included in this theme to your source directory. That should give you a good idea about how things work, and then you can go on from there to make the site your own.

### Adding / editing content

#### Index-Page

The contents of the `index`-page may be changed by editing your `content/_index.md`-file.

#### Page

You can add **a new page** via running

```bash
hugo new my-new-page.md
```

#### Blog-Post

You can add **a new blog-post** via running

```bash
hugo new blog/my-new-post.md
```

### Adding your branding / colors / css

Add a `custom_head.html`-file to your `layouts/partials`-directory. In there you may add a `<style>`-tag, *or* you may add a `<link>`-tag referencing your own `custom.css` (in case you prefer to have a separate `.css`-file). Check out the [`style.html`](https://github.com/janraasch/hugo-bearblog/blob/master/layouts/partials/style.html)-file to find out which CSS-styles are applied by default.

## Remixes 🎭

The community has created some interesting variations of Hugo ʕ•ᴥ•ʔ Bear Blog. While the main theme stays true to the minimal Bear Blog philosophy, these remixes experiment with additional features:

* [Hugo ʕ•ᴥ•ʔ Bear Blog ✨ Neo](https://github.com/rokcso/hugo-bearblog-neo/) - Features Chinese documentation and an innovative "Toast" upvote system.

* [ᕦʕ •ᴥ•ʔᕤ Bear Cub](https://github.com/clente/hugo-bearcub) - A multilingual variant with experimental features like automatic social card generation.

_Note: These are independent forks maintained by their respective creators._

## Contributing & Community 🤝

Interested in contributing to Hugo ʕ•ᴥ•ʔ Bear Blog? Thanks for your interest!

- Check out our [Contributing Guidelines](CONTRIBUTING.md) for code contributions and bug reports
- [Share your story](https://github.com/janraasch/hugo-bearblog/issues/new/choose) if you're using the theme - we'd love to see what you've built!
- Have questions? You can find help in our [GitHub issues](https://github.com/janraasch/hugo-bearblog/issues) or the [Hugo Discourse](https://discourse.gohugo.io/)

We aim to keep this theme as simple and fast as the original [Bear Blog](https://bearblog.dev), while making it a friendly space for everyone to contribute and share their experiences.

## Development
Run the `exampleSite` locally via

```bash
hugo server --source ./exampleSite --themesDir ../..
```

## Special Thanks 🎁

A special thank you goes out to [Herman](https://herman.bearblog.dev), for creating the original [ʕ•ᴥ•ʔ Bear Blog](https://bearblog.dev/).

## License
[MIT License](http://en.wikipedia.org/wiki/MIT_License) © [Jan Raasch](https://www.janraasch.com)

[hugo-setup-guide]: https://gohugo.io/getting-started/installing
[light-screenshot]: https://raw.githubusercontent.com/janraasch/hugo-bearblog/master/images/screenshot.png
[dark-screenshot]: https://raw.githubusercontent.com/janraasch/hugo-bearblog/master/images/screenshot-dark.png
