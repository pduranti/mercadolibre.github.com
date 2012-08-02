# How to test the site locally

This uses `github pages` and github pages uses `jekyll`.

You need to install rubygems:

```bash
sudo apt-get install rubygems
sudo gem install jekyll
sudo easy_install Pygments
```

And then run it with:

```bash
jekyll --pygments --safe --auto
```

Go to: http://localhost:4000/ and you should be able to see the Site.

If you are on Ubuntu 11.10, you may encouner this error:

```Invalid gemspec in [/var/lib/gems/1.8/specifications/directory_watcher-1.4.1.gemspec]: invalid date format in specification: "2011-08-30 00:00:00.000000000Z"
```

To fix it, edit the date line in /var/lib/gems/1.8/specifications/directory_watcher-1.4.1.gemspec from "s.date = %q{2011-08-30 00:00:00.000000000Z}" to "s.date = %q{2011-08-30}".