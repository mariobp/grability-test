	function Matrix(n){
		this.n = n;
		this.m = new Array(n);

		this.getN = function () {
			return this.n;
		}

		this.setN = function (n) {
			this.n = n;
		}

		this.getM = function () {
			return this.m;
		}

		this.setM = function (M) {
			this.m = new Array(M);
		}

		this.getCellX = function (x) {
			return this.m[x];
		}

		this.setCellX = function (x, v) {
			this.m[x] = v;
		}

		this.getCellXY = function (x, y) {
			return this.m[x][y];
		}

		this.setCellXY = function (x,y,v) {
			this.m[x][y] = v;
		}

		this.getCellXYZ = function (x, y, z) {
			return this.m[x][y][z];
		}

		this.setCellXYZ = function (x,y,z,v) {
			this.m[x][y][z] = v;
		}

	}

	Matrix.prototype.poblarM = function(argument){
		for (var i = 0; i < this.getN(); i++) {
		 	this.setCellX(i, new Array(this.getN()));
		 	for (var j = 0; j < this.getN(); j++) {
		 		this.setCellXY(i, j, new Array(this.getN()));
		 		for (var k = 0; k < this.getN(); k++) {
		 			this.setCellXYZ(i, j, k, 0);
		 		}
		 	}
		} 
	};

Matrix.prototype.actualizar= function(x,y,z,v){
	this.setCellXYZ(x-1,y-1,z-1,v);
	console.log(this.getCellXYZ(x-1,y-1,z-1));
	return this.getCellXYZ(x-1,y-1,z-1);
};

Matrix.prototype.query = function(x1,y1,z1,x2,y2,z2){
	var com = 0;
	for (var i = x1-1; i <=x2-1; i++) {
		console.log(this.getCellX(i));
		for (var j = 0; j < this.getCellX(i).length; j++) {
			for (var k = 0; k < this.getCellXY(i,j).length; k++) {
				if (j>=y1-1 && j<=y2-1) {
					if (k>=z1-1 && k<=z2-1) {
						com+= parseInt(this.getCellXYZ(i,j,k));
					}
				}
				
			}
		}
	}
	return com;
};

Matrix.prototype.validacionA = function(x,y,z){
	// body... 
	var n = this.n;
	if(x>n || y>n || z>n || x<0 || y<0 || z<0){
		return false;
	}
	return true;
};

Matrix.prototype.validacionQ = function(x1,y1,z1,x2,y2,z2){
	 // body...  
	var n = this.n;
	if(x1>n || y1>n || z1>n || x1<0 || y1<0 || z1<0, x2>n || y2>n || z2>n || x2<0 || y2<0 || z2<0){
		return false;
	}
	return true;
};
	