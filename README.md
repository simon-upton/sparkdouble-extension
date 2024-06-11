<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/simon-upton/sparkdouble-extension">
    <img src="https://i.ibb.co/n0zXNVC/sparkdoublelong.png" alt="SparkDouble Long Logo">
  </a>

  <h3 align="center">SparkDouble Extension</h3>

  <p align="center">
    The Chrome extension/frontend for the <a href="https://github.com/simon-upton/sparkdouble-server">SparkDouble Discord bot</a>, allowing users to share Magic: The Gathering cards to their Discord servers.
    <br />
    <!-- TODO: replace URLs with Chrome extension page and Discord bot invite link  -->
    <h3 style="text-align: center;"><a href="https://example.com">Invite Discord bot</a> - <a href="https://example.com">Install Chrome extension</a></h3>
    <a href="https://github.com/simon-upton/sparkdouble-extension/issues/new?labels=bug&template=bug_report.md">Report Bug</a>
    ·
    <a href="https://github.com/simon-upton/sparkdouble-extension/issues/new?labels=enhancement&template=feature_request.md">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<!-- <details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details> -->

<!-- ABOUT THE PROJECT -->

## About SparkDouble

<div align="center">
  <img src="https://i.ibb.co/vXSK3YH/Sequence01-3-downscaled66-optimized.gif" alt="Sequence01-3-downscaled66-optimized" border="0">
</div>

<!-- TODO: replace URLs with Chrome extension page and Discord bot invite link  -->

The SparkDouble [Chrome extension](https://example.com) and [Discord bot](https://example.com) lets users **instantly share cards from popular Magic: The Gathering websites** such as [EDHREC](https://edhrec.com/) and [Scryfall](https://scryfall.com/) to their Discord servers.

Intended to be easy to set up and forget about, users can send Magic cards to their friends by pressing a keyboard shortcut, without ever leaving their browser or struggling against the correct channel/command/card name combination to showcase that new card you're talking about (how many Jace variants could there possibly be?!) This means you could discuss new card pickups, recently released cards, or (my favorite) collaborate on decklists without the pain of (for example)

This Chrome extension utilizes the Express.js API provided by the server to relay card data into the user's saved Discord server.

### Built With

[![Chrome][Chrome.com]][Chrome-url]
[![Javascript][Javascript]][Javascript-url]
[![CSS][CSS]][CSS-url]
[![HTML][HTML]][HTML-url]

<!-- GETTING STARTED -->

## Getting Started

### If you just want to use SparkDouble, install the [Chrome extension](https://example.com) and the [Discord bot](https://example.com), and follow the few setup steps.

To get a local copy for development, follow these steps.

### Prerequisites

- A relatively recent version of Chrome

- This extension has no dependencies! :)

### Installation

#### Development

1. Clone the repo.
   ```sh
   git clone https://github.com/simon-upton/sparkdouble-extension.git
   ```

You're good to go! Use `chrome://extensions` in developer mode to load the unpacked extension while working.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

To get started as a user, install the [Chrome extension](https://example.com) and the [Discord bot](https://example.com), and follow the few setup steps.

To setup the Chrome Extension, install it from the link above, and open the settings popup:

<div align="center">
  <img src="https://i.ibb.co/D4bGYh1/Screenshot-2024-06-10-at-5-27-13-PM.png" alt="Screenshot-2024-06-10-at-5-27-13-PM" border="0" height="400px" >
</div>

Enter your Discord `User ID` and the `Secret Token` retrieved from the [Discord bot](https://example.com), then press save. Now, using the (platform dependent!) keybind in the popup, share cards from sites such as [EDHREC](https://edhrec.com/) and [Scryfall](https://scryfall.com/).

<!-- ROADMAP -->

## Roadmap

- [ ] Validate image URLs to be sent to only be Magic cards
- [ ] Make user sign in with OAuth instead of using their Discord user id for security
- [ ] Add unit tests
- [ ] Consider migrating to Typescript
- [ ] Support Firefox

See the [open issues](https://github.com/simon-upton/sparkdouble-extension/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Any contributions/help offered are much appreciated. Thank you! :)

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See [LICENSE](https://github.com/simon-upton/sparkdouble-extension/blob/5fa8d48b3c1260799a1bf9f34e14cd27e86da6d8/LICENSE) for more information.

<!-- CONTACT -->

## Contact

Simon Upton - simon@uptonhome.com

Project Link: [https://github.com/simon-upton/sparkdouble-extension](https://github.com/simon-upton/sparkdouble-extension)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

<!-- ## Acknowledgments -->

[Chrome.com]: https://img.shields.io/badge/Google%20Chrome-4285F4?style=for-the-badge&logo=GoogleChrome&logoColor=white
[Chrome-url]: https://www.google.com/chrome/
[Javascript]: https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E
[Javascript-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[CSS]: https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white
[CSS-url]: https://developer.mozilla.org/en-US/docs/Web/CSS
[HTML]: https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white
[HTML-url]: https://developer.mozilla.org/en-US/docs/Web/HTML
