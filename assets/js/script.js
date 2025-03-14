document.addEventListener("DOMContentLoaded", function () {
    let inputField = document.getElementById("menuInput");

    if (inputField) {
        inputField.addEventListener("keypress", function (event) {
            if (event.key === "Enter") {
                let choice = inputField.value.trim();
                inputField.value = ""; // 입력값 초기화

                // 현재 페이지 URL을 기준으로 상대 경로 설정
                let basePath = window.location.pathname.includes("/pages/") ? "../../" : "./";

                switch (choice) {
                    case "1":
                        window.location.href = basePath + "index.html";
                        break;
                    case "2":
                        window.location.href = basePath + "pages/about/index.html";
                        break;
                    case "3":
                        window.location.href = basePath + "pages/ministries/index.html";
                        break;
                    case "4":
                        window.location.href = basePath + "pages/events/index.html";
                        break;
                    case "5":
                        window.location.href = basePath + "pages/contact/index.html";
                        break;
                    default:
                        alert("올바른 번호를 입력하세요 (1~5)");
                }
            }
        });
    }
});
