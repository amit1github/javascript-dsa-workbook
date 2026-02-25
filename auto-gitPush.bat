@echo off

echo Adding changes...
git add .

REM Default commit message
if "%~1"=="" (
    set msg=Auto commit on %date% %time%
) else (
    set msg=%*
)

REM Check if there is anything to commit
git diff --cached --quiet
if %errorlevel%==0 (
    echo No changes to commit.
    exit /b
)

echo Committing with message: "%msg%"
git commit -m "%msg%"

REM Detect current branch automatically
FOR /F %%i IN ('git rev-parse --abbrev-ref HEAD') DO SET branch=%%i

echo Current branch: %branch%

echo Pulling latest changes...
git pull origin %branch%

echo Pushing to origin/%branch%...
git push origin %branch%

echo Done ✅