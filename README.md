# Blog in Next.js
A sample blog made in Next.js with dynamic routes, next.js backend and markup language to create well-formatted posts.

## 💡 Concept
A blog created in Next.js to practice dynamic routes and serving posts formatted from markup language. Styled with CSS Modules. Simplistic in style, parallax effect on hero section. Fully functioning contact form connected with mongoDB.

## 📦 Tech stack:
- Next.js
- CSS modules
- React-markdown
- mongodb
- gray-matter
- react-syntax-highlighter


## 💻 Demo
Click the link and check the app: [Link](https://ms-blog-nextjs.netlify.app/)

### Screenshot

![](./public/images/site/screenshot.JPG)


## 💾 Installation
git clone https://github.com/marcinsuski/blog-nextjs.git

npm install
## Dev server: 
npm run dev
## Prod server:
npm run build  
num start

## environment variables:
For contact form to function properly, env. variables have to be set in `next.config.js` (in main project folder). You can set variables for dev server and prod server independently if you wish:

```js
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            env: {
                mongodb_username: "<username>",
                mongodb_password: "<password>",
                mongodb_clustername: "<cluster-name>",
                mongodb_database: "database-name-dev",
            },
        };
    }

    return {
        env: {
                mongodb_username: "<username>",
                mongodb_password: "<password>",
                mongodb_clustername: "<cluster-name>",
                mongodb_database: "database-name-prod",
        },
    };
};
```


## ☎️ Contact
In case of any comments or advice, You can e-mail me or use Issues :)

## 🧙‍♂️ Author
- GitHub - [Marcin Suski](https://github.com/marcinsuski)
- LinkedIn - [marcin-suski](https://www.linkedin.com/in/marcin-suski/)
- Porftolio - [marcinsuski.pl](https://marcinsuski.pl)
