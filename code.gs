/**
 * Auto-replies to inquiry emails with AI-like messages and logs them into Google Sheets.
 * 
 * Keywords Trigger: "rate", "quote", "shipment", or "pricing"
 * Gmail → Auto-Reply → Google Sheet Log
 */

function autoReplyWithAI() {
  var sheet = SpreadsheetApp.openById("YOUR_SPREADSHEET_ID_HERE").getActiveSheet();
  var threads = GmailApp.search('in:inbox subject:(rate OR quote OR shipment OR pricing) newer_than:1d');

  for (var i = 0; i < threads.length; i++) {
    var messages = threads[i].getMessages();
    for (var j = 0; j < messages.length; j++) {
      var message = messages[j];

      // Skip if already read
      if (!message.isUnread()) continue;

      var sender = message.getFrom();
      var subject = message.getSubject();
      var body = message.getPlainBody();
      var threadId = message.getThread().getId();

      // Avoid duplicate logging
      var data = sheet.getDataRange().getValues();
      var alreadyLogged = data.some(row => row[1] === threadId);
      if (alreadyLogged) continue;

      // Extract first name from sender
      var nameMatch = sender.match(/"?(.*?)"?\s?<.*?>/);
      var firstName = nameMatch ? nameMatch[1].split(" ")[0] : ""; 

      // Generate reply
      var aiResponse = generateAIResponse(body, firstName);

      // Send reply
      message.reply(aiResponse);

      // Log the interaction
      sheet.appendRow([
        new Date(),
        threadId,
        sender,
        subject,
        body,
        aiResponse,
        "Pending – AI Response Sent"
      ]);

      // Mark as read
      message.markRead();
    }
  }
}

/**
 * Simulates generating a professional AI response to an email
 */
function generateAIResponse(emailBody, firstName) {
  var prompt = `Act as a logistics coordinator and reply to this email professionally. If any info is missing, ask for it. Use sender’s first name if available.\n\nEmail:\n"${emailBody}"\n\nResponse:`;

  // Use simulated AI response (randomized from set list)
  var aiResponse = getFreeAIResponse(prompt);
  return aiResponse;
}

/**
 * Returns a simulated AI-like response (static examples)
 */
function getFreeAIResponse(prompt) {
  var responses = [
    `Hi, \n\nThank you for reaching out! I'm reviewing your request and will get back with a quote shortly. Please provide weight and dimensions if not included.\n\nBest Regards,\nYour Team`,
    `Hello, \n\nThanks for your inquiry regarding shipping rates. Kindly confirm the pickup and delivery locations so I can assist further.\n\nBest Regards,\nYour Team`
  ];

  return responses[Math.floor(Math.random() * responses.length)];
}
