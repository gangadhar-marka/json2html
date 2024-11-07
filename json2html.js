export default function json2html(data) {
  // Determine unique keys from the data to create table headers
  const headers = Array.from(new Set(data.flatMap(obj => Object.keys(obj))));

  // Start building the HTML table
  let html = '<table data-user="markagangadhar7@gmail.com">';
  
  // Add table headers
  html += '<thead><tr>';
  headers.forEach(header => {
    html += `<th>${header}</th>`;
  });
  html += '</tr></thead>';

  // Add table rows with data
  html += '<tbody>';
  data.forEach(row => {
    html += '<tr>';
    headers.forEach(header => {
      html += `<td>${row[header] || ''}</td>`;  // Fill empty cells if key is missing
    });
    html += '</tr>';
  });
  html += '</tbody></table>';
  
  // Return the complete HTML table as a string
  return html;
}
