// Import stylesheets
import "./style.css";
import matchRules from "match-rules";

window.validate = function() {
  let form = document.forms["form"];
  let fname = form["fname"].value;
  let lname = form["lname"].value;
  let email = form["email"].value;
  let mobile = form["mobile"].value;
  let address = form["address"].value;
  let city = form["city"].value;
  let state = form["state"].value;
  let country = form["country"].value;
  let pincode = form["pincode"].value;
  let dob = form["dob"].value;
  let gender = form["gender"].value;
  let linkedin = form["linkedin"].value;
  let twitter = form["twitter"].value;

  let err = document.getElementById("err");
  err.innerText = "";

  const VALIDATION_RULES = {
    fname: (exp, sourceObject) => /^[a-zA-Z ]+$/.test(exp),
    lname: (exp, sourceObject) => /^[a-zA-Z ]+$/.test(exp),
    mobile: (exp, sourceObject) => exp.length == 10,
    address: (exp, sourceObject) => /^[a-zA-Z0-9\s,'-]+$/.test(exp),
    city: (exp, sourceObject) => /^[a-zA-Z ]+$/.test(exp),
    state: (exp, sourceObject) => /^[a-zA-Z ]+$/.test(exp),
    country: (exp, sourceObject) => /^[a-zA-Z ]+$/.test(exp),
    pincode: (exp, sourceObject) => exp.length == 6
  };
  
  const user = {
    fname,
    lname,
    email,
    mobile,
    address,
    city,
    state,
    pincode,
    country,
    dob,
    gender,
    linkedin,
    twitter
  };
  console.log(user);

  console.log(matchRules(user, VALIDATION_RULES));

  if (matchRules(user, VALIDATION_RULES)) {
    return true;
  } else {
    err.innerText = "Validation Error!!";
    return false;
  }
};
