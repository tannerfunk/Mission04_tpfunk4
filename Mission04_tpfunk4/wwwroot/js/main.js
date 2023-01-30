
$("#btnsend").click(function () {
    //get all the variables and assign the right values from input
    var assignments = $("#assignments").val() * 0.5;
    var projects = $("#projects").val() * 0.1;
    var quizzes = $("#quizzes").val() * 0.1;
    var projects = $("#projects").val() * 0.1;
    var midterm = $("#midterm").val() * 0.1;
    var final = $("#final").val() * 0.1;
    var intex = $("#intex").val() * 0.1;

    //put it all together!
    var gradeCalculated = assignments + projects + quizzes + midterm + final + intex;
    gradeCalculated = gradeCalculated.toFixed(2);
    var letterGrade = ""

    //do grade logic
    if (gradeCalculated >= 94) {
        letterGrade = "A"
    } else if (gradeCalculated >= 90) {
        letterGrade = "A-"
    } else if (gradeCalculated >= 87) {
        letterGrade = "B+"
    } else if (gradeCalculated >= 84) {
        letterGrade = "B"
    } else if (gradeCalculated >= 80) {
        letterGrade = "B-"
    } else if (gradeCalculated >= 77) {
        letterGrade = "C+"
    } else if (gradeCalculated >= 74) {
        letterGrade = "C"
    } else if (gradeCalculated >= 70) {
        letterGrade = "C-"
    } else if (gradeCalculated >= 67) {
        letterGrade = "D+"
    } else if (gradeCalculated >= 64) {
        letterGrade = "D"
    } else if (gradeCalculated >= 60) {
        letterGrade = "D-"
    } else if (gradeCalculated < 60) {
        letterGrade = "E"
    }

    //this is the javascript way, and the jquery way to put the info on the HTML
    //document.getElementById("calculatedGrade").innerHTML = gradeCalculated;
    $("#letterGrade").html(letterGrade);
    $("#gradeCalculated").html(gradeCalculated + "%");


});