fetch("https:cfpyapi.app.cloud.gov/get_table").then((data)=>{
    return data.json();
}).then((objectData)=>{
    let tableData="";
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