## Canonical Vanilla-Framework Test
This is a very simple cards application that leverages on Canonical's [Vanilla-Framework](https://vanillaframework.io/docs).
It fetches artcile data from Canonical's wordpress API and renders the UI built with Vanilla-Framework.

## Run code locally 
Follow the steps below to run the project locally

### Install depencies
Open up your terminal and run the following command to install dependencies
`yarn install` or `npm install`

### Bundle files
Next run the following command to bundle files for prod
`yard build` or `npm run build`
If you make changes to the `SCSS` file, run the following to compile it to `CSS`
`yarn build-css` or `npm run build-css`
or watch `SCSS` changes in real time
`yarn watch-css` or `npm run watch-css`

You can spin up the local server for preview using "Live Server"