$(function () { // Same as document.addEventListener("DOMContentLoaded"...

  // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#navbarSupportedContent").collapse('hide');
    }
  });
});


(function (global) {

var dc = {};

var homeHtmlUrl = "snipets/homesnipet.html";



var insertHtml = function (selector, html) {
  var targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;
};


var showLoading = function (selector) {
  var html = "<div class='text-center'>";
  html += "<img src='images/ajax-loader.gif'></div>";
  insertHtml(selector, html);
};

document.addEventListener("DOMContentLoaded", function (event) {

  showLoading("#main");
  $ajaxUtils.sendGetRequest(
  allCategoriesUrl,
  buildAndShowHomeHTML, // ***** <---- TODO: STEP 1: Substitute [...] ******
  true); // Explicitely setting the flag to get JSON from server processed into an object literal
});

function buildAndShowHomeHTML (categories) {

  // Load home snippet page
  $ajaxUtils.sendGetRequest(
    homeHtmlUrl,    
    function (homeHtml) {


      var chosenCategoryShortName = chooseRandomCategory(categories).short_name;


           chosenCategoryShortName = "'" + chosenCategoryShortName + "'";
      var homeHtmlToInsertIntoMainPage = insertProperty(homeHtml, "randomCategoryShortName", chosenCategoryShortName);


     
      insertHtml('#main', homeHtmlToInsertIntoMainPage);

    },
    false);
}





















