# Primary Edu LMS

**Primary Edu LMS** is a Laravel-based Learning Management System designed for primary school students (Grades 1–6). It provides interactive lessons, embedded quizzes, gamification, and role-based access for students, teachers, and admins.

---

## 🚧 UI Development Status

The UI is currently under development.  
🔒 **Frontend development is temporarily frozen as of today** while updates are being finalized.

---

## 🛠️ Backend Development Progress

### ✅ 18 May – Laravel Project Setup & Auth (JWT)

- Initialized new Laravel project and configured environment (.env) with DB connection
- Installed `tymon/jwt-auth` for authentication using JWT
- Created migration to add `role` column to `users` table with default role as 'student'
- Implemented `AuthController` with register and login methods
- Defined API routes:
  - `POST /api/register`
  - `POST /api/login`
- Applied database migrations

### ✅ 20 May – Student Dashboard API

- Added `GET /api/student/dashboard` route
- Created controller method to return student profile, enrolled subjects, and progress stats
- API response includes:
  ```json
  {
    "name": "kharshouf",
    "profile_image_url": null,
    "enrolled subjects": [],
    "progress": {
      "lessons_completed": 0,
      "total_lessons": 0,
      "badges_earned": 0,
      "progress_percentage": 0
    }
  }
