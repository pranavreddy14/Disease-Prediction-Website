let symptoms = [
    { "text": "itching" },
    { "text": "skin rash" },
    { "text": "nodal skin eruptions" },
    { "text": "continuous sneezing" },
    { "text": "shivering" },
    { "text": "chills" },
    { "text": "joint pain" },
    { "text": "stomach pain" },
    { "text": "acidity" },
    { "text": "ulcers on tongue" },
    { "text": "muscle wasting" },
    { "text": "vomiting" },
    { "text": "burning micturition" },
    { "text": "spotting urination" },
    { "text": "fatigue" },
    { "text": "weight gain" },
    { "text": "anxiety" },
    { "text": "cold hands and feets" },
    { "text": "mood swings" },
    { "text": "weight loss" },
    { "text": "restlessness" },
    { "text": "lethargy" },
    { "text": "patches in throat" },
    { "text": "irregular sugar level" },
    { "text": "cough" },
    { "text": "high fever" },
    { "text": "sunken eyes" },
    { "text": "breathlessness" },
    { "text": "sweating" },
    { "text": "dehydration" },
    { "text": "indigestion" },
    { "text": "headache" },
    { "text": "yellowish skin" },
    { "text": "dark urine" },
    { "text": "nausea" },
    { "text": "loss of appetite" },
    { "text": "pain behind the eyes" },
    { "text": "back pain" },
    { "text": "constipation" },
    { "text": "abdominal pain" },
    { "text": "diarrhoea" },
    { "text": "mild fever" },
    { "text": "yellow urine" },
    { "text": "yellowing of eyes" },
    { "text": "acute liver failure" },
    { "text": "fluid overload" },
    { "text": "swelling of stomach" },
    { "text": "swelled lymph nodes" },
    { "text": "malaise" },
    { "text": "blurred and distorted vision" },
    { "text": "phlegm" },
    { "text": "throat irritation" },
    { "text": "redness of eyes" },
    { "text": "sinus pressure" },
    { "text": "runny nose" },
    { "text": "congestion" },
    { "text": "chest pain" },
    { "text": "weakness in limbs" },
    { "text": "fast heart rate" },
    { "text": "pain during bowel movements" },
    { "text": "pain in anal region" },
    { "text": "bloody stool" },
    { "text": "irritation in anus" },
    { "text": "neck pain" },
    { "text": "dizziness" },
    { "text": "cramps" },
    { "text": "bruising" },
    { "text": "obesity" },
    { "text": "swollen legs" },
    { "text": "swollen blood vessels" },
    { "text": "puffy face and eyes" },
    { "text": "enlarged thyroid" },
    { "text": "brittle nails" },
    { "text": "swollen extremeties" },
    { "text": "excessive hunger" },
    { "text": "drying and tingling lips" },
    { "text": "French Southern Territories" },
    { "text": "slurred speech" },
    { "text": "knee pain" },
    { "text": "hip joint pain" },
    { "text": "muscle weakness" },
    { "text": "stiff neck" },
    { "text": "swelling joints" },
    { "text": "movement stiffness" },
    { "text": "spinning movements" },
    { "text": "loss of balance" },
    { "text": "unsteadiness" },
    { "text": "weakness of one body side" },
    { "text": "loss of smell" },
    { "text": "bladder discomfort" },
    { "text": "foul smell of urine" },
    { "text": "continuous feel of urine" },
    { "text": "passage of gases" },
    { "text": "internal itching" },
    { "text": "toxic look (typhos)" },
    { "text": "depression" },
    { "text": "irritability" },
    { "text": "muscle pain" },
    { "text": "altered sensorium" },
    { "text": "red spots over body" },
    { "text": "belly pain" },
    { "text": "abnormal menstruation" },
    { "text": "dischromic patches" },
    { "text": "watering from eyes" },
    { "text": "increased appetite" },
    { "text": "polyuria" },
    { "text": "family history" },
    { "text": "mucoid sputum" },
    { "text": "rusty sputum" },
    { "text": "lack of concentration" },
    { "text": "visual disturbances" },
    { "text": "receiving blood transfusion" },
    { "text": "receiving unsterile injections" },
    { "text": "coma" },
    { "text": "stomach bleeding" },
    { "text": "distention of abdomen" },
    { "text": "history of alcohol consumption" },
    { "text": "fluid overload" },
    { "text": "blood in sputum" },
    { "text": "prominent veins on calf" },
    { "text": "palpitations" },
    { "text": "painful walking" },
    { "text": "pus filled pimples" },
    { "text": "blackheads" },
    { "text": "scurring" },
    { "text": "skin peeling" },
    { "text": "silver like dusting" },
    { "text": "small dents in nails" },
    { "text": "inflammatory nails" },
    { "text": "blister" },
    { "text": "red sore around nose" },
    { "text": "yellow crust ooze" }
  ];
  
  
  let list = document.getElementsByClassName("list")[0];

  symp_list_send = []
  
  for (let i = 0; i < symptoms.length; i++) {
    let option = document.createElement("option");
    let text = document.createTextNode(symptoms[i].text);
    option.appendChild(text);
    list.appendChild(option);
  }

function add(){
  val = document.getElementById("i1").value;
  list = document.getElementById("symp_list");
  symp_list_send.push(val.replaceAll(" ", "_"))
  console.log(symp_list_send)

  var li = document.createElement('li');
  li.appendChild(document.createTextNode(val));
  list.appendChild(li);
}

function submit(){
  console.log(symp_list_send);
  $.ajax({
    type: "GET",
    url: '/my_def_in_view',
    data: {
        "symp_list_send": symp_list_send,
    },
    dataType: "json",
    success: function (data) {
        // any process in data
        alert("successfull")
    },
    failure: function () {
        alert("failure");
    }
});
}

function results(){
  //code to get result

  var result = document.getElementById("enter_results");
  result.innerHTML = "Possible condition: hi ";
}