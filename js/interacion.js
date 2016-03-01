	var m, 	n;
	$(document).ready(function() {
		matrix();
		update();
		query();
	});


	function matrix () {
		 // body... 
		n = $("#valorN").val();
		m = new Matrix(n);
		m.poblarM();
		$("#valorN").focusout(function(event) {
		 	/* Act on the event */
		  	n = $("#valorN").val();
		 	m = new Matrix(n);
		 	m.poblarM();
		 	toas('Cubo reiniciado. Valor de N: '+ n);
		}); 
	}

	function update () {
		 // body... 
		$("#enviarU").click(function(event) {
			/* Act on the event */
			var x = $("#valorX").val(), 
				y = $("#valorY").val(),
				z = $("#valorZ").val(),
				w = $("#valorW").val();
			if (x=="" || y=="" || z=="" || w=="") {
				dialogo();
			} else {
				if(m.validacionA(x,y,z)){
					var a = m.actualizar(x,y,z,w);
					toas("UPDATE: "+a);
				}else{	
					toas("X, Y, Z no pueden ser mayores que N");
				}
				
			}
			
		});
	}

	function query () {
		 // body... 
		 $("#enviarQ").click(function(event) {
		 	/* Act on the event */
		 	var x1 = $("#valorX1").val(), 
				y1 = $("#valorY1").val(),
				z1 = $("#valorZ1").val(),
				x2 = $("#valorX2").val(), 
				y2 = $("#valorY2").val(),
				z2 = $("#valorZ2").val();
			if (x1=="" || y1=="" || z1=="" || x2=="" || y2=="" || z2=="") {
			 	dialogo();
			} else {
			 	if(m.validacionQ(x1,y1,z1,x2,y2,z2)){
			 		console.log('entro q');
			 		var num = m.query(x1,y1,z1,x2,y2,z2);
			 		$("#resultados").append('<li class="mdl-list__item"><span class="mdl-list__item-primary-content">'+num+'</span></li>');
					toas("Query Resultado:" + num);
				}else{	
					toas("X1, Y1, Z2 - X2, Y2, Z2 no pueden ser mayores que N");
				}
			} 
		});
	}

	function toas (mensaje) {
		 // body...  
		var snackbarContainer = document.querySelector('#demo-toast-example');
		var data = {message: mensaje};
	    snackbarContainer.MaterialSnackbar.showSnackbar(data);
	}

	function dialogo () {
		var dialog = document.querySelector('dialog');
	    if (! dialog.showModal) {
	      dialogPolyfill.registerDialog(dialog);
	    }
	    dialog.showModal();
	    dialog.querySelector('.close').addEventListener('click', function() {
	      dialog.close();
	    });
	}