@echo off
echo ========================================
echo   Leonid Grivko - Luxury Business Wear
echo ========================================
echo.
echo Установка зависимостей...
call npm install
echo.
echo Сборка проекта для продакшена...
call npm run build
echo.
echo Сборка завершена! Файлы находятся в папке 'dist'
echo.
echo Для запуска локального сервера используйте:
echo   npx serve dist
echo   или
echo   python -m http.server 8000 -d dist
echo.
pause
