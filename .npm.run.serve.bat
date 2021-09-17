@echo off

echo.
echo ^>^>^>^>^>^>^>^>^>^>^>^>^>^>^>^>^>^> App Serve [Start]

cd %~dp0
npm run serve

pause >nul