# Week 1
## First web page taster for development

1. Visit https://vscode.dev
2. Click on New file on the welcome page
3. Type in “index.html” in the popup
4. Save the file in a folder such as Desktop > My first webpage > index.html
5. This file can be edited on vscode. index.html is the common file for the homepage of any website.
6. The first line on this index.html file is to write or copy and paste this

```html
<!DOCTYPE html>
```

This goes on every web page before anything else. It ensures the browser renders the page in standards mode rather than "quirks mode," preventing display inconsistencies across different browsers.
7. Underneath that add

```html
<html>

</html>
```
8. All content and element tags are place within the \<html> \</html> tags. Next add the \<body> tags.

9. Most html element tags begin in this syntax \<body> and end with \</body>.
```html
<!DOCTYPE html>
<html>
  <body>

  </body>
</html>
```
10. Within the \<body> tags are used for all the content that is displayed to the user. 
11. Next add an \<h1> heading the to the web page.

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>Hello, World!</h1>
  </body>
</html>
```


12. If you open up the file on your device by using Google Chrome or your preferred browser, you can see the first output of the web page.

13.  You can then add \<p> paragraph on the next line
```html
<h1>Hello, World!</h1>
<p>This is my first website</p>
```
14. Reload the web page of index.html on your browser to see your changes.
15. Next, add the \<head> tags which are used for non-page content items and metadata. This goes above and outside the \<body> tag but within the \<html> tag
```html
<!DOCTYPE html>
<html>
  <head>

  </head>
  <body>
    <h1>Hello, World!</h1>
  </body>
</html>
```
16. Within the \<head> tag, add the page \<title> of the web page which displays on the browser tab or bookmark of the web page
```html
<head>
   <title>My first website</title>
</head>
```

17. The final code should look like this
```html
<!DOCTYPE html>
<html>
  <head>
    <title>My first website</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <p>This is my first website</p>
  </body>
</html>
```
You may notice that the tags or code have indentation and not stacked up randomly. This is a code readability best practice for other developers to look at code neatly. This is known as Linting. Most code editors detect this if installed and will prompt to fix the style of writing code or will do it for you.  


