# @terminal/uikit

## UI Components and helpers for frontends

## How the build works:

The package is built with Vite library mode into the root folder as a preinstall step. This allows us to use the package in the following way - `@terminal/uikit/components/button`, without any extra configurations.
Raw SCSS files simply moved to root folder after Vite bundle.

Because of this, the `.gitignore` file is written by the selection method - only included files are uploaded to Vite. This is done to ignore all files not listed that may be added in the future.

## External libraries:

All libraries must be installed in the parent project because they are automatically excluded from the build as externals.

See: `vite.config.ts`.

## Usage:

Import root `index.scss` before usage of components is necessary for proper work of UIKit.
