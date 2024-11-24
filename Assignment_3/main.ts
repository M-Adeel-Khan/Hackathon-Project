const formData = document.getElementById("form") as HTMLFormElement;
const res_Display = document.getElementById('show_res') as HTMLDivElement;

formData.addEventListener("submit",(ev:SubmitEvent)=>{
    ev.preventDefault();

    const name = (document.getElementById("Name")as HTMLInputElement).value;
    const address = (document.getElementById("Add")as HTMLInputElement).value;
    const cellNo = (document.getElementById("Cell")as HTMLInputElement).value;
    const email = (document.getElementById("Email")as HTMLInputElement).value;

    const company_1 = (document.getElementById("Org1")as HTMLInputElement).value;
    const designation_1 = (document.getElementById("Desig1")as HTMLInputElement).value;
    const startDate_1 = (document.getElementById("SD1")as HTMLInputElement).value;
    const endDate_1 = (document.getElementById("ED1")as HTMLInputElement).value;
    
    const company_2 = (document.getElementById("Org2")as HTMLInputElement).value;
    const designation_2 = (document.getElementById("Desig2")as HTMLInputElement).value;
    const startDate_2 = (document.getElementById("SD2")as HTMLInputElement).value;
    const endDate_2 = (document.getElementById("ED2")as HTMLInputElement).value;
    
    const company_3 = (document.getElementById("Org3")as HTMLInputElement).value;
    const designation_3 = (document.getElementById("Desig3")as HTMLInputElement).value;
    const startDate_3 = (document.getElementById("SD3")as HTMLInputElement).value;
    const endDate_3 = (document.getElementById("ED3")as HTMLInputElement).value;
    
    const university_1 = (document.getElementById("Uni1")as HTMLInputElement).value;
    const degree_1 = (document.getElementById("Deg1")as HTMLInputElement).value;
    const passingY_1 = (document.getElementById("PY1")as HTMLInputElement).value;

    const university_2 = (document.getElementById("Uni2")as HTMLInputElement).value;
    const degree_2 = (document.getElementById("Deg2")as HTMLInputElement).value;
    const passingY_2 = (document.getElementById("PY2")as HTMLInputElement).value;

    const university_3 = (document.getElementById("Uni3")as HTMLInputElement).value;
    const degree_3 = (document.getElementById("Deg3")as HTMLInputElement).value;
    const passingY_3 = (document.getElementById("PY3")as HTMLInputElement).value;

    const skill_1 = (document.getElementById("Sk1")as HTMLInputElement).value;
    const skill_2 = (document.getElementById("Sk2")as HTMLInputElement).value;
    const skill_3 = (document.getElementById("Sk3")as HTMLInputElement).value;
    const skill_4 = (document.getElementById("Sk4")as HTMLInputElement).value;


    const resume = `
    <div id="res_header"><h1>${name}</h1>
    <p id="add">${address}</p>
    <p id="contact"><b>Cell No # </b>${cellNo} | <b>Email:</b>${email}</p>
    </div>
    <br />
    <h3>PROFESSIONAL SUMMARY</h3>
    <p>Highly Skilled and result oriented professional with solid academic preparation and extensive experience 
    in intelligence and multi-faceted background seeks a position in office management. Proven ability to 
    access and manage complex obstacles viewed as a strong troubleshooter.</p>
    <br />
    <h3>WORK HISTORY</h3>
    <ol>
    <li>
        <p><b>${company_1} | ${designation_1} (${startDate_1} to ${endDate_1})</b></p>
            <p>Worked as a ${designation_1}</p>   
    </li>

    <li>
        <p><b>${company_2} | ${designation_2} (${startDate_2} to ${endDate_2})</b></p>
            <p>Worked as a ${designation_2}</p>   
    </li>

    <li>
        <p><b>${company_3} | ${designation_3} (${startDate_3} to ${endDate_3})</b></p>
            <p>Worked as a ${designation_3}</p>   
    </li>
    </ol>
    <br />

    <h3>EDUCATION</h3>
    <ul><li><p>${university_1} | ${degree_1} (${passingY_1})</p></ul></li>
    <ul><li><p>${university_2} | ${degree_2} (${passingY_2})</p></ul></li>
    <ul><li><p>${university_3} | ${degree_3} (${passingY_3})</p></ul></li>
    <br />

    <h3>SKILLS SECTION</h3>
    <ul><li>${skill_1}</ul></li>
    <ul><li>${skill_2}</ul></li>
    <ul><li>${skill_3}</ul></li>
    <ul><li>${skill_4}</ul></li>
    `;

    if(res_Display){
        res_Display.innerHTML = resume
    };
});

