var formData = document.getElementById("form");
var res_Display = document.getElementById('show_res');
formData.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var name = document.getElementById("Name").value;
    var address = document.getElementById("Add").value;
    var cellNo = document.getElementById("Cell").value;
    var email = document.getElementById("Email").value;
    var company_1 = document.getElementById("Org1").value;
    var designation_1 = document.getElementById("Desig1").value;
    var startDate_1 = document.getElementById("SD1").value;
    var endDate_1 = document.getElementById("ED1").value;
    var company_2 = document.getElementById("Org2").value;
    var designation_2 = document.getElementById("Desig2").value;
    var startDate_2 = document.getElementById("SD2").value;
    var endDate_2 = document.getElementById("ED2").value;
    var company_3 = document.getElementById("Org3").value;
    var designation_3 = document.getElementById("Desig3").value;
    var startDate_3 = document.getElementById("SD3").value;
    var endDate_3 = document.getElementById("ED3").value;
    var university_1 = document.getElementById("Uni1").value;
    var degree_1 = document.getElementById("Deg1").value;
    var passingY_1 = document.getElementById("PY1").value;
    var university_2 = document.getElementById("Uni2").value;
    var degree_2 = document.getElementById("Deg2").value;
    var passingY_2 = document.getElementById("PY2").value;
    var university_3 = document.getElementById("Uni3").value;
    var degree_3 = document.getElementById("Deg3").value;
    var passingY_3 = document.getElementById("PY3").value;
    var skill_1 = document.getElementById("Sk1").value;
    var skill_2 = document.getElementById("Sk2").value;
    var skill_3 = document.getElementById("Sk3").value;
    var skill_4 = document.getElementById("Sk4").value;
    var resume = "\n    <div id=\"res_header\"><h1 contenteditable=\"true\">".concat(name, "</h1>\n    <p id=\"add\" contenteditable=\"true\">").concat(address, "</p>\n    <p id=\"contact\" contenteditable=\"true\"><b>Cell No # </b>").concat(cellNo, " | <b>Email:</b>").concat(email, "</p>\n    </div>\n    <br />\n    <h3>PROFESSIONAL SUMMARY</h3>\n    <p>Highly Skilled and result oriented professional with solid academic preparation and extensive experience \n    in intelligence and multi-faceted background seeks a position in office management. Proven ability to \n    access and manage complex obstacles viewed as a strong troubleshooter.</p>\n    <br />\n    <h3>WORK HISTORY</h3>\n    <ol>\n    <li>\n        <p contenteditable=\"true\"><b>").concat(company_1, " | ").concat(designation_1, " (").concat(startDate_1, " to ").concat(endDate_1, ")</b></p>\n            <p>Worked as a ").concat(designation_1, "</p>   \n    </li>\n\n    <li>\n        <p contenteditable=\"true\"><b>").concat(company_2, " | ").concat(designation_2, " (").concat(startDate_2, " to ").concat(endDate_2, ")</b></p>\n            <p>Worked as a ").concat(designation_2, "</p>   \n    </li>\n\n    <li>\n        <p contenteditable=\"true\"><b>").concat(company_3, " | ").concat(designation_3, " (").concat(startDate_3, " to ").concat(endDate_3, ")</b></p>\n            <p>Worked as a ").concat(designation_3, "</p>   \n    </li>\n    </ol>\n    <br />\n\n    <h3>EDUCATION</h3>\n    <ul><li><p contenteditable=\"true\">").concat(university_1, " | ").concat(degree_1, " (").concat(passingY_1, ")</p></ul></li>\n    <ul><li><p contenteditable=\"true\">").concat(university_2, " | ").concat(degree_2, " (").concat(passingY_2, ")</p></ul></li>\n    <ul><li><p contenteditable=\"true\">").concat(university_3, " | ").concat(degree_3, " (").concat(passingY_3, ")</p></ul></li>\n    <br />\n\n    <h3>SKILLS SECTION</h3>\n    <ul><li contenteditable=\"true\">").concat(skill_1, "</ul></li>\n    <ul><li contenteditable=\"true\">").concat(skill_2, "</ul></li>\n    <ul><li contenteditable=\"true\">").concat(skill_3, "</ul></li>\n    <ul><li contenteditable=\"true\">").concat(skill_4, "</ul></li>\n    ");
    if (res_Display) {
        res_Display.innerHTML = resume;
    }
    ;
});
