# 🧲 Lead Generation App

This is a full-stack lead generation application consisting of:

- A **React** front-end form for collecting user data.
- An **Express** backend server that handles POST requests.
- An **n8n** workflow that:
  - Stores the submitted data into a Google Sheet.
  - Sends an email notification via SendGrid.

---

## 📁 Project Structure

```
.
├── App.js               # Frontend React component
├── server.js           # Backend Express server
├── My_workflow.json    # n8n Workflow configuration
├── README.md           # Project Documentation
```

---

## 🚀 How It Works

1. **User Submits Form**  
   The React form collects:

   - Name
   - Email
   - Company
   - Message  
     and sends a POST request to the backend.

2. **Backend Receives Data**  
   The Express server (on "https://lead-generation-app.onrender.com") receives the POST data and forwards it to the configured n8n webhook.

3. **n8n Workflow Triggered**
   - **Webhook Node:** Receives data from Express.
   - **Google Sheets Node:** Appends the data into a Google Spreadsheet.
   - **SendGrid Node:** Sends an email notification to the sales team.

---

## 🔧 Installation & Usage

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd your-repo
```

### 2. Install Backend Dependencies

```bash
node server.js
```

### 3. Run the Frontend

```bash
npm start
```

Make sure the backend is running at `https://lead-generation-app.onrender.com/` or update the fetch URL in `App.js`.

---

## 🔗 External Services

- **n8n Cloud**: Used for the automation workflow.
- **SendGrid**: For sending email notifications.
- **Google Sheets**: For storing submitted leads.

**Webhook URL Used:**  
`https://abhilash88.app.n8n.cloud/webhook/8e831a3b-2b68-43cb-81bb-e5f8844292fb`

**Google Sheet (example):**  
[Lead Data Sheet](https://docs.google.com/spreadsheets/d/1CV3FbeTmlcTANYDTOFOcIW9reb4GOynxDrfQtJ2yWJs/edit?usp=drivesdk)

---

## 📬 Email Template

```
Subject: New Lead Generation Notification

Dear Sales Team,

I am pleased to inform you that we have successfully generated a new lead.

Lead Name: {{ $json.Name }}
Contact Details: {{ $json.Email }}
Company: {{ $json.Company }}
Message: {{ $json.Message }}

Best regards,
Abhilash Chaurasiya
Manager
+91 9538450441
```

---

## 🛡️ Validation

The form includes basic validation:

- Name and Email are required.
- Email format is validated using regex.

---

## ✅ Example Output (Console)

```
Sent to n8n: Success
Lead received and sent to n8n.
```

---
