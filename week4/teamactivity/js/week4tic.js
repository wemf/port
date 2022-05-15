// Function called whenever user tap/ click on any box
function ticGame() {

	// Setting DOM to all boxes
	let b1, b2, b3, b4, b5, b6, b7, b8, b9;
	b1 = document.getElementById("box-1").innerHTML;
	b2 = document.getElementById("box-2").innerHTML;
	b3 = document.getElementById("box-3").innerHTML;
	b4 = document.getElementById("box-4").innerHTML;
	b5 = document.getElementById("box-5").innerHTML;
	b6 = document.getElementById("box-6").innerHTML;
	b7 = document.getElementById("box-7").innerHTML;
	b8 = document.getElementById("box-8").innerHTML;
	b9 = document.getElementById("box-9").innerHTML;

    // Adding the click/ touchend listener
    let b1ClickTouch, b2ClickTouch, b3ClickTouch, b4ClickTouch, b5ClickTouch, b6ClickTouch, b7ClickTouch, b8ClickTouch, b9ClickTouch;
    b1ClickTouch = document.getElementById('box-1').addEventListener('click', ticGame);
    b2ClickTouch = document.getElementById('box-2').addEventListener('click', ticGame);
    b3ClickTouch = document.getElementById('box-3').addEventListener('click', ticGame);
    b4ClickTouch = document.getElementById('box-4').addEventListener('click', ticGame);
    b5ClickTouch = document.getElementById('box-5').addEventListener('click', ticGame);
    b6ClickTouch = document.getElementById('box-6').addEventListener('click', ticGame);
    b7ClickTouch = document.getElementById('box-7').addEventListener('click', ticGame);
    b8ClickTouch = document.getElementById('box-8').addEventListener('click', ticGame);
    b9ClickTouch = document.getElementById('box-9').addEventListener('click', ticGame);

	// Checking if Player X won or not and after that disabled all the other fields
	if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' || b2 == 'X') && (b3 == 'x' || b3 == 'X')) {
		document.getElementById('message').innerHTML = "Player X won";
		document.getElementById("box-4").disabled = true;
		document.getElementById("box-5").disabled = true;
		document.getElementById("box-6").disabled = true;
		document.getElementById("box-7").disabled = true;
		document.getElementById("box-8").disabled = true;
		document.getElementById("box-9").disabled = true;
		window.alert('Player X won');
	}
	else if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' || b4 == 'X') && (b7 == 'x' || b7 == 'X')) {
		document.getElementById('message').innerHTML = "Player X won";
		document.getElementById("box-2").disabled = true;
		document.getElementById("box-3").disabled = true;
		document.getElementById("box-5").disabled = true;
		document.getElementById("box-6").disabled = true;
		document.getElementById("box-8").disabled = true;
		document.getElementById("box-9").disabled = true;

		window.alert('Player X won');
	}
	else if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' || b8 == 'X') && (b9 == 'x' || b9 == 'X')) {
		document.getElementById('message').innerHTML = "Player X won";
		document.getElementById("box-1").disabled = true;
		document.getElementById("box-2").disabled = true;
		document.getElementById("box-3").disabled = true;
		document.getElementById("box-4").disabled = true;
		document.getElementById("box-5").disabled = true;
		document.getElementById("box-6").disabled = true;
		window.alert('Player X won');
	}
	else if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' || b6 == 'X') && (b9 == 'x' || b9 == 'X')) {
		document.getElementById('message').innerHTML = "Player X won";
		document.getElementById("box-1").disabled = true;
		document.getElementById("box-2").disabled = true;
		document.getElementById("box-4").disabled = true;
		document.getElementById("box-5").disabled = true;
		document.getElementById("box-7").disabled = true;
		document.getElementById("box-8").disabled = true;
		window.alert('Player X won');
	}
	else if ((b1 == 'x' || b1 == 'X') && (b5 == 'x' || b5 == 'X') && (b9 == 'x' || b9 == 'X')) {
		document.getElementById('message').innerHTML = "Player X won";
		document.getElementById("box-2").disabled = true;
		document.getElementById("box-3").disabled = true;
		document.getElementById("box-4").disabled = true;
		document.getElementById("box-6").disabled = true;
		document.getElementById("box-7").disabled = true;
		document.getElementById("box-8").disabled = true;
		window.alert('Player X won');
	}
	else if ((b3 == 'x' || b3 == 'X') && (b5 == 'x' || b5 == 'X') && (b7 == 'x' || b7 == 'X')) {
		document.getElementById('message').innerHTML = "Player X won";
		document.getElementById("box-1").disabled = true;
		document.getElementById("box-2").disabled = true;
		document.getElementById("box-4").disabled = true;
		document.getElementById("box-6").disabled = true;
		document.getElementById("box-8").disabled = true;
		document.getElementById("box-9").disabled = true;
		window.alert('Player X won');
	}
	else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' || b5 == 'X') && (b8 == 'x' || b8 == 'X')) {
		document.getElementById('message').innerHTML = "Player X won";
		document.getElementById("box-1").disabled = true;
		document.getElementById("box-3").disabled = true;
		document.getElementById("box-4").disabled = true;
		document.getElementById("box-6").disabled = true;
		document.getElementById("box-7").disabled = true;
		document.getElementById("box-9").disabled = true;
		window.alert('Player X won');
	}
	else if ((b4 == 'x' || b4 == 'X') && (b5 == 'x' || b5 == 'X') && (b6 == 'x' || b6 == 'X')) {
		document.getElementById('message').innerHTML = "Player X won";
		document.getElementById("box-1").disabled = true;
		document.getElementById("box-2").disabled = true;
		document.getElementById("box-3").disabled = true;
		document.getElementById("box-7").disabled = true;
		document.getElementById("box-8").disabled = true;
		document.getElementById("box-9").disabled = true;
		window.alert('Player X won');
	}

	// Checking for Player O starts, Is player O won or not and after that disabled all the other fields
	else if ((b1 == 'o' || b1 == 'O') && (b2 == 'o' || b2 == 'O') && (b3 == 'o' || b3 == 'O')) {
		document.getElementById('message').innerHTML = "Player O won";
		document.getElementById("box-4").disabled = true;
		document.getElementById("box-5").disabled = true;
		document.getElementById("box-6").disabled = true;
		document.getElementById("box-7").disabled = true;
		document.getElementById("box-8").disabled = true;
		document.getElementById("box-9").disabled = true;
		window.alert('Player O won');
	}
	else if ((b1 == 'o' || b1 == 'O') && (b4 == 'o' || b4 == 'O') && (b7 == 'o' || b7 == 'O')) {
		document.getElementById('message').innerHTML = "Player O won";
		document.getElementById("box-2").disabled = true;
		document.getElementById("box-3").disabled = true;
		document.getElementById("box-5").disabled = true;
		document.getElementById("box-6").disabled = true;
		document.getElementById("box-8").disabled = true;
		document.getElementById("box-9").disabled = true;
		window.alert('Player O won');
	}
	else if ((b7 == 'o' || b7 == 'O') && (b8 == 'o' || b8 == 'O') && (b9 == 'o' || b9 == 'O')) {
		document.getElementById('message').innerHTML = "Player O won";
		document.getElementById("box-1").disabled = true;
		document.getElementById("box-2").disabled = true;
		document.getElementById("box-3").disabled = true;
		document.getElementById("box-4").disabled = true;
		document.getElementById("box-5").disabled = true;
		document.getElementById("box-6").disabled = true;
		window.alert('Player O won');
	}
	else if ((b3 == 'o' || b3 == 'O') && (b6 == 'o' || b6 == 'O') && (b9 == 'o' || b9 == 'O')) {
		document.getElementById('message').innerHTML = "Player O won";
		document.getElementById("box-1").disabled = true;
		document.getElementById("box-2").disabled = true;
		document.getElementById("box-4").disabled = true;
		document.getElementById("box-5").disabled = true;
		document.getElementById("box-7").disabled = true;
		document.getElementById("box-8").disabled = true;
		window.alert('Player O won');
	}
	else if ((b1 == 'o' || b1 == 'O') && (b5 == 'o' || b5 == 'O') && (b9 == 'o' || b9 == 'O')) {
		document.getElementById('message').innerHTML = "Player O won";
		document.getElementById("box-2").disabled = true;
		document.getElementById("box-3").disabled = true;
		document.getElementById("box-4").disabled = true;
		document.getElementById("box-6").disabled = true;
		document.getElementById("box-7").disabled = true;
		document.getElementById("box-8").disabled = true;
		window.alert('Player O won');
	}
	else if ((b3 == 'o' || b3 == 'O') && (b5 == 'o' || b5 == 'O') && (b7 == 'o' || b7 == 'O')) {
		document.getElementById('message').innerHTML = "Player O won";
		document.getElementById("box-1").disabled = true;
		document.getElementById("box-2").disabled = true;
		document.getElementById("box-4").disabled = true;
		document.getElementById("box-6").disabled = true;
		document.getElementById("box-8").disabled = true;
		document.getElementById("box-9").disabled = true;
		window.alert('Player O won');
	}
	else if ((b2 == 'o' || b2 == 'O') && (b5 == 'o' || b5 == 'O') && (b8 == 'o' || b8 == 'O')) {
		document.getElementById('message').innerHTML = "Player O won";
		document.getElementById("box-1").disabled = true;
		document.getElementById("box-3").disabled = true;
		document.getElementById("box-4").disabled = true;
		document.getElementById("box-6").disabled = true;
		document.getElementById("box-7").disabled = true;
		document.getElementById("box-9").disabled = true;
		window.alert('Player O won');
	}
	else if ((b4 == 'o' || b4 == 'O') && (b5 == 'o' || b5 == 'O') && (b6 == 'o' || b6 == 'O')) {
		document.getElementById('message').innerHTML = "Player O won";
		document.getElementById("box-1").disabled = true;
		document.getElementById("box-2").disabled = true;
		document.getElementById("box-3").disabled = true;
		document.getElementById("box-7").disabled = true;
		document.getElementById("box-8").disabled = true;
		document.getElementById("box-9").disabled = true;
		window.alert('Player O won');
	}

	// Here, Checking about Tie
	else if ((b1 == 'X' || b1 == 'O') && (b2 == 'X'
		|| b2 == 'O') && (b3 == 'X' || b3 == 'O') &&
		(b4 == 'X' || b4 == 'O') && (b5 == 'X' ||
		b5 == 'O') && (b6 == 'X' || b6 == 'O') &&
		(b7 == 'X' || b7 == 'O') && (b8 == 'X' ||
		b8 == 'O') && (b9 == 'X' || b9 == 'O')) {
			document.getElementById('message').innerHTML = "Match Tie";
			window.alert('Match Tie');
	} else {

		// Here, messaging result
		if (flag == 1) {
			// document.getElementById('box-1').style.color = 'green';
			// document.getElementById('box-2').style.color = 'green';
			// document.getElementById('box-3').style.color = 'green';
			// document.getElementById('box-4').style.color = 'green';
			// document.getElementById('box-5').style.color = 'green';
			// document.getElementById('box-6').style.color = 'green';
			// document.getElementById('box-7').style.color = 'green';
			// document.getElementById('box-8').style.color = 'green';
			// document.getElementById('box-9').style.color = 'green';
			document.getElementById('message').innerHTML = "Player X Turn";
		} else {
			// document.getElementById('box-1').style.color = 'yellow';
			// document.getElementById('box-2').style.color = 'yellow';
			// document.getElementById('box-3').style.color = 'yellow';
			// document.getElementById('box-4').style.color = 'yellow';
			// document.getElementById('box-5').style.color = 'yellow';
			// document.getElementById('box-6').style.color = 'yellow';
			// document.getElementById('box-7').style.color = 'yellow';
			// document.getElementById('box-8').style.color = 'yellow';
			// document.getElementById('box-9').style.color = 'yellow';
			document.getElementById('message').innerHTML = "Player O Turn";
		}
	}
}

// Function to reset game
function ticReset() {
	location.reload(); // RELOADS THE PAGE
	document.getElementById('box-1').innerHTML = '';
	document.getElementById("box-2").innerHTML = '';
	document.getElementById("box-3").innerHTML = '';
	document.getElementById("box-4").innerHTML = '';
	document.getElementById("box-5").innerHTML = '';
	document.getElementById("box-6").innerHTML = '';
	document.getElementById("box-7").innerHTML = '';
	document.getElementById("box-8").innerHTML = '';
	document.getElementById("box-9").innerHTML = '';

}

// Here onwards, functions check turn of the player and put accordingly value X or O
flag = 1;
function checkBox1() {
	if (flag == 1) {
		document.getElementById("box-1").innerHTML = "X";
		document.getElementById("box-1").disabled = true;
		document.getElementById('box-1').style.color = 'green';
		flag = 0;
	}
	else {
		document.getElementById("box-1").innerHTML = "O";
		document.getElementById("box-1").disabled = true;
		document.getElementById('box-1').style.color = 'yellow';
		flag = 1;
	}
}

function checkBox2() {
	if (flag == 1) {
		document.getElementById("box-2").innerHTML = "X";
		document.getElementById("box-2").disabled = true;
		document.getElementById('box-2').style.color = 'green';
		flag = 0;
	}
	else {
		document.getElementById("box-2").innerHTML = "O";
		document.getElementById("box-2").disabled = true;
		document.getElementById('box-2').style.color = 'yellow';
		flag = 1;
	}
}

function checkBox3() {
	if (flag == 1) {
		document.getElementById("box-3").innerHTML = "X";
		document.getElementById("box-3").disabled = true;
		document.getElementById('box-3').style.color = 'green';
		flag = 0;
	}
	else {
		document.getElementById("box-3").innerHTML = "O";
		document.getElementById("box-3").disabled = true;
		document.getElementById('box-3').style.color = 'yellow';
		flag = 1;
	}
}

function checkBox4() {
	if (flag == 1) {
		document.getElementById("box-4").innerHTML = "X";
		document.getElementById("box-4").disabled = true;
		document.getElementById('box-4').style.color = 'green';
		flag = 0;
	}
	else {
		document.getElementById("box-4").innerHTML = "O";
		document.getElementById("box-4").disabled = true;
		document.getElementById('box-4').style.color = 'yellow';
		flag = 1;
	}
}

function checkBox5() {
	if (flag == 1) {
		document.getElementById("box-5").innerHTML = "X";
		document.getElementById("box-5").disabled = true;
		document.getElementById('box-5').style.color = 'green';
		flag = 0;
	}
	else {
		document.getElementById("box-5").innerHTML = "O";
		document.getElementById("box-5").disabled = true;
		document.getElementById('box-5').style.color = 'yellow';
		flag = 1;
	}
}

function checkBox6() {
	if (flag == 1) {
		document.getElementById("box-6").innerHTML = "X";
		document.getElementById("box-6").disabled = true;
		document.getElementById('box-6').style.color = 'green';
		flag = 0;
	}
	else {
		document.getElementById("box-6").innerHTML = "O";
		document.getElementById("box-6").disabled = true;
		document.getElementById('box-6').style.color = 'yellow';
		flag = 1;
	}
}

function checkBox7() {
	if (flag == 1) {
		document.getElementById("box-7").innerHTML = "X";
		document.getElementById("box-7").disabled = true;
		document.getElementById('box-7').style.color = 'green';
		flag = 0;
	}
	else {
		document.getElementById("box-7").innerHTML = "O";
		document.getElementById("box-7").disabled = true;
		document.getElementById('box-7').style.color = 'yellow';
		flag = 1;
	}
}

function checkBox8() {
	if (flag == 1) {
		document.getElementById("box-8").innerHTML = "X";
		document.getElementById("box-8").disabled = true;
		document.getElementById('box-8').style.color = 'green';
		flag = 0;
	}
	else {
		document.getElementById("box-8").innerHTML = "O";
		document.getElementById("box-8").disabled = true;
		document.getElementById('box-8').style.color = 'yellow';
		flag = 1;
	}
}

function checkBox9() {
	if (flag == 1) {
		document.getElementById("box-9").innerHTML = "X";
		document.getElementById("box-9").disabled = true;
		document.getElementById('box-9').style.color = 'green';
		flag = 0;
	}
	else {
		document.getElementById("box-9").innerHTML = "O";
		document.getElementById("box-9").disabled = true;
		document.getElementById('box-9').style.color = 'yellow';
		flag = 1;
	}
}
