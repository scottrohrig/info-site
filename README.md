# info-site

My Info Card

[scottrohrig.com](http://www.scottrohrig.com)

## Hosting Namecheap Domain via GitHub Pages

1. Purchase Namecheap.com domain
1. Configure Domain
    1. Sign in to namecheap and navigate to `Domain List`
    1. Select the `Advanced DNS` tab (or option from collapsing menu on mobile)
    1. Click the `ADD NEW RECORD` button for each of the following

    |Type|Host|Value|TTL|
    |-|-|-|-|
    |CNAME Record|www|yourusername.github.io|Automatic|
    |A Record|@|185.199.108.153|Automatic|
    |A Record|@|185.199.109.153|Automatic|
    |A Record|@|185.199.110.153|Automatic|
    |A Record|@|185.199.111.153|Automatic|

1. Configure Repository Pages Settings
    1. Create repository
    1. Make sure your repository has the entry point files (index.html, etc.)
    1. Go to the repository's Settings > Pages
    1. Configure your deploy branch (eg, `main`)
    1. Under `Custom Domain` input your Namecheap domain and click `Save`

[more info](https://dev.to/pauljwil/connect-github-pages-to-your-namecheap-domain-4gjj)

## My Info Site on IPFS

This site was deployed to IPFS via github pages and uses [fleek.co](https://app.fleek.co) as a service to interact with IPFS.

Fleek notified users of a change in services for storage. As of 1/16/2023 Fleek's Storage API will be depricating old URLs and introduce new rules to terminate support for html, css, and js files served through storageapi.fleek.co.

To learn how to migrate see the [Custom Storage API Domains Documentation](https://docs.fleek.co/storage/custom-storage-domains)

I haven't confirmed that this will break my info-site. 
