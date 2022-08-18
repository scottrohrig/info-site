# info-site

My Info Card

[scottrohrig.com](http://scottrohrig.com)

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