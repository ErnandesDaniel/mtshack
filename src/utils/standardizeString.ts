//Функция для стандартизации строки
function standardizeString(string:string){

  //Запрещаем использовать множественне пробелы (больше одного)
  string=string.replace(/\s+/g, ' ');

  //Если у нас идет первым пробел, то мы его удаляем
  if(string[0]==' ')string=string.slice(1);

  //Уменьшаем все буквы в строке до строчных
  string = string.toLowerCase();

  return string;

}