---
title: giammattei.co, Part Deux
draft: false
date: 2020-08-30
---

Welcome to the new and improved giammattei.co! While it may look and feel much the same as your last visit (if you were one of the 10 people to visit the site in its first year of existence), under the hood, everything is different. This site is now a single-page Angular app, and I thought it'd be fun to explain why I took the time to take a weed whacker to my code, and what gives the "modern" frameworks that now dominate the web their edge.

{% image "./giammattei-2.png", "A screenshot of the giammattei.co Angular app" %}

I made a very deliberate choice when [building this site out originally](../giammattei), which was to do it old-school. No fancy frameworks, no abstract magic, no templates. The structure, content and styles of the entire site were hand-coded, by me, line by line.

Just like the websites of old, my project directory had a collection of HTML files, each corresponding to a page on the site, a global CSS file that dictated the styles of all the page elements, and a collection of image assets. I used JavaScript for one purpose: showing and hiding the hamburger menu in mobile view.

And it worked! I had created a modern-looking, fully functional site, and I knew every inch of it and exactly how it worked. While I was spared the process of using FTP to deploy my site to a server, in most other ways I was doing web development the way that we all did 10+ years ago.

Along the way, I discovered The Pain Points.

### Don't Repeat Yourself

Here's the thing about doing things the old way: there's no abstraction. The biggest lesson of modern programming is DRY: Don't Repeat Yourself.

Unfortunately this is unavoidable when editing static HTML. The header, navigation menu, and footer for my site are the same regardless of what page you're on, but this is because each of my HTML docs has the same exact code at the top and bottom. If I were to change my design, I would have to go into every single HTML document and make the changes individually to each page. This makes my programmer brain scream, and disincentivized me from making frequent additions to the site; any new post would involve a lot of custom HTML to show properly, which is more inertia to overcome.

A much better way to handle this problem would be to store the header and footer code in ONE place, and then call that code for each new page. That way, if you redesign the footer, you change the code in one place and everyone gets that change for free. Ultimately that's what my Angular app now does: the App Component has all the shared HTML from my old site, and in between the header and footer, where the actual content is, is a router outlet that dynamically loads in the content required based on the url. Pretty cool!

### Dynamic Generation

Extending this concept further, there's room for improvement in the content itself. Take a look at some code from my old site's Projects page:

```
<div class="projects">

  <div class="project">
    <div class="overlay"></div>
    <a href="kerfcase.html">
    <img src="images/kerfcase-cover.png" alt="kerfcase">
  </a>
  <h3><a href="kerfcase.html">KerfCase.com</a></h3>

  </div>
  <div class="project">
    <div class="overlay"></div>
    <a href="minesweeper.html">
    <img src="images/minesweeper-cover.png" alt="minesweeper"></a>
      <h3><a href="minesweeper-project.html">Minesweeper</a></h3>

  </div>
  <div class="project">
    <div class="overlay"></div>

      <img src="images/giammattei-co-cover.png" alt="giammattei.co"></a>
      <a href="giammattei.html" alt="giammattei.co"><h3>giammattei.co</a></h3>
  </div>
</div>
```

This produced a nice set of elements describing my various projects that looked like this:

{% image "./old-projects.png", "A screenshot of project elements on my homepage" %}

This looks cool, but it's all done by hand. Which means that if I add a project to my site, I need to write the code to get it to show up in this list. That's more friction than I want, especially when I can use JavaScript to make it happen automatically.

The Angular solution to this problem looks something like this:

```html
<div class="projects">
  <div class="project" *ngFor="let project of projects">
    <div class="overlay"></div>
    <a routerLink="post/{{project.url}}">
      <img src="assets/images/{{project.img-url}}"></a>
    <h3><a routerLink="post/{{project.url}}>{{project.title}}</a></h3>
  </div>
</div>
```

That's it! This code loops through all my projects and dynamically generates the proper HTML for me, so when I add a new project I don't have to spend time putting it in the right place. Instead of a lot of code writing, I just need to update a few pieces of metadata in a configuration file, and Angular does the rest. This functionality is what allowed me to change my homepage from a static welcome page to a dynamic, reverse-chronological series of posts.

### Markdown

What I'm maybe proudest of is the way I write posts now. Previously, once again, my blog posts were written in HTML. It's not ideal to have to format your post as code while you're trying to write; those are two different mental modes that don't mix well. But I also didn't want to have to rely on a third-party blog editor to make my posts, or worse, write one myself.

Enter Markdown. Invented by John Gruber of [Daring Fireball](daringfireball.net) fame, markdown is a markup language that is easy to read in code form, and easy to convert to HTML. Here's what markdown looks like:

```markdown
# This is a Header

This is a paragraph.  A beautiful, beautiful paragraph.

- bullet 1
- bullet 2

[link](giammattei.co)
```

Here's what the HTML it converts to looks like:

```html
<h1>This is a Header</h1>
<p>This is a paragraph.  A beautiful, beautiful paragraph.</p>
<ul>
  <li>bullet 1</li>
  <li>bullet 2</li>
</ul>
<a href="giammattei.co">link</a>
```

And here's how it renders on a page:

# This is a Header

This is a paragraph. A beautiful, beautiful paragraph.

- bullet 1
- bullet 2

[link](giammattei.co)

If this looks familiar, you might recognize it from Reddit's comment formatting instructions, or GitHub's readme.md file. Once you understand how to write it (and it doesn't take long at all), you'll see it in all sorts of places! Markdown has caught on in a big way, and it's easy to see why.

Using the [ngx-markdown](https://www.npmjs.com/package/ngx-markdown) library, I can write my posts directly in my code editor and Angular can turn them into HTML automatically, while giving me complete control over their style and layout. It's the missing piece to having a truly productive blogging platform, that lets me write posts when I want to write posts, and not have to worry about the code part unless I want to be worried about it.

### Going Forward

Im still picking up the pieces on the other side of my migration, but I'm pleased with my new workflow and hope to take advantage of the fact that it's now much easier for me to post here. Let me know if you have any questions about the update, if you notice any bugs, or if you have any ideas for future posts!
