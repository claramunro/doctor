import Doctor from '../src/doctor';
import $ from 'jquery';
import 'bootstrap';
import './styles.css';

$(document).ready(function () {

  // NAME INPUT AREA

  $('#formName').submit(function (event) {
    event.preventDefault();

    let inputName = $('#inputName').val();
    console.log(inputName);

    let newDoc = new Doctor(inputName);

    $('#doctorOutput').empty();
    $('#errorOutput').empty();

    let promise = newDoc.lookUpName();
  
    promise.then(function(response) {
      let mainBody = JSON.parse(response);
      console.log(mainBody);

      let mainbodyData = mainBody.data;
      console.log(mainbodyData);

      if (mainbodyData.length === 0){
        $('#doctorOutput').text('No doctor for this search input.');
      } else {
        for (let i = 0; i < mainbodyData.length; i++) {

          // NAME
          $('#doctorOutput').append(`<h2>${mainbodyData[i].profile.first_name} ${mainbodyData[i].profile.last_name} ${mainbodyData[i].profile.title}</h2>`);
          
          // ADDRESS
          $('#doctorOutput').append(`<p><b>Address:</b> ${mainbodyData[i].practices[0].visit_address.street} ${mainbodyData[i].practices[0].visit_address.city} ${mainbodyData[i].practices[0].visit_address.state} ${mainbodyData[i].practices[0].visit_address.zip}</p>`);
          
          // PHONE
          $('#doctorOutput').append(`<p><b>Phone:</b> ${mainbodyData[i].practices[0].phones[0].number}</p>`);
          
          // CHECK WEBSITE --  IF STATEMENT


          // CHECK ACCEPTING NEW PATIENTS -- IF STATEMENT


        }
      }

      // ERROR OUTPUT
    }, function(error) {
      $('#errorOutput').text(`Error processing your search: ${error.message}`);
    });
  });



  // MEDICAL ISSUE AREA

  $('#formIssue').submit(function (event) {
    event.preventDefault();

    let inputIssue = $('#inputIssue').val();
    console.log(inputIssue);

  });






});