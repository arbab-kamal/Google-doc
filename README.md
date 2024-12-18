# Docs - Collaborative Document Editor

A real-time collaborative document editor built with **Next.js 15**, **Liveblocks**, **Tiptap**, **Shadcn UI**, and **Tailwind CSS**, featuring a rich set of tools for document creation and team collaboration.

![Screenshot](<https://github.com/arbab-kamal/Google-doc/blob/main/public/Screenshot%20(82).png>)

## 🚀 Key Features

### Core Editor Capabilities

- 📝 **Rich Text Editor** - Fully-featured text editing with Tiptap
- 🎨 **Text Formatting Tools** - Bold, Italic, Underline, Strikethrough, and more
- 📝 **Lists and Checklists** - Ordered, unordered lists, and task lists
- 🔗 **Link Embedding** - Easily add and manage hyperlinks
- ↩️ **Undo/Redo History** - Smooth editing experience
- 📋 **Copy and Paste Formatting** - Maintain consistency while copying styles
- 🖼️ **Image Uploads** - Add visuals to your documents
- 📊 **Table Support** - Add tables for structured content
- 📏 **Margin Controls** - Adjust margins to format your documents
- ⬇️ **Export Options** - Export documents as **PDF, HTML, TXT, or JSON**

### Collaboration Features

- 🤝 **Real-time Collaboration** - Edit documents simultaneously with your team
- 🎯 **Cursor Tracking** - See other users' cursors live on the document
- 💭 **Comments and Mentions** - Add comments and tag users for feedback
- 🔔 **Notification System** - Stay updated with real-time notifications
- 👥 **User Profiles** - Profile-based collaboration

### Workspaces and Organization

- 🏢 **Organization Workspaces** - Manage team documents in shared workspaces
- ✉️ **Organization Invites** - Invite team members easily to your workspace
- 🔒 **Authentication** - Secure user login with Clerk

### Responsive and Deployment

- 📱 **Responsive Design** - Fully optimized for all devices
- ⚛️ **Framework** - Powered by **Next.js 15**
- 🎨 **UI Design** - Built with **Shadcn UI** and **Tailwind CSS**
- 🚀 **Deployment** - Deployed on **Vercel**

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **UI**: Shadcn UI, Tailwind CSS
- **Editor**: Tiptap
- **Collaboration**: Liveblocks
- **Authentication**: Clerk
- **Database**: Convex
- **Deployment**: Vercel

## ⚙️ Environment Variables

To run the project locally, set up the following environment variables:

```bash
CONVEX_DEPLOYMENT=dev:beaming-okapi-98
NEXT_PUBLIC_CONVEX_URL=<Your_Convex_URL>
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<Your_Clerk_Public_Key>
CLERK_SECRET_KEY=<Your_Clerk_Secret_Key>
LIVEBLOCKS_SECRET_KEY=<Your_Liveblocks_Secret_Key>
```

## 🚀 Getting Started

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/arbab-kamal/Google-doc.git
   cd <project-folder>
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Add Environment Variables**:
   Create a `.env.local` file and add the required environment variables listed above.

4. **Run the Development Server**:

   ```bash
   npm run dev
   ```

   Visit [http://localhost:3000](http://localhost:3000) to use the app.

5. **Build for Production**:
   ```bash
   npm run build
   npm start
   ```

## 📂 Project Structure

```plaintext
src/
├── components/     # UI Components (Buttons, Input, etc.)
├── editor/         # Tiptap Rich Text Editor configurations
├── hooks/          # Custom hooks
├── lib/            # Utilities and libraries
├── pages/          # Next.js pages
├── styles/         # Tailwind and global styles
└── utils/          # Helper functions
```

## 🌐 Deployment

The project is deployed using **Vercel** for seamless hosting and CI/CD:

- Vercel Dashboard: [Insert Vercel Project Link]

## 🤝 Collaboration

- **Team**: `arbab-kamal`
- **Project**: `google-doc-28706`

## 📝 Screenshots

## 📄 License

This project is licensed under the MIT License.
