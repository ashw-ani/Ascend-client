<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <title>Setup</title>
  <style>
    body {
      background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
      background-size: 400% 400%;
      animation: gradient 15s ease infinite;
    }

    @keyframes gradient {
      0% {
        background-position: 0% 50%;
      }

      50% {
        background-position: 100% 50%;
      }

      100% {
        background-position: 0% 50%;
      }
    }

    select,
    .w3-check {
      cursor: pointer;
    }

    input {
      background: transparent;
    }

    .Select_pop {
      display: none;
    }

    .selectcheck{
      display:flex;
      flex-flow:column;
      gap:4px;
    }

    .tick-option{
      display:flex;
      gap:10px;
      flex-flow:row nowrap;
    }

    .text-box{
      display:none;
      width:60%;
      height:1.5rem;
      font-size:0.8rem;
    }
  </style>
</head>

<body>
   <div id="details" class="w3-container w3-padding"> 
    <br><br>
    <select id='type' class="w3-select w3-round-xlarge w3-green">
            <option disabled selected>Select Meeting/Seminar</option>
            <? for(let i=1;i<meetings.length;i++){ ?>
            <option value="<?= meetings[i]; ?>">
                <?= meetings[i]; ?>
            </option>
            <? } ?>
      </select>
     <div>
       <p><input id="Convertkit" name="tags" type="radio" class="w3-check tags" onclick="Tags()"/>
      <label for="Convertkit">Convertkit</label>
    </p>
    <p><input id="Activecampaign" name="tags" type="radio" class="w3-check tags"/>
      <label for="Activecampaign">Active Campaign</label>
    </p> 
    <p><input id="Vbout" name="tags" type="radio" class="w3-check tags"/>
      <label for="Vbout">Vbout</label>
    </p>
     </div>
    <hr>

     <label style="font-weight:bold;">CATEGORY</label> <br>

    <hr>

    <label style="font-weight:bold;">CATEGORY</label> <br>
    <div class="selectcheck">
      <div class="tick-option"><label for="A">Cat A</label>
      <input id="SelectA" type="checkbox" class="w3-check" onclick="pop_select(this.id)"/>
        <input type='text' id="SelectA-input" class="text-box"/>
      </div>
      <div class="tick-option"><label for="B">Cat B</label>
      <input id="SelectB" type="checkbox" class="w3-check" onclick="pop_select(this.id)"/>
        <input type='text' id="SelectB-input" class="text-box"/></div>
      <br>
      <div class="tick-option"><label for="C">Cat C</label>
      <!-- <input id="C" type="checkbox" class="w3-check" onclick="pop_select(this.id)"/>  -->
      <input id="SelectC" type="checkbox" class="w3-check" onclick="pop_select(this.id)"/>
      <input type='text' id="SelectC-input" class="text-box"/></div>
      <br>
      <div class="tick-option"><label for="D">Cat D</label>
      <input id="SelectD" type="checkbox" class="w3-check" onclick="pop_select(this.id)"/>
      <input type='text' id="SelectD-input" class="text-box"/></div>
      <br>
      <div class="tick-option"><label for="E">Cat E</label>
      <input id="SelectE" type="checkbox" class="w3-check" onclick="pop_select(this.id)"/>
      <input type='text' id="SelectE-input" class="text-box"/></div>
      <br>
      <div class="tick-option"><label for="Customer">Cust ➡️</label>
      <input id="SelectCustomer" type="checkbox" class="w3-check" onclick="pop_select(this.id)"/>
      <input type='text' id="SelectCustomer-input" class="text-box"/></div>
      <br>
    </div>

  </div>

  <div class="w3-container w3-center w3-padding">
    <h4 class="w3-red" id="msg"></h4>
  </div>
  <div class="w3-container w3-center w3-padding">
    <button style="width:100%;" class="w3-btn w3-purple w3-round-xlarge" onclick="sendEmailWhatsapp()">Send</button>
  </div>
  <div class="w3-container w3-center w3-padding">
    <button style="width:100%;" class="w3-btn w3-purple w3-round-xlarge" onclick="clearStatus()">Clear Status</button>
  </div>

  <div id="spiner" class="w3-modal">
    <div class="w3-modal-content w3-animate-zoom w3-center" style="background-color:transparent;">
      <span><i style='font-size:100px;color: blue;' aria-hidden="true"
                    class="fa fa-circle-o-notch w3-spin"></i></span>
    </div>
  </div>


  <script>
    function sendEmailWhatsapp() {
            var input_arr = ['A','B','C','D','E','Customer']
            var type = $('#type').val(), Test1 = $('#Convertkit').prop('checked'),Test2 = $('#Activecampaign').prop('checked'),Test3 = $('#Vbout').prop('checked')

            var A = $('#SelectA').prop('checked'),B = $('#SelectB').prop('checked'),C = $('#SelectC').prop('checked'),
            D = $('#SelectD').prop('checked'),E = $('#SelectE').prop('checked'),Customer = $('#SelectCustomer').prop('checked');
            if (type == null) { $('#msg').html('Please Select Meeting/Seminar'); return; }

            var Category = {}

            for(let [item,index] of input_arr){
             var input_value = $(`#Select${item}-input`).val()
             if(!($(`#Select${item}`).prop('checked'))){
                continue;
             }
             Category[`${item}`] = input_value
            }

            var d = {
                type: type,
                Test1:Test1,
                Test2:Test2,
                Test3:Test3,
                Category:Category,
                Customer:Customer,
            }
            show_spin();
            // google.script.run.withFailureHandler(scriptFailure).withSuccessHandler(updateForm_r).sendEmailWhatsapp(d);
            console.log(d)
          //  google.script.run.withFailureHandler(scriptFailure).withSuccessHandler(updateForm_r).sendWAteam(d);
        }
        function updateForm_r(obj) {
            $('#msg').html('Successfully sent')
            hide_spin();
        }

        function Tags(){
          fetch('https://api.convertkit.com/v3/tags?api_key=moCrsbH8Kv45NVQSCzm99w').then((response) => response.json()).then((data) => var select = document.getElementById("selectNumber");
var options = ["1", "2", "3", "4", "5"];

for(var i = 0; i < options.length; i++) {
    var opt = options[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
})
        }

        function clearStatus() {
            var type = $('#type').val(), whatsapp = $('#whatsapp').prop('checked'),wateam = $('#wateam').prop('checked'),email = $('#email').prop('checked'),webhook = $('#webhook').prop('checked'),webhook2 = $('#webhook2').prop('checked');
            if (type == null) { $('#msg').html('Please Select Meeting/Seminar'); return; }

            var d = {
                type: type,
                WAchecked: whatsapp,
                WAteam: wateam,
            //  Mailchecked: email,
                WAhook: webhook,
                WAhook2: webhook2,
            }
            show_spin();
            google.script.run.withFailureHandler(scriptFailure).withSuccessHandler(clearStatus_R).clearStatus(d);
        }
        function clearStatus_R() {
            hide_spin();
            $('#msg').html('Cleared Successfully');
        }

        function scriptFailure(err) {
            hide_spin();
            $('#msg').html(err)
        }

        function show_spin() {
            $('#spiner').show();
        }
        function hide_spin() {
            $('#spiner').hide();
        }
      
    	//set checked of clicked object
    	
        
        function pop_select(id)
        {
        const check = document.getElementById(id);
        const select = document.getElementById(id+'-input');
        if(check.checked==true)
        {
            select.style.display = "inline";
        }
        else{
            select.innerText = 'asdasd'
            select.style.display = "none";
        }
        }
  </script>
</body>

</html>