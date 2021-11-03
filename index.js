
     function scuberGreetingForFeet(someNumber) {
      let result
      if (someNumber <= 400) {
        result = 'This one is on me!';
      } else if( someNumber < 2499)
          result = 'I will gladly take your thirty bucks.'; 
        else if (someNumber > 2500){
            result = 'No can do.';
          }
          return result
       }
        
    function ternaryCheckCity(city){
      return city === 'NYC'?'Ok, sounds good.' : 'No go.'
}

    function switchOnCharmFromTip(tip){
      let response;
      switch (tip){
        case 'generous':
          response = 'Thank you so much.'
          break;
        case 'not as generous':
          response = 'Thank you.'
          break;
        case 'thanks for everything':
          response = 'Bye.'
          break; 
      }
     return response
}