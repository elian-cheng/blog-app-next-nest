<h3 align="center">Next.js/Nest.js Blog Application</h3>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Overview](#overview)
2. 🚀 [Deploy](#deployment)
3. ⚙️ [Tech Stack](#tech-stack)
4. 🔋 [Features](#features)
5. 🤸 [Quick Start](#quick-start)

## <a name="overview">🤖 Overview</a>

This project is a simple blog application built with Next.js and TypeScript, featuring a responsive design with Tailwind CSS. It includes a comprehensive RESTful API backend developed using Nest.js and MongoDB. The application allows users to create, read, update, and delete blog posts, with content managed via a WYSIWYG editor and displayed as HTML.

## <a name="deployment">🚀 Deploy</a>

### Front-end deploy:

https://elian-next-nest-blog.vercel.app

### Back-end server deploy:

https://elian-next-nest-blog-api.onrender.com

## <a name="tech-stack">⚙️ Tech Stack</a>

### Front-end:

- Next.js
- TypeScript
- Tailwind CSS

### Back-end:

- Nest.js
- TypeScript
- MongoDB

### Deploy:

- Vercel (Front-end)
- Render (Back-end)
- MongoDB Atlas (Database)

## <a name="features">🔋 Features</a>

👉 **Responsive Home Page with Blog Post Grid**: A responsive home page displaying all blog posts in a grid layout, optimized for both mobile and desktop views.

👉 **Individual Post Pages**: Each post has its own dedicated page, showcasing the title, main (banner) image, and full article content rendered as HTML.

👉 **WYSIWYG Editor**: A built-in WYSIWYG editor (i.e., react-quill) for creating and editing blog posts, allowing users to format their content with ease.

👉 **RESTful API**: A complete RESTful API to manage blog posts, including endpoints to create, retrieve, update, and delete posts, with comprehensive error handling and data validation.

👉 **Swagger Documentation**: API documentation implemented with Swagger for easy reference and testing.

👉 **Admin Page**: A simple management page for administrating blog posts, including pagination support for efficient content browsing.

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Install instructions**:

### Front-End:

```bash
1. git clone https://github.com/elian-cheng/blog-app-next-nest.git
2. cd blog-app-next-nest
3. git checkout front
4. npm i
5. npm run start
```

### Back-End:

```bash
1. git clone https://github.com/elian-cheng/blog-app-next-nest.git
2. cd blog-app-next-nest
3. git checkout back
4. create and add all necessary variables to .env file
5. npm i
6. npm run start
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your server project and add the following content:

```env
DATABASE_URL=
```

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project front-end.
Open [http://localhost:5000](http://localhost:5000) in your browser to view the project back-end.
Open [http://localhost:5000/docs](http://localhost:5000/docs) or [https://elian-next-nest-blog-api.onrender.com/docs](https://elian-next-nest-blog-api.onrender.com/docs) in your browser to view the project API Swagger documentation.
