const apiURL = "https://spreadsheets.google.com/feeds/list/1rqLV2T0YrLshuFpdgXKkWUNkkVJBW6Y5Ysuq9RwYwHo/od6/public/values?alt=json"

const tableHeader = 
['contactnumber', 
'availibility', 'link', 'location', 'timedateverified' , 'additionalinfo']

fetch(apiURL)
.then(res=> res.json())
.then(data => {
    mainJson = data.feed.entry;
    mainJson.forEach(data => {
        title = data.title.$t
        content = data.content.$t
        addRow(title, content)
    });
})

function addRow(title, content) {
    console.log("incoming>>>>", content);
    let tableArea = document.getElementById('table-area');
    let rowElement = document.createElement('tr')
    let rowHeader = document.createElement('th')
    let rowData = document.createElement('td')
    rowHeader.innerText = title
    rowElement.appendChild(rowHeader)
    let formattedData = content.split(', ')
    /*
    link: google
    */
//    console.log("formatted>>>>>", formattedData);
   console.log("shown>>>>");

   formattedData = formattedData.map(data => 
    {
        let newData = data.split(": ")
        let header = newData[0]
        return {header : newData[1]}
})
    console.log(formattedData)
//    for (let index = 0; index < 6; index++) {
//        let keyPair = typeof formattedData[index] === 'undefined' ? "" : formattedData[index].split(': ')
//     //    if(keyPair != '')

       
//    }
//    formattedData.forEach(data => {
//        let keyPair = data.split(': ')
//        console.log(keyPair  )
//     //    rowData = document.createElement('td')
//     //    rowData.innerText = keyPair[0] == tableHeader[0] ? keyPair[1] : tableHeader[0];
//     //    rowElement.appendChild(rowData)
//     //    rowData = document.createElement('td')
//     //    rowData.innerText = keyPair[0] == tableHeader[1] ? keyPair[1] : tableHeader[1];
//     //    rowElement.appendChild(rowData)
//     //    rowData = document.createElement('td')
//     //    rowData.innerText = keyPair[0] == tableHeader[2] ? keyPair[1] : tableHeader[2];
//     //    rowElement.appendChild(rowData)
//     //    rowData = document.createElement('td')
//     //    rowData.innerText = keyPair[0] == tableHeader[3] ? keyPair[1] : tableHeader[3];
//     //    rowElement.appendChild(rowData)
//     //    rowData = document.createElement('td')
//     //    rowData.innerText = keyPair[0] == tableHeader[4] ? keyPair[1] : tableHeader[4];
//     //    rowElement.appendChild(rowData)
//     //    rowData = document.createElement('td')
//     //    rowData.innerText = keyPair[0] == tableHeader[5] ? keyPair[1] : tableHeader[5];
//     //    rowElement.appendChild(rowData)
//     //    rowData = document.createElement('td')
//     //    rowData.innerText = keyPair[0] == tableHeader[6] ? keyPair[1] : tableHeader[6];
//     //    rowElement.appendChild(rowData)
//     // console.log(rowData);
//    });
    // console.log(formattedData);
    tableArea.appendChild(rowElement)
}