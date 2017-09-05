# WP Seed with SASS support

WP Seed with SASS support

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

1. Download Wordpress and install to project folder (MAMP, XAMPP etc.)
2. Navigate to the wordpress root folder and clone this repo
   git clone https://github.com/Maaggel/WP-Seed.git
3. Rename the new folder "WP-Seed" to "src"

### Installing

This setup utilize gulp tasks to compress the content, and move it to the correct locations.
To install and run this, please run
```
npm-install
```

## Development

To run a development enviroment, please start the Gulp watch tash
```
gulp watch
```

This project supports SASS.
If a SASS is used in the plugins or templates folder, they will be compressed and converted to CSS.

## Build

To build this, simply gulp the content
```
gulp
```
This will run the same as gulp watch, so if you've just watched, you won't have to gulp again

## Deployment

To deploy this, please install Wordpress on the desired server.
After this, you can upload the /wp-content/plugins and /wp-content/templates from the local Wordpress folder, to your server.

## Authors

- Initial work: [Maaggel](https://github.com/maaggel)