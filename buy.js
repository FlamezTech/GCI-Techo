 // Get modal elements
        const customerModal = document.getElementById("customerModal");
        const paymentModal = document.getElementById("paymentModal");
        const confirmationModal = document.getElementById("confirmationModal");
        
        // Get buttons that open modals
        const buyButtons = document.querySelectorAll(".buy-btn");
        const transferBtn = document.getElementById("transferBtn");
        
        // Get form
        const customerForm = document.getElementById("customerForm");
        
        // Get close buttons
        const closeButtons = document.querySelectorAll(".close");
        
        // When user clicks a buy button, open the customer modal
        buyButtons.forEach(button => {
            button.addEventListener("click", function() {
                customerModal.style.display = "block";
            });
        });
        
        // When user submits the form, open payment modal
        customerForm.addEventListener("submit", function(e) {
            e.preventDefault();
            customerModal.style.display = "none";
            paymentModal.style.display = "block";
        });
        
        // When user clicks transfer button, open confirmation modal
        transferBtn.addEventListener("click", function() {
            paymentModal.style.display = "none";
            confirmationModal.style.display = "block";
        });
        
        // When user clicks on (x), close the modal
        closeButtons.forEach(button => {
            button.addEventListener("click", function() {
                customerModal.style.display = "none";
                paymentModal.style.display = "none";
                confirmationModal.style.display = "none";
            });
        });
        
        // When user clicks anywhere outside of the modal, close it
        window.addEventListener("click", function(event) {
            if (event.target == customerModal) {
                customerModal.style.display = "none";
            }
            if (event.target == paymentModal) {
                paymentModal.style.display = "none";
            }
            if (event.target == confirmationModal) {
                confirmationModal.style.display = "none";
            }
        });

        function toggleMenu() {
    const navlinks = document.querySelector('.navlinks');
    navlinks.classList.toggle('active');
}