//Cube Rotations

const cube = [
Array(9).fill('White'),
Array(9).fill('Orange'),
Array(9).fill('Green'),
Array(9).fill('Red'),
Array(9).fill('Blue'),
Array(9).fill('Yellow')
];

//Front Face Clockwise. Set temps otherwise colours use repeat values.

let f = (array) => {
	let temp1 = cube[0][6];
	let temp2 = cube[0][7];
	let temp3 = cube[0][8];
	let temp4 = cube[2][1];
	let temp5 = cube[2][0];
	let temp6 = cube[2][3];
	let temp7 = cube[2][6];
	cube[0][6] = cube[1][8];
	cube[0][7] = cube[1][5];
	cube[0][8] = cube[1][2];
	cube[1][2] = cube[5][0];
	cube[1][5] = cube[5][1];
	cube[1][8] = cube[5][2];
	cube[2][0] = cube[2][2];
	cube[2][1] = cube[2][5];
	cube[2][2] = cube[2][8];
	cube[2][4] = cube[2][4];
	cube[2][5] = cube[2][7];
	cube[5][0] = cube[3][0];
	cube[5][1] = cube[3][3];
	cube[5][2] = cube[3][6];
	cube[3][0] = temp1;
	cube[3][3] = temp2;
	cube[3][6] = temp3;
	cube[2][3] = temp4;
	cube[2][6] = temp5;
	cube[2][7] = temp6;
	cube[2][8] = temp7;
	return cube; 
};

//Front Face Anti-Clockwise

let fi = (array) => {
	let temp1 = cube[0][6];
	let temp2 = cube[0][7];
	let temp3 = cube[0][8];
	let temp4 = cube[2][1];
	let temp5 = cube[2][0];
	cube[0][6] = cube[3][0];
	cube[0][7] = cube[3][3];
	cube[0][8] = cube[3][6];
	cube[2][0] = cube[2][2];
	cube[2][1] = cube[2][5];
	cube[2][2] = cube[2][8];
	cube[2][4] = cube[2][4];
	cube[2][5] = cube[2][7];
	cube[2][7] = cube[2][3];
	cube[2][8] = cube[2][6];
	cube[3][0] = cube[5][2];
	cube[3][3] = cube[5][1];
	cube[3][6] = cube[5][0];
	cube[5][0] = cube[1][2];
	cube[5][1] = cube[1][5];
	cube[5][2] = cube[1][8];
	cube[1][8] = temp1;
	cube[1][5] = temp2;
	cube[1][2] = temp3;
	cube[2][3] = temp4;
	cube[2][6] = temp5;
return cube;
}

//Right Face Clockwise
let r = (array) => {
	let temp1 = cube[0][2];
	let temp2 = cube[0][5];
	let temp3 = cube[0][8];
	let temp4 = cube[3][0];
	let temp5 = cube[3][1];
	cube[0][2] = cube[2][2];
	cube[0][5] = cube[2][5];
	cube[0][8] = cube[2][8];
	cube[2][2] = cube[5][2];
	cube[2][5] = cube[5][5];
	cube[2][8] = cube[5][8];
	cube[3][0] = cube[3][6];
	cube[3][1] = cube[3][3];
	cube[3][3] = cube[3][7];
	cube[3][4] = cube[3][4];
	cube[3][6] = cube[3][8];
	cube[3][7] = cube[3][5];
	cube[3][8] = cube[3][2];
	cube[5][2] = cube[4][6];
	cube[5][5] = cube[4][3];
	cube[5][8] = cube[4][0];
	cube[4][6] = temp1;
	cube[4][3] = temp2;
	cube[4][0] = temp3;
	cube[3][2] = temp4;
	cube[3][5] = temp5;
return cube;
}
//Right Face Anti-Clockwise

let ri = (array) => {
	let temp1 = cube[0][2];
	let temp2 = cube[0][5];
	let temp3 = cube[0][8];
	let temp4 = cube[3][1];
	let temp5 = cube[3][0];
	cube[0][2] = cube[4][6];
	cube[0][5] = cube[4][3];
	cube[0][8] = cube[4][0];
	cube[3][0] = cube[3][2];
	cube[3][1] = cube[3][5];
	cube[3][2] = cube[3][8];
	cube[3][4] = cube[3][4];
	cube[3][5] = cube[3][7];
	cube[3][7] = cube[3][3];
	cube[3][8] = cube[3][6];
	cube[4][0] = cube[5][8];
	cube[4][3] = cube[5][5];
	cube[4][6] = cube[5][2];
	cube[5][2] = cube[2][2];
	cube[5][5] = cube[2][5];
	cube[5][8] = cube[2][8];
	cube[2][2] = temp1;
	cube[2][5] = temp2;
	cube[2][8] = temp3;
	cube[3][3] = temp4;
	cube[3][6] = temp5;
return cube;
}

//Up Face Clockwise

let u = (array) => {
	let temp1 = cube[0][0];
	let temp2 = cube[0][1];
	let temp3 = cube[1][0];
	let temp4 = cube[1][1];
	let temp5 = cube[1][2];
	cube[0][0] = cube[0][6];
	cube[0][1] = cube[0][3];
	cube[0][3] = cube[0][7];
	cube[0][4] = cube[0][4];
	cube[0][6] = cube[0][8];
	cube[0][7] = cube[0][5];
	cube[0][8] = cube[0][2];
	cube[1][0] = cube[2][0];
	cube[1][1] = cube[2][1];
	cube[1][2] = cube[2][2];
	cube[2][0] = cube[3][0];
	cube[2][1] = cube[3][1];
	cube[2][2] = cube[3][2];
	cube[3][0] = cube[4][0];
	cube[3][1] = cube[4][1];
	cube[3][2] = cube[4][2];
	cube[0][2] = temp1;
	cube[0][5] = temp2;
	cube[4][0] = temp3;
	cube[4][1] = temp4;
	cube[4][2] = temp5;
return cube;
}

//Up Face Anti-Clockwise 
let ui = (array) => {
	let temp1 = cube[0][0];
	let temp2 = cube[0][1];
	let temp3 = cube[1][0];
	let temp4 = cube[1][1];
	let temp5 = cube[1][2];
	let temp6 = cube[3][0];
	let temp7 = cube[3][1];
	let temp8 = cube[3][2];
	cube[0][0] = cube[0][2];
	cube[0][1] = cube[0][5];
	cube[0][2] = cube[0][8];
	cube[0][4] = cube[0][4];
	cube[0][5] = cube[0][7];
	cube[0][7] = cube[0][3];
	cube[0][8] = cube[0][6];
	cube[1][0] = cube[4][0];
	cube[1][1] = cube[4][1];
	cube[1][2] = cube[4][2];
	cube[3][0] = cube[2][0];
	cube[3][1] = cube[2][1];
	cube[3][2] = cube[2][2];
	cube[0][6] = temp1;
	cube[0][3] = temp2;
	cube[2][0] = temp3;
	cube[2][1] = temp4;
	cube[2][2] = temp5;
	cube[4][0] = temp6;
	cube[4][1] = temp7;
	cube[4][2] = temp8;
return cube;
}
//Back Face Clockwise

let b = (array) => {
	let temp1 = cube[0][1];
	let temp2 = cube[0][2];
	let temp3 = cube[0][0];
	let temp4 = cube[4][0];
	let temp5 = cube[4][1];
	cube[0][0] = cube[3][2];
	cube[0][1] = cube[3][5];
	cube[0][2] = cube[3][8];
	cube[3][2] = cube[5][8];
	cube[3][5] = cube[5][7];
	cube[3][8] = cube[5][6];
	cube[4][0] = cube[4][6];
	cube[4][1] = cube[4][3];
	cube[4][3] = cube[4][7];
	cube[4][4] = cube[4][4];
	cube[4][6] = cube[4][8];
	cube[4][7] = cube[4][5];
	cube[4][8] = cube[4][2];
	cube[5][6] = cube[1][0];
	cube[5][7] = cube[1][3];
	cube[5][8] = cube[1][6];
	cube[1][3] = temp1;
	cube[1][0] = temp2;
	cube[1][6] = temp3;
	cube[4][2] = temp4;
	cube[4][5] = temp5;
return cube;
}

//Back Face Anti-Clockwise

let bi = (array) => {
	let temp1 = cube[0][0];
	let temp2 = cube[0][1];
	let temp3 = cube[0][2];
	let temp4 = cube[4][1];
	let temp5 = cube[4][0];
	cube[0][0] = cube[1][6];
	cube[0][1] = cube[1][3];
	cube[0][2] = cube[1][0];
	cube[1][0] = cube[5][6];
	cube[1][3] = cube[5][7];
	cube[1][6] = cube[5][8];
	cube[4][0] = cube[4][2];
	cube[4][1] = cube[4][5];
	cube[4][2] = cube[4][8];
	cube[4][4] = cube[4][4];
	cube[4][5] = cube[4][7];
	cube[4][7] = cube[4][3];
	cube[4][8] = cube[4][6];
	cube[5][6] = cube[3][8];
	cube[5][7] = cube[3][5];
	cube[5][8] = cube[3][2];
	cube[3][2] = temp1;
	cube[3][5] = temp2;
	cube[3][8] = temp3;
	cube[4][3] = temp4;
	cube[4][6] = temp5;
return cube;
}
//Left Side Clockwise

let l = (array) => {
	let temp1 = cube[0][0];
	let temp2 = cube[1][0];
	let temp3 = cube[1][1];
	let temp4 = cube[0][6];
	let temp5 = cube[0][3];
	cube[0][0] = cube[4][8];
	cube[0][3] = cube[4][5];
	cube[0][6] = cube[4][2];
	cube[1][0] = cube[1][6];
	cube[1][1] = cube[1][3];
	cube[1][3] = cube[1][7];
	cube[1][4] = cube[1][4];
	cube[1][6] = cube[1][8];
	cube[1][7] = cube[1][5];
	cube[1][8] = cube[1][2];
	cube[4][2] = cube[5][6];
	cube[4][5] = cube[5][3];
	cube[4][8] = cube[5][0];
	cube[5][0] = cube[2][0];
	cube[5][3] = cube[2][3];
	cube[5][6] = cube[2][6];
	cube[2][0] = temp1;
	cube[1][2] = temp2;
	cube[1][5] = temp3;
	cube[2][6] = temp4;
	cube[2][3] = temp5;
return cube;
}

//Left Side Anti-Clockwise

let li = (array) => {
	let temp1 = cube[0][3];
	let temp2 = cube[1][0];
	let temp3 = cube[1][1];
	let temp4 = cube[0][6];
	let temp5 = cube[0][0];
	cube[0][0] = cube[2][0];
	cube[0][3] = cube[2][3];
	cube[0][6] = cube[2][6];
	cube[1][0] = cube[1][2];
	cube[1][1] = cube[1][5];
	cube[1][2] = cube[1][8];
	cube[1][4] = cube[1][4];
	cube[1][5] = cube[1][7];
	cube[1][7] = cube[1][3];
	cube[1][8] = cube[1][6];
	cube[2][0] = cube[5][0];
	cube[2][3] = cube[5][3];
	cube[2][6] = cube[5][6];
	cube[5][0] = cube[4][8];
	cube[5][3] = cube[4][5];
	cube[5][6] = cube[4][2];
	cube[4][5] = temp1;
	cube[1][6] = temp2;
	cube[1][3] = temp3;
	cube[4][2] = temp4;
	cube[4][8] = temp5;
return cube;
}
//Down Face Clockwise 

let d = (array) => {
	let temp1 = cube[1][6];
	let temp2 = cube[1][7];
	let temp3 = cube[1][8];
	let temp4 = cube[3][6];
	let temp5 = cube[3][7];
	let temp6 = cube[3][8];
	let temp7 = cube[5][0];
	let temp8 = cube[5][1];
	let temp9 = cube[3][8];
	cube[1][6] = cube[4][6];
	cube[1][7] = cube[4][7];
	cube[1][8] = cube[4][8];
	cube[3][6] = cube[2][6];
	cube[3][7] = cube[2][7];
	cube[3][8] = cube[2][8];
	cube[5][0] = cube[5][6];
	cube[5][1] = cube[5][3];
	cube[5][3] = cube[5][7];
	cube[5][4] = cube[5][4];
	cube[5][6] = cube[5][8];
	cube[5][7] = cube[5][5];
	cube[5][8] = cube[5][2];
	cube[2][6] = temp1;
	cube[2][7] = temp2;
	cube[2][8] = temp3;
	cube[4][6] = temp4;
	cube[4][7] = temp5;
	cube[4][8] = temp6;
	cube[5][2] = temp7;
	cube[5][5] = temp8;
return cube;
}

//Down Face Anti-Clockwise

let di = (array) => {
	let temp1 = cube[1][6];
	let temp2 = cube[1][7];
	let temp3 = cube[1][8];
	let temp4 = cube[5][0];
	let temp5 = cube[5][1];
	cube[1][6] = cube[2][6];
	cube[1][7] = cube[2][7];
	cube[1][8] = cube[2][8];
	cube[2][6] = cube[3][6];
	cube[2][7] = cube[3][7];
	cube[2][8] = cube[3][8];
	cube[3][6] = cube[4][6];
	cube[3][7] = cube[4][7];
	cube[3][8] = cube[4][8];
	cube[5][0] = cube[5][2];
	cube[5][1] = cube[5][5];
	cube[5][2] = cube[5][8];
	cube[5][4] = cube[5][4];
	cube[5][5] = cube[5][7];
	cube[5][7] = cube[5][3];
	cube[5][8] = cube[5][6];
	cube[4][6] = temp1;
	cube[4][7] = temp2;
	cube[4][8] = temp3;
	cube[5][6] = temp4;
	cube[5][3] = temp5;
return cube;
}

let reset = (array) => {
	return [
Array(9).fill('White'),
Array(9).fill('Orange'),
Array(9).fill('Green'),
Array(9).fill('Red'),
Array(9).fill('Blue'),
Array(9).fill('Yellow')
];
}
