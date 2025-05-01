document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("registerForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        let firstName = document.getElementById("regFirstName").value.trim();
        let lastName = document.getElementById("regLastName").value.trim();
        let year = document.getElementById("regYear").value.trim();
        let coursePrefix = document.getElementById("regCoursePrefix").value.trim();
        let courseNumber = document.getElementById("regCourseNumber").value.trim();
        let courseSection = document.getElementById("regCourseSection").value.trim();

        let errors = [];

        // Validate name fields (required, must be a string)
        if (!firstName.match(/^[A-Za-z\s]+$/)) errors.push("First name is required and must contain only letters and spaces.");
        if (!lastName.match(/^[A-Za-z\s]+$/)) errors.push("Last name is required and must contain only letters and spaces.");

        // Validate year (must be 4 digits and 2025 or later)
        if (!year.match(/^\d{4}$/) || parseInt(year) < 2025) errors.push("Year must be four digits and 2025 or later.");

        // Validate course prefix (3-4 capital letters)
        if (!coursePrefix.match(/^[A-Z]{3,4}$/)) errors.push("Course prefix must be 3 or 4 uppercase letters.");

        // Validate course number (exactly 3 digits, max 499)
        if (!courseNumber.match(/^\d{3}$/) || parseInt(courseNumber) > 499) errors.push("Course number must be exactly 3 digits and not exceed 499.");

        // Validate course section (exactly 2 digits)
        if (!courseSection.match(/^\d{2}$/)) errors.push("Course section must be exactly 2 digits.");

        if (errors.length > 0) {
            alert(errors.join("\n"));
            return;
        }

        // Display entered data
        alert(`Student Name: ${firstName} ${lastName}\nYear: ${year}\nCourse: ${coursePrefix} ${courseNumber} - Section ${courseSection}`);
    });
});
