function bookTicket() {
    // Get form values
    const eventName = document.getElementById('eventName').value;
    const ticketQuantity = document.getElementById('ticketQuantity').value;
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;

    // Display confirmation message
    const confirmationMessage = `Thank you, ${fullName}! You have successfully booked ${ticketQuantity} ticket(s) for ${eventName}. An email confirmation has been sent to ${email}.`;

    document.getElementById('ticketForm').style.display = 'none';
    document.getElementById('ticketConfirmation').style.display = 'block';
    document.getElementById('confirmationMessage').innerText = confirmationMessage;
}
