function filtPrime(a) {
if(a == 2 || a == 3) {
	return 1
}
     for (var i = 2; i < a; i++) {
        if (a % i == 0) {
            return 0
        }
	}
return 1
}
