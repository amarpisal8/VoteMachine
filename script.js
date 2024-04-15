// Object to store voting results
var votingResults = {
    'Suresh': [],
    'Deepak': [],
    'Abhik': []
};

// Function to cast vote
function castVote() {
    var studentName = document.getElementById('student-name').value;
    var candidateName = document.getElementById('candidate-select').value;
    
    if (studentName === '' || candidateName === '') {
        alert('Please enter student name and select a candidate.');
        return;
    }

    // Update votingResults object
    votingResults[candidateName].push(studentName);

    // Update table with voting results
    updateTable();
}

// Function to update table with voting results
function updateTable() {
    var table = document.getElementById('voting-table').getElementsByTagName('tbody')[0];

    // Clear previous table data
    table.innerHTML = '';

    // Get maximum number of votes for any candidate
    var maxVotes = 0;
    for (var candidate in votingResults) {
        maxVotes = Math.max(maxVotes, votingResults[candidate].length);
    }

    // Iterate over votingResults object to populate table
    for (var i = 0; i < maxVotes; i++) {
        var row = table.insertRow();
        row.insertCell(0).innerHTML = '';
        row.insertCell(1).innerHTML = '';
        row.insertCell(2).innerHTML = '';
        row.insertCell(3).innerHTML = '';
    }

    // Update each cell with voting data
    var rowIndex = 0;
    for (var candidate in votingResults) {
        var votes = votingResults[candidate];
        for (var j = 0; j < votes.length; j++) {
            table.rows[j].cells[0].innerHTML = votes[j];
            table.rows[j].cells[rowIndex + 1].innerHTML = candidate;
        }
        rowIndex++;
    }
}
