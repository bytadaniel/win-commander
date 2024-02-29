@echo off
setlocal

:: Путь к исполняемому файлу NSSM
set NSSM_PATH=.\helpers\nssm.exe

:: Имя службы, которую вы хотите удалить
set SERVICE_NAME=PcCommanderService

:: Удаление службы
"%NSSM_PATH%" install %SERVICE_NAME%
"%NSSM_PATH%" start %SERVICE_NAME%
if %ERRORLEVEL% neq 0 (
    echo Failed to remove service %SERVICE_NAME%.
    exit /b %ERRORLEVEL%
)

echo Service %SERVICE_NAME% removed successfully.

