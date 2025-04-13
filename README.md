# 📧 Gmail Auto Responder

This project is an **automated Gmail response system** tailored for freight brokers and logistics managers. It uses **Google Apps Script** to monitor incoming emails, reply to inquiries automatically, and log relevant information in **Google Sheets**.

---

## 🔧 Features

- ✅ Automatically replies to quote/rate request emails
- 📑 Logs every inquiry into a Google Sheet
- ⏱ Runs every minute to ensure quick responses
- 📊 Tracks customer interactions for future insights

---

## 🚀 How to Use

1. **Set up your Google Sheet**  
   - Create columns like `Date`, `Customer Email`, `Subject`, `Message`, etc.
   - Note the sheet ID from the URL.

2. **Open Google Apps Script**  
   - Go to [script.google.com](https://script.google.com)
   - Paste the code from `code.gs` into a new project

3. **Configure the script**  
   - Add your Gmail label (e.g., "RateRequests")
   - Update the Sheet ID in the script

4. **Set up Triggers**
   - Go to `Triggers` in the Apps Script editor
   - Add a time-based trigger to run every 1 minute


---

## 🤖 Tech Used

- **Google Apps Script** (JavaScript-based)
- **Google Sheets API**
- **Gmail API**

---

## 💡 Future Improvements

- Add spam filtering using basic NLP
- Integrate with WhatsApp or Telegram for quick alerts
- Auto-attach rate cards or documents in replies

---

## 🙌 Contributions

Suggestions and improvements are welcome! Feel free to fork this repo or raise an issue.

---

## 📬 Contact

Built with ❤️ by [Basit Shameem](https://github.com/baeri1010)


