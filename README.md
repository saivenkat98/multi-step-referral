# 🩺 Wekare360 – Multi-Step Patient Referral Intake App

A modern, responsive, and fully functional multi-step referral intake application built using **Next.js 14 (App Router)**, **TypeScript**, **TailwindCSS**, and **React Hook Form**.

This project streamlines patient referral submissions for healthcare providers and is complete with validation, state persistence, file uploads, CI/CD, testing, and API documentation via Swagger.

---

## 🚀 Features

- ⚛️ Built with **Next.js 14** using the App Directory
- 📋 Multi-step form with persistent state using **React Context**
- 🔒 Validations on all fields using **React Hook Form**
- 📁 File upload support with type/size restrictions (PDF, DOC, PNG, JPG, JPEG up to 5MB)
- 🌀 Animated transitions between steps with **Framer Motion**
- 🧠 Smart form componentization: `InputField`, `Stepper`, `FormCard`, etc.
- 🌐 SEO metadata configured via `metadata.ts`
- 🧪 Fully tested using **Jest** + **React Testing Library**
- 📦 Dockerized and production-ready
- 🔍 Swagger UI to explore APIs
- ✅ CI/CD ready with GitHub Actions
- 🌍 Accessibility-friendly and mobile-responsive
- 🛡️ ESLint and TypeScript strict mode enabled

---

## 🧱 Tech Stack

- Framework: **Next.js 14 (App Router)**
- Language: **TypeScript**
- Styling: **Tailwind CSS**
- State Management: **React Context API**
- Forms: **React Hook Form**
- Animation: **Framer Motion**
- Testing: **Jest**, **React Testing Library**
- API Docs: **Swagger UI**
- CI/CD: **GitHub Actions**
- Containerization: **Docker**

---

## 📁 Folder Structure

```
multi-step-referral/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── referral/
│       ├── components/
│           └── FormCard.tsx
│           └── FormHeader.tsx
│           └── FormNavigation.tsx
│           └── InputField.tsx
│           └── Stepper.tsx
│           └── ReviewSection.tsx
│       ├── data/
│           └── specialities.json
│       ├── step1-patient-details/
│           └── metadata.ts
│           └── page.tsx
│       ├── step2-referral-details/
│           └── metadata.ts
│           └── page.tsx
│       ├── step3-additional-info/
│           └── metadata.ts
│           └── page.tsx
│       └── step4-review-submit/
│           └── metadata.ts
│           └── page.tsx
├── context/
│   └── ReferralContext.tsx
├── lib/
│   └── api.ts
│   └── swagger.ts
├── public/
│   └── wekare360_logo.png
├── types/
│   └── referral.ts
├── tests/
│   └── components/
│       └── FormHeader.test.tsx
│       └── FormNavigation.test.tsx
│       └── InputField.test.tsx
│       └── Stepper.test.tsx
├── styles/
│   └── globals.css
├── .github/
│   └── workflows/
│       └── ci.yml
```

---

## 🛠️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/saivenkat98/multi-step-referral.git
cd multi-step-referral
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```
Navigate to [http://localhost:3000](http://localhost:3000)

---

## 🧪 Running Tests
```bash
npm test
```
Ensure components like `InputField`, `FormNavigation`, `FormHeader`, and `Stepper` have unit tests written in `tests/components`.

---

## 🐳 Docker Support

To build and run the app using Docker:
```bash
docker build -t referral-app .
docker run -p 3000:3000 referral-app
```

---

## 🔬 Swagger API Docs

Visit [http://localhost:3000/swagger](http://localhost:3000/swagger) to explore the API using Swagger UI (mock endpoint: `submit-referral.ts`).

---

## ⚙️ CI/CD Pipeline (GitHub Actions)

A `.github/workflows/ci.yml` file is set up for:

* Linting
* Running tests
* Building the app

You must push the code to a GitHub repository for the workflow to execute.

---

## 🛡️ ESLint + TypeScript

Strict rules for better code quality. Fix issues by running:
```bash
npm run lint
```

---

## 📝 Environment Variables

You can optionally configure a `.env.local` for sensitive data or API keys (e.g., file storage, backend endpoints).

---

## 🧩 TODO / Optional Enhancements

* [ ] Add backend API for real storage of referral submissions
* [ ] Implement user authentication with NextAuth or Firebase
* [ ] Add internationalization support with `next-intl`
* [ ] Enhance document preview in the review step

---

## 🖼️ Screenshots

Landing Page:
<br/>
<img width="1440" alt="LandingPage" src="https://github.com/user-attachments/assets/f9671d09-68e0-4e79-8308-5d9b485af2b8" />
<br/>
Step1:
<br/>
<img width="1440" alt="Step1" src="https://github.com/user-attachments/assets/a438bb2b-85c3-45d3-92a3-1692f20a4fb3" />
<br/>
Step2:
<br/>
<img width="1440" alt="step2" src="https://github.com/user-attachments/assets/b932f037-0dd4-4432-99b4-01dee3271ffb" />
<br/>
Step3: Attaching file
<br/>
<img width="1440" alt="AttachFile" src="https://github.com/user-attachments/assets/0b783a58-6ff8-4357-b8e8-fbab737afc03" />
<br/>
Step3: Done
<br/>
<img width="1440" alt="step3-file-added" src="https://github.com/user-attachments/assets/2c49ca5b-64a7-4029-99d5-b9b68e765049" />
<br/>
Step4:
<br/>
<img width="1440" alt="step4" src="https://github.com/user-attachments/assets/0e3ba7ca-097b-4a29-b703-8640e11b8067" />
<br/>
Mobile View:
<br/>
<img width="376" alt="mobile-view" src="https://github.com/user-attachments/assets/7fab5e58-b581-425e-971b-b34ab5b96809" />
<br/>
Suuccessful Submission:
<br/>
<img width="1440" alt="successful-submission" src="https://github.com/user-attachments/assets/5849261d-c203-426f-8f0b-7eaa36259ecf" />
<br/>


---

## 🧑‍💻 Author

Built with ❤️ by [Sai Venkat Kumar Rapol](https://github.com/svkrapol)

---

## 📄 License

MIT
