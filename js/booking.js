document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Display payment section
    document.getElementById('paymentSection').style.display = 'block';
});

document.getElementById('confirmPayment').addEventListener('click', function() {
    // Validate M-Pesa reference number
    var mpesaRef = document.getElementById('mpesaRef').value.trim();
    if (!/^\d{10}$/.test(mpesaRef)) {
        alert('Please enter a valid M-Pesa reference number (10 digits)');
        return;
    }

    // Simulate payment confirmation
    setTimeout(function() {
        document.getElementById('paymentSection').style.display = 'none';
        document.getElementById('confirmationMessage').innerText = 'Booking confirmed! Payment received.';
        document.getElementById('confirmationMessage').style.display = 'block';
        setTimeout(function() {
            document.getElementById('confirmationMessage').style.display = 'none';
        }, 3000); // Hide message after 3 seconds
    }, 1000); // Simulate server response delay
});

// Spinner
var spinner = function () {
    setTimeout(function () {
        if ($('#spinner').length > 0) {
            $('#spinner').removeClass('show');
        }
    }, 1);
};
spinner();


// Initiate the wowjs
new WOW().init();


// Sticky Navbar
$(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.sticky-top').css('top', '0px');
    } else {
        $('.sticky-top').css('top', '-100px');
    }
});


// Dropdown on mouse hover
const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$(window).on("load resize", function() {
    if (this.matchMedia("(min-width: 992px)").matches) {
        $dropdown.hover(
        function() {
            const $this = $(this);
            $this.addClass(showClass);
            $this.find($dropdownToggle).attr("aria-expanded", "true");
            $this.find($dropdownMenu).addClass(showClass);
        },
        function() {
            const $this = $(this);
            $this.removeClass(showClass);
            $this.find($dropdownToggle).attr("aria-expanded", "false");
            $this.find($dropdownMenu).removeClass(showClass);
        }
        );
    } else {
        $dropdown.off("mouseenter mouseleave");
    }
});
