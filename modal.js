//Create PopUp window 


jQuery(document).ready(function ($) {

		// set access key

		let access_key="715ac2eaab16f0aa676f5a973c1d05d7";


		// get the API result via jQuery

		$.ajax({
		    url: "http://api.ipstack.com/check?access_key=" + access_key,   
		    dataType: 'jsonp',
		    success: function(json) {

		        // output the "city" object 
		        
		        let city=json.city;

		        // append modal and location data to greeting

				 let modal= `<div id="popUp" class="modal fade" role="dialog">
						  <div class="modal-dialog">
						    <div class="modal-content">
						      <div class="modal-header">
						        <button type="button" class="close" data-dismiss="modal">&times;</button>
						        <h4 class="modal-title">Consumer Friend</h4>
						      </div>
						      <div class="modal-body">
						        <p id="modalCont">Hello, dear visitor from ${city}!</p>
						      </div>
						    </div>

						  </div>
						</div>`

		        $("body").append(modal);

		        // popUp event handler

		        function popUp(){
				$('#popUp').modal('show');
				}

				$(window).on('load', setTimeout(popUp,5000))
		        
		    }
		});
		
});