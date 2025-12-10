# Starling Strategies

**Precision Engineering for Business & Research.**

This is the official portfolio and business website for **Starling Strategies** (Dr. Jamie Wubben). It showcases services in **Website Development**, **AI & Automation**, and **R&D Consulting**, along with a portfolio of selected projects.

## 🚀 Purpose

The goal of this website is to:
1.  **Showcase Expertise**: Highlight technical capabilities in UAVs, AI, and Web Development.
2.  **Generate Leads**: Provide a clear path for potential clients to contact Starling Strategies for freelance work or consulting.
3.  **Demonstrate Quality**: The website itself serves as a portfolio piece, demonstrating high-performance web development skills (SEO, i18n, responsive design).

## 🛠️ Tech Stack

Built with modern, high-performance technologies:

-   **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Internationalization**: [next-intl](https://next-intl-docs.vercel.app/) (English, Dutch, Spanish)
-   **Content**: Markdown-based project portfolio
-   **Email**: Nodemailer (SMTP)

## 📂 Project Structure

Here is a quick overview of the most important directories:

```
.
├── content/
│   └── projects/       # Markdown files for project portfolio items (per language)
├── messages/           # Translation files (en.json, nl.json, es.json)
├── public/             # Static assets (images, icons)
├── src/
│   ├── app/
│   │   ├── api/        # API routes (e.g., contact form handler)
│   │   └── [locale]/   # Main application pages (Home, About, Services, Contact)
│   ├── components/     # Reusable UI components (ContactForm, CompetencyCard, etc.)
│   └── middleware.ts   # Internationalization middleware configuration
└── .env.local          # Environment variables (SMTP credentials)
```

## 📝 How to Update Content

### 1. Changing Text & Translations
All text content is stored in JSON files in the `messages/` directory.
-   **English**: `messages/en.json`
-   **Dutch**: `messages/nl.json`
-   **Spanish**: `messages/es.json`

Simply edit the values in these files to update the text on the website. The keys (e.g., `HomePage.hero.title`) must remain consistent across all files.

### 2. Adding/Editing Projects
Projects are stored as Markdown files in `content/projects/[locale]/`.
To add a new project:
1.  Create a new `.md` file in the appropriate language folder (e.g., `content/projects/en/my-new-project.md`).
2.  Add the required frontmatter at the top:
    ```yaml
    ---
    title: "Project Title"
    role: "Your Role"
    category: "Category (e.g., AI & Automation)"
    tags: ["Tag1", "Tag2"]
    date: "YYYY-MM-DD"
    url: "https://link-to-project.com" (optional)
    ---
    ```
3.  Write the project description below the frontmatter using standard Markdown.

### 3. Styling
Styling is handled via **Tailwind CSS** classes directly in the React components (`src/components/` or `src/app/`). Global styles are defined in `src/app/globals.css`.

## 💻 Getting Started

To run this project locally:

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Configure Environment Variables**:
    Copy `.env.example` to `.env.local` and fill in your SMTP credentials for the contact form to work.
    ```bash
    cp .env.example .env.local
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📧 Contact Form
The contact form uses **Nodemailer** to send emails via an SMTP server.
-   It sends an **Admin Notification** to `info@starlingstrategies.be`.
-   It sends an **Automated Confirmation** to the user in their selected language.

Ensure `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, and `SMTP_PASS` are correctly set in `.env.local`.
