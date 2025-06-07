# SaaS Template

A modern, full-stack SaaS template built with **Next.js 15**, **Tailwind CSS**, **Drizzle ORM**, and **Auth.js**. This template provides a solid foundation for building SaaS applications with authentication, database management, and modern development tooling. The UI is purposely left blank to allow you to build with your preferred library and components.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15, React 19, Tailwind CSS v4, Auth.js v5 and more
- **Authentication**: Auth.js v5 with Google OAuth and Magic Link email providers (Resend)
- **Database**: PostgreSQL with Drizzle ORM
- **Code Quality**: ESLint, Prettier, Husky pre-commit hooks
- **Type Safety**: Full TypeScript support
- **Database Migrations**: Automated with Drizzle Kit
- **Flexible UI**: No UI framework dependency - build with your preferred components

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Database**: [PostgreSQL](https://www.postgresql.org/)
- **ORM**: [Drizzle ORM](https://orm.drizzle.team/)
- **Authentication**: [Auth.js](https://authjs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Code Formatting**: [Prettier](https://prettier.io/)
- **Linting**: [ESLint](https://eslint.org/)
- **Git Hooks**: [Husky](https://typicode.github.io/husky/)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v20 or higher)
- [PostgreSQL](https://www.postgresql.org/) database
- [Git](https://git-scm.com/)

## 🎯 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/stephenw310/saas-template.git
cd saas-template
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Copy the `.env.example` file to `.env` and update the values:

### 4. Database Setup

Run the database migrations:

```bash
npm run db:migrate
```

### 5. Start Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your application running.

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run db:migrate` - Generate and run database migrations
- `npm run db:studio` - Open Drizzle Studio for database management

## 🔐 Authentication

This template supports multiple authentication methods:

### 1. Google OAuth

1. Create a project in [Google Cloud Console](https://console.cloud.google.com/)
2. Navigate to APIs & Services > Credentials
3. Configure the OAuth consent screen
4. Create OAuth 2.0 credentials (Web application)
5. Add authorized redirect URI: `http://localhost:3000/api/auth/callback/google` for development
6. Copy the client ID and secret
7. Add to `.env`

For more details, see the [Auth.js OAuth Guide](https://authjs.dev/getting-started/authentication/oauth)

### 2. Email Magic Link (Resend)

1. Sign up for [Resend](https://resend.com/)
2. Get your API key from the dashboard
3. Add it to your `.env` file
4. Update the sender domain in `src/lib/auth.ts` (currently set to "no-reply@company.com")
5. Verify the sender domain in the Resend portal

## 🗄️ Database Schema

The template uses the authentication schema provided by the [@auth/drizzle-adapter](https://authjs.dev/getting-started/adapters/drizzle) package, which includes:

- **users** - Core user accounts and profile data
- **accounts** - OAuth provider account links
- **sessions** - Active user sessions
- **verificationTokens** - Email verification tokens for magic links
- **authenticators** - WebAuthn authenticators

## 📁 Project Structure

```
src/
├── app/                  # Next.js App Router
│   ├── api/              # API routes
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # React components
│   └── auth/             # Authentication components
├── db/                   # Database configuration
│   ├── drizzle/          # Migration files
│   └── schema.ts         # Database schema
├── lib/                  # Utility functions
│   └── auth.ts           # Authentication configuration
└── middleware.ts         # Middleware
```

## 🔄 Development Workflow

This template includes several development tools to ensure code quality:

- **Pre-commit hooks**: Automatic code formatting and linting with Husky
- **Type checking**: Full TypeScript support across the entire codebase
- **Database migrations**: Automated schema management with Drizzle Kit
- **Code formatting**: Prettier with Tailwind CSS plugin for consistent styling
- **Linting**: ESLint with Next.js and Prettier configurations

## 🚀 Deployment

### Environment Variables

Make sure to set all required environment variables in your production environment:

- `DATABASE_URL` - PostgreSQL connection URL
- `AUTH_SECRET` - Random string used to encrypt cookies and tokens
- `AUTH_GOOGLE_ID` - Google OAuth client ID
- `AUTH_GOOGLE_SECRET` - Google OAuth client secret
- `RESEND_API_KEY` - API key from Resend for email authentication

**Important**: Remember to update the authorized redirect URI in your Google Cloud Console to match your production domain:
`https://your-domain.com/api/auth/callback/google`

### Vercel Deployment

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fstephenw310%2Fsaas-template)

### Docker Deployment

1. [Install Docker](https://docs.docker.com/get-started/get-docker/) on your machine.

2. Set `NEXTAUTH_URL` in your `.env` file to the URL of your Docker container. For example, if you are running the container on your local machine, you can set it to `http://localhost:3000`.

3. Build your container: `docker build -t saas-template .`

4. Run your container: `docker run -p 3000:3000 saas-template`

### Node.js Server Deployment

```bash
npm run build
npm run start
```

## 📝 TODO

- [x] ~~Docker deployment configuration~~
- [ ] Stripe payment integration
- [ ] Email templates

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT [LICENSE](LICENSE).

## 🆘 Support

If you have any questions or need help getting started, you can:

- Check the [Next.js documentation](https://nextjs.org/docs)
- Review the [Auth.js documentation](https://authjs.dev/)
- Open an [issue](https://github.com/stephenw310/saas-template/issues)

---

**Happy coding!** 🎉
