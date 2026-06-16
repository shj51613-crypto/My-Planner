document.addEventListener("DOMContentLoaded", () => {

    const navButtons = document.querySelectorAll(".bottom-nav button");
    const pages = document.querySelectorAll(".page");

    navButtons.forEach(button => {

        button.addEventListener("click", () => {

            const targetPage = button.dataset.page;

            pages.forEach(page => {
                page.classList.remove("active");
            });

            navButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            document
                .getElementById(targetPage)
                .classList.add("active");

            button.classList.add("active");

        });

    });

    createCalendar();

});

function createCalendar() {

    const calendarGrid = document.querySelector(".calendar-grid");

    if (!calendarGrid) return;

    calendarGrid.innerHTML = "";

    const totalDays = 42; // 6주 고정

    for (let i = 1; i <= totalDays; i++) {

        const day = document.createElement("div");
        day.className = "day";

        day.innerHTML = `
            <div class="date-area">
                <div class="date-number">${i <= 30 ? i : ""}</div>
                <div class="lunar-date">${i <= 30 ? "음력" : ""}</div>
            </div>

            <div class="schedule-area"></div>
        `;

        calendarGrid.appendChild(day);
    }
}
