@echo off

title Command Prompt

for /f "tokens=1,* delims= " %%a in ("%*") do set ALL_BUT_FIRST=%%b
for /f "tokens=1,* delims= " %%a in ("%ALL_BUT_FIRST%") do set ALL_BUT_SECOND=%%b

if "%1" == "ntlm" (
	if "%2" == "run" (
		npx cypress-ntlm run --browser chrome %ALL_BUT_SECOND%
	) else if "%2" == "open" (
		npx cypress-ntlm run --browser chrome --headed --no-exit %ALL_BUT_SECOND%
	)
) else if "%1" == "run" (
	npx cypress run --browser chrome %ALL_BUT_FIRST%
) else if "%1" == "open" (
	npx cypress run --browser chrome --headed --no-exit %ALL_BUT_FIRST%
) else (
	npx cypress %*
)

@echo on
