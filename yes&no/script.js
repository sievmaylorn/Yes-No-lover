    const btnNo = document.getElementById('no');
    const btnYes = document.getElementById('yes');

    // Function to set the 'No' button to a random position
    const moveNoButton = () => {
        // Get the viewport dimensions
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        // Get the 'No' button dimensions
        const btnNoRect = btnNo.getBoundingClientRect();
        const btnNoWidth = btnNoRect.width;
        const btnNoHeight = btnNoRect.height;

        // Calculate the maximum possible coordinates
        const maxX = viewportWidth - btnNoWidth;
        const maxY = viewportHeight - btnNoHeight;

        // Generate random coordinates
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        // Apply the new position
        btnNo.style.left = `${randomX}px`;
        btnNo.style.top = `${randomY}px`;
    };

    // --- Main Logic ---

    // 1. Immediately set the button's position to absolute to allow free movement.
    btnNo.style.position = 'absolute';

    // 2. Make the button move every 400 milliseconds (0.4 seconds).
    setInterval(moveNoButton, 400);

    // 3. Add a mouseover event as a backup, in case the user's cursor
    //    lands on the button between intervals.
    btnNo.addEventListener('mouseover', moveNoButton);

    // 4. The 'Yes' button functionality is updated.
    btnYes.onclick = () => {
        // Change 'another_page.html' to the actual name of your local file
        window.open("page2.html", "_self");
    };