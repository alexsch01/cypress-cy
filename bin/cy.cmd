@echo off

title Command Prompt

for /f "tokens=1,* delims= " %%a in ("%*") do set ALL_BUT_FIRST=%%b
for /f "tokens=1,* delims= " %%a in ("%ALL_BUT_FIRST%") do set ALL_BUT_SECOND=%%b

if "%1" == "ntlm" (
	if "%2" == "run" (
		.\node_modules\.bin\cypress-ntlm run --browser chrome %ALL_BUT_SECOND%
	) else if "%2" == "open" (
		.\node_modules\.bin\cypress-ntlm run --browser chrome --headed --no-exit %ALL_BUT_SECOND%
	)
) else if "%1" == "run" (
	.\node_modules\.bin\cypress run --browser chrome %ALL_BUT_FIRST%
) else if "%1" == "open" (
	.\node_modules\.bin\cypress run --browser chrome --headed --no-exit %ALL_BUT_FIRST%
) else (
	npx cypress %*
)

@echo on
