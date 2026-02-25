@echo off

git add .

REM Default message if none provided
if "%~1"=="" (
    set msg=auto commit
) else (
    set msg=%*
)

git diff --cached --quiet
if %errorlevel%==0 (
    echo No changes to commit.
    exit /b
)

git commit -m "%msg%"

FOR /F %%i IN ('git rev-parse --abbrev-ref HEAD') DO SET branch=%%i

git pull origin %branch%
git push origin %branch%