fetch("https:cfpyapi.app.cloud.gov/get_table").then((data)=>{
    return data.json();
}).then((objectData)=>{
    console.log(objectData[0].title);
    let tableData=""; // All data inside the table
    objectData.map((values)=>{
        tableData+=` <tr>
        <td>${values['Acquiring Institution']}</td>
        <td>${values['Bank Name']}</td>
        <td>${values.Cert}</td>
        <td>${values.City}</td>
        <td>${values['Closing Date']}</td>
        <td>${values.Fund}</td>
        <td>${values.State}</td>
</tr>`;
    });
    document.getElementById("table_body").innerHTML=tableData
}).catch((error)=>{
    console.log(error);
})