
import {searchSteamDiscount} from "./search-steam-discount";

export async function SteamSearchFunction(){

  await searchSteamDiscount();

  //Запускаем функцию снова через 10 секунд
  setTimeout(SteamSearchFunction, 60_000);

}


SteamSearchFunction().then(()=>{


  console.log('Заработал!');

});




