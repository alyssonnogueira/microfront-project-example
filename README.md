# POC DE MICRO-FRONTEND
##### Esta poc contem o gateway e as aplicações que rodam abaixo do gateway mas podem ser separadas em repositórios distintos

#### O Desenvolvimento foi baseado no Meta Framework Single-SPA

Docs do Meta Framework: https://single-spa.js.org/docs/ 

Framework p/ Angular 2+: https://github.com/CanopyTax/single-spa-angular 

## Gateway 
Baseado nos repositórios: 

https://github.com/joeldenning/coexisting-angular-microfrontends

&&

https://github.com/PlaceMe-SAS/single-spa-angular-cli-examples

&& Comunicação micro-frontend.org

## Aplicações Angular foram configuradas na seguinte ordem
 --> ng new App

 --> ng add @angular/material 

 --> ng add single-spa-angular@beta

 --> Em app-routing importar: import { APP_BASE_HREF } from '@angular/common';
 
 --> Ainda em app-routing adicionar: 
        providers: [
            {provide: APP_BASE_HREF, useValue: '/'}
        ]

### Obs: As aplicacoes foram testadas apenas utilizando Angular, mas em teoria Frameworks como React, Vue e AngularJS devem funcionar segundo o Docs do Single-SPA

Execução local do gateway(content-application): `npm start`
Execução local do micro-frontend: `ng serve --port 4201 --publicHost http://localhost:4201 --disable-host-check` 