abstract class Notificacion{
    protected enviarMensaje: string;

    abstract enviar(enviarMensaje:string | number): void;
}

class Email extends Notificacion {
    enviar(): void {
     this.enviarMensaje= this.enviarMensaje;  
    }
}

class Sms extends Notificacion {
    enviar(): void {
        this.enviarMensaje= this.enviarMensaje;  
       }
}

class PushNotificacion extends Notificacion{

  enviar(): void {
    this.enviarMensaje= this.enviarMensaje;  
   }
}