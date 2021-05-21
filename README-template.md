# Frontend Mentor - Coffeeroasters subscription site solution

This is a solution to the [Coffeeroasters subscription site challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/coffeeroasters-subscription-site-5Fc26HVY6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site
- Make selections to create a coffee subscription and see an order summary modal of their choices

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

### placing images in divs has some benefits

margins will expect how you would expect
shifting and flexing will work how you would expect
see commitment imagebox

```js
<div className={styles.commitment_imagebox}>
	<img src='/assets/about/mobile/image-commitment.jpg' alt='' />
</div>
```

![](./README-assets/ScreenShot2.png)

### practical use of an ::after element

I had just learned to use psuedo elements in the my last project and in this project i had two great opportunities to use them. The process for this was pretty simple. Under the psudeo element selector make sure you have something for content, then set a size, position, z-index and background so you can see someting. This can be used to create elements that are inside another element but are going to be positioned absolute within their parent.

```css
.quality_container {
	text-align: center;
	padding: 24px;
	margin: 120px 24px 0px;
	position: relative;
	color: var(--light-cream-100);
	&::after {
		content: '';
		background-color: var(--dark-greyblue-900);
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
		height: 80%;
		z-index: -1;
		border-radius: 12px;
	}
}
```

### cascading margin-bottom on each structure of the component

so in the quality element i have margin on the bottom of the image, the header, and the bottom of the content div. Not shown here i also have margin bottom on the entire container for this component. I liked using margin bottom in this way because it keeps things spaced in a easy to maintain way instead of having one component with both a margin top and bottom that may have conflicting margin tops and bottoms with another compoenet.

```css
.quality_imagebox {
	max-height: 400px;
	margin-bottom: 48px;
	border-radius: 12px;
	overflow: hidden;
}
.quality_textcontent {
	margin-bottom: 61px;
	h2 {
		font-size: var(--md-header-fs);
		margin-bottom: 30px;
	}
	p {
		font-size: var(--md-body-fs);
	}
}
```

![](./README-assets/ScreenShot1.png)

### dynamic background-image hero component using inline jsx styles

I was trying to find a way to build a hero component for the about page and subscribe page and was trying to find a way specifically to change the backround image based on a string that was passed in to the component. It took me a minute as i was trying to think of a way that didnt involove styled components to use the javascript value to change the css value. I eventually rember the good ol basics of inline css styles. I used this in my jsx to cleanly acheive what i needed. To keep the markup clean i used the 'container' class to add the other desired styles to this div.

```ts
interface HeroCardProps {
	title: string
	description: string
	bgURL: string
}

export const HeroCard: React.FC<HeroCardProps> = ({ bgURL, title, description }) => {
	return (
		<div
			className={styles.container}
			style={{ backgroundImage: `url(${bgURL})`, backgroundColor: '#333' }}
		>
			<div className={styles.textcontent}>
				<h1>{title}</h1>
				<p>{description}</p>
			</div>
		</div>
	)
}
```

## text in background postion absolute

![](./README-assets/ScreenShot3.png)

```css
.what_container {
	margin-bottom: 120px;
	position: relative;
	margin-top: 203px;
	h2 {
		font-size: var(--xl-header-fs);
	}
	@media (min-width: 768px) {
		h2 {
			font-size: 96px;
			z-index: -1;
			display: block;
			position: absolute;
			left: 0;
			right: 0;
			top: -80px;
		}
	}
```

### Continued development

### Useful resources

https://fossheim.io/writing/posts/css-text-gradient/

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
