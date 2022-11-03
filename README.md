## hello there :)
```
const data ={    
    time: number; //Date.now(), лепится во время отправки
    payloadLength: number; // длина массива последних данных
    idleTime: number; // Date.now() - ts последних полезных данных
    lastIn: number; // ts последних поступивших данных
    lastOut: number; // ts последних отданных данных(не данной статистики, полезных данных(вилки, матчи и т.д.))
    startTime: number; // ts старта скрипта
    extra: any; // прочее, не вошедшее в этот протокол
}
const Eye = require('EyeOfTheBeholder').default;
const eye = new Eye('/data', 7403);
eye.setData({ ...data });
```