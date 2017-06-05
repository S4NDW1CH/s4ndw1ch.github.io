window.onload = function () {
	var variance = 30
	var lw = 20, lc = 0
	var framerate = 60

	var variance_control = document.getElementById("variance")
	var variance_number = document.getElementById("variance_number")
	variance_control.value = 30
	variance_number.value = variance_control.value
	variance_control.onchange = function () {
		variance_number.value = variance_control.value
		variance = variance_control.value
	}
	variance_number.onchange = function () {
		variance_control.value = variance_number.value
		variance = variance_number.value
	}

	var size_control = document.getElementById("size")
	var size_number = document.getElementById("size_number")
	size_control.value = 20
	size_number.value = size_control.value
	size_control.onchange = function () {
		size_number.value = size_control.value
		lw = size_control.value
	}
	size_number.onchange = function () {
		size_control.value = size_number.value
		lw = size_number.value
	}

	var color = document.getElementById("color")
	var c = document.getElementById("canvas")

	c.width = document.body.offsetWidth - 5
	c.height = document.body.offsetHeight - 5

	var ctx = c.getContext("2d")

	var x = Math.random() * c.offsetWidth, y = Math.random() * c.offsetHeight
	var px, py

	ctx.lineCap = 'round'

	document.getElementById("clear").onclick = function () {
		ctx.clearRect(0, 0, canvas.width, canvas.height)
		x = Math.random() * c.offsetWidth, y = Math.random() * c.offsetHeight
	}
	document.getElementById("color").onclick = function () {
		ctx.clearRect(0, 0, canvas.width, canvas.height)
		x = Math.random() * c.offsetWidth, y = Math.random() * c.offsetHeight
	}

	var iid = setInterval(function () {
	// for (var i = 0; i < 200 ; i++) {
		ctx.beginPath()

		px = x
		py = y
		x = x + Math.random() * (variance - (-variance)) + (-variance)
		y = y + Math.random() * (variance - (-variance)) + (-variance)

		mx = c.offsetWidth - x

		// lw = lw + Math.random() * (0.3 - (-0.3)) + (-0.3)

		// if (lw < 0.5) { lw = 0.5 }
		// if (lw > 10) { lw = 10 }

		if ((lc += 7) > 360) { lc = 0 }

		if (color.checked) {
			ctx.strokeStyle = "hsl(" + lc + ", 80%, 50%)"
		} else {
			ctx.strokeStyle = "hsl(0, 100%, 0%)"
		}

		ctx.lineWidth = lw

		ctx.moveTo(px, py)
		ctx.lineTo(x, y)
		ctx.stroke()
		ctx.beginPath()
		ctx.moveTo(c.offsetWidth - px, c.offsetHeight - py)
		ctx.lineTo(c.offsetWidth - x, c.offsetHeight - y)
		ctx.stroke()

		if (x < 0) {
			// x = 0
			x = c.offsetWidth
			px = c.offsetWidth
		}
		if (y < 0) {
			// y = 0
			y = c.offsetHeight
			py = c.offsetHeight
		}

		if (x > c.offsetWidth) {
			// x = c.offsetWidth
			x = 0
			px = 0
		}
		if (y > c.offsetHeight) {
			// y = c.offsetHeight
			y = 0
			py = 0
		}

		// ctx.endPath()
	},

	1000/60)
}
