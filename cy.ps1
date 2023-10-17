$cyEnd = $args.Count-1
if ( $args[0] -eq 'ntlm' ) {
	if ( $args[1] -eq 'run' ) {
		npx cypress-ntlm run --browser chrome @($args[2..$cyEnd])
	} else {
		if ( $args[1] -eq 'open' ) {
			npx cypress-ntlm run --browser chrome --headed --no-exit @($args[2..$cyEnd])
		}
	}
} else {
	if ( $args[0] -eq 'run' ) {
		npx cypress run --browser chrome @($args[1..$cyEnd])
	} else {
		if ( $args[0] -eq 'open' ) {
			npx cypress run --browser chrome --headed --no-exit @($args[1..$cyEnd])
		}
	}
}
