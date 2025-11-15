# Quick Start Guide - HARMS Prototype

## Step-by-Step Setup

### Method 1: Using Docker (Recommended)

#### 1. Start Backend Server

In a terminal:

```bash
cd /Users/varuntejachundru/Documents/Github/HARMS_Inclass_Activity
docker-compose up
```

Wait for the message: "Starting development server at http://0.0.0.0:8000/"

#### 2. Start Frontend Server

In a new terminal:

```bash
cd /Users/varuntejachundru/Documents/Github/HARMS_Inclass_Activity_Frontend
docker-compose up frontend-dev
```

The app will start at: http://localhost:3000

### Method 2: Using Node.js Directly

#### 1. Install Dependencies

```bash
cd /Users/varuntejachundru/Documents/Github/HARMS_Inclass_Activity_Frontend
npm install
```

#### 2. Start Backend Server

In a separate terminal:

```bash
cd /Users/varuntejachundru/Documents/Github/HARMS_Inclass_Activity
docker-compose up
```

Wait for the message: "Starting development server at http://0.0.0.0:8000/"

#### 3. Start Frontend Server

```bash
cd /Users/varuntejachundru/Documents/Github/HARMS_Inclass_Activity_Frontend
npm run dev
```

The app will start at: http://localhost:3000

### 4. Access the Prototype

Open your browser and go to: **http://localhost:3000**

## Navigation Flow

1. **Login/Register Page** (http://localhost:3000/login)
   - Default landing page
   - Register as a new patient or login

2. **Patient Dashboard** (http://localhost:3000/dashboard)
   - View overview of appointments, records, and messages
   - See profile information and next appointment

3. **Book Appointment** (http://localhost:3000/book-appointment)
   - Select specialty and doctor
   - Choose date and time slot
   - Enter reason for visit

4. **Manage Appointments** (http://localhost:3000/manage-appointments)
   - View all appointments in a table
   - Reschedule or cancel appointments

5. **Medical Records** (http://localhost:3000/medical-records)
   - View lab results
   - See current medications
   - Access medical history

## Capturing Screenshots

### For macOS:
- **Full Screen:** Cmd + Shift + 3
- **Selection:** Cmd + Shift + 4
- **Window:** Cmd + Shift + 4, then Space

### For Windows:
- **Snipping Tool:** Search for "Snipping Tool" in Start Menu
- **Shortcut:** Win + Shift + S

### Recommended Screenshot Order:

1. **UC01:** Login/Register page with both forms visible
2. **UC02:** Patient Dashboard showing all sections
3. **UC03:** Book Appointment with form filled and time slot selected
4. **UC04:** Manage Appointments table with multiple appointments
5. **UC05:** Medical Records with all sections visible

## Troubleshooting

### Frontend won't start?
```bash
# Remove node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Backend not responding?
```bash
# Restart Docker containers
docker-compose restart
docker-compose logs web
```

### CORS errors?
- Ensure backend settings.py has CORS_ALLOWED_ORIGINS including http://localhost:3000
- Backend should be restarted after any settings change

### Port already in use?
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
npm run dev -- --port 3001
```

## Testing Checklist

Before submission, verify:

- [ ] All 5 pages load without errors
- [ ] Navigation between pages works
- [ ] Forms accept input
- [ ] Tables display data
- [ ] Buttons are clickable
- [ ] No console errors
- [ ] Screenshots are clear and complete

## Support

If you encounter issues:
1. Check browser console for errors (F12)
2. Check terminal for error messages
3. Verify both servers are running
4. Ensure no port conflicts

## Next Steps for Submission

1. ✅ Capture screenshots of all 5 use cases
2. ✅ Create submission document with screenshots
3. ✅ Include GitHub links for both repos
4. ✅ Add brief description for each use case
5. ✅ Submit assignment
