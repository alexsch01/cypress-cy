$cyCount = $args.Count-1
if ( $args[0] -eq 'ntlm' ) {
	if ( $args[1] -eq 'run' ) {
		if ( $args[2] -eq $null ) {
			npx cypress-ntlm run --browser chrome
		} else {
			npx cypress-ntlm run --browser chrome $($args[2..$cyCount] -join ' ')
		}
	} else {
		if ( $args[1] -eq 'open' ) {
			if ( $args[2] -eq $null ) {
				npx cypress-ntlm run --browser chrome --headed --no-exit
			} else {
				npx cypress-ntlm run --browser chrome --headed --no-exit $($args[2..$cyCount] -join ' ')
			}
		}
	}
} else {
	if ( $args[0] -eq 'run' ) {
		if ( $args[1] -eq $null ) {
			npx cypress run --browser chrome
		} else {
			npx cypress run --browser chrome $($args[1..$cyCount] -join ' ')
		}
	} else {
		if ( $args[0] -eq 'open' ) {
			if ( $args[1] -eq $null ) {
				npx cypress run --browser chrome --headed --no-exit
			} else {
				npx cypress run --browser chrome --headed --no-exit $($args[1..$cyCount] -join ' ')
			}
		}
	}
}