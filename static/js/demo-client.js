/**
 * Created by admin on 1/27/15.
 */


function launchClientHangout(gid, subject) {
    var url = appBaseUrl + "/hangouts?gid=" + gid + '&subject=' + subject;
    window.open(url, "", "width=1002,height=700,location=0,menubar=0,scrollbars=1,status=1,resizable=0")
}

//$('#btn-skills-match').click(function () {
//    $('#results-panel').removeClass('hidden');
//
//    console.log('btn-skills-match click');
//});

$('#btn-submit-skills').click(function () {
    $('#results-panel').removeClass('hidden');
    loadData();
    //console.log('btn-skills-match click');
});

function loadData() {
    results = [{
        "only_in_desc1": [
            "Theory",
            "Probability",
            "Mathematical induction",
            "Number theory",
            "Probability theory",
            "Induction"
        ],
        "only_in_desc2": [
            "Teacher education",
            "Education",
            "Teacher",
            "Mathematical concepts"
        ],
         "common_skills": [],
         "similarity_score": 1.5648092021712583
    }]

    var t = $('#matchResults').DataTable({
        data: results,
        "columns": [
            {data: "only_in_desc1"},
            {data: "only_in_desc2"},
            {data: "similarity_score"}
        ],
        "searching": false,
        "paging": false,
        "columnDefs": [
            {"width": "40%", "targets": 0},
            {"width": "40%", "targets": 1}
        ]
    });

}