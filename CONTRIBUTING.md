# Contributing

## Reporting issues

Please report all kind of issues via [Github Issues](https://github.com/androidchat/androidchat.github.io/issues). Depending on what kind of issue it is, also provide the relevant additional information:

### Code related

#### Design

* Screenshot(s) focused on the area of attention, no fullscreen screenshots unless relevant.
* Operating system and version.
* Browser and version.

#### Jekyll

Please make sure you are running the latest version of the required software and have the most up-to-date code before you file an issue related to Jekyll.

* Operating system and version.
* Local setup.

### Blog post related

* Mention the author (@author).
* Relevant blog post file.

### Other

* Just don't say that "it doesn't work".

## Writing a blog post

Everyone active in the Slack channel can submit a blog post. You don't need to ask for permission, but know that every blog post will undergo a review before being posted to the website.

### Get started

1. Fork the repository on Github.
2. Clone your fork locally:
	```bash
	$ git clone git@github.com:your_name_here/androidchat.github.io.git
	```

3. Create a new `.md` file in _drafts in the format `Title-of-the-post` or in _posts in the format `YYYY-MM-DD-Title-of-the-post`. The date of publication needs to be of the current day or one in the future. [Grammar](#grammar) applies for the title in the file name too.
4. The front matter in your Markdown file needs to follow the following guidelines:
	* Layout always needs to be post.
		```yaml
		layout: post
		```

	* Titles need to follow the [English grammar](#grammar), short and not be clickbait.

		**Bad:**
		```yaml
		title: The nuclear fallout is upon is!
		```

		**Good:**
		```yaml
		title: Nuclear material design
		```

	* A maximum amount of 3 categories and 3 tags can be assigned to a post. Categories are shown in the URL, tags are currently only shown in the Atom feed.

		```yaml
		categories: singlecategory
		tags: singletag
		```

		```yaml
		categories:
		  - global
		  - startup
		  - entrepreneur
		tags:
		  - money
		  - money
		  - money
		```

	* Add yourself to `_data/authors.yml` and add use your Github username as the value of the author variable. Use a list if there were multiple authors that worked on the article.

		```yaml
		authors: github_username
		```


		```yaml
		authors:
		  - github_author1
		  - github_author2
		  - github_author3
		```

	* A custom header is optional, but it is required to either own the copyright of the original image or for the original image to be royalty free and allowed to be used without attribution (e.g: [CC Zero](https://creativecommons.org/publicdomain/zero/1.0/)).

		When using a custom header, uploading the *original* high quality image is required. If you have imagemagick installed, you can create a compressed version using the following command:

		```bash
		convert -strip -interlace Plane -quality 85% -resize 1440 -gravity center -crop '1440x480+0+0' source.jpg destination.jpg
		```

		Original header images should be stored in `/img/headers/original` and compressed header images in `/img/header/compressed`. Providing a compressed header reduces the review time as this makes it easier for editors to review and publish your post. Please also use lowercase and hyphen-separated names.

		_Please do not add any kind of gradient to the image as that will be added via CSS._

5. The content of the post is up to you. It is however possible to have a foreword if you so desire. Make sure the first paragraph is _italic_ and a bottom margin will be added.

	**Foreword example:**
	```markdown
	_Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem tempore similique esse dolorem aliquam, commodi id nam, maiores qui eveniet minima a accusamus consequatur quam. Eius ducimus, quo corporis illo._
	```

6. Push the changes to the fork and make a pull request.

## Coding style guidelines

Please use 2 space indentation for YAML files and tab indentation for other files. When in doubt, look at the existing code. [Create an issue](#reporting-issues) if you have any questions.

## Commits

Commits are required to be atomic. Please test your code using a local Jekyll installation for Github Pages. A [how to](https://help.github.com/articles/using-jekyll-with-pages/) is provided by Github. Please also squash commits before merging and making a pull request.

### Messages

> As a general rule, your messages should start with a single line that’s no more than about 50 characters and that describes the changeset concisely, followed by a blank line, followed by a more detailed explanation. The Git project requires that the more detailed explanation include your motivation for the change and contrast its implementation with previous behavior – this is a good guideline to follow. It’s also a good idea to use the imperative present tense in these messages. In other words, use commands. Instead of “I added tests for” or “Adding tests for,” use “Add tests for.” Here is a template originally written by Tim Pope:
>
> ```
> Short (50 chars or less) summary of changes
>
> More detailed explanatory text, if necessary.  Wrap it to
> about 72 characters or so.  In some contexts, the first
> line is treated as the subject of an email and the rest of
> the text as the body.  The blank line separating the
> summary from the body is critical (unless you omit the body
> entirely); tools like rebase can get confused if you run
> the two together.
>
> Further paragraphs come after blank lines.
>
>   - Bullet points are okay, too
>
>   - Typically a hyphen or asterisk is used for the bullet,
>     preceded by a single space, with blank lines in
>     between, but conventions vary here
> ```

[Git commit guidelines](https://git-scm.com/book/ch5-2.html)

Also see [Grammar](#grammar).

## Grammar

Please use standard English grammar. This Does Not Mean A Capital For Every Word You Type. There are exclusions to this rule. Some tiles might have some branding in them or a parody of a branding, in any case just try to keep it to a minimum.
