# Learn Anything — Paradoxit Learning Systems

Learn Anything is a formal, bilingual learning command center for Mihrat Ashenafi’s journey toward becoming a software developer, AI engineer, technology innovator, problem solver, and technology entrepreneur.

## Product direction

The experience teaches one topic at a time in simple English with Amharic translation, vocabulary, practical examples, exercises, quizzes, and gradual project work. The long-term north-star project is **LifeHelper**, a platform for identifying and solving everyday human problems through thoughtful technology.

## Current experience

- Formal Paradoxit learning-system dashboard
- Light and dark mode
- English and Amharic language toggle
- Day 1 lesson: “What is a computer?”
- English × Amharic vocabulary cards
- Twelve-phase learning roadmap
- Progress, streak, and milestone summaries
- Daily learning system with concept, practice, and mentor steps
- Responsive desktop and mobile navigation
- LifeHelper project direction and project-lab entry points

## Learning roadmap

1. Computer basics
2. Computer science
3. Web development
4. Python programming
5. Databases
6. Software development
7. Artificial intelligence
8. Prompt engineering
9. Human problem solving
10. Product development
11. Business
12. LifeHelper project

## Tech stack

- React 19 + TypeScript
- Vite 7
- Tailwind CSS 4
- Lucide React icons
- Existing Manus runtime retained for future server-backed learning features

## Local development

```bash
pnpm install --frozen-lockfile
pnpm dev --host 0.0.0.0
```

The development server runs on `http://localhost:3000` by default.

## Validation

```bash
pnpm check
pnpm build
```

The frontend currently uses local, deterministic UI content so the learning experience remains available without external API credentials. Future iterations can add authenticated progress tracking, lesson content management, mentor conversations, project workspaces, and structured assessments.
