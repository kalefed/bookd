# Sprouty MVP Features Plan

## Core User Journey
Users sign up or log in once, then land on a dashboard showing their book library. They add books via a simple form, track progress by updating status and dates, and rate finished books. All actions happen in one main screen for minimal navigation.

## Authentication
- One-time email/password signup with name field
- Login returns straight to dashboard
- Auto-logout after inactivity; persistent session via secure token
- No social login, password reset, or 2FA in MVP

## Book List Dashboard (Main Screen)
- Grid of book cards (mobile-friendly, 1-3 columns)
- Each card displays: title, author, genre badge, status pill, reading format icon, start/finish dates, rating stars (finished books only)
- Filter dropdown: All, TBR, Currently Reading, Finished
- Search bar: title or author
- Per-card actions: Edit (opens overlay), Delete (confirmation modal)
- Dashboard summary cards: Total books, Finished this year, Average rating, Most common genre

## Add/Edit Book Form (Modal Overlay)
- Triggered by "Add Book" button or card edit
- Fields in logical order:
  1. Title (required, text)
  2. Author (required, text) 
  3. Genre (dropdown: 12 options - Fantasy, SciFi, Mystery, Romance, Thriller, Horror, Nonfiction, Biography, Historical Fiction, YA, Self-Help, Classics)
  4. Reading format (radio buttons: Library, Physical copy, eBook, Audiobook)
  5. Status (radio buttons: TBR, Currently Reading, Finished)
  6. Start date picker (shows if Currently Reading or Finished)
  7. Finish date picker (shows if Finished, must be after start date)
  8. Rating (1-5 stars, shows only if Finished)
- Real-time validation with clear error messages
- Save button updates list instantly

## Data Tracking Fields
Every book stores:
- Title, author, genre, reading format
- Status (TBR, Currently Reading, Finished)
- Start date, finish date (for progress calculations)
- Rating (1-5, only for finished books)
- Timestamps (created, updated)

## Stats Teaser (Dashboard Cards)
Four summary metrics shown as cards:
- Total books tracked
- Books finished this year
- Average rating of finished books
- Most frequent genre

## User Flows (10 key actions)
1. Signup/Login → Dashboard
2. Click "Add Book" → Form overlay
3. Fill form → Save → Card appears
4. Click card edit → Update status to "Currently Reading" + start date
5. Later: Edit same card → Mark "Finished" + finish date + rating
6. Use filters to see TBR pile
7. Search for specific title
8. Delete unwanted book (with confirmation)

## Edge Cases
- No rating allowed unless status=Finished
- Finish date cannot be before start date
- Required fields blocked on save
- Offline warning with last sync time
- Loading spinners during saves

## Non-Features (Post-MVP)
- Book covers/images
- Page count tracking
- Reading goals/time tracking
- Charts/graphs
- Goodreads import
- Social sharing
- Multiple user profiles per account

## Success Metrics
- User can complete full lifecycle (add → track → finish → rate) in under 2 minutes
- Zero crashes on mobile
- All forms validate intuitively
- Dashboard loads under 2 seconds